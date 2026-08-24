import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  corridors,
  providers,
  type Corridor,
} from "@/lib/site-data";
import { cn, formatMoney, formatNumber } from "@/lib/utils";
import { useWaitlist } from "@/lib/waitlist-store";

function receive(
  amount: number,
  corridor: Corridor,
  feePct: number,
  fxMarkup: number,
) {
  const fee = amount * feePct;
  const net = Math.max(0, amount - fee);
  const rate = corridor.rate * (1 - fxMarkup);
  return { fee, net, rate, arrives: net * rate };
}

export function CorridorTheater({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [corridorId, setCorridorId] = useState(corridors[0].id);
  const [amount, setAmount] = useState(250);
  const openWaitlist = useWaitlist((s) => s.openWith);
  const corridor = corridors.find((c) => c.id === corridorId) ?? corridors[0];

  const rows = useMemo(
    () =>
      providers.map((p) => ({
        ...p,
        ...receive(amount, corridor, p.feePct, p.fxMarkup),
      })),
    [amount, corridor],
  );
  const cush = rows[0];

  const hops = [
    { label: corridor.fromCity, sub: "You send" },
    { label: "Cush", sub: "1.8% fee" },
    { label: corridor.toCity, sub: corridor.wallet.split("·")[0].trim() },
  ];

  return (
    <section
      className={cn(
        "rounded-xl bg-surface p-5 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] md:p-8",
        className,
      )}
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
            The fee
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
            See what they get.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-stone">
          1.8% fee. Examples only — UK to Ghana opens first.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-ash" htmlFor="corridor">
              Where to
            </label>
            <select
              id="corridor"
              value={corridorId}
              onChange={(e) => setCorridorId(e.target.value)}
              className="h-11 rounded-md bg-paper px-3 text-sm text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)]"
            >
              {corridors.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                  {c.status === "soon" ? " — opening" : " — live"}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-ash" htmlFor="amount">
              You send
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 font-mono text-sm text-stone">
                {corridor.from}
              </span>
              <input
                id="amount"
                type="number"
                min={10}
                max={20000}
                value={amount}
                onChange={(e) =>
                  setAmount(Math.max(10, Number(e.target.value) || 0))
                }
                className="h-14 w-full rounded-md bg-paper pr-4 pl-16 font-mono text-2xl text-ink tabular-nums shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)]"
              />
            </div>
          </div>

          <div className="rounded-lg bg-[#fffaf2] p-5 shadow-[inset_0_1px_0_rgb(255_252_248_/_0.9),0_0_0_1px_rgb(23_20_17_/_0.08)]">
            <p className="text-xs text-ash">They receive</p>
            <p className="mt-1 font-display text-4xl text-ink tabular-nums">
              {formatMoney(
                cush.arrives,
                corridor.to,
                corridor.to === "NGN" ? 0 : 2,
              )}
            </p>
            <p className="mt-2 text-sm text-stone">
              Fee {formatMoney(cush.fee, corridor.from)} · 1.8% · rate{" "}
              <span className="tabular-nums">
                1 {corridor.from} = {formatNumber(corridor.rate, corridor.rate > 100 ? 0 : 2)}{" "}
                {corridor.to}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[50, 100, 250, 500, 1000].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setAmount(n)}
                className={cn(
                  "h-9 rounded-full px-3.5 text-xs tabular-nums transition-colors",
                  amount === n
                    ? "bg-champagne text-bone"
                    : "text-stone shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] hover:text-ink",
                )}
              >
                {n.toLocaleString("en-GB")}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grain relative overflow-hidden rounded-lg bg-[#f3efe6] p-5 md:p-7">
            <p className="text-xs tracking-[0.16em] text-ash uppercase">
              {corridor.rail}
            </p>

            <div className="relative mt-8">
              <svg
                className="pointer-events-none absolute top-[13px] right-[8%] left-[8%] hidden h-2 md:block"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <line
                  x1="0"
                  y1="4"
                  x2="100"
                  y2="4"
                  stroke="#e85d04"
                  strokeOpacity="0.18"
                  strokeWidth="1.2"
                />
                <line
                  x1="0"
                  y1="4"
                  x2="100"
                  y2="4"
                  stroke="#e85d04"
                  strokeWidth="1.2"
                  strokeDasharray="4 10"
                  className="arc-flow"
                />
              </svg>

              <ol className="flex flex-col md:grid md:grid-cols-4">
                {hops.map((hop, i) => (
                  <li
                    key={hop.label}
                    className="relative flex items-start gap-4 pb-7 last:pb-0 md:flex-col md:items-center md:pb-0 md:text-center"
                  >
                    {i < hops.length - 1 ? (
                      <span className="absolute top-7 bottom-0 left-[13px] w-px bg-champagne/25 md:hidden" />
                    ) : null}
                    <span className="relative z-[1] flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] shadow-[0_0_0_1px_rgb(232_93_4_/_0.35),0_0_0_6px_rgb(243_239_230)]">
                      <span className="size-2 rounded-full bg-champagne" />
                    </span>
                    <div className="md:mt-3">
                      <p className="font-mono text-[10px] tracking-[0.14em] text-champagne">
                        0{i + 1}
                      </p>
                      <p className="mt-1 text-sm text-ink">{hop.label}</p>
                      <p className="text-xs text-ash">{hop.sub}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {!compact ? (
            <div className="mt-4 overflow-hidden rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-ash">
                    <th className="py-2 font-medium">Provider</th>
                    <th className="py-2 font-medium">Fee</th>
                    <th className="py-2 text-right font-medium">Arrives</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.id}
                      className={cn(
                        "border-t border-line",
                        row.recommended ? "text-ink" : "text-stone",
                      )}
                    >
                      <td className="py-2.5">
                        {row.name}
                        {row.recommended ? (
                          <span className="ml-2 text-[11px] text-champagne">
                            Cush
                          </span>
                        ) : null}
                      </td>
                      <td className="py-2.5 tabular-nums">
                        {formatMoney(row.fee, corridor.from)}
                      </td>
                      <td className="py-2.5 text-right font-medium tabular-nums">
                        {formatMoney(
                          row.arrives,
                          corridor.to,
                          corridor.to === "NGN" ? 0 : 2,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-[11px] text-ash">
                Estimates for illustration. Actual pricing set at send time.
                Competitors modelled on published fee bands plus typical FX
                markup.
              </p>
            </div>
          ) : null}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => openWaitlist("sender")}>
              Join the waitlist
              <ArrowUpRight className="size-4" />
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/core">See the rails</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
