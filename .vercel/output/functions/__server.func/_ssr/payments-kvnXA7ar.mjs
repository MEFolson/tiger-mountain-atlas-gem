import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as ArrowUpRight, o as Shield, r as Wallet, t as Zap } from "../_libs/lucide-react.mjs";
import { l as markets, n as useWaitlist, p as Button } from "./router-BQhLBTX4.mjs";
import { t as Badge } from "./badge-Bu2wuZtw.mjs";
import { t as CorridorTheater } from "./corridor-theater-0H0Ufvkn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payments-kvnXA7ar.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		n: "01",
		title: "Verify once",
		body: "Open an account. Complete KYC in minutes. We designed the checks for regulation, not friction theatre."
	},
	{
		n: "02",
		title: "Name the person",
		body: "Mobile wallet or bank account. MTN MoMo, bank rails, local settlement. You see the receive amount before you commit."
	},
	{
		n: "03",
		title: "Send. Watch the seal.",
		body: "Funds leave on Faster Payments, land on PAPSS, arrive as cedis in a wallet. Tracked in real time, sealed on Cush Core."
	}
];
function PaymentsPage() {
	const openWaitlist = useWaitlist((s) => s.openWith);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[70svh] overflow-hidden pt-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/sender-london.jpg",
					alt: "A man in London sending from his phone at dusk",
					className: "absolute inset-0 size-full object-cover object-[center_20%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Cush Payments" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone",
							children: "They have it before you put the phone down."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base text-bone-2",
							children: "A remittance built like a private bank product: 1.8%, mid-market FX, mobile wallets and bank accounts. UK → Ghana opens first."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => openWaitlist("sender"),
								children: "Join the waitlist"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "onPhoto",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/core",
									children: "Powered by Cush Core"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3 md:px-8",
			children: [
				{
					icon: Zap,
					title: "Seconds, by design",
					body: "Faster Payments in. PAPSS and GHIPSS out. The wait of correspondent banking is the thing we refused to inherit."
				},
				{
					icon: Wallet,
					title: "Wallets and banks",
					body: "Send to MTN MoMo, bank accounts, and local rails. The last mile is African infrastructure, not a cash-pickup queue."
				},
				{
					icon: Shield,
					title: "Shown before sent",
					body: "Fee, rate, and receive amount on one screen. No FX surprise on the other side of the call with family."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-champagne" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-lg text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						children: item.body
					})
				]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 pb-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorridorTheater, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "How it works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ink",
					children: "Three moves. No mystery."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-champagne",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl text-ink",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-stone",
							children: s.body
						})
					] }, s.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-[22rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/receive-hands.jpg",
					alt: "Receiving a transfer in Accra",
					className: "absolute inset-0 size-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-surface px-5 py-16 md:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-champagne uppercase",
						children: "Transparency"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-ink",
						children: "1.8%. That’s the product."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-stone",
						children: "Most remittance brands hide the real cost in the rate. We take a stated fee on mid-market FX and show the receive amount before you confirm. If we can’t say it on the screen, we don’t charge it."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "Corridors"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-ink",
					children: "Ghana first. Then the map."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/business",
					className: "hidden items-center gap-1 text-sm text-champagne sm:inline-flex",
					children: ["Paying teams instead? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: markets.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface px-4 py-4 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-stone",
							children: m.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[11px] tracking-wide text-champagne uppercase",
							children: m.status
						})
					]
				}, m.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-ink",
					children: "Be on the first corridor."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: () => openWaitlist("sender"),
					children: "Request access"
				})]
			})
		})
	] });
}
//#endregion
export { PaymentsPage as component };
