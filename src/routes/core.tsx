import { createFileRoute } from "@tanstack/react-router";
import { ArchitectureExplorer } from "@/components/architecture-explorer";
import { Button } from "@/components/ui/button";
import { coreModules, rails } from "@/lib/site-data";
import { useWaitlist } from "@/lib/waitlist-store";

export const Route = createFileRoute("/core")({
  component: CorePage,
  head: () => ({
    meta: [
      { title: "For banks — Cush Core" },
      {
        name: "description",
        content:
          "Cush Core is the platform behind Cush Payments. License it to run accounts, cards, loans and sending money in your own brand.",
      },
    ],
  }),
});

function CorePage() {
  const openWaitlist = useWaitlist((s) => s.openWith);

  return (
    <main>
      <section className="relative min-h-[80svh] overflow-hidden pt-[4.5rem]">
        <img
          src="/images/core-hall.jpg"
          alt="Architectural hall of stone and brass"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/25" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
            Cush Core
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone">
            AI-native core banking for Africa.
          </h1>
          <p className="mt-5 max-w-xl text-base text-bone-2 md:text-lg">
            Licensed to banks, payment companies and governments. The same
            stack that powers Cush Payments, under your brand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => openWaitlist("institution")}>
              Talk to us
            </Button>
            <Button size="lg" variant="onPhoto" asChild>
              <a href="#platform">See the platform</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8">
          {[
            {
              k: "Your brand",
              v: "Issue accounts, cards, loans and payments in your own name.",
            },
            {
              k: "~$1 / customer / month",
              v: "A simple per-customer price, wherever you operate.",
            },
            {
              k: "Multi-entity",
              v: "One platform across companies, countries and currencies.",
            },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-2xl text-ink">{s.k}</p>
              <p className="mt-2 text-sm text-stone">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-champagne uppercase">
          How it is built
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">
          Four layers. One system.
        </h2>
        <p className="mt-4 max-w-2xl text-stone">
          Many African institutions stitch together a European core, a payments
          hub and a wallet vendor. Cush Core is one system, from the account
          through to African payment networks.
        </p>
        <div className="mt-12">
          <ArchitectureExplorer />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-champagne uppercase">
            What you can offer
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Products on Cush Core.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((m) => (
              <article
                key={m.title}
                className="rounded-xl bg-paper p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]"
              >
                <h3 className="text-lg font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-stone">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-champagne uppercase">
          Connections
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">
          Money in from the UK, Europe and the US. Money out on African networks.
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {rails.map((r) => (
            <li
              key={r.name}
              className="rounded-lg bg-surface px-4 py-4 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]"
            >
              <p className="text-sm font-semibold text-ink">{r.name}</p>
              <p className="text-xs text-ash">{r.region}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/still-coins.jpg"
          alt="Pound and cedi on a dark desk"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-champagne uppercase">
            Compliance
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-bone">
            Built to be examined.
          </h2>
          <p className="mt-4 max-w-xl text-bone-2">
            Identity checks, anti-money-laundering, and transaction monitoring
            are in the design. Ready for Bank of Ghana sandbox work and licences
            in more than one country. Every payment is recorded. Every decision
            can be replayed.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:max-w-xl">
            {[
              "Permanent payment record",
              "AI that follows your rules",
              "Books across companies",
              "Ready for a regulator sandbox",
            ].map((x) => (
              <li key={x} className="text-sm text-bone">
                <span className="mr-3 inline-block h-px w-5 bg-champagne align-middle" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <h2 className="font-display text-4xl text-ink">
              Bring your institution onto the platform.
            </h2>
            <p className="mt-2 max-w-md text-sm text-stone">
              Tell us what you want to offer. We will walk through the stack
              with you.
            </p>
          </div>
          <Button size="lg" onClick={() => openWaitlist("institution")}>
            Talk to us
          </Button>
        </div>
      </section>
    </main>
  );
}
