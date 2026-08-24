import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as rails, n as useWaitlist, o as coreModules, p as Button } from "./router-BQhLBTX4.mjs";
import { t as Badge } from "./badge-Bu2wuZtw.mjs";
import { t as ArchitectureExplorer } from "./architecture-explorer-BrIyxDFG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/core-DDzFEO9X.js
var import_jsx_runtime = require_jsx_runtime();
function CorePage() {
	const openWaitlist = useWaitlist((s) => s.openWith);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[80svh] overflow-hidden pt-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/core-hall.jpg",
					alt: "Architectural hall of stone and brass",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Cush Core" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-4xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone",
							children: "The operating system African money was missing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-bone-2",
							children: "A production-grade, AI-native core banking and payments platform. Licensed to banks, PSPs, fintechs, and governments. The same stack that powers Cush Payments."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => openWaitlist("institution"),
								children: "Talk to licensing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "onPhoto",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/payments",
									children: "See it running as Payments"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8",
				children: [
					{
						k: "Ready for production",
						v: "Cush Payments is the first product on this core — opening with the private beta."
					},
					{
						k: "~$1 / customer / month",
						v: "Engineered for African unit economics, not European core licensing maths."
					},
					{
						k: "Multi-entity by design",
						v: "UK Ltd, Ghana Ltd, US subsidiary — the legal map a real payments group needs."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-ink",
					children: s.k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-stone",
					children: s.v
				})] }, s.k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "Stack"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl text-ink",
					children: "Four layers. Nothing bolted on."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-stone",
					children: "Most African institutions are stitching a European core to a payments hub to a wallet vendor. Cush Core is one system of record from posting to PAPSS."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureExplorer, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-champagne uppercase",
						children: "Catalogue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-ink",
						children: "What you can run on it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: coreModules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-paper p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg text-ink",
								children: m.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-stone",
								children: m.body
							})]
						}, m.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "Connectivity"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl text-ink",
					children: "Western rails on the way in. African rails on the way out."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-4",
					children: rails.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-surface px-4 py-4 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ash",
							children: r.region
						})]
					}, r.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/still-coins.jpg",
					alt: "Pound and cedi on a dark desk",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-5 py-24 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.18em] text-champagne uppercase",
							children: "Compliance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-2xl font-display text-4xl text-bone",
							children: "Built to be examined."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-bone-2",
							children: "KYC, AML, transaction monitoring, PSD2 and DORA-aligned controls. Architecture ready for Bank of Ghana sandbox engagement and multi-jurisdiction licensing. Every posting sealed. Every decision reconstructable."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-3 sm:grid-cols-2 md:max-w-xl",
							children: [
								"Immutable BLAKE3 ledger",
								"Policy-bound AI agents",
								"Multi-entity books",
								"Sandbox-ready design"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm text-bone",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-px w-5 bg-champagne align-middle" }), x]
							}, x))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-ink",
					children: "Bring your institution onto the rails."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-sm text-stone",
					children: "Tell us what you want to offer. We’ll walk the stack with you."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: () => openWaitlist("institution"),
					children: "Talk to licensing"
				})]
			})
		})
	] });
}
//#endregion
export { CorePage as component };
