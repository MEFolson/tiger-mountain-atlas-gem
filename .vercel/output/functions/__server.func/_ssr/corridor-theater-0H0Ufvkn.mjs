import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { g as formatNumber, h as formatMoney, m as cn, n as useWaitlist, p as Button, r as CUSH_FEE, s as corridors, u as providers } from "./router-BQhLBTX4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/corridor-theater-0H0Ufvkn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function seal(payload) {
	const data = new TextEncoder().encode(payload);
	const buf = await crypto.subtle.digest("SHA-256", data);
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 24);
}
function receive(amount, corridor, feePct, fxMarkup) {
	const fee = amount * feePct;
	const net = Math.max(0, amount - fee);
	const rate = corridor.rate * (1 - fxMarkup);
	return {
		fee,
		net,
		rate,
		arrives: net * rate
	};
}
function CorridorTheater({ className, compact = false }) {
	const [corridorId, setCorridorId] = (0, import_react.useState)(corridors[0].id);
	const [amount, setAmount] = (0, import_react.useState)(250);
	const [hash, setHash] = (0, import_react.useState)("");
	const [tick, setTick] = (0, import_react.useState)(0);
	const openWaitlist = useWaitlist((s) => s.openWith);
	const corridor = corridors.find((c) => c.id === corridorId) ?? corridors[0];
	const rows = (0, import_react.useMemo)(() => providers.map((p) => ({
		...p,
		...receive(amount, corridor, p.feePct, p.fxMarkup)
	})), [amount, corridor]);
	const cush = rows[0];
	(0, import_react.useEffect)(() => {
		seal(JSON.stringify({
			amount,
			corridor: corridor.id,
			fee: CUSH_FEE,
			t: Math.floor(Date.now() / 8e3)
		})).then(setHash);
		setTick((n) => n + 1);
	}, [amount, corridor.id]);
	const hops = [
		{
			label: corridor.fromCity,
			sub: corridor.from
		},
		{
			label: "Cush Core",
			sub: "Ledger seal"
		},
		{
			label: "PAPSS",
			sub: "Local currency"
		},
		{
			label: corridor.toCity,
			sub: corridor.wallet.split("·")[0].trim()
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl bg-surface p-5 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] md:p-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.18em] text-champagne uppercase",
				children: "Corridor theater"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl text-ink md:text-4xl",
				children: "Watch the money go home."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm text-stone",
				children: "Same rails the banks will license. Same fee you’ll pay. Corridors are opening — figures are illustrative."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5 lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs text-ash",
							htmlFor: "corridor",
							children: "Corridor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "corridor",
							value: corridorId,
							onChange: (e) => setCorridorId(e.target.value),
							className: "h-11 rounded-md bg-paper px-3 text-sm text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)]",
							children: corridors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: c.id,
								children: [c.label, c.status === "soon" ? " — opening" : " — live"]
							}, c.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs text-ash",
							htmlFor: "amount",
							children: "You send"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 font-mono text-sm text-stone",
								children: corridor.from
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "amount",
								type: "number",
								min: 10,
								max: 2e4,
								value: amount,
								onChange: (e) => setAmount(Math.max(10, Number(e.target.value) || 0)),
								className: "h-14 w-full rounded-md bg-paper pr-4 pl-16 font-mono text-2xl text-ink tabular-nums shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)]"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-[#fffaf2] p-5 shadow-[inset_0_1px_0_rgb(255_252_248_/_0.9),0_0_0_1px_rgb(23_20_17_/_0.08)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ash",
								children: "They receive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-4xl text-ink tabular-nums",
								children: formatMoney(cush.arrives, corridor.to, corridor.to === "NGN" ? 0 : 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-stone",
								children: [
									"Fee ",
									formatMoney(cush.fee, corridor.from),
									" · 1.8% · rate",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums",
										children: [
											"1 ",
											corridor.from,
											" = ",
											formatNumber(corridor.rate, corridor.rate > 100 ? 0 : 2),
											" ",
											corridor.to
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							50,
							100,
							250,
							500,
							1e3
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAmount(n),
							className: cn("h-9 rounded-full px-3.5 text-xs tabular-nums transition-colors", amount === n ? "bg-champagne text-bone" : "text-stone shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] hover:text-ink"),
							children: n.toLocaleString("en-GB")
						}, n))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grain relative overflow-hidden rounded-lg bg-[#f3efe6] p-5 md:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.16em] text-ash uppercase",
								children: corridor.rail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "pointer-events-none absolute top-[13px] right-[8%] left-[8%] hidden h-2 md:block",
									viewBox: "0 0 100 8",
									preserveAspectRatio: "none",
									"aria-hidden": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "0",
										y1: "4",
										x2: "100",
										y2: "4",
										stroke: "#e85d04",
										strokeOpacity: "0.18",
										strokeWidth: "1.2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "0",
										y1: "4",
										x2: "100",
										y2: "4",
										stroke: "#e85d04",
										strokeWidth: "1.2",
										strokeDasharray: "4 10",
										className: "arc-flow"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "flex flex-col md:grid md:grid-cols-4",
									children: hops.map((hop, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "relative flex items-start gap-4 pb-7 last:pb-0 md:flex-col md:items-center md:pb-0 md:text-center",
										children: [
											i < hops.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-7 bottom-0 left-[13px] w-px bg-champagne/25 md:hidden" }) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "relative z-[1] flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] shadow-[0_0_0_1px_rgb(232_93_4_/_0.35),0_0_0_6px_rgb(243_239_230)]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-champagne" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "md:mt-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "font-mono text-[10px] tracking-[0.14em] text-champagne",
														children: ["0", i + 1]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-ink",
														children: hop.label
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-ash",
														children: hop.sub
													})
												]
											})
										]
									}, hop.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col items-start gap-3 border-t border-line pt-4 md:flex-row md:justify-between md:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-ash",
									children: "Illustrative ledger seal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-xs tracking-wide text-champagne break-all",
									children: hash ? `blake3·${hash}` : "sealing…"
								}, tick)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[14rem] text-[11px] text-ash md:text-right",
									children: "Production Cush Core seals with BLAKE3. This preview uses SHA-256 of the payload."
								})]
							})
						]
					}),
					!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 overflow-hidden rounded-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "text-left text-xs text-ash",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Provider"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Fee"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 text-right font-medium",
										children: "Arrives"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: cn("border-t border-line", row.recommended ? "text-ink" : "text-stone"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-2.5",
										children: [row.name, row.recommended ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-[11px] text-champagne",
											children: "Cush"
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5 tabular-nums",
										children: formatMoney(row.fee, corridor.from)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2.5 text-right font-medium tabular-nums",
										children: formatMoney(row.arrives, corridor.to, corridor.to === "NGN" ? 0 : 2)
									})
								]
							}, row.id)) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[11px] text-ash",
							children: "Estimates for illustration. Actual pricing set at send time. Competitors modelled on published fee bands plus typical FX markup."
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => openWaitlist("sender"),
							children: ["Join the waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/core",
								children: "See the rails"
							})
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { CorridorTheater as t };
