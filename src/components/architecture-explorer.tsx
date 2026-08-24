import { useState } from "react";
import { coreLayers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ArchitectureExplorer() {
  const [active, setActive] = useState<(typeof coreLayers)[number]["id"]>(
    coreLayers[1].id,
  );
  const layer = coreLayers.find((l) => l.id === active) ?? coreLayers[0];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <ol className="flex flex-col gap-2 lg:col-span-5">
        {coreLayers.map((item) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "w-full rounded-lg px-4 py-4 text-left transition-[background-color,box-shadow] duration-150",
                  on
                    ? "bg-surface shadow-[0_0_0_1px_rgb(232_93_4_/_0.4)]"
                    : "hover:bg-surface",
                )}
              >
                <p className="font-mono text-[11px] text-champagne">
                  {item.kicker}
                </p>
                <p className="mt-1 text-lg text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-stone">{item.summary}</p>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08),0_24px_48px_-28px_rgb(23_20_17_/_0.28)] lg:col-span-7 lg:p-8">
        <div className="relative mb-10 hidden h-40 lg:block">
          {coreLayers.map((item, i) => {
            const on = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "absolute right-0 left-0 flex h-[3.25rem] items-center justify-between rounded-lg px-4 text-left transition-all duration-300",
                  on
                    ? "bg-[#fffaf2] shadow-[0_0_0_1px_rgb(232_93_4_/_0.45),0_16px_28px_-16px_rgb(232_93_4_/_0.7)]"
                    : "bg-[#efe8dc] shadow-[0_0_0_1px_rgb(23_20_17_/_0.06)] hover:bg-[#f4eee4]",
                )}
                style={{
                  top: `${i * 1.35}rem`,
                  transform: `translateY(${on ? "-0.35rem" : "0"})`,
                  zIndex: on ? 20 : i + 1,
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-champagne">
                  {item.kicker}
                </span>
                <span className={cn("text-sm", on ? "text-ink" : "text-stone")}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[11px] tracking-[0.16em] text-champagne uppercase">
          Layer {layer.kicker}
        </p>
        <h3 className="mt-3 font-display text-3xl text-ink">{layer.title}</h3>
        <p className="mt-4 text-base text-stone">{layer.body}</p>
        <ul className="mt-6 space-y-3">
          {layer.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-px w-6 shrink-0 bg-champagne" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
