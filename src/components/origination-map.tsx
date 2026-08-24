import { useEffect, useId, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import worldLand from "@/lib/world-land.json";

type Pt = { lon: number; lat: number };
type XY = { x: number; y: number };

const W = 1100;
const H = 780;
const CX = 550;
const CY = 390;
const R = 236;
const ACCRA_PT: Pt = { lon: -0.19, lat: 5.6 };
const MAX_C = 2.62;

function rad(d: number) {
  return (d * Math.PI) / 180;
}

function project(lon: number, lat: number) {
  const φ = rad(lat);
  const λ = rad(lon);
  const φ0 = rad(ACCRA_PT.lat);
  const λ0 = rad(ACCRA_PT.lon);
  const dλ = λ - λ0;
  const cosc = Math.min(
    1,
    Math.max(
      -1,
      Math.sin(φ0) * Math.sin(φ) + Math.cos(φ0) * Math.cos(φ) * Math.cos(dλ),
    ),
  );
  const c = Math.acos(cosc);
  const k = Math.abs(c) < 1e-8 ? 1 : c / Math.sin(c);
  const x = k * Math.cos(φ) * Math.sin(dλ);
  const y =
    k *
    (Math.cos(φ0) * Math.sin(φ) - Math.sin(φ0) * Math.cos(φ) * Math.cos(dλ));
  return { x, y, c };
}

const AFRICA = (worldLand as { africa: number[][][] }).africa;
const LANDS = (worldLand as { land: number[][][] }).land;

const ORIGINS = [
  { id: "nyc", name: "New York", pt: { lon: -74.0, lat: 40.7 }, side: "w" },
  { id: "tor", name: "Toronto", pt: { lon: -79.4, lat: 43.7 }, side: "n" },
  { id: "sao", name: "São Paulo", pt: { lon: -46.6, lat: -23.6 }, side: "s" },
  { id: "lon", name: "London", pt: { lon: -0.12, lat: 51.5 }, side: "n" },
  { id: "par", name: "Paris", pt: { lon: 2.35, lat: 48.9 }, side: "e" },
  { id: "dxb", name: "Dubai", pt: { lon: 55.3, lat: 25.2 }, side: "n" },
  { id: "mum", name: "Mumbai", pt: { lon: 72.9, lat: 19.1 }, side: "e" },
  { id: "sin", name: "Singapore", pt: { lon: 103.8, lat: 1.35 }, side: "e" },
  { id: "syd", name: "Sydney", pt: { lon: 151.2, lat: -33.9 }, side: "s" },
] as const;

const AFRICA_CITIES = [
  { id: "accra", name: "Accra", pt: ACCRA_PT, hub: true },
  { id: "dakar", name: "Dakar", pt: { lon: -17.5, lat: 14.7 }, hub: false },
  { id: "nbo", name: "Nairobi", pt: { lon: 36.82, lat: -1.29 }, hub: false },
  { id: "jnb", name: "Johannesburg", pt: { lon: 28.05, lat: -26.2 }, hub: false },
] as const;

function makeXy(scale: number) {
  return (pt: Pt): XY => {
    const p = project(pt.lon, pt.lat);
    return {
      x: Math.round((CX + p.x * scale) * 10) / 10,
      y: Math.round((CY - p.y * scale) * 10) / 10,
    };
  };
}

function ringPath(ring: number[][], scale: number) {
  const jump = R * 0.72;
  const parts: string[] = [];
  let d = "";
  let started = false;
  let prev: XY | null = null;
  let count = 0;
  const flush = () => {
    if (started && count >= 4) parts.push(`${d}Z`);
    d = "";
    started = false;
    prev = null;
    count = 0;
  };
  for (const [lon, lat] of ring) {
    const pr = project(lon, lat);
    if (!(pr.c < MAX_C)) {
      flush();
      continue;
    }
    const pt = {
      x: Math.round((CX + pr.x * scale) * 10) / 10,
      y: Math.round((CY - pr.y * scale) * 10) / 10,
    };
    if (prev && Math.hypot(pt.x - prev.x, pt.y - prev.y) > jump) flush();
    if (!started) {
      d = `M${pt.x} ${pt.y}`;
      started = true;
      count = 1;
    } else {
      d += `L${pt.x} ${pt.y}`;
      count += 1;
    }
    prev = pt;
  }
  flush();
  return parts.join("");
}

const labelClass = {
  n: "-translate-x-1/2 -translate-y-[calc(100%+10px)]",
  s: "-translate-x-1/2 translate-y-[10px]",
  e: "translate-x-[10px] -translate-y-1/2",
  w: "-translate-x-[calc(100%+10px)] -translate-y-1/2",
} as const;

export function OriginationMap({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    if (hover) return;
    const id = window.setInterval(
      () => setActive((n) => (n + 1) % ORIGINS.length),
      2800,
    );
    return () => window.clearInterval(id);
  }, [hover]);

  const current = hover
    ? (ORIGINS.find((o) => o.id === hover) ?? ORIGINS[active])
    : ORIGINS[active];

  const scale = useMemo(() => {
    const maxC = Math.max(
      ...ORIGINS.map((o) => project(o.pt.lon, o.pt.lat).c),
      0.95,
    );
    return (R * 0.86) / maxC;
  }, []);

  const xy = useMemo(() => makeXy(scale), [scale]);
  const accra = xy(ACCRA_PT);

  const landPaths = useMemo(
    () => LANDS.map((ring) => ringPath(ring, scale)).filter(Boolean),
    [scale],
  );
  const africaPaths = useMemo(
    () => AFRICA.map((ring) => ringPath(ring, scale)).filter(Boolean),
    [scale],
  );

  const origins = useMemo(
    () => ORIGINS.map((o) => ({ ...o, p: xy(o.pt) })),
    [xy],
  );
  const cities = useMemo(
    () => AFRICA_CITIES.map((c) => ({ ...c, p: xy(c.pt) })),
    [xy],
  );

  const rings = [0.28, 0.52, 0.76, 1].map((t) => R * t);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl bg-[#f3efe6] shadow-[0_0_0_1px_rgb(23_20_17_/_0.08),0_24px_48px_-28px_rgb(23_20_17_/_0.35)]",
        className,
      )}
    >
      <div className="grain relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Money originating in cities around the world and terminating in Africa"
      >
        <defs>
          <radialGradient id={`${uid}-disk`} cx="42%" cy="36%" r="68%">
            <stop offset="0%" stopColor="#fffaf2" />
            <stop offset="52%" stopColor="#f4efe4" />
            <stop offset="100%" stopColor="#e4d9c6" />
          </radialGradient>
          <radialGradient id={`${uid}-africa`} cx="48%" cy="42%" r="62%">
            <stop offset="0%" stopColor="#f08c3a" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#e85d04" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#c24c03" stopOpacity="0.22" />
          </radialGradient>
          <radialGradient id={`${uid}-sheen`} cx="36%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.38" />
            <stop offset="28%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="70%" stopColor="#171411" stopOpacity="0" />
            <stop offset="100%" stopColor="#171411" stopOpacity="0.1" />
          </radialGradient>
          <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
          <clipPath id={`${uid}-clip`}>
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
        </defs>

        <circle
          cx={CX}
          cy={CY}
          r={R + 18}
          fill="none"
          stroke="#171411"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
        <circle cx={CX} cy={CY} r={R} fill={`url(#${uid}-disk)`} />
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="#171411"
          strokeOpacity="0.14"
          strokeWidth="1.15"
        />

        <g clipPath={`url(#${uid}-clip)`}>
          {rings.map((r) => (
            <circle
              key={r}
              cx={CX}
              cy={CY}
              r={r}
              fill="none"
              stroke="#171411"
              strokeOpacity="0.07"
              strokeWidth="0.8"
            />
          ))}

          {landPaths.map((d, i) => (
            <path key={i} d={d} fill="#171411" fillOpacity="0.09" />
          ))}

          {africaPaths.map((d, i) => (
            <path key={`a-${i}`} d={d} fill={`url(#${uid}-africa)`} />
          ))}
          {africaPaths.map((d, i) => (
            <path
              key={`as-${i}`}
              d={d}
              fill="none"
              stroke="#e85d04"
              strokeOpacity="0.85"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          ))}

          {cities
            .filter((c) => !c.hub)
            .map((c) => (
              <line
                key={`spoke-${c.id}`}
                x1={accra.x}
                y1={accra.y}
                x2={c.p.x}
                y2={c.p.y}
                stroke="#e85d04"
                strokeOpacity="0.28"
                strokeWidth="1"
              />
            ))}

          {origins.map((o) => {
            const on = o.id === current.id;
            return (
              <g key={o.id}>
                {on ? (
                  <line
                    x1={o.p.x}
                    y1={o.p.y}
                    x2={accra.x}
                    y2={accra.y}
                    stroke="#e85d04"
                    strokeWidth="10"
                    strokeOpacity="0.16"
                    strokeLinecap="round"
                    filter={`url(#${uid}-glow)`}
                  />
                ) : null}
                <line
                  x1={o.p.x}
                  y1={o.p.y}
                  x2={accra.x}
                  y2={accra.y}
                  stroke="#e85d04"
                  strokeWidth={on ? 1.7 : 1}
                  strokeOpacity={on ? 0.95 : 0.22}
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          <circle cx={CX} cy={CY} r={R} fill={`url(#${uid}-sheen)`} />
        </g>

        {origins.map((o) => {
          const on = o.id === current.id;
          return (
            <g
              key={`dot-${o.id}`}
              onMouseEnter={() => setHover(o.id)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
            >
              <circle cx={o.p.x} cy={o.p.y} r="14" fill="transparent" />
              <circle
                cx={o.p.x}
                cy={o.p.y}
                r={on ? 4.2 : 2.8}
                fill={on ? "#e85d04" : "#171411"}
                fillOpacity={on ? 1 : 0.55}
              />
              {on ? (
                <circle
                  cx={o.p.x}
                  cy={o.p.y}
                  r="8"
                  fill="none"
                  stroke="#e85d04"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
              ) : null}
            </g>
          );
        })}

        {cities
          .filter((c) => !c.hub)
          .map((c) => (
            <circle
              key={c.id}
              cx={c.p.x}
              cy={c.p.y}
              r="2.4"
              fill="#e85d04"
              fillOpacity="0.9"
            />
          ))}

        <circle cx={accra.x} cy={accra.y} r="22" fill="#e85d04" fillOpacity="0.1" />
        <circle cx={accra.x} cy={accra.y} r="7" fill="#e85d04" fillOpacity="0.2" />
        <circle cx={accra.x} cy={accra.y} r="4.4" fill="#e85d04" />
        <circle cx={accra.x} cy={accra.y} r="1.8" fill="#fffaf2" />

        {origins.map((o) =>
          o.id === current.id ? (
            <circle key={`p-${o.id}`} r="3.1" fill="#fffaf2" stroke="#e85d04" strokeWidth="1.3">
              <animateMotion
                dur="2.6s"
                repeatCount="indefinite"
                rotate="auto"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.22 1 0.36 1"
              >
                <mpath href={`#${uid}-live`} />
              </animateMotion>
            </circle>
          ) : null,
        )}
        <path
          id={`${uid}-live`}
          d={`M${origins.find((o) => o.id === current.id)?.p.x} ${origins.find((o) => o.id === current.id)?.p.y} L${accra.x} ${accra.y}`}
          fill="none"
        />
      </svg>

      {origins.map((o) => {
        const on = o.id === current.id;
        return (
          <button
            key={`lbl-${o.id}`}
            type="button"
            onMouseEnter={() => setHover(o.id)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(o.id)}
            onBlur={() => setHover(null)}
            className={cn(
              "absolute hidden rounded-full px-2.5 py-0.5 text-[11px] tracking-[0.04em] transition-colors md:block",
              labelClass[o.side],
              on
                ? "bg-champagne text-bone shadow-[0_6px_18px_-8px_rgb(232_93_4_/_0.8)]"
                : "bg-[#fffaf2]/90 text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] backdrop-blur-sm hover:text-champagne",
            )}
            style={{ left: `${(o.p.x / W) * 100}%`, top: `${(o.p.y / H) * 100}%` }}
          >
            {o.name}
          </button>
        );
      })}

      <div
        className="pointer-events-none absolute hidden font-display text-[13px] font-semibold text-champagne md:block"
        style={{
          left: `${(accra.x / W) * 100}%`,
          top: `${(accra.y / H) * 100}%`,
          transform: "translate(14px, -8px)",
        }}
      >
        Accra
      </div>
      </div>

      <figcaption className="relative flex flex-col gap-1 border-t border-line bg-[#fffaf2]/70 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-[0.16em] text-champagne uppercase">
          {current.name} → Accra → Africa
        </p>
        <p className="text-xs text-stone">
          Starts around the world. Arrives in Africa.
        </p>
      </figcaption>
    </figure>
  );
}
