import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as coreLayers, m as cn } from "./router-BQhLBTX4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/architecture-explorer-BrIyxDFG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchitectureExplorer() {
	const [active, setActive] = (0, import_react.useState)(coreLayers[1].id);
	const layer = coreLayers.find((l) => l.id === active) ?? coreLayers[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-col gap-2 lg:col-span-5",
			children: coreLayers.map((item) => {
				const on = item.id === active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(item.id),
					className: cn("w-full rounded-lg px-4 py-4 text-left transition-[background-color,box-shadow] duration-150", on ? "bg-surface shadow-[0_0_0_1px_rgb(232_93_4_/_0.4)]" : "hover:bg-surface"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-champagne",
							children: item.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg text-ink",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-stone",
							children: item.summary
						})
					]
				}) }, item.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08),0_24px_48px_-28px_rgb(23_20_17_/_0.28)] lg:col-span-7 lg:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mb-10 hidden h-40 lg:block",
					children: coreLayers.map((item, i) => {
						const on = item.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(item.id),
							className: cn("absolute right-0 left-0 flex h-[3.25rem] items-center justify-between rounded-lg px-4 text-left transition-all duration-300", on ? "bg-[#fffaf2] shadow-[0_0_0_1px_rgb(232_93_4_/_0.45),0_16px_28px_-16px_rgb(232_93_4_/_0.7)]" : "bg-[#efe8dc] shadow-[0_0_0_1px_rgb(23_20_17_/_0.06)] hover:bg-[#f4eee4]"),
							style: {
								top: `${i * 1.35}rem`,
								transform: `translateY(${on ? "-0.35rem" : "0"})`,
								zIndex: on ? 20 : i + 1
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-[0.14em] text-champagne",
								children: item.kicker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm", on ? "text-ink" : "text-stone"),
								children: item.title
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] tracking-[0.16em] text-champagne uppercase",
					children: ["Layer ", layer.kicker]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-3xl text-ink",
					children: layer.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-stone",
					children: layer.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: layer.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-px w-6 shrink-0 bg-champagne" }), p]
					}, p))
				})
			]
		})]
	});
}
//#endregion
export { ArchitectureExplorer as t };
