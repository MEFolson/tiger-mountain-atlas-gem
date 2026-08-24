import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as KeyRound, d as Building2, i as Users, l as FileSpreadsheet } from "../_libs/lucide-react.mjs";
import { n as useWaitlist, p as Button } from "./router-BQhLBTX4.mjs";
import { t as Badge } from "./badge-Bu2wuZtw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business-C3yxjOn4.js
var import_jsx_runtime = require_jsx_runtime();
var uses = [
	{
		icon: Users,
		title: "Payroll",
		body: "Pay remote and in-country teams in local currency on the day you run payroll — not three correspondent hops later."
	},
	{
		icon: Building2,
		title: "Suppliers",
		body: "Settle invoices to African vendors, straight to bank accounts and mobile wallets, with the FX on the statement."
	},
	{
		icon: FileSpreadsheet,
		title: "Bulk disbursements",
		body: "Hundreds of payouts in one batch. Marketplaces, gig platforms, NGOs. CSV or API."
	},
	{
		icon: KeyRound,
		title: "API-first",
		body: "One payouts API into the stack you already run. The same Cush Core ledger the consumer product uses."
	}
];
var features = [
	"Dedicated account manager",
	"CSV and API bulk upload",
	"Multi-user access and approvals",
	"Real-time settlement tracking",
	"Consolidated monthly statements",
	"Regulated, auditable rails"
];
function BusinessPage() {
	const openWaitlist = useWaitlist((s) => s.openWith);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[70svh] overflow-hidden pt-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/business-floor.jpg",
					alt: "Finance operations floor in Lagos at dusk",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Cush for Business" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone",
							children: "Payroll and payouts, without the correspondent tax."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-bone-2",
							children: "Pay employees, suppliers, and partners across Africa from a single desk. Transparent FX. Fast settlement. The same rails as Cush Payments."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => openWaitlist("business"),
								children: "Talk to sales"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "onPhoto",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/core",
									children: "Run it on Cush Core"
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
				className: "mx-auto grid max-w-6xl grid-cols-3",
				children: [
					["20+", "African markets"],
					["Seconds", "Target settlement"],
					["1.8%", "Transparent pricing"]
				].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-10 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-ink",
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-stone",
						children: l
					})]
				}, l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "One desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl text-ink",
					children: "Built for finance teams who are tired of stitching five providers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-2",
					children: uses.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(u.icon, { className: "size-5 text-champagne" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl text-ink",
								children: u.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-stone",
								children: u.body
							})
						]
					}, u.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-champagne uppercase",
						children: "Operations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-ink",
						children: "Fits how you already work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-stone",
						children: "Approvals, statements, and a named human. The software is the rails; the relationship is the bank."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						onClick: () => openWaitlist("business"),
						children: "Book a conversation"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-0",
					children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex h-14 items-center border-b border-line text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-4 h-px w-6 bg-champagne" }), f]
					}, f))
				})]
			})
		})
	] });
}
//#endregion
export { BusinessPage as component };
