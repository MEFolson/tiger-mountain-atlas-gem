import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { OriginationMap } from "@/components/origination-map";
import { leadership } from "@/lib/site-data";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: "About — Cush" },
      {
        name: "description",
        content:
          "Cush Payments sends money to Africa. Cush Core is the platform licensed to banks and payment companies.",
      },
    ],
  }),
});

function CompanyPage() {
  return (
    <main>
      <section className="border-b border-line pt-[4.5rem]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
            About
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.15rem,3.4vw+1.05rem,4.25rem)] text-ink">
            Two products. One company.
          </h1>
          <p className="mt-5 max-w-xl text-base text-stone md:text-lg">
            Cush Payments is for people sending money home. Cush Core is for
            banks and payment companies. Founded by Matthew Ekow Folson and
            Jose Luis Caldeira.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2 md:px-8">
        <Link
          to="/payments"
          className="rounded-xl bg-surface p-8 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
            For people sending money home
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink">Cush Payments</h2>
          <p className="mt-3 text-sm text-stone">
            Send money to Africa. 1.8% fee. Wallet or bank. UK to Ghana opens
            first.
          </p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-champagne">
            Send money <ArrowUpRight className="size-4" />
          </span>
        </Link>
        <Link
          to="/core"
          className="rounded-xl bg-ink p-8 text-bone"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-champagne uppercase">
            For banks and payment companies
          </p>
          <h2 className="mt-3 font-display text-3xl">Cush Core</h2>
          <p className="mt-3 text-sm text-bone-2">
            License the platform. Run accounts, cards, loans and payments in
            your own brand.
          </p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-champagne">
            Cush Core <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="max-w-2xl font-display text-3xl text-ink md:text-4xl">
          From all over the world. Arriving in Africa.
        </h2>
        <p className="mt-4 max-w-xl text-base text-stone">
          People send from where they live. Family receives in Africa — Ghana
          first, then more of the continent.
        </p>
        <OriginationMap className="mt-10" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Leadership
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {leadership.map((person) => (
            <article
              key={person.name}
              className="rounded-xl bg-surface p-6 shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)] md:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-paper text-lg font-semibold text-champagne shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]">
                  {person.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{person.name}</h3>
                  <p className="text-sm text-stone">
                    {person.role} · {person.years}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-stone">{person.bio}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-champagne"
              >
                LinkedIn <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Write to us.
            </h2>
            <p className="mt-3 max-w-md text-stone">
              People sending money, companies and banks — one form.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
