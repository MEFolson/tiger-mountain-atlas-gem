import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  FileSpreadsheet,
  KeyRound,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/business")({
  component: BusinessPage,
  head: () => ({
    meta: [
      { title: "Cush Business — Payroll and payouts across Africa" },
      {
        name: "description",
        content:
          "Pay employees, suppliers, and partners across Africa from one dashboard. Transparent FX, bulk payouts, API-first.",
      },
    ],
  }),
});

const uses = [
  {
    icon: Users,
    title: "Payroll",
    body: "Pay remote and in-country teams in local currency on payday — not days later.",
  },
  {
    icon: Building2,
    title: "Suppliers",
    body: "Pay African vendors straight to bank accounts and mobile wallets. The exchange rate is on the statement.",
  },
  {
    icon: FileSpreadsheet,
    title: "Bulk disbursements",
    body: "Hundreds of payouts in one batch. Employers, marketplaces, NGOs. CSV or API.",
  },
  {
    icon: KeyRound,
    title: "API-first",
    body: "One payouts API into the software you already use. Same platform as Cush Payments.",
  },
];

const features = [
  "Dedicated account manager",
  "CSV and API bulk upload",
  "Multi-user access and approvals",
  "Real-time settlement tracking",
  "Consolidated monthly statements",
  "Regulated, auditable rails",
];

function BusinessPage() {
  return (
    <main>
      <section className="relative min-h-[70svh] overflow-hidden pt-[4.5rem]">
        <img
          src="/images/business-floor.jpg"
          alt="Finance operations floor in Lagos at dusk"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/25" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8">
          <Badge>For companies</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.5rem)] text-bone">
            Pay staff and suppliers in Africa. From one desk.
          </h1>
          <p className="mt-5 max-w-xl text-base text-bone-2">
            Pay employees, suppliers and partners in Africa from one place.
            Clear exchange rate. Fast arrival. Same platform as Cush Payments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/company" hash="contact" search={{ role: "business" }}>
                Talk to sales
              </Link>
            </Button>
            <Button size="lg" variant="onPhoto" asChild>
              <Link to="/core">For banks: Cush Core</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-3">
          {[
            ["Ghana first", "Then the continent"],
            ["Seconds", "Target settlement"],
            ["1.8%", "Stated pricing"],
          ].map(([n, l]) => (
            <div key={l} className="px-5 py-10 md:px-8">
              <p className="font-display text-3xl text-ink">{n}</p>
              <p className="mt-1 text-sm text-stone">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="text-xs tracking-[0.18em] text-champagne uppercase">
          One desk
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">
          Built for finance teams who are tired of stitching five providers.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {uses.map((u) => (
            <article
              key={u.title}
              className="rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] md:p-8"
            >
              <u.icon className="size-5 text-champagne" />
              <h3 className="mt-4 font-display text-2xl text-ink">{u.title}</h3>
              <p className="mt-2 text-sm text-stone">{u.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs tracking-[0.18em] text-champagne uppercase">
              Operations
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Fits how you already work.
            </h2>
            <p className="mt-4 text-stone">
              Approvals, statements, and a named human. The software is the
              rails; the relationship is the bank.
            </p>
            <Button className="mt-8" asChild>
              <Link to="/company" hash="contact" search={{ role: "business" }}>
                Book a conversation
              </Link>
            </Button>
          </div>
          <ul className="space-y-0">
            {features.map((f) => (
              <li
                key={f}
                className="flex h-14 items-center border-b border-line text-sm text-ink"
              >
                <span className="mr-4 h-px w-6 bg-champagne" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
