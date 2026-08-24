import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Cush — Africa's payment platform" },
      {
        name: "description",
        content:
          "Cush Payments: send money to Africa. Cush Core: core banking for banks and payment companies.",
      },
    ],
  }),
});

function Home() {
  return (
    <main className="pt-16 md:pt-[4.5rem]">
      <section className="grid min-h-[calc(100svh-4.5rem)] md:grid-cols-2">
        <Link
          to="/payments"
          className="group relative flex min-h-[70svh] flex-col justify-end overflow-hidden md:min-h-0"
        >
          <img
            src="/images/hero-corridor.jpg"
            alt="Sending money home"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
          <div className="relative px-6 py-12 md:px-10 md:py-16">
            <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
              Cush Payments
            </p>
            <h1 className="mt-3 max-w-md font-display text-[clamp(2rem,4vw,3.25rem)] text-bone">
              Send money to Africa.
            </h1>
            <p className="mt-3 max-w-sm text-base text-bone-2">
              For people sending money home. 1.8% fee. You see what they get
              before you send.
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-bone">
              Open Cush Payments <ArrowUpRight className="size-4" />
            </span>
          </div>
        </Link>

        <Link
          to="/core"
          className="group relative flex min-h-[70svh] flex-col justify-end overflow-hidden md:min-h-0"
        >
          <img
            src="/images/core-hall.jpg"
            alt="Cush Core"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
          <div className="relative px-6 py-12 md:px-10 md:py-16">
            <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
              Cush Core
            </p>
            <h1 className="mt-3 max-w-md font-display text-[clamp(2rem,4vw,3.25rem)] text-bone">
              Core banking for African institutions.
            </h1>
            <p className="mt-3 max-w-sm text-base text-bone-2">
              For banks and payment companies. License the platform. Run
              accounts, cards, loans and payments in your own brand.
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-bone">
              Open Cush Core <ArrowUpRight className="size-4" />
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}
