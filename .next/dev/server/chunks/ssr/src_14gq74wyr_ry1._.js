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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
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
// Akvaryum Boyutları
const TANK_BOUNDS = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](14, 7, 7);
// Supabase'den veya Fallback'ten Balık Konfigürasyonlarını Çeken Metot
async function fetchFishConfigsFromSupabase() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('fish_species').select('*');
        if (error || !data || data.length === 0) {
            console.warn('Supabase verisi alınamadı, varsayılan Vatoz konfigürasyonu kullanılıyor.', error);
            // Fallback: Renk ayarı tamamen config üzerinden (Bej tonu: #d4c2a0)
            return [
                {
                    id: 'pleco',
                    name: 'Vatoz',
                    modelPath: '/models/pleco.glb',
                    behavior: 'bottom_dweller',
                    appearance: {
                        color: '#d4c2a0',
                        roughness: 0.4,
                        metalness: 0.1
                    },
                    physics: {
                        minSpeed: 0.008,
                        maxSpeed: 0.02,
                        diveInterval: 250,
                        verticalFreedom: 0.0,
                        turnSpeed: 0.035
                    },
                    swimShader: {
                        bodySpeed: 1.8,
                        bodyFreq: 2.2,
                        bodyAmp: 0.012,
                        finSpeed: 4.5,
                        pectoralAmp: 0.025,
                        caudalWhip: 0.035
                    }
                }
            ];
        }
        return data.map((item)=>({
                id: item.id,
                name: item.name,
                modelPath: item.model_path,
                behavior: item.behavior,
                appearance: {
                    color: item.color ?? '#d4c2a0',
                    roughness: item.roughness ?? 0.4,
                    metalness: item.metalness ?? 0.1
                },
                physics: {
                    minSpeed: item.min_speed ?? 0.01,
                    maxSpeed: item.max_speed ?? 0.025,
                    diveInterval: item.dive_interval ?? 200,
                    verticalFreedom: item.vertical_freedom ?? 0.0,
                    turnSpeed: item.turn_speed ?? 0.035
                },
                swimShader: {
                    bodySpeed: item.body_speed ?? 1.8,
                    bodyFreq: item.body_freq ?? 2.2,
                    bodyAmp: item.body_amp ?? 0.012,
                    finSpeed: item.fin_speed ?? 4.5,
                    pectoralAmp: item.pectoral_amp ?? 0.025,
                    caudalWhip: item.caudal_whip ?? 0.035
                }
            }));
    } catch (err) {
        console.error('Supabase bağlantı hatası:', err);
        return [];
    }
}
function SimulationController({ fishCount, fishConfigs, onFpsUpdate }) {
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const fishManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFpsUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (fishConfigs.length > 0) {
            if (!fishManagerRef.current) {
                fishManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$FishManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FishManager"](scene, TANK_BOUNDS, fishCount, fishConfigs);
            } else {
                fishManagerRef.current.updateConfigs(fishConfigs);
            }
        }
    }, [
        scene,
        fishConfigs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.setFishCount(fishCount);
        }
    }, [
        fishCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])(()=>{
        const elapsedTime = (performance.now() - startTimeRef.current) * 0.001;
        if (fishManagerRef.current) {
            fishManagerRef.current.update(elapsedTime);
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
function GlassBounds() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
        position: [
            0,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("edgesGeometry", {
                args: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](TANK_BOUNDS.x, TANK_BOUNDS.y, TANK_BOUNDS.z)
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                color: "#38bdf8",
                transparent: true,
                opacity: 0.35
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
function AquariumScene() {
    const [fishCount, setFishCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [fps, setFps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(60);
    const [fishConfigs, setFishConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadConfigs() {
            const configs = await fetchFishConfigsFromSupabase();
            setFishConfigs(configs);
        }
        loadConfigs();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#04192b'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 50,
                    background: 'rgba(4, 25, 43, 0.85)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    color: '#e2f1fd',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    minWidth: '220px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
                            paddingBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    color: '#38bdf8',
                                    textTransform: 'uppercase'
                                },
                                children: "Akvaryum Kontrol"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '10px',
                                    color: '#94a3b8',
                                    fontFamily: 'monospace'
                                },
                                children: "Config Engine"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '13px',
                            fontWeight: 500
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#cbd5e1'
                                },
                                children: "Performans"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8',
                                    fontWeight: 700,
                                    fontFamily: 'monospace',
                                    fontSize: '15px'
                                },
                                children: [
                                    fps,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 400,
                                            color: '#94a3b8'
                                        },
                                        children: "FPS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '13px',
                                    fontWeight: 500
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: "Balık Popülasyonu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#38bdf8',
                                            fontWeight: 700,
                                            fontFamily: 'monospace',
                                            fontSize: '15px'
                                        },
                                        children: fishCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                value: fishCount,
                                onChange: (e)=>setFishCount(parseInt(e.target.value, 10)),
                                style: {
                                    width: '100%',
                                    height: '6px',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    accentColor: '#38bdf8'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        7.5
                    ],
                    fov: 55
                },
                onCreated: ({ scene })=>{
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x04192b);
                    scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FogExp2"](0x04192b, 0.045);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            0,
                            8,
                            2
                        ],
                        intensity: 2.2,
                        color: "#dcf4ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 1.4,
                        color: "#0a3c59"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassBounds, {}, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tankBounds: TANK_BOUNDS
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlantField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tankBounds: TANK_BOUNDS
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationController, {
                        fishCount: fishCount,
                        fishConfigs: fishConfigs,
                        onFpsUpdate: setFps
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enableDamping: true,
                        dampingFactor: 0.05,
                        minDistance: 3,
                        maxDistance: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/PlantField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
// src/components/PlantField.tsx
'use client';
;
;
;
;
// Fonksiyonu normal tanımlayıp en altta default export ediyoruz
function PlantField({ tankBounds, count = 100 }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. Geometri Tanımı ve Kök Hizalama
    const leafGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](0.18, 2.5, 4, 16);
        geom.translate(0, 1.25, 0);
        return geom;
    }, []);
    // 2. Vertex Shader Salınım Materyali
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x1f7a42,
            roughness: 0.8,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        mat.onBeforeCompile = (shader)=>{
            shader.uniforms.uTime = {
                value: 0
            };
            shaderRef.current = shader;
            shader.vertexShader = `
        uniform float uTime;
        ${shader.vertexShader}
      `;
            shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
        #include <begin_vertex>
        float swayFactor = smoothstep(0.0, 2.5, position.y);
        float current = sin(uTime * 1.8 + position.y * 1.2 + modelMatrix[3][0]) * 0.28;
        transformed.x += current * swayFactor;
        transformed.z += cos(uTime * 1.2 + position.y * 0.9) * 0.15 * swayFactor;
        `);
        };
        return mat;
    }, []);
    // 3. Matris Hesabı (Rastgele Pozisyon, Rotasyon ve Ölçek)
    const matrices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const tempMatrices = [];
        const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Object3D"]();
        const bottomY = -tankBounds.y / 2 + 0.1;
        for(let i = 0; i < count; i++){
            dummy.position.set((Math.random() - 0.5) * (tankBounds.x - 1.5), bottomY, (Math.random() - 0.5) * (tankBounds.z - 1.5));
            dummy.rotation.y = Math.random() * Math.PI;
            const scaleY = 0.7 + Math.random() * 0.6;
            dummy.scale.set(1, scaleY, 1);
            dummy.updateMatrix();
            tempMatrices.push(dummy.matrix.clone());
        }
        return tempMatrices;
    }, [
        tankBounds,
        count
    ]);
    // 4. Her Render Karesinde Shader Zaman Güncellemesi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])((state)=>{
        if (shaderRef.current) {
            shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: meshRef,
        args: [
            leafGeom,
            material,
            count
        ],
        onUpdate: (self)=>{
            matrices.forEach((mat, i)=>{
                self.setMatrixAt(i, mat);
            });
            self.instanceMatrix.needsUpdate = true;
        }
    }, void 0, false, {
        fileName: "[project]/src/components/PlantField.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PlantField;
}),
"[project]/src/components/Substrate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Substrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Substrate({ tankBounds, pebbleCount = 80 }) {
    const pebblesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. Engebeli Kum Geometrisi Hesabı
    const sandGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](tankBounds.x, tankBounds.z, 32, 32);
        geom.rotateX(-Math.PI / 2);
        const pos = geom.attributes.position;
        for(let i = 0; i < pos.count; i++){
            const x = pos.getX(i);
            const z = pos.getZ(i);
            const y = Math.sin(x * 1.5) * Math.cos(z * 1.5) * 0.08;
            pos.setY(i, y);
        }
        geom.computeVertexNormals();
        return geom;
    }, [
        tankBounds
    ]);
    // 2. Çakıl Taşları Matris Hesabı (InstancedMesh)
    const pebbleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DodecahedronGeometry"](0.22, 1);
        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x5a5d61,
            roughness: 0.7
        });
        const matrices = [];
        const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Object3D"]();
        const bottomY = -tankBounds.y / 2 + 0.1;
        for(let i = 0; i < pebbleCount; i++){
            dummy.position.set((Math.random() - 0.5) * (tankBounds.x - 1.2), bottomY, (Math.random() - 0.5) * (tankBounds.z - 1.2));
            dummy.rotation.set(Math.random(), Math.random(), Math.random());
            dummy.scale.set(0.5 + Math.random() * 0.7, 0.25 + Math.random() * 0.3, 0.5 + Math.random() * 0.7);
            dummy.updateMatrix();
            matrices.push(dummy.matrix.clone());
        }
        return {
            geom,
            mat,
            matrices
        };
    }, [
        tankBounds,
        pebbleCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: sandGeometry,
                position: [
                    0,
                    -tankBounds.y / 2,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#cfb285",
                    roughness: 0.95
                }, void 0, false, {
                    fileName: "[project]/src/components/Substrate.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Substrate.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: pebblesRef,
                args: [
                    pebbleData.geom,
                    pebbleData.mat,
                    pebbleCount
                ],
                onUpdate: (self)=>{
                    pebbleData.matrices.forEach((mat, i)=>{
                        self.setMatrixAt(i, mat);
                    });
                    self.instanceMatrix.needsUpdate = true;
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Substrate.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Substrate.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
// Değişkenleri doğrudan çağırın
const supabaseUrl = ("TURBOPACK compile-time value", "https://vrzhjkufsfjvkjjpvpcr.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_7TYgmjqf_K-z9ksj9z-lYg_xI0Wl58y");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
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
;
;
;
;
class FishManager {
    scene;
    bounds;
    targetCount;
    configs;
    templates = [];
    fishList = [];
    loader;
    eyeIrisMaterial;
    pupilMaterial;
    constructor(scene, tankBounds, count = 20, configs = []){
        this.scene = scene;
        this.bounds = tankBounds;
        this.targetCount = count;
        this.configs = configs;
        // Sabit göz materyalleri
        this.eyeIrisMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x734d14
        });
        this.pupilMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x010101
        });
        this.initLoader();
        if (this.configs.length > 0) {
            this.loadModels();
        }
    }
    initLoader() {
        const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        this.loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        this.loader.setDRACOLoader(dracoLoader);
    }
    loadModels() {
        this.clearAllFish();
        const promises = this.configs.map((cfg)=>{
            return new Promise((resolve)=>{
                // Renk tamamen config'den (appearance.color) alınır, koda hiçbir şey gömülmez.
                const colorHex = cfg.appearance?.color || '#3d2817';
                const fishMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](colorHex),
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                });
                this.loader.load(cfg.modelPath, (gltf)=>{
                    const model = gltf.scene;
                    model.traverse((child)=>{
                        if (child.isMesh) {
                            const mesh = child;
                            const lowerName = mesh.name.toLowerCase();
                            if (lowerName.includes('pupil')) {
                                mesh.material = this.pupilMaterial;
                            } else if (lowerName.includes('eye')) {
                                mesh.material = this.eyeIrisMaterial;
                            } else {
                                mesh.material = fishMaterial;
                            }
                        }
                    });
                    resolve({
                        model,
                        config: cfg
                    });
                }, undefined, (err)=>{
                    console.error(`[FishEngine] Model yüklenemedi: ${cfg.modelPath}`, err);
                    resolve(null);
                });
            });
        });
        Promise.all(promises).then((results)=>{
            this.templates = results.filter((r)=>r !== null);
            if (this.templates.length > 0) {
                this.setFishCount(this.targetCount);
            }
        });
    }
    addFish() {
        if (this.templates.length === 0) return;
        const templateObj = this.templates[Math.floor(Math.random() * this.templates.length)];
        const { model, config } = templateObj;
        const margin = 0.8;
        const maxX = this.bounds.x / 2 - margin;
        const maxY = this.bounds.y / 2 - margin;
        const maxZ = this.bounds.z / 2 - margin;
        const bottomY = -this.bounds.y / 2 + 0.35;
        const fishClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](model);
        let tail;
        let finLBig;
        let finLSmall;
        let finRBig;
        let finRSmall;
        let finDorsal;
        fishClone.traverse((child)=>{
            const n = child.name.toLowerCase();
            if (n.includes('tail')) tail = child;
            if (n.includes('fin_l_big') || n.includes('fin') && n.includes('l') && n.includes('big')) finLBig = child;
            if (n.includes('fin_l_small') || n.includes('fin') && n.includes('l') && n.includes('small')) finLSmall = child;
            if (n.includes('fin_r_big') || n.includes('fin') && n.includes('r') && n.includes('big')) finRBig = child;
            if (n.includes('fin_r_small') || n.includes('fin') && n.includes('r') && n.includes('small')) finRSmall = child;
            if (n.includes('dorsal')) finDorsal = child;
        });
        const isBottomDweller = config.behavior === 'bottom_dweller';
        const initialY = isBottomDweller ? bottomY : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxY * 0.4, maxY * 0.4);
        fishClone.position.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxX + 0.5, maxX - 0.5), initialY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxZ + 0.5, maxZ - 0.5));
        const speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(config.physics.minSpeed, config.physics.maxSpeed);
        const velocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1), isBottomDweller ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.02), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1)).normalize().multiplyScalar(speed);
        this.scene.add(fishClone);
        this.fishList.push({
            model: fishClone,
            velocity: velocity,
            targetVelocity: velocity.clone(),
            speed: speed,
            config: config,
            preferredDepth: initialY,
            timer: Math.random() * config.physics.diveInterval,
            tail,
            finLBig,
            finLSmall,
            finRBig,
            finRSmall,
            finDorsal
        });
    }
    removeFish() {
        if (this.fishList.length === 0) return;
        const fish = this.fishList.pop();
        if (fish) {
            this.scene.remove(fish.model);
        }
    }
    setFishCount(newCount) {
        this.targetCount = newCount;
        if (this.templates.length === 0) return;
        while(this.fishList.length < newCount)this.addFish();
        while(this.fishList.length > newCount)this.removeFish();
    }
    clearAllFish() {
        while(this.fishList.length > 0){
            this.removeFish();
        }
    }
    updateConfigs(newConfigs) {
        this.configs = newConfigs;
        this.loadModels();
    }
    updateBounds(newBounds) {
        this.bounds = newBounds;
    }
    update(elapsedTime) {
        const margin = 0.6;
        const minX = -this.bounds.x / 2 + margin;
        const maxX = this.bounds.x / 2 - margin;
        const minY = -this.bounds.y / 2 + margin;
        const maxY = this.bounds.y / 2 - margin;
        const minZ = -this.bounds.z / 2 + margin;
        const maxZ = this.bounds.z / 2 - margin;
        const bottomY = -this.bounds.y / 2 + 0.35;
        for(let i = 0; i < this.fishList.length; i++){
            const fish = this.fishList[i];
            const cycle = elapsedTime * 8.0 + i * 1.2;
            if (fish.tail) {
                fish.tail.rotation.y = Math.sin(cycle) * 0.4;
            }
            if (fish.finLBig) {
                fish.finLBig.rotation.z = Math.cos(cycle) * 0.3;
            }
            if (fish.finLSmall) {
                fish.finLSmall.rotation.z = Math.cos(cycle + 0.5) * 0.2;
            }
            if (fish.finRBig) {
                fish.finRBig.rotation.z = -Math.cos(cycle) * 0.3;
            }
            if (fish.finRSmall) {
                fish.finRSmall.rotation.z = -Math.cos(cycle + 0.5) * 0.2;
            }
            if (fish.finDorsal) {
                fish.finDorsal.rotation.z = Math.sin(cycle * 0.7) * 0.15;
            }
            const pos = fish.model.position;
            const phys = fish.config.physics;
            const isBottomDweller = fish.config.behavior === 'bottom_dweller';
            if (isBottomDweller) {
                fish.preferredDepth = bottomY;
                fish.targetVelocity.y = (bottomY - pos.y) * 0.1;
            } else {
                fish.timer++;
                if (fish.timer > phys.diveInterval) {
                    fish.preferredDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(minY + 0.3, maxY - 0.3);
                    fish.timer = 0;
                }
                const depthDiff = fish.preferredDepth - pos.y;
                fish.targetVelocity.y = depthDiff * phys.verticalFreedom;
            }
            if (Math.random() < 0.02) {
                fish.targetVelocity.x += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.015);
                fish.targetVelocity.z += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.015);
            }
            const buffer = 1.3;
            const steer = 0.0035;
            if (pos.x > maxX - buffer) fish.targetVelocity.x -= steer;
            if (pos.x < minX + buffer) fish.targetVelocity.x += steer;
            if (!isBottomDweller) {
                if (pos.y > maxY - buffer) fish.targetVelocity.y -= steer;
                if (pos.y < minY + buffer) fish.targetVelocity.y += steer;
            }
            if (pos.z > maxZ - buffer) fish.targetVelocity.z -= steer;
            if (pos.z < minZ + buffer) fish.targetVelocity.z += steer;
            fish.velocity.lerp(fish.targetVelocity, phys.turnSpeed);
            fish.velocity.clampLength(fish.speed * 0.6, fish.speed * 1.3);
            pos.add(fish.velocity);
            if (pos.x > maxX) {
                pos.x = maxX;
                fish.velocity.x *= -0.5;
            }
            if (pos.x < minX) {
                pos.x = minX;
                fish.velocity.x *= -0.5;
            }
            if (isBottomDweller) {
                pos.y = bottomY;
            } else {
                if (pos.y > maxY) {
                    pos.y = maxY;
                    fish.velocity.y *= -0.5;
                }
                if (pos.y < minY) {
                    pos.y = minY;
                    fish.velocity.y *= -0.5;
                }
            }
            if (pos.z > maxZ) {
                pos.z = maxZ;
                fish.velocity.z *= -0.5;
            }
            if (pos.z < minZ) {
                pos.z = minZ;
                fish.velocity.z *= -0.5;
            }
            if (fish.velocity.lengthSq() > 0.00001) {
                const targetPos = pos.clone().add(fish.velocity);
                if (isBottomDweller) {
                    targetPos.y = pos.y;
                }
                fish.model.lookAt(targetPos);
            }
        }
    }
}
}),
];

//# sourceMappingURL=src_14gq74wyr_ry1._.js.map