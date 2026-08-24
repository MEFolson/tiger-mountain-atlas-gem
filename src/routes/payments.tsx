import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Shield, Wallet, Zap } from "lucide-react";
import { CorridorTheater } from "@/components/corridor-theater";
import { Button } from "@/components/ui/button";
import { markets } from "@/lib/site-data";
import { useWaitlist } from "@/lib/waitlist-store";

export const Route = createFileRoute("/payments")({
  component: PaymentsPage,
  head: () => ({
    meta: [
      { title: "Send money — Cush Payments" },
      {
        name: "description",
        content:
          "Send money home. They have it before you put the phone down. 1.8% fee. UK to Ghana opens first.",
      },
    ],
  }),
});

function PaymentsPage() {
  const openWaitlist = useWaitlist((s) => s.openWith);

  return (
    <main>
      <section className="relative min-h-[70svh] overflow-hidden pt-[4.5rem]">
        <img
          src="/images/sender-london.jpg"
          alt="Sending from a phone"
          className="absolute inset-0 size-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/15" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
            Cush Payments
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.25rem)] text-bone">
            Send money home.
          </h1>
          <p className="mt-5 max-w-lg text-base text-bone-2 md:text-lg">
            They have it before you put the phone down. 1.8% fee. You see what
            they get first. For people in the UK, US and Europe sending money
            to family in Africa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => openWaitlist("sender")}>
              Join the waitlist
            </Button>
            <Button size="lg" variant="onPhoto" asChild>
              <Link to="/business">I pay a team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3 md:px-8">
        {[
          {
            icon: Zap,
            title: "Fast",
            body: "They get the money quickly — to the phone or bank they already use.",
          },
          {
            icon: Wallet,
            title: "Wallet or bank",
            body: "Send to MTN MoMo, M-Pesa, and bank accounts in Africa.",
          },
          {
            icon: Shield,
            title: "No surprises",
            body: "The fee, the rate and what they receive are on one screen before you send.",
          },
        ].map((item) => (
          <article key={item.title}>
            <item.icon className="size-5 text-champagne" />
            <h2 className="mt-4 text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm text-stone">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <CorridorTheater />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          How it works
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "1",
              title: "Sign up",
              body: "Open an account. A short identity check, once.",
            },
            {
              n: "2",
              title: "Choose who gets it",
              body: "A mobile wallet or a bank account. You see the amount first.",
            },
            {
              n: "3",
              title: "Send",
              body: "They get it. You can track it.",
            },
          ].map((s) => (
            <li key={s.n}>
              <p className="text-sm font-semibold text-champagne">{s.n}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-stone">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[22rem]">
          <img
            src="/images/receive-hands.jpg"
            alt="Someone receiving money in Accra"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-surface px-5 py-16 md:px-12">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            1.8%. That is the fee.
          </h2>
          <p className="mt-4 max-w-md text-stone">
            Some apps hide the cost in the exchange rate. We take 1.8% and show
            what they receive before you confirm. If it is not on the screen,
            we do not charge it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Ghana first. Then more of Africa.
        </h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {markets.map((m) => (
            <li
              key={m.name}
              className="rounded-lg bg-surface px-4 py-4 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]"
            >
              <p className="text-sm font-semibold text-ink">{m.name}</p>
              <p className="text-xs text-stone">{m.city}</p>
              <p className="mt-3 text-xs font-semibold text-champagne">
                {m.status}
              </p>
            </li>
          ))}
        </ul>
        <Link
          to="/business"
          className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-champagne"
        >
          Paying a team instead? <ArrowUpRight className="size-4" />
        </Link>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Join the waitlist.
          </h2>
          <Button size="lg" onClick={() => openWaitlist("sender")}>
            Request access
          </Button>
        </div>
      </section>
    </main>
  );
}
