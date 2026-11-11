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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// Akvaryum Boyutları (main.js içindeki 14, 7, 7)
const TANK_BOUNDS = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](14, 7, 7);
// R3F İçinde Balık Simülasyonunu Çalıştıran Ve Güncelleyen İç Bileşen
function FishEngineController({ fishCount, fishConfigs }) {
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const fishManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Balık Motorunu Başlat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (fishConfigs.length > 0 && !fishManagerRef.current) {
            fishManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$FishManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FishManager"](scene, TANK_BOUNDS, fishCount, fishConfigs);
        }
    }, [
        scene,
        fishConfigs
    ]);
    // Slider ile balık sayısı değiştiğinde tetiklenir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.setFishCount(fishCount);
        }
    }, [
        fishCount
    ]);
    // Her render karesinde (requestAnimationFrame yerine) çalışır
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])((state)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.update(state.clock.getElapsedTime());
        }
    });
    return null;
}
// Akvaryum Cam Çerçevesi (main.js -> initGlassBounds)
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
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                color: "#38bdf8",
                transparent: true,
                opacity: 0.35
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 53,
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
    const [dbStatus, setDbStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Bağlanıyor...');
    const [fishCount, setFishCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [fishConfigs, setFishConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // 1. Supabase Bağlantı Testi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function checkConnection() {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('_test_connection').select('*').limit(1);
            if (!error || error.code === 'PGRST116' || error.code === '42P01') {
                setDbStatus('Supabase Bağlantısı Başarılı!');
            } else {
                setDbStatus('Bağlantı Hatası');
            }
        }
        checkConnection();
    }, []);
    // 2. fishConfig.json Yükleme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadConfigs() {
            try {
                const res = await fetch('/data/fishConfig.json');
                if (res.ok) {
                    const data = await res.json();
                    setFishConfigs(data);
                }
            } catch (err) {
                console.error('Konfigürasyon dosyası yüklenemedi:', err);
            }
        }
        loadConfigs();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen relative bg-slate-900 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10 bg-slate-800/90 text-white px-4 py-2 rounded-lg border border-slate-700 text-sm shadow-lg backdrop-blur",
                children: [
                    "Supabase: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-emerald-400 font-semibold",
                        children: dbStatus
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 96,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10 bg-slate-800/90 text-white p-4 rounded-xl border border-slate-700 shadow-xl backdrop-blur flex flex-col gap-2 min-w-[200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Balık Sayısı"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cyan-400 font-bold",
                                children: fishCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: "1",
                        max: "100",
                        value: fishCount,
                        onChange: (e)=>setFishCount(parseInt(e.target.value, 10)),
                        className: "w-full accent-cyan-400 cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        2,
                        13
                    ],
                    fov: 50
                },
                onCreated: ({ scene })=>{
                    // Su altı sisi ve arkaplan rengi (main.js ile birebir)
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
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 1.4,
                        color: "#0a3c59"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassBounds, {}, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FishEngineController, {
                        fishCount: fishCount,
                        fishConfigs: fishConfigs
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enableDamping: true,
                        dampingFactor: 0.05
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 93,
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
    activeShaders = [];
    loader;
    constructor(scene, tankBounds, count = 20, configs = []){
        this.scene = scene;
        this.bounds = tankBounds;
        this.targetCount = count;
        this.configs = configs;
        this.initLoader();
        this.loadModels();
    }
    initLoader() {
        const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        this.loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        this.loader.setDRACOLoader(dracoLoader);
    }
    loadModels() {
        const promises = this.configs.map((cfg)=>{
            return new Promise((resolve)=>{
                this.loader.load(cfg.modelPath, (gltf)=>{
                    const model = gltf.scene;
                    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(model);
                    const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const scaleFactor = 1.0 / (maxDim || 1.0) * (cfg.transform.scale || 1.0);
                    const wrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
                    model.scale.setScalar(scaleFactor);
                    const rotX = cfg.transform.rotX ?? 0;
                    const rotY = cfg.transform.rotY ?? 0;
                    const rotZ = cfg.transform.rotZ ?? 0;
                    model.rotation.set(rotX, rotY, rotZ);
                    wrapper.add(model);
                    resolve({
                        wrapper,
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
    bindShader(rootMesh, shaderCfg) {
        rootMesh.traverse((child)=>{
            if (child.isMesh) {
                const mesh = child;
                if (mesh.material) {
                    const mat = mesh.material.clone();
                    const hasColor = Boolean(mesh.geometry.attributes.color);
                    mat.vertexColors = hasColor;
                    if (hasColor) {
                        mat.defines = mat.defines || {};
                        mat.defines.USE_COLOR = '';
                    }
                    mat.onBeforeCompile = (shader)=>{
                        shader.uniforms.uTime = {
                            value: 0
                        };
                        shader.uniforms.uPhase = {
                            value: Math.random() * 10.0
                        };
                        shader.uniforms.uBodySpeed = {
                            value: shaderCfg.bodySpeed ?? 2.0
                        };
                        shader.uniforms.uBodyFreq = {
                            value: shaderCfg.bodyFreq ?? 3.0
                        };
                        shader.uniforms.uBodyAmp = {
                            value: shaderCfg.bodyAmp ?? 0.02
                        };
                        shader.uniforms.uFinSpeed = {
                            value: shaderCfg.finSpeed ?? 6.0
                        };
                        shader.uniforms.uPectoralAmp = {
                            value: shaderCfg.pectoralAmp ?? 0.04
                        };
                        shader.uniforms.uCaudalWhip = {
                            value: shaderCfg.caudalWhip ?? 0.05
                        };
                        shader.vertexShader = `
              uniform float uTime;
              uniform float uPhase;
              uniform float uBodySpeed;
              uniform float uBodyFreq;
              uniform float uBodyAmp;
              uniform float uFinSpeed;
              uniform float uPectoralAmp;
              uniform float uCaudalWhip;
              ${shader.vertexShader}
            `;
                        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
              #include <begin_vertex>

              // 1. GÖVDE OMURGA SALINIMI
              float spineT = smoothstep(0.05, 0.45, abs(position.z));
              float bodySwing = sin(uTime * uBodySpeed + uPhase + position.z * uBodyFreq) * uBodyAmp * spineT;
              transformed.x += bodySwing;

              // 2. YÜZGEÇLER VE KUYRUK (MİKRO HAREKETLER)
              #ifdef USE_COLOR
                float pectoralMask = smoothstep(0.1, 0.9, color.r); 
                float caudalMask   = smoothstep(0.1, 0.9, color.g); 

                // GÖĞÜS YÜZGEÇLERİ (Kırmızı Kanal)
                if (pectoralMask > 0.01) {
                  float sideSign = sign(position.x);
                  float stroke = sin(uTime * uFinSpeed + uPhase) * uPectoralAmp * pectoralMask;
                  transformed.x += stroke * 0.7 * sideSign;
                  transformed.z += cos(uTime * uFinSpeed + uPhase) * (uPectoralAmp * 0.4) * pectoralMask;
                }

                // KUYRUK TÜLÜ (Yeşil Kanal)
                if (caudalMask > 0.01) {
                  float tailWhip = sin(uTime * uBodySpeed + uPhase + position.z * (uBodyFreq * 1.1)) * uCaudalWhip * caudalMask;
                  transformed.x += tailWhip;
                }
              #endif
              `);
                        this.activeShaders.push(shader);
                    };
                    mesh.material = mat;
                }
            }
        });
    }
    addFish() {
        if (this.templates.length === 0) return;
        const templateObj = this.templates[Math.floor(Math.random() * this.templates.length)];
        const { wrapper, config } = templateObj;
        const margin = 1.0;
        const maxX = this.bounds.x / 2 - margin;
        const maxY = this.bounds.y / 2 - margin;
        const maxZ = this.bounds.z / 2 - margin;
        const bottomY = -this.bounds.y / 2 + 0.35;
        const fishGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const fishClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](wrapper);
        this.bindShader(fishClone, config.swimShader);
        fishGroup.add(fishClone);
        const isBottomDweller = config.behavior === 'bottom_dweller';
        const initialY = isBottomDweller ? bottomY : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxY * 0.5, maxY * 0.5);
        fishGroup.position.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxX + 0.5, maxX - 0.5), initialY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxZ + 0.5, maxZ - 0.5));
        const speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(config.physics.minSpeed, config.physics.maxSpeed);
        const velocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1), isBottomDweller ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.04), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1)).normalize().multiplyScalar(speed);
        this.scene.add(fishGroup);
        this.fishList.push({
            group: fishGroup,
            velocity: velocity,
            targetVelocity: velocity.clone(),
            speed: speed,
            config: config,
            preferredDepth: initialY,
            timer: Math.random() * config.physics.diveInterval
        });
    }
    removeFish() {
        if (this.fishList.length === 0) return;
        const fish = this.fishList.pop();
        if (fish) {
            this.scene.remove(fish.group);
        }
    }
    setFishCount(newCount) {
        this.targetCount = newCount;
        if (this.templates.length === 0) return;
        while(this.fishList.length < newCount)this.addFish();
        while(this.fishList.length > newCount)this.removeFish();
    }
    update(elapsedTime) {
        for(let i = 0; i < this.activeShaders.length; i++){
            this.activeShaders[i].uniforms.uTime.value = elapsedTime;
        }
        const margin = 0.8;
        const minX = -this.bounds.x / 2 + margin;
        const maxX = this.bounds.x / 2 - margin;
        const minY = -this.bounds.y / 2 + margin;
        const maxY = this.bounds.y / 2 - margin;
        const minZ = -this.bounds.z / 2 + margin;
        const maxZ = this.bounds.z / 2 - margin;
        const bottomY = -this.bounds.y / 2 + 0.35;
        for(let i = 0; i < this.fishList.length; i++){
            const fish = this.fishList[i];
            const pos = fish.group.position;
            const phys = fish.config.physics;
            const isBottomDweller = fish.config.behavior === 'bottom_dweller';
            if (isBottomDweller) {
                fish.preferredDepth = bottomY;
                fish.targetVelocity.y = (bottomY - pos.y) * 0.1;
            } else {
                fish.timer++;
                if (fish.timer > phys.diveInterval) {
                    fish.preferredDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(minY + 0.4, maxY - 0.4);
                    fish.timer = 0;
                }
                const depthDiff = fish.preferredDepth - pos.y;
                fish.targetVelocity.y = depthDiff * phys.verticalFreedom;
            }
            if (Math.random() < 0.01) {
                fish.targetVelocity.x += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.02);
                fish.targetVelocity.z += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.02);
            }
            const buffer = 1.3;
            const steer = 0.0025;
            if (pos.x > maxX - buffer) fish.targetVelocity.x -= steer;
            if (pos.x < minX + buffer) fish.targetVelocity.x += steer;
            if (!isBottomDweller) {
                if (pos.y > maxY - buffer) fish.targetVelocity.y -= steer;
                if (pos.y < minY + buffer) fish.targetVelocity.y += steer;
            }
            if (pos.z > maxZ - buffer) fish.targetVelocity.z -= steer;
            if (pos.z < minZ + buffer) fish.targetVelocity.z += steer;
            if (!isBottomDweller) {
                fish.targetVelocity.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp(fish.targetVelocity.y, -0.008, 0.008);
            }
            fish.velocity.lerp(fish.targetVelocity, phys.turnSpeed);
            fish.velocity.clampLength(fish.speed * 0.85, fish.speed * 1.15);
            pos.add(fish.velocity);
            if (isBottomDweller) {
                pos.y = bottomY;
            } else {
                if (pos.y >= maxY) {
                    pos.y = maxY;
                    fish.velocity.y *= -1;
                    fish.targetVelocity.y = -Math.abs(fish.targetVelocity.y);
                }
                if (pos.y <= minY) {
                    pos.y = minY;
                    fish.velocity.y *= -1;
                    fish.targetVelocity.y = Math.abs(fish.targetVelocity.y);
                }
            }
            if (pos.x >= maxX) {
                pos.x = maxX;
                fish.velocity.x *= -1;
                fish.targetVelocity.x = -Math.abs(fish.targetVelocity.x);
            }
            if (pos.x <= minX) {
                pos.x = minX;
                fish.velocity.x *= -1;
                fish.targetVelocity.x = Math.abs(fish.targetVelocity.x);
            }
            if (pos.z >= maxZ) {
                pos.z = maxZ;
                fish.velocity.z *= -1;
                fish.targetVelocity.z = -Math.abs(fish.targetVelocity.z);
            }
            if (pos.z <= minZ) {
                pos.z = minZ;
                fish.velocity.z *= -1;
                fish.targetVelocity.z = Math.abs(fish.targetVelocity.z);
            }
            let lookTarget;
            if (isBottomDweller) {
                lookTarget = pos.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](fish.velocity.x, 0, fish.velocity.z));
            } else {
                lookTarget = pos.clone().add(fish.velocity);
            }
            fish.group.lookAt(lookTarget);
        }
    }
}
}),
];

//# sourceMappingURL=src_08yuibaiguukk._.js.map