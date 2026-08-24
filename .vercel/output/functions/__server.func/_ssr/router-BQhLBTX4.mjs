import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as TriangleAlert, n as X, s as Menu, u as Check } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BQhLBTX4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatMoney(amount, currency, maximumFractionDigits = 2) {
	try {
		return new Intl.NumberFormat("en-GB", {
			style: "currency",
			currency,
			maximumFractionDigits,
			minimumFractionDigits: currency === "NGN" ? 0 : Math.min(2, maximumFractionDigits)
		}).format(amount);
	} catch {
		return `${amount.toFixed(2)} ${currency}`;
	}
}
function formatNumber(n, digits = 2) {
	return new Intl.NumberFormat("en-GB", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(n);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-champagne text-bone hover:bg-champagne-2 rounded-full",
			secondary: "bg-transparent text-ink rounded-full shadow-[0_0_0_1px_rgb(23_20_17_/_0.16)] hover:bg-ink/5",
			ghost: "bg-transparent text-ink hover:bg-ink/5 rounded-full",
			ink: "bg-ink text-bone hover:bg-ink-2 rounded-full",
			onPhoto: "bg-transparent text-bone rounded-full shadow-[0_0_0_1px_rgb(255_252_248_/_0.45)] hover:bg-bone/10",
			link: "rounded-none bg-transparent px-0 text-champagne underline-offset-4 hover:underline"
		},
		size: {
			sm: "h-9 px-4 text-sm",
			md: "h-11 px-5 text-sm",
			lg: "h-12 px-6 text-[0.9375rem]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var brand = {
	name: "Cush",
	legal: "Cush Payments",
	tagline: "Africa's payment platform.",
	promise: "The go-to place for sending money to and within Africa. Fast, cheap, secure and regulated.",
	email: "mfolson@cushpayments.com"
};
var nav = [
	{
		to: "/payments",
		label: "Payments"
	},
	{
		to: "/business",
		label: "Business"
	},
	{
		to: "/core",
		label: "Core"
	},
	{
		to: "/company",
		label: "Company"
	}
];
var corridors = [
	{
		id: "uk-gh",
		from: "GBP",
		to: "GHS",
		fromCity: "London",
		toCity: "Accra",
		fromCountry: "United Kingdom",
		toCountry: "Ghana",
		label: "UK → Ghana",
		rate: 15.16,
		status: "soon",
		wallet: "MTN MoMo · Bank",
		rail: "Faster Payments → PAPSS → GHIPSS"
	},
	{
		id: "us-ng",
		from: "USD",
		to: "NGN",
		fromCity: "New York",
		toCity: "Lagos",
		fromCountry: "United States",
		toCountry: "Nigeria",
		label: "US → Nigeria",
		rate: 1480,
		status: "soon",
		wallet: "Bank · OPay · PalmPay",
		rail: "ACH / Fedwire → PAPSS"
	},
	{
		id: "uk-ke",
		from: "GBP",
		to: "KES",
		fromCity: "London",
		toCity: "Nairobi",
		fromCountry: "United Kingdom",
		toCountry: "Kenya",
		label: "UK → Kenya",
		rate: 167.4,
		status: "soon",
		wallet: "M-Pesa · Bank",
		rail: "Faster Payments → PAPSS"
	},
	{
		id: "uk-ng",
		from: "GBP",
		to: "NGN",
		fromCity: "Manchester",
		toCity: "Lagos",
		fromCountry: "United Kingdom",
		toCountry: "Nigeria",
		label: "UK → Nigeria",
		rate: 1890,
		status: "soon",
		wallet: "Bank · Mobile money",
		rail: "Faster Payments → PAPSS"
	},
	{
		id: "eu-gh",
		from: "EUR",
		to: "GHS",
		fromCity: "Amsterdam",
		toCity: "Accra",
		fromCountry: "Eurozone",
		toCountry: "Ghana",
		label: "EU → Ghana",
		rate: 13.02,
		status: "soon",
		wallet: "MTN MoMo · Bank",
		rail: "SEPA → PAPSS → GHIPSS"
	},
	{
		id: "uk-et",
		from: "GBP",
		to: "ETB",
		fromCity: "Washington",
		toCity: "Addis Ababa",
		fromCountry: "United Kingdom",
		toCountry: "Ethiopia",
		label: "UK → Ethiopia",
		rate: 178.2,
		status: "soon",
		wallet: "Bank",
		rail: "Faster Payments → PAPSS"
	}
];
var CUSH_FEE = .018;
var providers = [
	{
		id: "cush",
		name: "Cush",
		feePct: .018,
		fxMarkup: 0,
		recommended: true
	},
	{
		id: "wise",
		name: "Wise",
		feePct: .025,
		fxMarkup: 0,
		recommended: false
	},
	{
		id: "remitly",
		name: "Remitly",
		feePct: .04,
		fxMarkup: .008,
		recommended: false
	},
	{
		id: "wu",
		name: "Western Union",
		feePct: .075,
		fxMarkup: .018,
		recommended: false
	}
];
var markets = [
	{
		name: "Ghana",
		city: "Accra",
		status: "Opening first",
		flag: "GH"
	},
	{
		name: "Nigeria",
		city: "Lagos",
		status: "Opening",
		flag: "NG"
	},
	{
		name: "Kenya",
		city: "Nairobi",
		status: "Opening",
		flag: "KE"
	},
	{
		name: "Ethiopia",
		city: "Addis Ababa",
		status: "Opening",
		flag: "ET"
	},
	{
		name: "South Africa",
		city: "Johannesburg",
		status: "Opening",
		flag: "ZA"
	}
];
var rails = [
	{
		name: "Faster Payments",
		region: "United Kingdom"
	},
	{
		name: "SEPA",
		region: "Europe"
	},
	{
		name: "Fedwire / ACH",
		region: "United States"
	},
	{
		name: "SWIFT",
		region: "Correspondent"
	},
	{
		name: "PAPSS",
		region: "Pan-African"
	},
	{
		name: "GHIPSS",
		region: "Ghana"
	},
	{
		name: "Mobile money",
		region: "Last mile"
	}
];
var coreLayers = [
	{
		id: "products",
		kicker: "01",
		title: "Product layer",
		summary: "Accounts, cards, loans, remittances, payouts — launched under your brand.",
		body: "Run current accounts, savings pots, card issuing, personal and secured lending, diaspora remittance, and bulk payouts from one catalogue. Start with a single product. Grow into a bank.",
		points: [
			"White-label accounts, cards, and lending",
			"Diaspora remittance and payroll as first-class products",
			"Onboarding and KYC journeys included"
		]
	},
	{
		id: "agents",
		kicker: "02",
		title: "Agentic orchestration",
		summary: "Autonomous agents for routing, risk, reconciliation, and support.",
		body: "Cush Core is AI-native, not AI-sprinkled. Agents score risk in-flight, choose the cheapest viable rail, reconcile exceptions, and handle first-line customer operations — under policy you control.",
		points: [
			"Intelligent multi-rail routing",
			"In-flight risk scoring and AML orchestration",
			"Automated reconciliation and exception handling"
		]
	},
	{
		id: "ledger",
		kicker: "03",
		title: "Immutable ledger",
		summary: "BLAKE3-sealed transaction history. Auditable by construction.",
		body: "Every posting is cryptographically sealed. Supervisors, partners, and your own risk team can verify history without trusting a black box. This is the system of record — not a sidecar log.",
		points: [
			"BLAKE3 cryptographic seals",
			"Double-entry, multi-entity, multi-currency",
			"Designed for examination, not just dashboards"
		]
	},
	{
		id: "rails",
		kicker: "04",
		title: "Multi-rail connectivity",
		summary: "SWIFT and Faster Payments on one side. PAPSS, GHIPSS, and mobile money on the other.",
		body: "Africa has been charged correspondent-bank rent for decades. Cush Core treats PAPSS and local mobile money as first-class rails, not afterthoughts bolted onto a European core.",
		points: [
			"SWIFT, Faster Payments, SEPA, Fedwire",
			"PAPSS local-currency settlement",
			"GHIPSS and mobile-money last mile"
		]
	}
];
var coreModules = [
	{
		title: "Accounts & savings",
		body: "Current accounts, savings, and pots under your brand — with the ledger as source of truth."
	},
	{
		title: "Cards",
		body: "Issue and manage cards linked to platform accounts, with full transaction visibility."
	},
	{
		title: "Loans & mortgages",
		body: "Personal loans, secured lending, and mortgages with configurable terms and approval policy."
	},
	{
		title: "Payments & remittance",
		body: "The same corridors that power Cush Payments, available as a product you can offer."
	},
	{
		title: "Onboarding & KYC",
		body: "Identity, screening, and a guided application journey — ready on day one."
	},
	{
		title: "Embedded APIs",
		body: "BaaS-style interfaces so partners can embed accounts and payouts inside their own products."
	}
];
var leadership = [{
	name: "Matthew Ekow Folson",
	role: "Founder & CEO",
	years: "25+ years",
	initials: "MF",
	linkedin: "https://www.linkedin.com/in/matthew-folson-8632b51",
	bio: "Technology leadership across banking, payments, and fintech. Former Open-Source Consultant and PM (IDAM / Cyber) at HSBC, where he chaired the External FOSS Board. IT Portfolio Manager at Metro Bank (PSD2). Head of Release and PM at Orwell Group. Led the first non-bank PSP as a Direct CHAPS member at the Bank of England.",
	tags: [
		"Payments",
		"Banking",
		"Compliance"
	]
}, {
	name: "Jose Luis Caldeira",
	role: "CTO",
	years: "20+ years",
	initials: "JC",
	linkedin: "https://www.linkedin.com/in/luiscaldeira/",
	bio: "Banking technology, digital architecture, big data, stablecoins, and distributed financial systems. The engineering mind behind Cush Core’s ledger, orchestration, and multi-rail design.",
	tags: [
		"Architecture",
		"Fintech",
		"Data"
	]
}];
var quotes = [
	{
		quote: "Finally, a transfer that tells the truth before you send.",
		meta: "London → Accra"
	},
	{
		quote: "The calculator is the product. Everything else is theatre.",
		meta: "Washington → Addis Ababa"
	},
	{
		quote: "Built for people who actually have to explain the fee to family.",
		meta: "Manchester → Lagos"
	}
];
var useWaitlist = create((set) => ({
	open: false,
	intent: "sender",
	setOpen: (open) => set({ open }),
	openWith: (intent) => set({
		open: true,
		intent
	})
}));
function SiteNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const openWaitlist = useWaitlist((s) => s.openWith);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 bg-paper/95 backdrop-blur-md transition-[box-shadow] duration-200", scrolled || open ? "shadow-[0_1px_0_rgb(23_20_17_/_0.08)]" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Cush Payments home",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("text-sm transition-colors duration-150", pathname === item.to ? "text-ink" : "text-stone hover:text-ink"),
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => openWaitlist("sender"),
						children: "Join the beta"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex size-11 items-center justify-center rounded-full text-ink md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-paper md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-1 flex-col px-5 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: cn("flex min-h-14 items-center border-b border-line text-lg text-ink", pathname === item.to ? "text-champagne" : ""),
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-auto w-full",
					size: "lg",
					onClick: () => {
						setOpen(false);
						openWaitlist("sender");
					},
					children: "Join the beta"
				})]
			})
		}) : null]
	});
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/images/logo-nav.png",
		alt: "Cush Payments",
		className: compact ? "h-8 w-auto outline-none" : "h-8 w-auto max-w-[min(11.5rem,58vw)] outline-none sm:h-9 md:h-10 md:max-w-none"
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo-nav.png",
					alt: "Cush Payments",
					className: "h-10 w-auto outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-sm text-sm text-stone",
					children: [
						brand.tagline,
						" ",
						brand.promise
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-ash uppercase",
						children: "Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-stone transition-colors hover:text-ink",
							children: item.label
						}) }, item.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-ash uppercase",
						children: "Write"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "break-all text-stone hover:text-ink",
							href: `mailto:${brand.email}`,
							children: brand.email
						}) })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-ash uppercase",
						children: "Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-stone",
						children: "Private beta. UK → Ghana opens first. Designed for FCA and Bank of Ghana pathways."
					})] })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-5 py-6 text-xs text-ash md:flex-row md:items-center md:justify-between md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				brand.legal,
				". All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Illustrative rates. Not an offer of regulated services." })]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-ink/50", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(92vw,440px)] max-h-[min(90vh,720px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-surface p-6 text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.1),0_24px_80px_rgb(0_0_0_/_0.18)] outline-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-stone hover:bg-ink/5 hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-medium tracking-tight text-ink", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-2 text-sm text-stone", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] transition-[box-shadow] duration-150 placeholder:text-ash focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)] disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-stone", className),
		...props
	});
}
var roles = [
	{
		id: "sender",
		label: "I send money home"
	},
	{
		id: "business",
		label: "I pay teams or suppliers"
	},
	{
		id: "institution",
		label: "I license infrastructure"
	}
];
function WaitlistDialog() {
	const { open, setOpen, intent } = useWaitlist();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)(intent);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (open) setRole(intent);
	}, [open, intent]);
	function reset() {
		setDone(false);
		setError("");
	}
	function submit(e) {
		e.preventDefault();
		if (!name.trim() || !email.includes("@")) {
			setError("Please add a name and a valid email.");
			return;
		}
		const entry = {
			name: name.trim(),
			email: email.trim(),
			role,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("cush-waitlist") || "[]");
			const next = Array.isArray(prev) ? [...prev, entry] : [entry];
			localStorage.setItem("cush-waitlist", JSON.stringify(next));
		} catch {
			localStorage.setItem("cush-waitlist", JSON.stringify([entry]));
		}
		setDone(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			setOpen(v);
			if (!v) reset();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex size-10 items-center justify-center rounded-full bg-champagne/15 text-champagne",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "You’re on the list." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "We’ll write when your corridor or sandbox opens. No drip. No theatre." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					onClick: () => setOpen(false),
					children: "Close"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Join the private beta" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Cush is opening corridors and a licensing sandbox. Tell us how you want in." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "wl-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "wl-name",
						autoComplete: "name",
						value: name,
						onChange: (e) => setName(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "wl-email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "wl-email",
						type: "email",
						autoComplete: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "I’m here as" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-1.5",
						children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRole(r.id),
							className: cn("h-11 rounded-md px-3.5 text-left text-sm transition-[background-color,box-shadow] duration-150", role === r.id ? "bg-champagne/10 text-ink shadow-[0_0_0_1px_rgb(232_93_4_/_0.45)]" : "text-stone shadow-[0_0_0_1px_rgb(23_20_17_/_0.1)] hover:text-ink"),
							children: r.label
						}, r.id))
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: "mt-1 w-full",
					children: "Request access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ash",
					children: "Private beta. Not an offer of regulated services. We’ll only use this to reach you about Cush."
				})
			]
		}) })
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistDialog, {})
		]
	});
}
var styles_default = "/assets/styles-C_0nXe8x.css";
var APP_NAME = "Cush";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Africa's payment platform. The go-to place for sending money to and within Africa. Fast, cheap, secure and regulated."
			},
			{
				name: "theme-color",
				content: "#F6F3EC"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/images/logo-favicon.png"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-BROIpEPg.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./business-C3yxjOn4.mjs");
