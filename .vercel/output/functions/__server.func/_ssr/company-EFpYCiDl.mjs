import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as leadership, i as brand, m as cn, n as useWaitlist, p as Button } from "./router-BQhLBTX4.mjs";
import { t as Badge } from "./badge-Bu2wuZtw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-EFpYCiDl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var W = 1100;
var H = 780;
var CX = 550;
var CY = 390;
var R = 236;
var ACCRA_PT = {
	lon: -.19,
	lat: 5.6
};
function rad(d) {
	return d * Math.PI / 180;
}
function project(lon, lat) {
	const φ = rad(lat);
	const λ = rad(lon);
	const φ0 = rad(ACCRA_PT.lat);
	const dλ = λ - rad(ACCRA_PT.lon);
	const cosc = Math.min(1, Math.max(-1, Math.sin(φ0) * Math.sin(φ) + Math.cos(φ0) * Math.cos(φ) * Math.cos(dλ)));
	const c = Math.acos(cosc);
	const k = Math.abs(c) < 1e-8 ? 1 : c / Math.sin(c);
	return {
		x: k * Math.cos(φ) * Math.sin(dλ),
		y: k * (Math.cos(φ0) * Math.sin(φ) - Math.sin(φ0) * Math.cos(φ) * Math.cos(dλ)),
		c
	};
}
var AFRICA = [
	{
		lon: -5.6,
		lat: 35.8
	},
	{
		lon: -2.2,
		lat: 35.2
	},
	{
		lon: 1.2,
		lat: 36.5
	},
	{
		lon: 6.2,
		lat: 37
	},
	{
		lon: 10.3,
		lat: 36.9
	},
	{
		lon: 11,
		lat: 33.2
	},
	{
		lon: 15.5,
		lat: 32.3
	},
	{
		lon: 20,
		lat: 32.3
	},
	{
		lon: 25,
		lat: 31.8
	},
	{
		lon: 29.9,
		lat: 31.4
	},
	{
		lon: 32.6,
		lat: 31.2
	},
	{
		lon: 34,
		lat: 27.6
	},
	{
		lon: 36.6,
		lat: 23.2
	},
	{
		lon: 38.6,
		lat: 18
	},
	{
		lon: 42.4,
		lat: 15.2
	},
	{
		lon: 43.3,
		lat: 12.6
	},
	{
		lon: 48.2,
		lat: 11.3
	},
	{
		lon: 51.2,
		lat: 11.8
	},
	{
		lon: 50.7,
		lat: 8.2
	},
	{
		lon: 47.4,
		lat: 4.4
	},
	{
		lon: 43.6,
		lat: 1.2
	},
	{
		lon: 41.8,
		lat: -1.6
	},
	{
		lon: 40.9,
		lat: -2.3
	},
	{
		lon: 40.4,
		lat: -5
	},
	{
		lon: 39.4,
		lat: -8.5
	},
	{
		lon: 40.4,
		lat: -14.4
	},
	{
		lon: 36.8,
		lat: -17.6
	},
	{
		lon: 35,
		lat: -22.2
	},
	{
		lon: 32.6,
		lat: -26
	},
	{
		lon: 29.2,
		lat: -31.6
	},
	{
		lon: 26.4,
		lat: -33.8
	},
	{
		lon: 22.2,
		lat: -34.3
	},
	{
		lon: 18.4,
		lat: -34.8
	},
	{
		lon: 18.3,
		lat: -31.6
	},
	{
		lon: 16.4,
		lat: -28.6
	},
	{
		lon: 14.5,
		lat: -22.8
	},
	{
		lon: 12.4,
		lat: -17
	},
	{
		lon: 11.8,
		lat: -15
	},
	{
		lon: 13.5,
		lat: -9.8
	},
	{
		lon: 12.3,
		lat: -6.2
	},
	{
		lon: 9.8,
		lat: .4
	},
	{
		lon: 8.8,
		lat: 4.6
	},
	{
		lon: 6.6,
		lat: 4.3
	},
	{
		lon: 3.5,
		lat: 6.4
	},
	{
		lon: 1.2,
		lat: 6.2
	},
	{
		lon: -.2,
		lat: 5.5
	},
	{
		lon: -3.1,
		lat: 4.9
	},
	{
		lon: -7.6,
		lat: 4.4
	},
	{
		lon: -10,
		lat: 6.1
	},
	{
		lon: -13.7,
		lat: 9.4
	},
	{
		lon: -16.6,
		lat: 12.4
	},
	{
		lon: -17.5,
		lat: 14.7
	},
	{
		lon: -16.4,
		lat: 19.8
	},
	{
		lon: -16,
		lat: 23.6
	},
	{
		lon: -14.5,
		lat: 26.6
	},
	{
		lon: -11.8,
		lat: 28
	},
	{
		lon: -9.8,
		lat: 31.4
	},
	{
		lon: -8,
		lat: 33.5
	},
	{
		lon: -6.3,
		lat: 34.9
	}
];
var MADAGASCAR = [
	{
		lon: 49.2,
		lat: -12
	},
	{
		lon: 50.4,
		lat: -15.4
	},
	{
		lon: 47.7,
		lat: -24.8
	},
	{
		lon: 45.2,
		lat: -25.6
	},
	{
		lon: 43.4,
		lat: -22
	},
	{
		lon: 44,
		lat: -17.4
	},
	{
		lon: 47.2,
		lat: -13.2
	}
];
var LANDS = [
	[
		{
			lon: -166,
			lat: 66
		},
		{
			lon: -141,
			lat: 60
		},
		{
			lon: -130,
			lat: 55
		},
		{
			lon: -124,
			lat: 48
		},
		{
			lon: -124.4,
			lat: 40.4
		},
		{
			lon: -117.2,
			lat: 32.6
		},
		{
			lon: -110.2,
			lat: 24.2
		},
		{
			lon: -97.4,
			lat: 25.8
		},
		{
			lon: -90.2,
			lat: 29
		},
		{
			lon: -84,
			lat: 22.2
		},
		{
			lon: -80.8,
			lat: 25.2
		},
		{
			lon: -81.4,
			lat: 31.2
		},
		{
			lon: -76,
			lat: 35.4
		},
		{
			lon: -74,
			lat: 40.4
		},
		{
			lon: -69.8,
			lat: 41.8
		},
		{
			lon: -66,
			lat: 44.8
		},
		{
			lon: -60,
			lat: 47
		},
		{
			lon: -56,
			lat: 51.2
		},
		{
			lon: -61.8,
			lat: 58.4
		},
		{
			lon: -78,
			lat: 62.4
		},
		{
			lon: -95,
			lat: 68.2
		},
		{
			lon: -120,
			lat: 69.4
		},
		{
			lon: -141,
			lat: 70
		},
		{
			lon: -165,
			lat: 68
		}
	],
	[
		{
			lon: -80.8,
			lat: 8.4
		},
		{
			lon: -70.2,
			lat: 11.8
		},
		{
			lon: -60.2,
			lat: 8.4
		},
		{
			lon: -51.2,
			lat: 4.2
		},
		{
			lon: -34.8,
			lat: -5.2
		},
		{
			lon: -38.4,
			lat: -15.2
		},
		{
			lon: -40.6,
			lat: -22.2
		},
		{
			lon: -48,
			lat: -28.4
		},
		{
			lon: -53.6,
			lat: -34.6
		},
		{
			lon: -67.6,
			lat: -55
		},
		{
			lon: -71.4,
			lat: -51.2
		},
		{
			lon: -73.4,
			lat: -42
		},
		{
			lon: -76.2,
			lat: -14.6
		},
		{
			lon: -81.2,
			lat: -4.8
		}
	],
	[
		{
			lon: -9.4,
			lat: 43
		},
		{
			lon: -8.8,
			lat: 37
		},
		{
			lon: -5.6,
			lat: 36
		},
		{
			lon: -1.2,
			lat: 43.4
		},
		{
			lon: 3.2,
			lat: 42.4
		},
		{
			lon: 9.2,
			lat: 44.2
		},
		{
			lon: 12.4,
			lat: 41.6
		},
		{
			lon: 18.4,
			lat: 40.4
		},
		{
			lon: 28.2,
			lat: 41
		},
		{
			lon: 29.2,
			lat: 45.2
		},
		{
			lon: 23.8,
			lat: 45
		},
		{
			lon: 13.6,
			lat: 46.2
		},
		{
			lon: 12.2,
			lat: 54.2
		},
		{
			lon: 8.2,
			lat: 55.4
		},
		{
			lon: 4.2,
			lat: 52.2
		},
		{
			lon: -1.6,
			lat: 50.6
		},
		{
			lon: -5.2,
			lat: 48.4
		}
	],
	[
		{
			lon: -10.4,
			lat: 51.4
		},
		{
			lon: -6.2,
			lat: 52
		},
		{
			lon: -5.4,
			lat: 50
		},
		{
			lon: -1.8,
			lat: 50.6
		},
		{
			lon: 1.6,
			lat: 52.6
		},
		{
			lon: -1.8,
			lat: 55.8
		},
		{
			lon: -4.8,
			lat: 55.8
		},
		{
			lon: -6,
			lat: 58.6
		},
		{
			lon: -3,
			lat: 58.6
		},
		{
			lon: -5,
			lat: 56.2
		},
		{
			lon: -7.4,
			lat: 57.6
		},
		{
			lon: -7.6,
			lat: 54.2
		},
		{
			lon: -10,
			lat: 54.4
		}
	],
	[
		{
			lon: 26.4,
			lat: 40.8
		},
		{
			lon: 36.2,
			lat: 36.2
		},
		{
			lon: 44.2,
			lat: 40
		},
		{
			lon: 48.4,
			lat: 30
		},
		{
			lon: 56.2,
			lat: 27
		},
		{
			lon: 60.2,
			lat: 25.2
		},
		{
			lon: 69.4,
			lat: 22.6
		},
		{
			lon: 77.4,
			lat: 8.2
		},
		{
			lon: 80.2,
			lat: 6
		},
		{
			lon: 81.4,
			lat: 15.8
		},
		{
			lon: 94.2,
			lat: 16
		},
		{
			lon: 98.2,
			lat: 9.2
		},
		{
			lon: 104.2,
			lat: 1.4
		},
		{
			lon: 109.2,
			lat: 1.6
		},
		{
			lon: 109,
			lat: 13.8
		},
		{
			lon: 119.2,
			lat: 24.2
		},
		{
			lon: 122,
			lat: 31.2
		},
		{
			lon: 129.4,
			lat: 35.2
		},
		{
			lon: 140.8,
			lat: 37.2
		},
		{
			lon: 141.8,
			lat: 45.4
		},
		{
			lon: 130,
			lat: 50.2
		},
		{
			lon: 110,
			lat: 55
		},
		{
			lon: 90,
			lat: 47.2
		},
		{
			lon: 74.6,
			lat: 40.2
		},
		{
			lon: 66.8,
			lat: 45.2
		},
		{
			lon: 48.4,
			lat: 41.6
		},
		{
			lon: 40,
			lat: 43.8
		}
	],
	[
		{
			lon: 114.2,
			lat: -22
		},
		{
			lon: 126.2,
			lat: -14
		},
		{
			lon: 136.4,
			lat: -12.2
		},
		{
			lon: 145.6,
			lat: -15
		},
		{
			lon: 153.2,
			lat: -25.2
		},
		{
			lon: 150.4,
			lat: -37.2
		},
		{
			lon: 139.6,
			lat: -38.2
		},
		{
			lon: 115.4,
			lat: -34.8
		}
	]
];
var ORIGINS = [
	{
		id: "nyc",
		name: "New York",
		pt: {
			lon: -74,
			lat: 40.7
		},
		side: "w"
	},
	{
		id: "tor",
		name: "Toronto",
		pt: {
			lon: -79.4,
			lat: 43.7
		},
		side: "n"
	},
	{
		id: "sao",
		name: "São Paulo",
		pt: {
			lon: -46.6,
			lat: -23.6
		},
		side: "s"
	},
	{
		id: "lon",
		name: "London",
		pt: {
			lon: -.12,
			lat: 51.5
		},
		side: "n"
	},
	{
		id: "par",
		name: "Paris",
		pt: {
			lon: 2.35,
			lat: 48.9
		},
		side: "e"
	},
	{
		id: "dxb",
		name: "Dubai",
		pt: {
			lon: 55.3,
			lat: 25.2
		},
		side: "n"
	},
	{
		id: "mum",
		name: "Mumbai",
		pt: {
			lon: 72.9,
			lat: 19.1
		},
		side: "e"
	},
	{
		id: "sin",
		name: "Singapore",
		pt: {
			lon: 103.8,
			lat: 1.35
		},
		side: "e"
	},
	{
		id: "syd",
		name: "Sydney",
		pt: {
			lon: 151.2,
			lat: -33.9
		},
		side: "s"
	}
];
var AFRICA_CITIES = [
	{
		id: "accra",
		name: "Accra",
		pt: ACCRA_PT,
		hub: true
	},
	{
		id: "dakar",
		name: "Dakar",
		pt: {
			lon: -17.5,
			lat: 14.7
		},
		hub: false
	},
	{
		id: "nbo",
		name: "Nairobi",
		pt: {
			lon: 36.82,
			lat: -1.29
		},
		hub: false
	},
	{
		id: "jnb",
		name: "Johannesburg",
		pt: {
			lon: 28.05,
			lat: -26.2
		},
		hub: false
	}
];
function makeXy(scale) {
	return (pt) => {
		const p = project(pt.lon, pt.lat);
		return {
			x: Math.round((CX + p.x * scale) * 10) / 10,
			y: Math.round((CY - p.y * scale) * 10) / 10
		};
	};
}
function smoothPath(pts) {
	const n = pts.length;
	if (n < 3) return "";
	const get = (i) => pts[(i + n) % n];
	let d = `M${get(0).x.toFixed(1)} ${get(0).y.toFixed(1)}`;
	for (let i = 0; i < n; i++) {
		const p0 = get(i - 1);
		const p1 = get(i);
		const p2 = get(i + 1);
		const p3 = get(i + 2);
		d += `C${(p1.x + (p2.x - p0.x) / 6).toFixed(1)} ${(p1.y + (p2.y - p0.y) / 6).toFixed(1)} ${(p2.x - (p3.x - p1.x) / 6).toFixed(1)} ${(p2.y - (p3.y - p1.y) / 6).toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
	}
	return `${d}Z`;
}
var labelClass = {
	n: "-translate-x-1/2 -translate-y-[calc(100%+10px)]",
	s: "-translate-x-1/2 translate-y-[10px]",
	e: "translate-x-[10px] -translate-y-1/2",
	w: "-translate-x-[calc(100%+10px)] -translate-y-1/2"
};
function OriginationMap({ className }) {
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const [active, setActive] = (0, import_react.useState)(0);
	const [hover, setHover] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (hover) return;
		const id = window.setInterval(() => setActive((n) => (n + 1) % ORIGINS.length), 2800);
		return () => window.clearInterval(id);
	}, [hover]);
	const current = hover ? ORIGINS.find((o) => o.id === hover) ?? ORIGINS[active] : ORIGINS[active];
	const scale = (0, import_react.useMemo)(() => {
		const maxC = Math.max(...ORIGINS.map((o) => project(o.pt.lon, o.pt.lat).c), ...AFRICA.map((p) => project(p.lon, p.lat).c), .9);
		return R * .84 / maxC;
	}, []);
	const xy = (0, import_react.useMemo)(() => makeXy(scale), [scale]);
	const accra = xy(ACCRA_PT);
	const landPaths = (0, import_react.useMemo)(() => LANDS.map((land) => smoothPath(land.map(xy))), [xy]);
	const africaPath = (0, import_react.useMemo)(() => smoothPath(AFRICA.map(xy)), [xy]);
	const madagascarPath = (0, import_react.useMemo)(() => smoothPath(MADAGASCAR.map(xy)), [xy]);
	const origins = (0, import_react.useMemo)(() => ORIGINS.map((o) => ({
		...o,
		p: xy(o.pt)
	})), [xy]);
	const cities = (0, import_react.useMemo)(() => AFRICA_CITIES.map((c) => ({
		...c,
		p: xy(c.pt)
	})), [xy]);
	const rings = [
		.28,
		.52,
		.76,
		1
	].map((t) => R * t);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl bg-[#f3efe6] shadow-[0_0_0_1px_rgb(23_20_17_/_0.08),0_24px_48px_-28px_rgb(23_20_17_/_0.35)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grain relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${W} ${H}`,
					className: "h-auto w-full",
					role: "img",
					"aria-label": "Money originating in cities around the world and terminating in Africa",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
								id: `${uid}-disk`,
								cx: "42%",
								cy: "36%",
								r: "68%",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#fffaf2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "52%",
										stopColor: "#f4efe4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#e4d9c6"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
								id: `${uid}-africa`,
								cx: "48%",
								cy: "42%",
								r: "62%",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#f08c3a",
										stopOpacity: "0.55"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "55%",
										stopColor: "#e85d04",
										stopOpacity: "0.38"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#c24c03",
										stopOpacity: "0.22"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
								id: `${uid}-sheen`,
								cx: "36%",
								cy: "30%",
								r: "72%",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#ffffff",
										stopOpacity: "0.38"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "28%",
										stopColor: "#ffffff",
										stopOpacity: "0.08"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "70%",
										stopColor: "#171411",
										stopOpacity: "0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#171411",
										stopOpacity: "0.1"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
								id: `${uid}-glow`,
								x: "-40%",
								y: "-40%",
								width: "180%",
								height: "180%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "3.2" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
								id: `${uid}-clip`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: CX,
									cy: CY,
									r: R
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: CX,
							cy: CY,
							r: 254,
							fill: "none",
							stroke: "#171411",
							strokeOpacity: "0.06",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: CX,
							cy: CY,
							r: R,
							fill: `url(#${uid}-disk)`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: CX,
							cy: CY,
							r: R,
							fill: "none",
							stroke: "#171411",
							strokeOpacity: "0.14",
							strokeWidth: "1.15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							clipPath: `url(#${uid}-clip)`,
							children: [
								rings.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: CX,
									cy: CY,
									r,
									fill: "none",
									stroke: "#171411",
									strokeOpacity: "0.07",
									strokeWidth: "0.8"
								}, r)),
								landPaths.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d,
									fill: "#171411",
									fillOpacity: "0.07"
								}, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: africaPath,
									fill: `url(#${uid}-africa)`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: africaPath,
									fill: "none",
									stroke: "#e85d04",
									strokeOpacity: "0.85",
									strokeWidth: "1.35"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: madagascarPath,
									fill: "#e85d04",
									fillOpacity: "0.32"
								}),
								cities.filter((c) => !c.hub).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: accra.x,
									y1: accra.y,
									x2: c.p.x,
									y2: c.p.y,
									stroke: "#e85d04",
									strokeOpacity: "0.28",
									strokeWidth: "1"
								}, `spoke-${c.id}`)),
								origins.map((o) => {
									const on = o.id === current.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: o.p.x,
										y1: o.p.y,
										x2: accra.x,
										y2: accra.y,
										stroke: "#e85d04",
										strokeWidth: "10",
										strokeOpacity: "0.16",
										strokeLinecap: "round",
										filter: `url(#${uid}-glow)`
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: o.p.x,
										y1: o.p.y,
										x2: accra.x,
										y2: accra.y,
										stroke: "#e85d04",
										strokeWidth: on ? 1.7 : 1,
										strokeOpacity: on ? .95 : .22,
										strokeLinecap: "round"
									})] }, o.id);
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: CX,
									cy: CY,
									r: R,
									fill: `url(#${uid}-sheen)`
								})
							]
						}),
						origins.map((o) => {
							const on = o.id === current.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								onMouseEnter: () => setHover(o.id),
								onMouseLeave: () => setHover(null),
								className: "cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: o.p.x,
										cy: o.p.y,
										r: "14",
										fill: "transparent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: o.p.x,
										cy: o.p.y,
										r: on ? 4.2 : 2.8,
										fill: on ? "#e85d04" : "#171411",
										fillOpacity: on ? 1 : .55
									}),
									on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: o.p.x,
										cy: o.p.y,
										r: "8",
										fill: "none",
										stroke: "#e85d04",
										strokeOpacity: "0.45",
										strokeWidth: "1"
									}) : null
								]
							}, `dot-${o.id}`);
						}),
						cities.filter((c) => !c.hub).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: c.p.x,
							cy: c.p.y,
							r: "2.4",
							fill: "#e85d04",
							fillOpacity: "0.9"
						}, c.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: accra.x,
							cy: accra.y,
							r: "22",
							fill: "#e85d04",
							fillOpacity: "0.1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: accra.x,
							cy: accra.y,
							r: "7",
							fill: "#e85d04",
							fillOpacity: "0.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: accra.x,
							cy: accra.y,
							r: "4.4",
							fill: "#e85d04"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: accra.x,
							cy: accra.y,
							r: "1.8",
							fill: "#fffaf2"
						}),
						origins.map((o) => o.id === current.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: "3.1",
							fill: "#fffaf2",
							stroke: "#e85d04",
							strokeWidth: "1.3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
								dur: "2.6s",
								repeatCount: "indefinite",
								rotate: "auto",
								keyTimes: "0;1",
								calcMode: "spline",
								keySplines: "0.22 1 0.36 1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mpath", { href: `#${uid}-live` })
							})
						}, `p-${o.id}`) : null),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							id: `${uid}-live`,
							d: `M${origins.find((o) => o.id === current.id)?.p.x} ${origins.find((o) => o.id === current.id)?.p.y} L${accra.x} ${accra.y}`,
							fill: "none"
						})
					]
				}),
				origins.map((o) => {
					const on = o.id === current.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onMouseEnter: () => setHover(o.id),
						onMouseLeave: () => setHover(null),
						onFocus: () => setHover(o.id),
						onBlur: () => setHover(null),
						className: cn("absolute hidden rounded-full px-2.5 py-0.5 text-[11px] tracking-[0.04em] transition-colors md:block", labelClass[o.side], on ? "bg-champagne text-bone shadow-[0_6px_18px_-8px_rgb(232_93_4_/_0.8)]" : "bg-[#fffaf2]/90 text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] backdrop-blur-sm hover:text-champagne"),
						style: {
							left: `${o.p.x / W * 100}%`,
							top: `${o.p.y / H * 100}%`
						},
						children: o.name
					}, `lbl-${o.id}`);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute hidden font-display text-[13px] text-champagne italic md:block",
					style: {
						left: `${accra.x / W * 100}%`,
						top: `${accra.y / H * 100}%`,
						transform: "translate(14px, -8px)"
					},
					children: "Accra"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "relative flex flex-col gap-1 border-t border-line bg-[#fffaf2]/70 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] tracking-[0.16em] text-champagne uppercase",
				children: [current.name, " → Accra → Africa"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-stone",
				children: "Origination worldwide. Termination on African rails."
			})]
		})]
	});
}
function CompanyPage() {
	const openWaitlist = useWaitlist((s) => s.openWith);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden pt-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/accra-coast.jpg",
					alt: "Accra coastline at dusk",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-5 py-28 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Company" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone",
							children: "Named for a kingdom. Built as a house."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-bone-2",
							children: "Cush was an African civilisation that minted, traded, and settled on its own terms. Cush is a payments and core-banking house for the same idea, now."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-champagne uppercase",
						children: "The argument"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-ink",
						children: "Africa should not rent its rails."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-base text-stone md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For thirty years the continent’s money has travelled on other people’s pipes — correspondent banks, card schemes, cores designed for London and Frankfurt and bolted onto Accra as an afterthought. The fees are the symptom. The architecture is the disease." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cush starts the other way. An immutable ledger. Agentic orchestration. PAPSS, GHIPSS, and mobile money as first-class citizens. Then a remittance that a family in London can actually use, so the core is never allowed to become an abstraction." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cush Payments is how the diaspora feels it. Cush Core is how banks, PSPs, fintechs, and governments own it. Two products. One house." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "Origination"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl text-ink",
					children: "From all over the world. Terminating in Africa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base text-stone",
					children: "The diaspora starts the transfer wherever they live. Cush settles it on African rails — Accra first, then the rest of the continent."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginationMap, { className: "mt-10" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "Leadership"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ink",
					children: "People who have already sat in the rooms that matter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2",
					children: leadership.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-14 items-center justify-center rounded-full bg-paper font-display text-lg text-champagne shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
									children: person.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg text-ink",
									children: person.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-stone",
									children: [
										person.role,
										" · ",
										person.years
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-stone",
								children: person.bio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: person.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full px-2.5 py-1 text-[11px] text-stone shadow-[0_0_0_1px_rgb(23_20_17_/_0.1)]",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: person.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-flex items-center gap-1 text-sm text-champagne",
								children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						]
					}, person.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-ink",
						children: "Write to us."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-stone",
						children: "Founders, licensing, and business — one inbox. The waitlist is the fastest door."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: () => openWaitlist("sender"),
						children: "Join the waitlist"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "self-center text-base break-all text-ink md:justify-self-end md:text-lg",
					href: `mailto:${brand.email}`,
					children: brand.email
				})]
			})
		})
	] });
}
//#endregion
export { CompanyPage as component };
