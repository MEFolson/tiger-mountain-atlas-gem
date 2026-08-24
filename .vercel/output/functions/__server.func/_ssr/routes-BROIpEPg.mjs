import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as leadership, d as quotes, i as brand, l as markets, m as cn, n as useWaitlist, p as Button } from "./router-BQhLBTX4.mjs";
import { t as Badge } from "./badge-Bu2wuZtw.mjs";
import { t as ArchitectureExplorer } from "./architecture-explorer-BrIyxDFG.mjs";
import { t as CorridorTheater } from "./corridor-theater-0H0Ufvkn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BROIpEPg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [audience, setAudience] = (0, import_react.useState)("payments");
	const openWaitlist = useWaitlist((s) => s.openWith);
	const payments = audience === "payments";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[78svh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-corridor.jpg",
					alt: "A corridor of light connecting a London evening to Accra at golden hour",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/45 to-ink/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pt-28 pb-16 md:px-8 md:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal text-xs tracking-[0.22em] text-champagne uppercase",
							children: "Cush Payments · Cush Core"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "reveal reveal-2 mt-4 max-w-4xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone",
							children: [
								"Africa's payment",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block sm:inline",
									children: "platform."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal reveal-3 mt-5 max-w-xl text-base text-bone-2 md:text-lg",
							children: brand.promise
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal reveal-4 mt-8 flex w-fit rounded-full bg-ink/40 p-1 shadow-[0_0_0_1px_rgb(255_252_248_/_0.18)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setAudience("payments"),
								className: cn("h-9 rounded-full px-3 text-xs transition-colors sm:h-10 sm:px-4 sm:text-sm", payments ? "bg-champagne text-bone" : "text-bone hover:text-bone"),
								children: "Sending home"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setAudience("core"),
								className: cn("h-9 rounded-full px-3 text-xs transition-colors sm:h-10 sm:px-4 sm:text-sm", !payments ? "bg-champagne text-bone" : "text-bone hover:text-bone"),
								children: "Licensing rails"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal reveal-5 mt-6 max-w-lg",
							children: [payments ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-bone-2",
								children: "Send to mobile wallets and bank accounts across Africa. Transparent 1.8%. Mid-market FX. They see it before you pocket the phone."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-bone-2",
								children: "License the production core behind Cush Payments — immutable ledger, agentic routing, PAPSS-native settlement — under your own brand."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									onClick: () => openWaitlist(payments ? "sender" : "institution"),
									children: [payments ? "Join the waitlist" : "Talk to licensing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "onPhoto",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: payments ? "/payments" : "/core",
										children: payments ? "How sending works" : "Explore Cush Core"
									})
								})]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorridorTheater, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/payments",
				className: "group relative min-h-[28rem] overflow-hidden rounded-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/receive-hands.jpg",
						alt: "Hands holding a phone in a sunlit Accra apartment",
						className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-end p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Cush Payments" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl text-bone",
								children: "For the diaspora."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-sm text-bone-2",
								children: "A premium remittance. No hidden FX. Wallets and banks in Ghana first, then the rest of the map."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1 text-sm text-champagne",
								children: ["Open Payments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/core",
				className: "group relative min-h-[28rem] overflow-hidden rounded-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/core-hall.jpg",
						alt: "A dark architectural hall of stone and brass, like a ledger",
						className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-end p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Cush Core" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl text-bone",
								children: "For the institutions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-sm text-bone-2",
								children: "The same rails, licensed. Accounts, cards, loans, payouts — proven by the product we run ourselves."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1 text-sm text-champagne",
								children: ["Open Core ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4",
				children: [
					["$104B+", "African remittance inflows"],
					["1.8%", "Transparent standard fee"],
					["Seconds", "Target settlement"],
					["~$1", "Core opex / customer / month"]
				].map(([stat, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-8 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-ink md:text-4xl",
						children: stat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						children: label
					})]
				}, label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-champagne uppercase",
					children: "Why two products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl",
					children: "We didn’t bolt a remittance app onto someone else’s core. We built the core, then sent the first transfer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base text-stone",
					children: "Africa has paid correspondent-bank rent for a generation. Cush Core treats PAPSS, GHIPSS, and mobile money as first-class rails. Cush Payments is the living proof — the product we eat, the product your customers will feel."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureExplorer, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/accra-coast.jpg",
					alt: "Accra coastline at dusk",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-5 py-24 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.18em] text-champagne uppercase",
							children: "Coverage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl text-bone",
							children: "One house. Many corridors."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: markets.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-lg bg-ink/60 px-4 py-4 shadow-[0_0_0_1px_rgb(255_252_248_/_0.12)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-bone",
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
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.18em] text-champagne uppercase",
				children: "From the corridor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: quotes.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl text-ink italic",
						children: [
							"“",
							q.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-4 text-xs tracking-wide text-ash uppercase",
						children: q.meta
					})]
				}, q.meta))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-24 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-champagne uppercase",
						children: "Leadership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-ink",
						children: "Built by people who have already run the rails."
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
										className: "text-sm text-bone-2",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: person.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-4 inline-flex items-center gap-1 text-sm text-champagne hover:text-ink",
									children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})
							]
						}, person.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-end md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-ink md:text-5xl",
					children: "The waitlist is the front door."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-stone",
					children: "Private beta. UK → Ghana opens first. Sandbox conversations for institutions. Tell us which you are."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onClick: () => openWaitlist("sender"),
						children: "I’m sending"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: () => openWaitlist("institution"),
						children: "I’m licensing"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
