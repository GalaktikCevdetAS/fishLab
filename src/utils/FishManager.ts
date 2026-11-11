import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { FishConfig } from '@/types/aquarium';
import { getSubstrateSurface } from '@/components/Substrate';

export type { FishConfig } from '@/types/aquarium';

interface FishInstance {
  model: THREE.Object3D;
  velocity: THREE.Vector3;
  targetVelocity: THREE.Vector3;
  speed: number;
  config: FishConfig;
  preferredDepth: number;
  timer: number;
  tail?: THREE.Object3D;
  finLBig?: THREE.Object3D;
  finRBig?: THREE.Object3D;
}

interface LoadedTemplate {
  model: THREE.Object3D;
  config: FishConfig;
  materials: THREE.Material[];
  geometries: THREE.BufferGeometry[];
  texture?: THREE.Texture;
}

export class FishManager {
  private scene: THREE.Scene;
  private bounds: THREE.Vector3;
  private templates: Map<string, LoadedTemplate> = new Map();
  private fishList: FishInstance[] = [];
  private loader!: GLTFLoader;
  private textureLoader: THREE.TextureLoader;
  private substrateHeight: number = 0;
  private isTankToxic: boolean = false;

  private eyeIrisMaterial: THREE.MeshBasicMaterial;
  private pupilMaterial: THREE.MeshBasicMaterial;

