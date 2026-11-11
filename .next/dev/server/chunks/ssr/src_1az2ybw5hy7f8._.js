module.exports = [
"[project]/src/components/AquariumScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AquariumScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$FishManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/FishManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Substrate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlantField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlantField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WaterMetricsHUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WaterMetricsHUD.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CommandBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CommandBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TankSizeSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TankSizeSidebar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function WaterSurface({ bounds, qualityLevel }) {
    // 0: Berrak Mavi, 1: Sarı/Bulanık, 2: Koyu Sarı/Toksik Kehribar
    const waterColors = [
        '#38bdf8',
        '#facc15',
        '#ca8a04'
    ];
    const opacities = [
        0.3,
        0.45,
        0.65
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            bounds.y / 2 - 0.2,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    bounds.x,
                    bounds.z
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                color: waterColors[qualityLevel],
                transparent: true,
                opacity: opacities[qualityLevel],
                roughness: 0.05,
                metalness: 0.1,
                transmission: 0.7 - qualityLevel * 0.2,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function GlassTankBox({ bounds, qualityLevel }) {
    const boxGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](bounds.x, bounds.y, bounds.z), [
        bounds.x,
        bounds.y,
        bounds.z
    ]);
    const borderColors = [
        '#bae6fd',
        '#fde047',
        '#facc15'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("edgesGeometry", {
                        args: [
                            boxGeom
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                        color: borderColors[qualityLevel],
                        transparent: true,
                        opacity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            bounds.x,
                            bounds.y,
                            bounds.z
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: qualityLevel > 0 ? '#fef08a' : '#ffffff',
                        transmission: 0.94,
                        opacity: 0.25 + qualityLevel * 0.1,
                        transparent: true,
                        roughness: 0.02,
                        metalness: 0.1,
                        ior: 1.5,
                        reflectivity: 0.9,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function AquariumScene() {
    const [fps, setFps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(60);
    const [tankData, setTankData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentVolume, setCurrentVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [customBounds, setCustomBounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        14,
        7,
        7
    ]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Akvaryum başlangıçta tamamen boş (kum yok, 0kg)
    const [selectedSubstrate, setSelectedSubstrate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [substrateKg, setSubstrateKg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [groundLevelY, setGroundLevelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-3.5);
    const [fishCounts, setFishCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [activePlants, setActivePlants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Ekolojik Canlı Su Parametreleri
    const [temperature, setTemperature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(25.5);
    const [pH, setPh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(7.2);
    const [oxygen, setOxygen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(8.0);
    const [ppm, setPpm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [waterQuality, setWaterQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Kristal & Berrak (Seviye 1)');
    const [qualityLevel, setQualityLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const fishManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        async function loadConfig() {
            try {
                const res = await fetch('/fishConfig.json');
                if (!res.ok) throw new Error('fishConfig.json yüklenemedi');
                const data = await res.json();
                if (isMounted) {
                    setTankData(data);
                    if (data.tank.volumeLiters) setCurrentVolume(data.tank.volumeLiters);
                    if (data.tank.bounds) setCustomBounds(data.tank.bounds);
                    if (data.tank.temperature) setTemperature(data.tank.temperature);
                }
            } catch (err) {
                console.error('fishConfig.json yüklenirken hata oluştu:', err);
            }
        }
        loadConfig();
        return ()=>{
            isMounted = false;
        };
    }, []);
    const tankBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...customBounds), [
        customBounds
    ]);
    const handleSelectVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((option)=>{
        setCurrentVolume(option.volumeLiters);
        setCustomBounds(option.bounds);
    }, []);
    // Dinamik Ekoloji ve Sarı / Koyu Sarı Su Renk Geçişleri
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!tankData) return;
        let basePh = 7.2;
        let baseOxygen = 8.0;
        let basePpm = 10;
        if (selectedSubstrate?.ecology) {
            basePh += selectedSubstrate.ecology.phEffect;
            basePpm += substrateKg * selectedSubstrate.ecology.ppmFactor;
        }
        let totalOxygenConsumption = 0;
        let totalBioload = 0;
        for (const fish of tankData.catalog.fishes){
            const count = fishCounts[fish.id] || 0;
            if (count > 0 && fish.ecology) {
                totalOxygenConsumption += count * (fish.ecology.oxygenConsumption || 0.15);
                totalBioload += count * (fish.ecology.bioloadPpm || 3.5);
            }
        }
        let plantOxygenBonus = activePlants.length * 0.3;
        let baseOxygenFinal = Math.max(2.0, baseOxygen + plantOxygenBonus - totalOxygenConsumption);
        let basePpmFinal = Math.max(5, basePpm + totalBioload - activePlants.length * 2.0);
        const totalFish = Object.values(fishCounts).reduce((a, b)=>a + b, 0);
        let qLevel = 0;
        let quality = 'Kristal & Berrak (Seviye 1)';
        if (basePpmFinal > 40 || totalFish > 10) {
            qLevel = 1; // Sarı tonları
            quality = 'Hafif Kirlenmiş / Sarı (Seviye 2)';
        }
        if (basePpmFinal > 80 || totalFish > 20 || baseOxygenFinal < 3.5) {
            qLevel = 2; // Koyu Sarı / Kehribar Toksik
            quality = 'Kritik Toksik! / Koyu Sarı (Seviye 3)';
        }
        setPh(Number(basePh.toFixed(1)));
        setOxygen(Number(baseOxygenFinal.toFixed(1)));
        setPpm(Math.round(basePpmFinal));
        setWaterQuality(quality);
        setQualityLevel(qLevel);
        if (fishManagerRef.current) {
            fishManagerRef.current.setTankToxic(qLevel === 2);
        }
    }, [
        selectedSubstrate,
        substrateKg,
        fishCounts,
        activePlants,
        tankData
    ]);
    const handleHeightCalculated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((height)=>{
        setGroundLevelY(height);
        if (fishManagerRef.current) {
            fishManagerRef.current.updateGroundLevel(height);
        }
    }, []);
    const handleSelectSubstrate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((substrate)=>{
        setSelectedSubstrate(substrate);
        if (substrateKg === 0) setSubstrateKg(10);
        setSearchQuery('');
    }, [
        substrateKg
    ]);
    const handleRemoveSubstrate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSelectedSubstrate(null);
        setSubstrateKg(0);
        if (fishManagerRef.current) fishManagerRef.current.resetGroundLevel();
    }, []);
    const handleAddFish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.addSingleFish(item);
            setFishCounts(fishManagerRef.current.getFishCounts());
        }
    }, []);
    const handleRemoveFish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.removeSingleFish(item.id);
            setFishCounts(fishManagerRef.current.getFishCounts());
        }
    }, []);
    const handleClearSpecies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.removeSpecies(item.id);
            setFishCounts(fishManagerRef.current.getFishCounts());
        }
    }, []);
    const handleAddPlant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((plantItem)=>{
        setActivePlants((prev)=>[
                ...prev,
                plantItem
            ]);
        setSearchQuery('');
    }, []);
    const handleRemovePlant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((plantId)=>{
        setActivePlants((prev)=>{
            const idx = prev.findIndex((p)=>p.id === plantId);
            if (idx !== -1) {
                const copy = [
                    ...prev
                ];
                copy.splice(idx, 1);
                return copy;
            }
            return prev;
        });
    }, []);
    const allCatalogItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!tankData) return [];
        const plantsList = tankData.catalog.plants || [];
        return [
            ...tankData.catalog.substrates,
            ...tankData.catalog.fishes || [],
            ...plantsList
        ];
    }, [
        tankData
    ]);
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (searchQuery.trim() === '') return [];
        const query = searchQuery.toLowerCase();
        return allCatalogItems.filter((item)=>item.name.toLowerCase().includes(query));
    }, [
        searchQuery,
        allCatalogItems
    ]);
    if (!tankData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-screen h-screen flex items-center justify-center bg-[#072d4a] text-sky-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Akvaryum simülasyonu yükleniyor..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AquariumScene.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this);
    }
    const totalFishCount = Object.values(fishCounts).reduce((a, b)=>a + b, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen relative overflow-hidden bg-[#072d4a] select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TankSizeSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                options: tankData.tank.options ?? [
                    {
                        volumeLiters: 50,
                        name: '50 Litre',
                        bounds: [
                            10,
                            5,
                            5
                        ]
                    },
                    {
                        volumeLiters: 100,
                        name: '100 Litre',
                        bounds: [
                            14,
                            7,
                            7
                        ]
                    },
                    {
                        volumeLiters: 200,
                        name: '200 Litre',
                        bounds: [
                            18,
                            8.5,
                            8.5
                        ]
                    }
                ],
                currentVolume: currentVolume,
                onSelectVolume: handleSelectVolume
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WaterMetricsHUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                volumeLiters: currentVolume,
                selectedSubstrate: selectedSubstrate,
                substrateKg: substrateKg,
                totalFishCount: totalFishCount,
                temperature: temperature,
                pH: pH,
                oxygen: oxygen,
                ppm: ppm,
                waterQuality: waterQuality,
                fps: fps
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CommandBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                searchQuery: searchQuery,
                setSearchQuery: setSearchQuery,
                searchResults: searchResults,
                fishCounts: fishCounts,
                selectedSubstrate: selectedSubstrate,
                substrateKg: substrateKg,
                setSubstrateKg: setSubstrateKg,
                onSelectSubstrate: handleSelectSubstrate,
                onRemoveSubstrate: handleRemoveSubstrate,
                onAddFish: handleAddFish,
                onRemoveFish: handleRemoveFish,
                onClearSpecies: handleClearSpecies,
                onAddPlant: handleAddPlant,
                activePlants: activePlants,
                onRemovePlant: handleRemovePlant
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        8.5
                    ],
                    fov: 55
                },
                onCreated: ({ scene })=>{
                    // Kalite seviyesine göre arka plan ve sis renkleri: Mavi -> Sarı -> Koyu Sarı / Kehribar
                    const bgColors = [
                        '#06395d',
                        '#362e0b',
                        '#422006'
                    ];
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](bgColors[qualityLevel]);
                    scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FogExp2"](bgColors[qualityLevel], 0.025);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            0,
                            10,
                            3
                        ],
                        intensity: 3.0,
                        color: "#f0f9ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 2.0,
                        color: "#38bdf8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassTankBox, {
                        bounds: tankBounds,
                        qualityLevel: qualityLevel
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WaterSurface, {
                        bounds: tankBounds,
                        qualityLevel: qualityLevel
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tankBounds: tankBounds,
                        substrateConfig: selectedSubstrate,
                        substrateKg: substrateKg,
                        onHeightCalculated: handleHeightCalculated
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlantField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tankBounds: tankBounds,
                        plantsConfig: activePlants,
                        groundLevelY: groundLevelY
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationController, {
                        tankBounds: tankBounds,
                        onFpsUpdate: setFps,
                        fishManagerRef: fishManagerRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enableDamping: true,
                        dampingFactor: 0.05,
                        minDistance: 3,
                        maxDistance: 25
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
function SimulationController({ tankBounds, onFpsUpdate, fishManagerRef }) {
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const frameCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFpsUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fishManagerRef.current) {
            fishManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$FishManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FishManager"](scene, tankBounds);
        } else {
            fishManagerRef.current.updateBounds(tankBounds);
        }
        return ()=>{
            fishManagerRef.current?.dispose();
            fishManagerRef.current = null;
        };
    }, [
        scene,
        tankBounds,
        fishManagerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])((state, delta)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.update(delta, state.clock.elapsedTime);
        }
        frameCountRef.current++;
        const now = performance.now();
        if (now - lastFpsUpdateRef.current >= 500) {
            const currentFps = Math.round(frameCountRef.current * 1000 / (now - lastFpsUpdateRef.current));
            onFpsUpdate(currentFps);
            frameCountRef.current = 0;
            lastFpsUpdateRef.current = now;
        }
    });
    return null;
}
}),
"[project]/src/components/PlantField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlantField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Substrate.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function PlantCluster({ plant, position, baseBottom, substrateHeight = 0 }) {
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leavesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [x, , z] = position;
    const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubstrateSurface"])(x, z, baseBottom, substrateHeight);
    // Kuma paralel/dik hizalama kuaterniyonu
    const baseQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        q.setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), surface.normal);
        return q;
    }, [
        surface.normal
    ]);
    const isAnubias = plant.id === 'anubias';
    const leafColor = plant.color || (isAnubias ? '#15803d' : '#b91c1c');
    const tipColor = isAnubias ? '#22c55e' : '#ef4444';
    // Su akıntısıyla yaprakların yumuşakça salınımı
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])(({ clock })=>{
        const t = clock.getElapsedTime() * 1.8;
        leavesRef.current.forEach((mesh, idx)=>{
            if (mesh) {
                const offset = idx * 0.7 + (x * 0.3 + z * 0.2);
                const swayZ = Math.sin(t + offset) * 0.08;
                const swayX = Math.cos(t * 0.8 + offset) * 0.04;
                mesh.rotation.z = mesh.userData.baseRotZ + swayZ;
                mesh.rotation.x = mesh.userData.baseRotX + swayX;
            }
        });
    });
    // 5 yapraklı organik su altı bitkisi formu
    const leafConfigs = [
        {
            scale: [
                0.35,
                1.1,
                0.35
            ],
            rot: [
                0.1,
                0,
                0.15
            ],
            pos: [
                0,
                0.45,
                0
            ]
        },
        {
            scale: [
                0.3,
                0.85,
                0.3
            ],
            rot: [
                -0.2,
                0.8,
                -0.3
            ],
            pos: [
                0.18,
                0.35,
                0.1
            ]
        },
        {
            scale: [
                0.32,
                0.95,
                0.32
            ],
            rot: [
                0.25,
                2.1,
                0.25
            ],
            pos: [
                -0.15,
                0.4,
                0.12
            ]
        },
        {
            scale: [
                0.28,
                0.75,
                0.28
            ],
            rot: [
                -0.3,
                3.5,
                -0.2
            ],
            pos: [
                -0.12,
                0.3,
                -0.15
            ]
        },
        {
            scale: [
                0.26,
                0.8,
                0.26
            ],
            rot: [
                0.15,
                4.8,
                0.3
            ],
            pos: [
                0.14,
                0.32,
                -0.12
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: [
            x,
            surface.y,
            z
        ],
        quaternion: baseQuat,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.04,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.08,
                            8,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlantField.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2d241e",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlantField.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlantField.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            leafConfigs.map((cfg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: (el)=>{
                        if (el) {
                            el.userData.baseRotZ = cfg.rot[2];
                            el.userData.baseRotX = cfg.rot[0];
                            leavesRef.current[idx] = el;
                        }
                    },
                    position: [
                        cfg.pos[0],
                        cfg.pos[1] * 0.4,
                        cfg.pos[2]
                    ],
                    rotation: [
                        cfg.rot[0],
                        cfg.rot[1],
                        cfg.rot[2]
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            cfg.scale[1] * 0.45,
                            0
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                                args: [
                                    cfg.scale[0] * 0.4,
                                    cfg.scale[1],
                                    5
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlantField.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: idx % 2 === 0 ? leafColor : tipColor,
                                roughness: 0.5,
                                metalness: 0.08,
                                flatShading: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlantField.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlantField.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, idx, false, {
                    fileName: "[project]/src/components/PlantField.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlantField.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function PlantField({ tankBounds, plantsConfig = [], substrateHeight = 0 }) {
    const baseBottom = -tankBounds.y / 2;
    if (!plantsConfig || plantsConfig.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: "plant-field",
        children: plantsConfig.map((plant)=>plant.positions?.map((pos, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlantCluster, {
                    plant: plant,
                    position: pos,
                    baseBottom: baseBottom,
                    substrateHeight: substrateHeight
                }, `${plant.id}-${idx}`, false, {
                    fileName: "[project]/src/components/PlantField.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)))
    }, void 0, false, {
        fileName: "[project]/src/components/PlantField.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Substrate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Substrate,
    "getSubstrateSurface",
    ()=>getSubstrateSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function getSubstrateSurface(x, z, baseTankBottom, substrateHeight) {
    if (substrateHeight <= 0) {
        return {
            y: baseTankBottom,
            normal: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0)
        };
    }
    const waveFactor = Math.min(substrateHeight * 0.15, 0.08);
    const wave = Math.sin(x * 0.7) * Math.cos(z * 0.7) * waveFactor;
    const y = baseTankBottom + substrateHeight + wave;
    // Yüzey eğim türevleri
    const dx = 0.7 * Math.cos(x * 0.7) * Math.cos(z * 0.7) * waveFactor;
    const dz = -0.7 * Math.sin(x * 0.7) * Math.sin(z * 0.7) * waveFactor;
    const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-dx, 1, -dz).normalize();
    return {
        y,
        normal
    };
}
function Substrate({ tankBounds, substrateConfig, substrateKg, onHeightCalculated }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onHeightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onHeightCalculated);
    onHeightRef.current = onHeightCalculated;
    const baseTankBottom = -tankBounds.y / 2;
    const hasSubstrate = Boolean(substrateConfig && substrateKg > 0);
    const calculatedHeight = hasSubstrate ? Math.min(Math.max(substrateKg * 0.035, 0.12), 2.2) : 0;
    // Kum varlığında üst yüzey kotunu, kum silindiğinde çıplak cam tabanını bildir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const effectiveSurfaceY = baseTankBottom + calculatedHeight;
        onHeightRef.current(effectiveSurfaceY);
    }, [
        baseTankBottom,
        calculatedHeight
    ]);
    // Doğal dalga deformasyonu (yalnızca kum kalınlığı veya türü değiştiğinde)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!meshRef.current || !hasSubstrate) return;
        const geometry = meshRef.current.geometry;
        const posAttribute = geometry.attributes.position;
        const waveFactor = Math.min(calculatedHeight * 0.15, 0.08);
        for(let i = 0; i < posAttribute.count; i++){
            const x = posAttribute.getX(i);
            const y = posAttribute.getY(i);
            // Yerel Y, -Math.PI / 2 rotasyonunda global -Z olur
            const globalZ = -y;
            const wave = Math.sin(x * 0.7) * Math.cos(globalZ * 0.7) * waveFactor;
            posAttribute.setZ(i, wave);
        }
        posAttribute.needsUpdate = true;
        geometry.computeVertexNormals();
    }, [
        calculatedHeight,
        hasSubstrate,
        substrateConfig
    ]);
    if (!hasSubstrate || !substrateConfig) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            baseTankBottom,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: meshRef,
            rotation: [
                -Math.PI / 2,
                0,
                0
            ],
            position: [
                0,
                calculatedHeight,
                0
            ],
            receiveShadow: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                    args: [
                        tankBounds.x,
                        tankBounds.z,
                        48,
                        48
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/Substrate.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: substrateConfig.color,
                    roughness: substrateConfig.roughness,
                    metalness: substrateConfig.metalness,
                    flatShading: false,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                }, void 0, false, {
                    fileName: "[project]/src/components/Substrate.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Substrate.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Substrate.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/CommandBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommandBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function CommandBar({ searchQuery, setSearchQuery, searchResults, fishCounts, selectedSubstrate, substrateKg, setSubstrateKg, onSelectSubstrate, onRemoveSubstrate, onAddFish, onRemoveFish, onClearSpecies }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[620px]",
        children: [
            searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2.5 flex flex-col gap-1.5 rounded-2xl bg-sky-950/95 backdrop-blur-xl border border-sky-400/40 p-2.5 shadow-2xl max-h-[340px] overflow-y-auto",
                children: searchResults.map((item)=>{
                    const isFish = item.category === 'Balık';
                    const count = isFish ? fishCounts[item.id] || 0 : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-xl bg-sky-900/40 hover:bg-sky-900/60 transition-colors p-2.5 text-sky-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: item.icon || '🐟'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-sky-400 font-normal",
                                                        children: [
                                                            "(",
                                                            item.category,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 23
                                                    }, this),
                                                    isFish && count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-sky-600 px-1.5 py-0.5 rounded text-[10px] font-bold",
                                                        children: [
                                                            count,
                                                            " Adet"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this),
                                            item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-sky-300/80",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                                lineNumber: 64,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: !isFish ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onSelectSubstrate(item),
                                    className: "bg-sky-400 hover:bg-sky-300 text-sky-950 px-3.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer",
                                    children: "Seç +"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/CommandBar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onRemoveFish(item),
                                            disabled: count === 0,
                                            className: `w-6 h-6 rounded flex items-center justify-center font-bold text-xs transition-colors ${count === 0 ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer'}`,
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CommandBar.tsx",
                                            lineNumber: 80,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-5 text-center text-xs font-bold font-mono",
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CommandBar.tsx",
                                            lineNumber: 92,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onAddFish(item),
                                            className: "w-6 h-6 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CommandBar.tsx",
                                            lineNumber: 93,
                                            columnNumber: 23
                                        }, this),
                                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onClearSpecies(item),
                                            title: "Tümünü Temizle",
                                            className: "ml-1 px-2 py-0.5 rounded bg-rose-500/80 hover:bg-rose-500 text-white text-[10px] cursor-pointer transition-colors",
                                            children: "🗑️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CommandBar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/CommandBar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                        lineNumber: 47,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CommandBar.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 rounded-full bg-sky-950/90 backdrop-blur-xl border border-sky-400/40 px-5 py-3 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg",
                        children: "✨"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Zemin malzemesi veya balık arayın (silis, karbon, vatoz)...",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        className: "w-full bg-transparent border-none text-white text-sm outline-none placeholder:text-sky-300/60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    selectedSubstrate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border-l border-sky-400/30 pl-3 whitespace-nowrap text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-300 font-mono font-medium",
                                children: [
                                    substrateKg,
                                    "kg"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSubstrateKg((p)=>Math.max(p - 1, 1)),
                                className: "w-5 h-5 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold cursor-pointer",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSubstrateKg((p)=>p + 1),
                                className: "w-5 h-5 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold cursor-pointer",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onRemoveSubstrate,
                                className: "text-rose-400 hover:text-rose-300 ml-1 text-[11px] cursor-pointer",
                                children: "Sil"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CommandBar.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CommandBar.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CommandBar.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CommandBar.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/TankSizeSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TankSizeSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function TankSizeSidebar({ options, currentVolume, onSelectVolume }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 50,
            background: 'rgba(7, 45, 74, 0.88)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(56, 189, 248, 0.45)',
            borderRadius: '16px',
            padding: '16px 20px',
            color: '#e2f1fd',
            minWidth: '220px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#38bdf8',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                },
                children: "Akvaryum Boyutu (Hacim)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                },
                children: options.map((opt)=>{
                    const isSelected = currentVolume === opt.volumeLiters;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectVolume(opt),
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 14px',
                            background: isSelected ? 'rgba(56, 189, 248, 0.3)' : 'rgba(56, 189, 248, 0.08)',
                            border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(56, 189, 248, 0.2)',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 600,
                                            fontSize: '13px'
                                        },
                                        children: [
                                            opt.volumeLiters,
                                            " Litre"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '10px',
                                            color: '#bae6fd'
                                        },
                                        children: [
                                            opt.name.split(' ')[1] || '',
                                            " ",
                                            opt.name.split(' ')[2] || ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '12px',
                                    color: '#38bdf8'
                                },
                                children: "● Aktif"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this)
                        ]
                    }, opt.volumeLiters, true, {
                        fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TankSizeSidebar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/WaterMetricsHUD.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaterMetricsHUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function WaterMetricsHUD({ volumeLiters, selectedSubstrate, substrateKg, totalFishCount, pH, oxygen, ppm, temperature, waterQuality, fps }) {
    const isPpmCritical = ppm > 100;
    const isFishOverloaded = totalFishCount > 25;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-5 right-5 z-40 min-w-[260px] rounded-2xl bg-sky-950/80 backdrop-blur-md border border-sky-400/30 p-4 text-sky-50 shadow-2xl transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-2.5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Akvaryum & Su Değerleri"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Su Hacmi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-sky-400",
                                children: [
                                    volumeLiters,
                                    " L"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Su Sıcaklığı"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-bold text-amber-300",
                                children: [
                                    temperature,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Aktif Zemin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-sky-300",
                                children: selectedSubstrate ? `${selectedSubstrate.name.split(' ')[0]} (${substrateKg}kg)` : 'Yok'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Toplam Balık"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-sky-400",
                                children: [
                                    totalFishCount,
                                    " Adet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "pH Seviyesi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-bold text-emerald-400",
                                children: [
                                    pH,
                                    " pH"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Çözünmüş O₂"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-bold text-sky-300",
                                children: [
                                    oxygen,
                                    " mg/L"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Organik Yük (PPM)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-mono font-bold ${isPpmCritical ? 'text-rose-400' : 'text-emerald-400'}`,
                                children: [
                                    ppm,
                                    " PPM"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-200",
                                children: "Biyo-Denge"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-semibold text-[11px] ${isFishOverloaded ? 'text-rose-400' : 'text-emerald-400'}`,
                                children: waterQuality
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center pt-2 border-t border-sky-400/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-300/80",
                                children: "Performans"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-sky-400",
                                children: [
                                    fps,
                                    " FPS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/WaterMetricsHUD.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/utils/FishManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FishManager",
    ()=>FishManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/utils/SkeletonUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Substrate.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
class FishManager {
    scene;
    bounds;
    templates = new Map();
    fishList = [];
    loader;
    textureLoader;
    targetGroundLevel;
    currentGroundLevel;
    substrateHeight = 0;
    isTankToxic = false;
    eyeIrisMaterial;
    pupilMaterial;
    static _tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    static _targetPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    static _currentQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
    static _targetQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
    static _dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Object3D"]();
    constructor(scene, tankBounds){
        this.scene = scene;
        this.bounds = tankBounds;
        const defaultGround = -tankBounds.y / 2 + 0.08;
        this.targetGroundLevel = defaultGround;
        this.currentGroundLevel = defaultGround;
        this.textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]();
        this.eyeIrisMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x734d14
        });
        this.pupilMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x010101
        });
        this.initLoader();
    }
    initLoader() {
        const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        this.loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        this.loader.setDRACOLoader(dracoLoader);
    }
    updateBounds(newBounds) {
        this.bounds.copy(newBounds);
        const defaultGround = -this.bounds.y / 2 + 0.08;
        if (this.targetGroundLevel < defaultGround) {
            this.targetGroundLevel = defaultGround;
        }
    }
    updateGroundLevel(newGroundY, rawSubstrateHeight) {
        this.targetGroundLevel = newGroundY + 0.08;
        if (rawSubstrateHeight !== undefined) {
            this.substrateHeight = rawSubstrateHeight;
        } else {
            this.substrateHeight = Math.max(0, newGroundY - -this.bounds.y / 2);
        }
    }
    resetGroundLevel() {
        const defaultGround = -this.bounds.y / 2 + 0.08;
        this.targetGroundLevel = defaultGround;
        this.substrateHeight = 0;
    }
    setTankToxic(toxic) {
        this.isTankToxic = toxic;
    }
    addSingleFish(config) {
        if (this.templates.has(config.id)) {
            this.spawnFish(this.templates.get(config.id), 1);
            return;
        }
        this.loadAndSpawn(config, 1);
    }
    removeSingleFish(configId) {
        const index = this.fishList.findIndex((f)=>f.config.id === configId);
        if (index !== -1) {
            const fish = this.fishList.splice(index, 1)[0];
            this.scene.remove(fish.model);
            return true;
        }
        return false;
    }
    removeSpecies(configId) {
        const remaining = [];
        for (const fish of this.fishList){
            if (fish.config.id === configId) {
                this.scene.remove(fish.model);
            } else {
                remaining.push(fish);
            }
        }
        this.fishList = remaining;
    }
    clearAllFish() {
        while(this.fishList.length > 0){
            const fish = this.fishList.pop();
            if (fish) {
                this.scene.remove(fish.model);
            }
        }
    }
    loadAndSpawn(config, count) {
        const colorHex = config.appearance?.color || '#8c928d';
        const fallbackMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](colorHex),
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        if (config.texturePath) {
            this.textureLoader.load(config.texturePath, (texture)=>{
                texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                texture.needsUpdate = true;
                const texMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    map: texture,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                });
                this.loadModelGLTF(config, texMaterial, count, texture);
            }, undefined, ()=>this.loadModelGLTF(config, fallbackMaterial, count));
        } else {
            this.loadModelGLTF(config, fallbackMaterial, count);
        }
    }
    loadModelGLTF(config, material, count, texture) {
        this.loader.load(config.modelPath, (gltf)=>{
            const model = gltf.scene;
            const materials = [
                material
            ];
            const geometries = [];
            model.traverse((child)=>{
                if (child.isMesh) {
                    const mesh = child;
                    const geometry = mesh.geometry;
                    const lowerName = mesh.name.toLowerCase();
                    if (geometry && !geometries.includes(geometry)) {
                        geometries.push(geometry);
                    }
                    if (!geometry.attributes.uv) {
                        const pos = geometry.attributes.position;
                        const uvs = [];
                        for(let i = 0; i < pos.count; i++){
                            const x = pos.getX(i);
                            const z = pos.getZ(i);
                            const u = (Math.atan2(z, x) / Math.PI + 1) * 0.5;
                            const v = (pos.getY(i) + 1) * 0.5;
                            uvs.push(u, v);
                        }
                        geometry.setAttribute('uv', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
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
            const template = {
                model,
                config,
                materials,
                geometries,
                texture
            };
            this.templates.set(config.id, template);
            this.spawnFish(template, count);
        }, undefined, (err)=>console.error(`Model yüklenemedi: ${config.modelPath}`, err));
    }
    spawnFish(template, count) {
        const { model, config } = template;
        const margin = 0.8;
        const maxX = this.bounds.x / 2 - margin;
        const maxY = this.bounds.y / 2 - margin;
        const maxZ = this.bounds.z / 2 - margin;
        for(let c = 0; c < count; c++){
            const fishClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](model);
            let tail;
            let finLBig;
            let finRBig;
            fishClone.traverse((child)=>{
                const n = child.name.toLowerCase();
                if (n.includes('tail')) tail = child;
                if (n.includes('fin_l_big') || n.includes('fin') && n.includes('l') && n.includes('big')) {
                    finLBig = child;
                }
                if (n.includes('fin_r_big') || n.includes('fin') && n.includes('r') && n.includes('big')) {
                    finRBig = child;
                }
            });
            const isBottomDweller = config.behavior === 'bottom_dweller';
            const spawnX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxX + 0.5, maxX - 0.5);
            const spawnZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxZ + 0.5, maxZ - 0.5);
            const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubstrateSurface"])(spawnX, spawnZ, -this.bounds.y / 2, this.substrateHeight);
            const initialY = isBottomDweller ? surface.y + 0.08 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(surface.y + 0.5, maxY * 0.6);
            fishClone.position.set(spawnX, initialY, spawnZ);
            const speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(config.physics.minSpeed, config.physics.maxSpeed);
            const velocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1), isBottomDweller ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.02), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1)).normalize().multiplyScalar(speed);
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
                finRBig
            });
        }
    }
    getFishCounts() {
        const counts = {};
        for (const f of this.fishList){
            counts[f.config.id] = (counts[f.config.id] || 0) + 1;
        }
        return counts;
    }
    /**
   * Delta time ile çalışan ana simülasyon döngüsü.
   * Balıklar kumu gerçek bir arazi olarak algılar ve kumun yüzey eğimine (normaline)
   * tam paralel olarak hareket ederler.
   */ update(delta, elapsedTime) {
        const clampedDelta = Math.min(delta, 0.1);
        const dtRatio = clampedDelta * 60;
        const groundLerp = 1 - Math.pow(1 - 0.08, dtRatio);
        this.currentGroundLevel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(this.currentGroundLevel, this.targetGroundLevel, groundLerp);
        const margin = 0.6;
        const minX = -this.bounds.x / 2 + margin;
        const maxX = this.bounds.x / 2 - margin;
        const maxY = this.bounds.y / 2 - margin;
        const minZ = -this.bounds.z / 2 + margin;
        const maxZ = this.bounds.z / 2 - margin;
        for(let i = 0; i < this.fishList.length; i++){
            const fish = this.fishList[i];
            const pos = fish.model.position;
            // Toksik su koşulunda balıklar ters döner ve su yüzeyine sürüklenir
            if (this.isTankToxic) {
                const targetSurfaceY = maxY - 0.3;
                pos.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(pos.y, targetSurfaceY, 0.05);
                fish.model.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(fish.model.rotation.x, Math.PI, 0.05);
                if (fish.tail) fish.tail.rotation.y = 0;
                if (fish.finLBig) fish.finLBig.rotation.z = 0;
                if (fish.finRBig) fish.finRBig.rotation.z = 0;
                continue;
            } else {
                fish.model.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(fish.model.rotation.x, 0, 0.05);
            }
            // Kuyruk ve yüzgeç salınımları
            const cycle = elapsedTime * 8.0 + i * 1.2;
            if (fish.tail) fish.tail.rotation.y = Math.sin(cycle) * 0.4;
            if (fish.finLBig) fish.finLBig.rotation.z = Math.cos(cycle) * 0.3;
            if (fish.finRBig) fish.finRBig.rotation.z = -Math.cos(cycle) * 0.3;
            const phys = fish.config.physics;
            const isBottomDweller = fish.config.behavior === 'bottom_dweller';
            // Balığın anlık bulunduğu (x, z) konumundaki tam kum yüzeyi ve eğim normali
            const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubstrateSurface"])(pos.x, pos.z, -this.bounds.y / 2, this.substrateHeight);
            const localGroundY = surface.y + 0.08;
            const normalMinY = localGroundY + 0.35;
            if (isBottomDweller) {
                fish.preferredDepth = localGroundY;
                fish.targetVelocity.y = (localGroundY - pos.y) * 0.3;
            } else {
                fish.timer += dtRatio;
                if (fish.timer > phys.diveInterval) {
                    fish.preferredDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(normalMinY + 0.2, maxY - 0.3);
                    fish.timer = 0;
                }
                const depthDiff = fish.preferredDepth - pos.y;
                fish.targetVelocity.y = depthDiff * phys.verticalFreedom;
            }
            if (Math.random() < 0.015 * dtRatio) {
                fish.targetVelocity.x += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.01);
                fish.targetVelocity.z += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.01);
            }
            // Duvar sınırlarından kaçınma
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
            const turnAlpha = 1 - Math.pow(1 - phys.turnSpeed, dtRatio);
            fish.velocity.lerp(fish.targetVelocity, turnAlpha);
            fish.velocity.clampLength(fish.speed * 0.5, fish.speed * 1.2);
            FishManager._tempVec.copy(fish.velocity).multiplyScalar(dtRatio);
            pos.add(FishManager._tempVec);
            // Duvar sınır sekme kontrolleri
            if (pos.x > maxX) {
                pos.x = maxX;
                fish.velocity.x *= -0.2;
            }
            if (pos.x < minX) {
                pos.x = minX;
                fish.velocity.x *= -0.2;
            }
            if (pos.z > maxZ) {
                pos.z = maxZ;
                fish.velocity.z *= -0.2;
            }
            if (pos.z < minZ) {
                pos.z = minZ;
                fish.velocity.z *= -0.2;
            }
            // Y ekseni taban takibi
            if (isBottomDweller) {
                const bottomLerp = 1 - Math.pow(1 - 0.35, dtRatio);
                pos.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(pos.y, localGroundY, bottomLerp);
            } else {
                if (pos.y > maxY) {
                    pos.y = maxY;
                    fish.velocity.y *= -0.2;
                }
            }
            // KESİN TABAN KORUMASI: Kumun veya camın içine kesinlikle gömülemez
            const floorBoundary = isBottomDweller ? localGroundY - 0.01 : normalMinY;
            if (pos.y < floorBoundary) {
                pos.y = floorBoundary;
                if (fish.velocity.y < 0) {
                    fish.velocity.y = 0;
                }
            }
            // ROTASYON & KUMA PARALEL HİZALANMA:
            // Dip balıklarının "up" vektörü kumun normaline kilitlenir; böylece kum tepelerinde
            // yukarı tırmanırken burnu yukarı kalkar, aşağı inerken burnu eğilir (kuma tam paralel).
            if (fish.velocity.lengthSq() > 0.00001) {
                FishManager._targetPos.copy(pos).add(fish.velocity);
                if (isBottomDweller) {
                    FishManager._targetPos.y = pos.y;
                    // Kuma paralel oryantasyon için dummy up vektörünü yüzey normaline hizala
                    FishManager._dummy.up.copy(surface.normal);
                } else {
                    FishManager._dummy.up.set(0, 1, 0);
                }
                FishManager._currentQuat.copy(fish.model.quaternion);
                FishManager._dummy.position.copy(pos);
                FishManager._dummy.lookAt(FishManager._targetPos);
                FishManager._targetQuat.copy(FishManager._dummy.quaternion);
                const slerpFactor = 1 - Math.pow(1 - 0.15, dtRatio);
                fish.model.quaternion.slerpQuaternions(FishManager._currentQuat, FishManager._targetQuat, slerpFactor);
            }
        }
    }
    dispose() {
        this.clearAllFish();
        for (const template of this.templates.values()){
            for (const geom of template.geometries){
                geom.dispose();
            }
            for (const mat of template.materials){
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
}),
];

//# sourceMappingURL=src_1az2ybw5hy7f8._.js.map