var Route$3 = createFileRoute("/business")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Cush Business — Payroll and payouts across Africa" }, {
		name: "description",
		content: "Pay employees, suppliers, and partners across Africa from one dashboard. Transparent FX, bulk payouts, API-first."
	}] })
});
var $$splitComponentImporter$2 = () => import("./company-EFpYCiDl.mjs");
var Route$2 = createFileRoute("/company")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Company — Cush" }, {
		name: "description",
		content: "Cush is the house of African money. Founded by Matthew Ekow Folson and Jose Luis Caldeira. Payments for the diaspora, core for institutions."
	}] })
});
var $$splitComponentImporter$1 = () => import("./core-DDzFEO9X.mjs");
var Route$1 = createFileRoute("/core")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Cush Core — AI-native core banking for Africa" }, {
		name: "description",
		content: "License Cush Core: immutable BLAKE3 ledger, agentic orchestration, PAPSS-native rails. For banks, PSPs, fintechs, and governments."
	}] })
});
var $$splitComponentImporter = () => import("./payments-kvnXA7ar.mjs");
var Route = createFileRoute("/payments")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Cush Payments — Send money to Africa" }, {
		name: "description",
		content: "Premium remittances to African mobile wallets and bank accounts. 1.8% transparent fee, mid-market FX, seconds not days."
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	BusinessRoute: Route$3.update({
		id: "/business",
		path: "/business",
		getParentRoute: () => Route$5
	}),
	CompanyRoute: Route$2.update({
		id: "/company",
		path: "/company",
		getParentRoute: () => Route$5
	}),
	CoreRoute: Route$1.update({
		id: "/core",
		path: "/core",
		getParentRoute: () => Route$5
	}),
	PaymentsRoute: Route.update({
		id: "/payments",
		path: "/payments",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { coreLayers as a, leadership as c, quotes as d, rails as f, formatNumber as g, formatMoney as h, brand as i, markets as l, cn as m, useWaitlist as n, coreModules as o, Button as p, CUSH_FEE as r, corridors as s, router_exports as t, providers as u };