  private static readonly _tempVec = new THREE.Vector3();
  private static readonly _targetPos = new THREE.Vector3();
  private static readonly _currentQuat = new THREE.Quaternion();
  private static readonly _targetQuat = new THREE.Quaternion();
  private static readonly _dummy = new THREE.Object3D();
  private static readonly _toxicQuat = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(Math.PI, 0, 0)
  );

  constructor(scene: THREE.Scene, tankBounds: THREE.Vector3) {
    this.scene = scene;
    this.bounds = tankBounds;

    this.textureLoader = new THREE.TextureLoader();
    this.eyeIrisMaterial = new THREE.MeshBasicMaterial({ color: 0x734d14 });
    this.pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x010101 });

    this.initLoader();
  }

  private initLoader() {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    this.loader = new GLTFLoader();
    this.loader.setDRACOLoader(dracoLoader);
  }

  public updateBounds(newBounds: THREE.Vector3) {
    this.bounds.copy(newBounds);
  }

  public setSubstrateHeight(height: number) {
    this.substrateHeight = Math.max(0, height);
  }

  public updateGroundLevel(newGroundY: number, rawSubstrateHeight?: number) {
    if (rawSubstrateHeight !== undefined) {
      this.substrateHeight = Math.max(0, rawSubstrateHeight);
    } else {
      const baseBottom = -this.bounds.y / 2;
      this.substrateHeight = Math.max(0, newGroundY - baseBottom);
    }
  }

  public resetGroundLevel() {
    this.substrateHeight = 0;
  }

  public setTankToxic(toxic: boolean) {
    this.isTankToxic = toxic;
  }

  public addSingleFish(config: FishConfig) {
    if (this.templates.has(config.id)) {
      this.spawnFish(this.templates.get(config.id)!, 1);
      return;
    }

    // GLB modeli tanımlıysa GLTF'den yükle, değilse usule uygun 3D balık modeli üret
    if (config.modelPath) {
      this.loadAndSpawnGLTF(config, 1);
    } else {
      this.createAndSpawnProcedural(config, 1);
    }
  }

  public removeSingleFish(configId: string): boolean {
    const index = this.fishList.findIndex((f) => f.config.id === configId);
    if (index !== -1) {
      const fish = this.fishList.splice(index, 1)[0];
      this.scene.remove(fish.model);
      return true;
    }
    return false;
  }

  public removeSpecies(configId: string) {
    const remaining: FishInstance[] = [];
    for (const fish of this.fishList) {
      if (fish.config.id === configId) {
        this.scene.remove(fish.model);
      } else {
        remaining.push(fish);
      }
    }
    this.fishList = remaining;
  }

  public clearAllFish() {
    while (this.fishList.length > 0) {
      const fish = this.fishList.pop();
      if (fish) {
        this.scene.remove(fish.model);
      }
    }
  }

  /**
   * Neon Tetra, Lepistes, Çöpçü balığı gibi GLB modeli bulunmayan türler için
   * canlı, organik ve akıcı yüzen 3D balık gövdesi inşa eder.
   */
  private createAndSpawnProcedural(config: FishConfig, count: number) {
    const group = new THREE.Group();
    group.name = `procedural-fish-${config.id}`;

    const mainColor = config.appearance?.color || '#00e5ff';
    const secColor = config.appearance?.secondaryColor || '#ff1744';

    const materials: THREE.Material[] = [];
    const geometries: THREE.BufferGeometry[] = [];

    // 1. Ana Gövde
    const bodyGeom = new THREE.ConeGeometry(0.18, 0.8, 8);
    bodyGeom.rotateX(Math.PI / 2);
    geometries.push(bodyGeom);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: mainColor,
      roughness: 0.3,
      metalness: 0.4,
    });
    materials.push(bodyMat);

    const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
    group.add(bodyMesh);

    // 2. Neon Şerit / İkincil Renk Deseni
    if (config.id === 'neon_tetra') {
      const stripeGeom = new THREE.BoxGeometry(0.04, 0.04, 0.45);
      const stripeMat = new THREE.MeshBasicMaterial({ color: '#ff1744' });
      geometries.push(stripeGeom);
      materials.push(stripeMat);

      const stripeMesh = new THREE.Mesh(stripeGeom, stripeMat);
      stripeMesh.position.set(0, -0.05, 0.1);
      group.add(stripeMesh);
    }

    // 3. Gözler
    const eyeGeom = new THREE.SphereGeometry(0.04, 8, 8);
    geometries.push(eyeGeom);
    const eyeL = new THREE.Mesh(eyeGeom, this.pupilMaterial);
    eyeL.position.set(0.11, 0.04, -0.28);
    const eyeR = new THREE.Mesh(eyeGeom, this.pupilMaterial);
    eyeR.position.set(-0.11, 0.04, -0.28);
    group.add(eyeL, eyeR);

    // 4. Dalgalanan Kuyruk (Tail)
    const tailGroup = new THREE.Group();
    tailGroup.name = 'tail';
    tailGroup.position.set(0, 0, 0.4);

    const isGuppy = config.id === 'guppy';
    const tailGeom = isGuppy
      ? new THREE.ConeGeometry(0.35, 0.65, 5)
      : new THREE.ConeGeometry(0.2, 0.35, 4);

    tailGeom.rotateX(Math.PI / 2);
    geometries.push(tailGeom);

    const tailMat = new THREE.MeshStandardMaterial({
      color: secColor,
      transparent: true,
      opacity: 0.85,
      roughness: 0.3,
    });
    materials.push(tailMat);

    const tailMesh = new THREE.Mesh(tailGeom, tailMat);
    tailMesh.position.set(0, 0, 0.15);
    tailMesh.scale.set(1, 0.2, 1);
    tailGroup.add(tailMesh);
    group.add(tailGroup);

    // 5. Yan Yüzgeçler (FinL / FinR)
    const finGeom = new THREE.ConeGeometry(0.08, 0.2, 4);
    finGeom.rotateZ(Math.PI / 3);
    geometries.push(finGeom);

    const finMat = new THREE.MeshStandardMaterial({
      color: mainColor,
      transparent: true,
      opacity: 0.7,
    });
    materials.push(finMat);

    const finL = new THREE.Mesh(finGeom, finMat);
    finL.name = 'fin_l_big';
    finL.position.set(0.15, -0.02, -0.05);

    const finR = new THREE.Mesh(finGeom, finMat);
    finR.name = 'fin_r_big';
    finR.position.set(-0.15, -0.02, -0.05);
    finR.rotation.y = Math.PI;

    group.add(finL, finR);

    // Şablon olarak sakla
    const template: LoadedTemplate = {
      model: group,
      config,
      materials,
      geometries,
    };
    this.templates.set(config.id, template);
    this.spawnFish(template, count);
  }

  private loadAndSpawnGLTF(config: FishConfig, count: number) {
    const colorHex = config.appearance?.color || '#8c928d';
    const fallbackMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorHex),
      side: THREE.DoubleSide,
    });

    if (config.texturePath) {
      this.textureLoader.load(
        config.texturePath,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.needsUpdate = true;
          const texMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
          });
          this.loadModelGLTF(config, texMaterial, count, texture);
        },
        undefined,
        () => this.loadModelGLTF(config, fallbackMaterial, count)
      );
    } else {
      this.loadModelGLTF(config, fallbackMaterial, count);
    }
  }

  private loadModelGLTF(
    config: FishConfig,
    material: THREE.Material,
    count: number,
    texture?: THREE.Texture
  ) {
    this.loader.load(
      config.modelPath!,
      (gltf) => {
        const model = gltf.scene;
        const materials: THREE.Material[] = [material];
        const geometries: THREE.BufferGeometry[] = [];

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const geometry = mesh.geometry;
            const lowerName = mesh.name.toLowerCase();

            if (geometry && !geometries.includes(geometry)) {
              geometries.push(geometry);
            }

            if (!geometry.attributes.uv) {
              const pos = geometry.attributes.position;
              const uvs: number[] = [];
              for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const z = pos.getZ(i);
                const u = (Math.atan2(z, x) / Math.PI + 1) * 0.5;
                const v = (pos.getY(i) + 1) * 0.5;
                uvs.push(u, v);
              }
              geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
            }

            if (lowerName.includes('pupil')) {
              mesh.material = this.pupilMaterial;
            } else if (lowerName.includes('eye')) {
              mesh.material = this.eyeIrisMaterial;
            } else {
              mesh.material = material;
            }
          }
        });

        const template: LoadedTemplate = {
          model,
          config,
          materials,
          geometries,
          texture,
        };
        this.templates.set(config.id, template);
        this.spawnFish(template, count);
      },
      undefined,
      (err) => console.error(`Model yüklenemedi: ${config.modelPath}`, err)
    );
  }

  private spawnFish(template: LoadedTemplate, count: number) {
    const { model, config } = template;
    const margin = 0.8;
    const maxX = this.bounds.x / 2 - margin;
    const maxY = this.bounds.y / 2 - margin;
    const maxZ = this.bounds.z / 2 - margin;

    for (let c = 0; c < count; c++) {
      const fishClone = SkeletonUtils.clone(model);

      let tail: THREE.Object3D | undefined;
      let finLBig: THREE.Object3D | undefined;
      let finRBig: THREE.Object3D | undefined;

      fishClone.traverse((child) => {
        const n = child.name.toLowerCase();
        if (n.includes('tail')) tail = child;
        if (n.includes('fin_l_big') || (n.includes('fin') && n.includes('l') && n.includes('big'))) {
          finLBig = child;
        }
        if (n.includes('fin_r_big') || (n.includes('fin') && n.includes('r') && n.includes('big'))) {
          finRBig = child;
        }
      });

      const isBottomDweller = config.behavior === 'bottom_dweller';
      const isSurfaceDweller = config.behavior === 'surface_dweller';

      const spawnX = THREE.MathUtils.randFloat(-maxX + 0.5, maxX - 0.5);
      const spawnZ = THREE.MathUtils.randFloat(-maxZ + 0.5, maxZ - 0.5);

      const surface = getSubstrateSurface(spawnX, spawnZ, -this.bounds.y / 2, this.substrateHeight);

      let initialY = surface.y + 0.08;
      if (isSurfaceDweller) {
        initialY = THREE.MathUtils.randFloat(maxY * 0.3, maxY * 0.85);
      } else if (!isBottomDweller) {
        initialY = THREE.MathUtils.randFloat(-maxY * 0.2, maxY * 0.4);
      }

      fishClone.position.set(spawnX, initialY, spawnZ);

      const speed = THREE.MathUtils.randFloat(
        config.physics.minSpeed,
        config.physics.maxSpeed
      );

      const velocity = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(1),
        0,
        THREE.MathUtils.randFloatSpread(1)
      )
        .normalize()
        .multiplyScalar(speed);

      this.scene.add(fishClone);

      this.fishList.push({
        model: fishClone,
        velocity,
        targetVelocity: velocity.clone(),
        speed,
        config,
        preferredDepth: initialY,
        timer: Math.random() * config.physics.diveInterval,
        tail,
        finLBig,
        finRBig,
      });
    }
  }

  public getFishCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const f of this.fishList) {
      counts[f.config.id] = (counts[f.config.id] || 0) + 1;
    }
    return counts;
  }

  public update(delta: number, elapsedTime: number) {
    const clampedDelta = Math.min(delta, 0.1);
    const dtRatio = clampedDelta * 60;

    const baseBottom = -this.bounds.y / 2;
    const margin = 0.6;
    const minX = -this.bounds.x / 2 + margin;
    const maxX = this.bounds.x / 2 - margin;
    const maxY = this.bounds.y / 2 - margin;
    const minZ = -this.bounds.z / 2 + margin;
    const maxZ = this.bounds.z / 2 - margin;

    for (let i = 0; i < this.fishList.length; i++) {
      const fish = this.fishList[i];
      const pos = fish.model.position;

      // Toksik su koşulu kontrolü
      if (this.isTankToxic) {
        const targetSurfaceY = maxY - 0.25;
        pos.y = THREE.MathUtils.lerp(pos.y, targetSurfaceY, 0.04);
        fish.model.quaternion.slerp(FishManager._toxicQuat, 0.05);
        if (fish.tail) fish.tail.rotation.y = 0;
        if (fish.finLBig) fish.finLBig.rotation.z = 0;
        if (fish.finRBig) fish.finRBig.rotation.z = 0;
        continue;
      }

      // Canlı yüzgeç ve kuyruk salınımları
      const isGuppy = fish.config.id === 'guppy';
      const cycle = elapsedTime * (isGuppy ? 9.0 : 8.0) + i * 1.2;
      const tailAmp = isGuppy ? 0.65 : 0.4;

      if (fish.tail) fish.tail.rotation.y = Math.sin(cycle) * tailAmp;
      if (fish.finLBig) fish.finLBig.rotation.z = Math.cos(cycle) * 0.3;
      if (fish.finRBig) fish.finRBig.rotation.z = -Math.cos(cycle) * 0.3;

      const phys = fish.config.physics;
      const isBottomDweller = fish.config.behavior === 'bottom_dweller';
      const isSurfaceDweller = fish.config.behavior === 'surface_dweller';

      // Balığın anlık (x, z) noktasındaki tam kum kotu
      const surface = getSubstrateSurface(pos.x, pos.z, baseBottom, this.substrateHeight);
      const floorY = surface.y + 0.08;
      const normalMinY = floorY + 0.35;

      if (isBottomDweller) {
        fish.velocity.y = 0;
        fish.targetVelocity.y = 0;
        pos.y = THREE.MathUtils.lerp(pos.y, floorY, 0.25);
      } else if (isSurfaceDweller) {
        fish.timer += dtRatio;
        if (fish.timer > phys.diveInterval) {
          fish.preferredDepth = THREE.MathUtils.randFloat(maxY * 0.25, maxY - 0.25);
          fish.timer = 0;
        }
        const depthDiff = fish.preferredDepth - pos.y;
        fish.targetVelocity.y = depthDiff * phys.verticalFreedom;
      } else {
        fish.timer += dtRatio;
        if (fish.timer > phys.diveInterval) {
          fish.preferredDepth = THREE.MathUtils.randFloat(normalMinY + 0.2, maxY - 0.4);
          fish.timer = 0;
        }
        const depthDiff = fish.preferredDepth - pos.y;
        fish.targetVelocity.y = depthDiff * phys.verticalFreedom;
      }

      // Yatay gezinme varyasyonu
      if (Math.random() < 0.015 * dtRatio) {
        fish.targetVelocity.x += THREE.MathUtils.randFloatSpread(0.01);
        fish.targetVelocity.z += THREE.MathUtils.randFloatSpread(0.01);
      }

      // Duvarlardan kaçınma
      const buffer = 1.3;
      const steer = 0.003 * dtRatio;

      if (pos.x > maxX - buffer) fish.targetVelocity.x -= steer;
      if (pos.x < minX + buffer) fish.targetVelocity.x += steer;

      if (!isBottomDweller) {
        if (pos.y > maxY - buffer) fish.targetVelocity.y -= steer;
        if (pos.y < normalMinY + buffer) fish.targetVelocity.y += steer;
      }

      if (pos.z > maxZ - buffer) fish.targetVelocity.z -= steer;
      if (pos.z < minZ + buffer) fish.targetVelocity.z += steer;

      // Hız yumuşatma
      const turnAlpha = 1 - Math.pow(1 - phys.turnSpeed, dtRatio);
      fish.velocity.lerp(fish.targetVelocity, turnAlpha);
      fish.velocity.clampLength(fish.speed * 0.5, fish.speed * 1.2);

      // Konum güncellemesi
      FishManager._tempVec.copy(fish.velocity).multiplyScalar(dtRatio);
      if (isBottomDweller) FishManager._tempVec.y = 0;
      pos.add(FishManager._tempVec);

      // Duvar sekme kontrolleri
      if (pos.x > maxX) { pos.x = maxX; fish.velocity.x *= -0.2; }
      if (pos.x < minX) { pos.x = minX; fish.velocity.x *= -0.2; }
      if (pos.z > maxZ) { pos.z = maxZ; fish.velocity.z *= -0.2; }
      if (pos.z < minZ) { pos.z = minZ; fish.velocity.z *= -0.2; }

      // Kuma batmama garantisi
      if (pos.y < floorY) {
        pos.y = floorY;
      }
      if (!isBottomDweller && pos.y > maxY) {
        pos.y = maxY;
        fish.velocity.y *= -0.2;
      }

      // KUMA PARALEL VE YÖN HİZALANMASI:
      const horizontalSpeedSq = fish.velocity.x * fish.velocity.x + fish.velocity.z * fish.velocity.z;
      if (horizontalSpeedSq > 0.000001) {
        const invLen = 1 / Math.sqrt(horizontalSpeedSq);
        const dirX = fish.velocity.x * invLen;
        const dirZ = fish.velocity.z * invLen;

        const lookStep = 0.35;
        const targetX = pos.x + dirX * lookStep;
        const targetZ = pos.z + dirZ * lookStep;

        let targetY = pos.y;
        if (isBottomDweller) {
          const aheadSurface = getSubstrateSurface(targetX, targetZ, baseBottom, this.substrateHeight);
          targetY = aheadSurface.y + 0.08;
        } else {
          targetY = pos.y + fish.velocity.y * 5;
        }

        FishManager._targetPos.set(targetX, targetY, targetZ);
        FishManager._currentQuat.copy(fish.model.quaternion);

        FishManager._dummy.position.copy(pos);
        FishManager._dummy.up.set(0, 1, 0);
        FishManager._dummy.lookAt(FishManager._targetPos);
        FishManager._targetQuat.copy(FishManager._dummy.quaternion);

        const slerpFactor = 1 - Math.pow(1 - 0.18, dtRatio);
        fish.model.quaternion.slerpQuaternions(
          FishManager._currentQuat,
          FishManager._targetQuat,
          slerpFactor
        );
      }
    }
  }

  public dispose() {
    this.clearAllFish();

    for (const template of this.templates.values()) {
      for (const geom of template.geometries) {
        geom.dispose();
      }
      for (const mat of template.materials) {
        mat.dispose();
      }
      if (template.texture) {
        template.texture.dispose();
      }
    }
    this.templates.clear();

    this.eyeIrisMaterial.dispose();
    this.pupilMaterial.dispose();
  }
}
