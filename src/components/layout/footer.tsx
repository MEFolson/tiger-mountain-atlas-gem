import { Link, useRouterState } from "@tanstack/react-router";
import { brand, coreNav, paymentsNav, productFromPath } from "@/lib/site-data";

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isCore = productFromPath(pathname) === "core";
  const items = isCore ? coreNav : paymentsNav;

  return (
    <footer
      className={
        isCore
          ? "border-t border-bone/10 bg-ink text-bone"
          : "border-t border-line bg-surface text-ink"
      }
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          {isCore ? (
            <p className="text-lg font-semibold">Cush Core</p>
          ) : (
            <img
              src="/images/logo-nav.png"
              alt="Cush Payments"
              className="h-10 w-auto outline-none"
            />
          )}
          <p
            className={
              isCore
                ? "mt-4 max-w-sm text-sm text-bone/65"
                : "mt-4 max-w-sm text-sm text-stone"
            }
          >
            {isCore
              ? "AI-native core banking for Africa. Licensed to banks, payment companies and governments."
              : `${brand.tagline} ${brand.promise}`}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-7">
          <div>
            <p
              className={
                isCore
                  ? "text-xs font-semibold tracking-[0.16em] text-bone/45 uppercase"
                  : "text-xs font-semibold tracking-[0.16em] text-ash uppercase"
              }
            >
              {isCore ? "Cush Core" : "Cush Payments"}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={
                      isCore
                        ? "text-bone/65 transition-colors hover:text-bone"
                        : "text-stone transition-colors hover:text-ink"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className={
                isCore
                  ? "text-xs font-semibold tracking-[0.16em] text-bone/45 uppercase"
                  : "text-xs font-semibold tracking-[0.16em] text-ash uppercase"
              }
            >
              Other site
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  to={isCore ? "/payments" : "/core"}
                  className={
                    isCore
                      ? "text-bone/65 hover:text-bone"
                      : "text-stone hover:text-ink"
                  }
                >
                  {isCore ? "Cush Payments" : "Cush Core"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p
              className={
                isCore
                  ? "text-xs font-semibold tracking-[0.16em] text-bone/45 uppercase"
                  : "text-xs font-semibold tracking-[0.16em] text-ash uppercase"
              }
            >
              Write
            </p>
            <Link
              to="/company"
              hash="contact"
              className={
                isCore
                  ? "mt-3 block text-sm text-bone/65 hover:text-bone"
                  : "mt-3 block text-sm text-stone hover:text-ink"
              }
            >
              Contact form
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          isCore
            ? "mx-auto flex max-w-6xl flex-col gap-2 border-t border-bone/10 px-5 py-6 text-xs text-bone/45 md:flex-row md:items-center md:justify-between md:px-8"
            : "mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-5 py-6 text-xs text-ash md:flex-row md:items-center md:justify-between md:px-8"
        }
      >
        <p>© {new Date().getFullYear()} {brand.legal}. All rights reserved.</p>
        <p>
          {isCore
            ? "Licensing conversations. Not an offer of regulated services."
            : "Illustrative rates. Not an offer of regulated services."}
        </p>
      </div>
    </footer>
  );
}
