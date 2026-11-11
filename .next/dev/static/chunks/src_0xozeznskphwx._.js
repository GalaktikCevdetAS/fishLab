(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AquariumScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AquariumScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$FishManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/FishManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Substrate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlantField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlantField.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function WaterSurface({ bounds }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    bounds.x,
                    bounds.z
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                color: "#38bdf8",
                transparent: true,
                opacity: 0.3,
                roughness: 0.05,
                metalness: 0.1,
                transmission: 0.8,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            }, void 0, false, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = WaterSurface;
function GlassTankBox({ bounds }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                position: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("edgesGeometry", {
                        args: [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](bounds.x, bounds.y, bounds.z)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                        color: "#bae6fd",
                        transparent: true,
                        opacity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            bounds.x,
                            bounds.y,
                            bounds.z
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: "#ffffff",
                        transmission: 0.96,
                        opacity: 0.2,
                        transparent: true,
                        roughness: 0.02,
                        metalness: 0.1,
                        ior: 1.5,
                        reflectivity: 0.9,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = GlassTankBox;
function AquariumScene() {
    _s();
    const [fps, setFps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    const [tankData, setTankData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedSubstrate, setSelectedSubstrate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [substrateKg, setSubstrateKg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    // Balık adetleri ve Canlı Su Parametreleri
    const [fishCounts, setFishCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [pH, setPh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7.2);
    const [oxygen, setOxygen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7.5);
    const [ppm, setPpm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [waterQuality, setWaterQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('İdeal');
    const fishManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AquariumScene.useEffect": ()=>{
            async function loadConfig() {
                try {
                    const res = await fetch('/fishConfig.json');
                    if (!res.ok) throw new Error('fishConfig.json yüklenemedi');
                    const data = await res.json();
                    setTankData(data);
                } catch (err) {
                    console.error('fishConfig.json yüklenirken hata oluştu:', err);
                }
            }
            loadConfig();
        }
    }["AquariumScene.useEffect"], []);
    // Kum ve balıkların ekosisteme (pH, O2, PPM) etkisinin aktif olarak hesaplanması
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AquariumScene.useEffect": ()=>{
            let basePh = 7.2;
            let baseOxygen = 8.0;
            let basePpm = 10;
            // Kumun su değerlerine etkisi
            if (selectedSubstrate) {
                if (selectedSubstrate.id === 'active_carbon') {
                    basePh = 6.4; // Aktif karbon toprak suyu hafif asidik yapar ve berraklaştırır
                    basePpm += substrateKg * 0.5;
                } else if (selectedSubstrate.id === 'silica_sand') {
                    basePh = 7.5; // Silis kumu nötr/hafif alkalindir
                    basePpm += substrateKg * 0.2;
                }
            }
            const totalFish = Object.values(fishCounts).reduce({
                "AquariumScene.useEffect.totalFish": (a, b)=>a + b
            }["AquariumScene.useEffect.totalFish"], 0);
            // Balıkların biyo-yük ve oksijene etkisi
            baseOxygen = Math.max(3.0, baseOxygen - totalFish * 0.15);
            basePpm += totalFish * 3.5;
            let quality = 'Kristal & Berrak';
            if (totalFish > 10 || basePpm > 60) quality = 'Orta Biyo-Yük';
            if (totalFish > 25 || basePpm > 120) quality = 'Kritik Atık Yükü!';
            setPh(Number(basePh.toFixed(1)));
            setOxygen(Number(baseOxygen.toFixed(1)));
            setPpm(Math.round(basePpm));
            setWaterQuality(quality);
        }
    }["AquariumScene.useEffect"], [
        selectedSubstrate,
        substrateKg,
        fishCounts
    ]);
    const tankBounds = tankData ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...tankData.tank.bounds) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](14, 7, 7);
    const handleHeightCalculated = (height)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.updateGroundLevel(height);
        }
    };
    const handleRemoveSubstrate = ()=>{
        setSelectedSubstrate(null);
        if (fishManagerRef.current) {
            fishManagerRef.current.resetGroundLevel();
        }
    };
    const handleAddFish = (item)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.addSingleFish(item);
            setFishCounts(fishManagerRef.current.getFishCounts());
        }
    };
    const handleRemoveFish = (item)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.removeSingleFish(item.id);
            setFishCounts(fishManagerRef.current.getFishCounts());
        }
    };
    const handleClearSpecies = (item)=>{
        if (fishManagerRef.current) {
            fishManagerRef.current.removeSpecies(item.id);
            setFishCounts(fishManagerRef.current.getFishCounts());
        }
    };
    if (!tankData) return null;
    const volumeLiters = tankData.tank.volumeLiters;
    const totalFishCount = Object.values(fishCounts).reduce((a, b)=>a + b, 0);
    const allCatalogItems = [
        ...tankData.catalog.substrates,
        ...tankData.catalog.fishes || []
    ];
    const searchResults = searchQuery.trim() === '' ? [] : allCatalogItems.filter((item)=>item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#072d4a'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 50,
                    width: '620px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                },
                children: [
                    searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(7, 45, 74, 0.95)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(56, 189, 248, 0.4)',
                            borderRadius: '14px',
                            padding: '10px',
                            marginBottom: '10px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                        },
                        children: searchResults.map((item)=>{
                            const count = fishCounts[item.id] || 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px 14px',
                                    background: 'rgba(56, 189, 248, 0.12)',
                                    borderRadius: '10px',
                                    color: '#e2f1fd'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: '14px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '18px'
                                                },
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AquariumScene.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            item.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '10px',
                                                                    color: '#38bdf8',
                                                                    marginLeft: '6px'
                                                                },
                                                                children: [
                                                                    "(",
                                                                    item.category,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AquariumScene.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 25
                                                            }, this),
                                                            item.category === 'Balık' && count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    background: '#0284c7',
                                                                    padding: '2px 6px',
                                                                    borderRadius: '6px',
                                                                    fontSize: '11px',
                                                                    marginLeft: '8px'
                                                                },
                                                                children: [
                                                                    count,
                                                                    " Adet"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AquariumScene.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '11px',
                                                            color: '#bae6fd'
                                                        },
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AquariumScene.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        children: item.category === 'Zemin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedSubstrate(item);
                                                setSearchQuery('');
                                            },
                                            style: {
                                                background: '#38bdf8',
                                                color: '#072d4a',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '6px 14px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer',
                                                fontSize: '12px'
                                            },
                                            children: "Seç +"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AquariumScene.tsx",
                                            lineNumber: 230,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveFish(item),
                                                    disabled: count === 0,
                                                    style: {
                                                        background: count === 0 ? '#334155' : '#0284c7',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        width: '24px',
                                                        height: '24px',
                                                        cursor: count === 0 ? 'not-allowed' : 'pointer',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AquariumScene.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '13px',
                                                        width: '20px',
                                                        textAlign: 'center',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AquariumScene.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleAddFish(item),
                                                    style: {
                                                        background: '#0284c7',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        width: '24px',
                                                        height: '24px',
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AquariumScene.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 25
                                                }, this),
                                                count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleClearSpecies(item),
                                                    title: "Tümünü Temizle",
                                                    style: {
                                                        background: '#f87171',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        padding: '4px 8px',
                                                        cursor: 'pointer',
                                                        fontSize: '11px',
                                                        marginLeft: '4px'
                                                    },
                                                    children: "🗑️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AquariumScene.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AquariumScene.tsx",
                                            lineNumber: 249,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 199,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(7, 45, 74, 0.88)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(56, 189, 248, 0.45)',
                            borderRadius: '30px',
                            padding: '12px 20px',
                            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '18px'
                                },
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Zemin malzemesi veya balık arayın (silis, karbon, vatoz)...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                style: {
                                    width: '100%',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    outline: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'inherit'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            selectedSubstrate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    borderLeft: '1px solid rgba(56,189,248,0.4)',
                                    paddingLeft: '12px',
                                    whiteSpace: 'nowrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '12px',
                                            color: '#38bdf8'
                                        },
                                        children: [
                                            substrateKg,
                                            "kg"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSubstrateKg((p)=>Math.max(p - 1, 1)),
                                        style: {
                                            background: '#0284c7',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            width: '20px',
                                            height: '20px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        },
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSubstrateKg((p)=>p + 1),
                                        style: {
                                            background: '#0284c7',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            width: '20px',
                                            height: '20px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        },
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRemoveSubstrate,
                                        style: {
                                            background: 'transparent',
                                            color: '#f87171',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '11px',
                                            marginLeft: '4px'
                                        },
                                        children: "Sil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AquariumScene.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 50,
                    background: 'rgba(7, 45, 74, 0.88)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(56, 189, 248, 0.45)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    color: '#e2f1fd',
                    minWidth: '250px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#38bdf8',
                            marginBottom: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        },
                        children: "Akvaryum & Su Değerleri"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Su Hacmi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: [
                                    volumeLiters,
                                    " L"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Aktif Zemin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: selectedSubstrate ? `${selectedSubstrate.name.split(' ')[0]} (${substrateKg}kg)` : 'Yok'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Toplam Balık"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: [
                                    totalFishCount,
                                    " Adet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Su pH Değeri"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#34d399',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: [
                                    pH,
                                    " pH"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Çözünmüş Oksijen ($O_2$)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: [
                                    oxygen,
                                    " mg/L"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Organik Yük (PPM)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: ppm > 100 ? '#f87171' : '#34d399',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: [
                                    ppm,
                                    " PPM"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Biyo-Denge"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: totalFishCount > 25 ? '#f87171' : '#34d399',
                                    fontWeight: 700,
                                    fontSize: '12px'
                                },
                                children: waterQuality
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderTop: '1px solid rgba(56,189,248,0.2)',
                            paddingTop: '6px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bae6fd'
                                },
                                children: "Performans"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8',
                                    fontWeight: 700,
                                    fontFamily: 'monospace'
                                },
                                children: [
                                    fps,
                                    " FPS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AquariumScene.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        7.5
                    ],
                    fov: 55
                },
                onCreated: ({ scene })=>{
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x06395d);
                    scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"](0x06395d, 0.025);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            0,
                            10,
                            3
                        ],
                        intensity: 3.0,
                        color: "#f0f9ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 2.0,
                        color: "#38bdf8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassTankBox, {
                        bounds: tankBounds
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaterSurface, {
                        bounds: tankBounds
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Substrate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tankBounds: tankBounds,
                        substrateConfig: selectedSubstrate,
                        substrateKg: substrateKg,
                        onHeightCalculated: handleHeightCalculated
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlantField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tankBounds: tankBounds
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationController, {
                        tankBounds: tankBounds,
                        onFpsUpdate: setFps,
                        fishManagerRef: fishManagerRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enableDamping: true,
                        dampingFactor: 0.05,
                        minDistance: 3,
                        maxDistance: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/AquariumScene.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AquariumScene.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AquariumScene.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(AquariumScene, "omolmyBeXtEeiCnmlCOk0/fwEbA=");
_c2 = AquariumScene;
function SimulationController({ tankBounds, onFpsUpdate, fishManagerRef }) {
    _s1();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const frameCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFpsUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulationController.useEffect": ()=>{
            if (!fishManagerRef.current) {
                fishManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$FishManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FishManager"](scene, tankBounds);
            }
        }
    }["SimulationController.useEffect"], [
        scene,
        tankBounds,
        fishManagerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "SimulationController.useFrame": ()=>{
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
        }
    }["SimulationController.useFrame"]);
    return null;
}
_s1(SimulationController, "KjlXCp8uOt0WhBsQ/d+epmBALrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = SimulationController;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "WaterSurface");
__turbopack_context__.k.register(_c1, "GlassTankBox");
__turbopack_context__.k.register(_c2, "AquariumScene");
__turbopack_context__.k.register(_c3, "SimulationController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PlantField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlantField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PlantField({ tankBounds, plantsConfig = [] }) {
    // İleride burası config üzerinden gelen bitki modellerini dinamik olarak sahneye dikecek.
    // Şu an için akvaryum tamamen saf ve temiz tutuluyor.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: plantsConfig.map((plant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: plant.position || [
                    0,
                    0,
                    0
                ]
            }, plant.id || index, false, {
                fileName: "[project]/src/components/PlantField.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/PlantField.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = PlantField;
var _c;
__turbopack_context__.k.register(_c, "PlantField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Substrate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Substrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Substrate({ tankBounds, substrateConfig, substrateKg, onHeightCalculated }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseTankBottom = -tankBounds.y / 2;
    const calculatedHeight = !substrateConfig || substrateKg <= 0 ? 0.35 : Math.min(Math.max(substrateKg * 0.04, 0.1), 2.5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Substrate.useEffect": ()=>{
            const absoluteBottomY = baseTankBottom + calculatedHeight;
            onHeightCalculated(absoluteBottomY);
            if (!meshRef.current || !substrateConfig) return;
            const geometry = meshRef.current.geometry;
            const posAttribute = geometry.attributes.position;
            // Doğal, engebeli dalga formülasyonu
            for(let i = 0; i < posAttribute.count; i++){
                const x = posAttribute.getX(i);
                const y = posAttribute.getY(i);
                const wave = Math.sin(x * 0.7) * Math.cos(y * 0.7) * (calculatedHeight * 0.35);
                posAttribute.setZ(i, wave);
            }
            posAttribute.needsUpdate = true;
            geometry.computeVertexNormals();
        }
    }["Substrate.useEffect"], [
        calculatedHeight,
        substrateConfig,
        baseTankBottom,
        onHeightCalculated
    ]);
    if (!substrateConfig || substrateKg <= 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            baseTankBottom,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: meshRef,
            rotation: [
                -Math.PI / 2,
                0,
                0
            ],
            position: [
                0,
                calculatedHeight / 2,
                0
            ],
            receiveShadow: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                    args: [
                        tankBounds.x,
                        tankBounds.z,
                        64,
                        64
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/Substrate.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: substrateConfig.color,
                    roughness: substrateConfig.roughness,
                    metalness: substrateConfig.metalness,
                    flatShading: false,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                }, void 0, false, {
                    fileName: "[project]/src/components/Substrate.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Substrate.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Substrate.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Substrate, "WbwlN+77PjfHYgA6mOfbWgyOHBE=");
_c = Substrate;
var _c;
__turbopack_context__.k.register(_c, "Substrate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/FishManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FishManager",
    ()=>FishManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/utils/SkeletonUtils.js [app-client] (ecmascript)");
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
    eyeIrisMaterial;
    pupilMaterial;
    constructor(scene, tankBounds){
        this.scene = scene;
        this.bounds = tankBounds;
        const defaultGround = -tankBounds.y / 2 + 0.35;
        this.targetGroundLevel = defaultGround;
        this.currentGroundLevel = defaultGround;
        this.textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
        this.eyeIrisMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x734d14
        });
        this.pupilMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x010101
        });
        this.initLoader();
    }
    initLoader() {
        const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRACOLoader"]();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        this.loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        this.loader.setDRACOLoader(dracoLoader);
    }
    updateGroundLevel(newGroundY) {
        this.targetGroundLevel = newGroundY + 0.25;
    }
    resetGroundLevel() {
        const defaultGround = -this.bounds.y / 2 + 0.35;
        this.targetGroundLevel = defaultGround;
        this.currentGroundLevel = defaultGround;
        for (const fish of this.fishList){
            if (fish.config.behavior === 'bottom_dweller') {
                fish.preferredDepth = defaultGround;
                fish.model.position.y = defaultGround;
            }
        }
    }
    // Belirli bir türden 1 adet ekler
    addSingleFish(config) {
        if (this.templates.has(config.id)) {
            this.spawnFish(this.templates.get(config.id), 1);
            return;
        }
        this.loadAndSpawn(config, 1);
    }
    // Belirli bir türden 1 adet çıkarır
    removeSingleFish(configId) {
        const index = this.fishList.findIndex((f)=>f.config.id === configId);
        if (index !== -1) {
            const fish = this.fishList.splice(index, 1)[0];
            this.scene.remove(fish.model);
            return true;
        }
        return false;
    }
    // Belirli bir türün tamamını siler
    removeSpecies(configId) {
        const remaining = this.fishList.filter((f)=>f.config.id !== configId);
        const toRemove = this.fishList.filter((f)=>f.config.id === configId);
        toRemove.forEach((f)=>this.scene.remove(f.model));
        this.fishList = remaining;
    }
    clearAllFish() {
        while(this.fishList.length > 0){
            const fish = this.fishList.pop();
            if (fish) this.scene.remove(fish.model);
        }
    }
    loadAndSpawn(config, count) {
        const colorHex = config.appearance?.color || '#8c928d';
        const fallbackMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colorHex),
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        if (config.texturePath) {
            this.textureLoader.load(config.texturePath, (texture)=>{
                texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                texture.needsUpdate = true;
                const texMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    map: texture,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                });
                this.loadModelGLTF(config, texMaterial, count);
            }, undefined, ()=>this.loadModelGLTF(config, fallbackMaterial, count));
        } else {
            this.loadModelGLTF(config, fallbackMaterial, count);
        }
    }
    loadModelGLTF(config, material, count) {
        this.loader.load(config.modelPath, (gltf)=>{
            const model = gltf.scene;
            model.traverse((child)=>{
                if (child.isMesh) {
                    const mesh = child;
                    const geometry = mesh.geometry;
                    const lowerName = mesh.name.toLowerCase();
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
                        geometry.setAttribute('uv', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
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
                config
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
            const fishClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](model);
            let tail;
            let finLBig;
            let finRBig;
            fishClone.traverse((child)=>{
                const n = child.name.toLowerCase();
                if (n.includes('tail')) tail = child;
                if (n.includes('fin_l_big') || n.includes('fin') && n.includes('l') && n.includes('big')) finLBig = child;
                if (n.includes('fin_r_big') || n.includes('fin') && n.includes('r') && n.includes('big')) finRBig = child;
            });
            const isBottomDweller = config.behavior === 'bottom_dweller';
            const initialY = isBottomDweller ? this.currentGroundLevel : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxY * 0.4, maxY * 0.4);
            fishClone.position.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxX + 0.5, maxX - 0.5), initialY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(-maxZ + 0.5, maxZ - 0.5));
            const speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(config.physics.minSpeed, config.physics.maxSpeed);
            const velocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1), isBottomDweller ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.02), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(1)).normalize().multiplyScalar(speed);
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
    update(elapsedTime) {
        this.currentGroundLevel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(this.currentGroundLevel, this.targetGroundLevel, 0.08);
        const margin = 0.6;
        const minX = -this.bounds.x / 2 + margin;
        const maxX = this.bounds.x / 2 - margin;
        const minY = -this.bounds.y / 2 + margin;
        const maxY = this.bounds.y / 2 - margin;
        const minZ = -this.bounds.z / 2 + margin;
        const maxZ = this.bounds.z / 2 - margin;
        for(let i = 0; i < this.fishList.length; i++){
            const fish = this.fishList[i];
            const cycle = elapsedTime * 8.0 + i * 1.2;
            if (fish.tail) fish.tail.rotation.y = Math.sin(cycle) * 0.4;
            if (fish.finLBig) fish.finLBig.rotation.z = Math.cos(cycle) * 0.3;
            if (fish.finRBig) fish.finRBig.rotation.z = -Math.cos(cycle) * 0.3;
            const pos = fish.model.position;
            const phys = fish.config.physics;
            const isBottomDweller = fish.config.behavior === 'bottom_dweller';
            if (isBottomDweller) {
                fish.preferredDepth = this.currentGroundLevel;
                fish.targetVelocity.y = (this.currentGroundLevel - pos.y) * 0.15;
            } else {
                fish.timer++;
                if (fish.timer > phys.diveInterval) {
                    fish.preferredDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(minY + 0.3, maxY - 0.3);
                    fish.timer = 0;
                }
                const depthDiff = fish.preferredDepth - pos.y;
                fish.targetVelocity.y = depthDiff * phys.verticalFreedom;
            }
            if (Math.random() < 0.015) {
                fish.targetVelocity.x += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.01);
                fish.targetVelocity.z += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(0.01);
            }
            const buffer = 1.3;
            const steer = 0.003;
            if (pos.x > maxX - buffer) fish.targetVelocity.x -= steer;
            if (pos.x < minX + buffer) fish.targetVelocity.x += steer;
            if (!isBottomDweller) {
                if (pos.y > maxY - buffer) fish.targetVelocity.y -= steer;
                if (pos.y < minY + buffer) fish.targetVelocity.y += steer;
            }
            if (pos.z > maxZ - buffer) fish.targetVelocity.z -= steer;
            if (pos.z < minZ + buffer) fish.targetVelocity.z += steer;
            fish.velocity.lerp(fish.targetVelocity, phys.turnSpeed);
            fish.velocity.clampLength(fish.speed * 0.5, fish.speed * 1.2);
            pos.add(fish.velocity);
            if (pos.x > maxX) {
                pos.x = maxX;
                fish.velocity.x *= -0.2;
            }
            if (pos.x < minX) {
                pos.x = minX;
                fish.velocity.x *= -0.2;
            }
            if (isBottomDweller) {
                pos.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(pos.y, this.currentGroundLevel, 0.2);
            } else {
                if (pos.y > maxY) {
                    pos.y = maxY;
                    fish.velocity.y *= -0.2;
                }
                if (pos.y < minY) {
                    pos.y = minY;
                    fish.velocity.y *= -0.2;
                }
            }
            if (pos.z > maxZ) {
                pos.z = maxZ;
                fish.velocity.z *= -0.2;
            }
            if (pos.z < minZ) {
                pos.z = minZ;
                fish.velocity.z *= -0.2;
            }
            if (fish.velocity.lengthSq() > 0.00001) {
                const targetPos = pos.clone().add(fish.velocity);
                if (isBottomDweller) targetPos.y = pos.y;
                const currentQuaternion = fish.model.quaternion.clone();
                fish.model.lookAt(targetPos);
                const targetQuaternion = fish.model.quaternion.clone();
                fish.model.quaternion.slerpQuaternions(currentQuaternion, targetQuaternion, 0.15);
            }
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0xozeznskphwx._.js.map