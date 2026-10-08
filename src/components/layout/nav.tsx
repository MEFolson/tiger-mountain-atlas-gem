import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coreNav, paymentsNav, productFromPath } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { useWaitlist } from "@/lib/waitlist-store";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const product = productFromPath(pathname);
  const isCore = product === "core";
  const isHome = pathname === "/";
  const items = isCore ? coreNav : paymentsNav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openWaitlist = useWaitlist((s) => s.openWith);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[box-shadow,background-color] duration-200",
          isCore ? "bg-ink text-bone" : "bg-paper text-ink",
          scrolled || open
            ? isCore
              ? "shadow-[0_1px_0_rgb(255_252_248_/_0.12)]"
              : "shadow-[0_1px_0_rgb(23_20_17_/_0.08)]"
            : "",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
          <Link
            to={isCore ? "/core" : isHome ? "/" : "/payments"}
            aria-label={isCore ? "Cush Core home" : "Cush Payments home"}
            className="flex items-center gap-2.5"
          >
            {isCore ? (
              <>
                <img
                  src="/images/logo-mark.png"
                  alt=""
                  className="h-8 w-auto outline-none brightness-0 invert"
                />
                <span className="text-[15px] font-semibold tracking-tight text-bone">
                  Cush Core
                </span>
              </>
            ) : (
              <img
                src="/images/logo-nav.png"
                alt="Cush Payments"
                className="h-8 w-auto max-w-[min(11.5rem,58vw)] outline-none sm:h-9 md:h-10 md:max-w-none"
              />
            )}
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-1 rounded-full p-1 md:flex",
              isCore
                ? "bg-bone/8 shadow-[0_0_0_1px_rgb(255_252_248_/_0.12)]"
                : "bg-surface shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
            )}
          >
            {items.map((item) => {
              const on = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors duration-150",
                    isCore
                      ? on
                        ? "bg-champagne text-bone"
                        : "text-bone/80 hover:text-bone"
                      : on
                        ? "bg-champagne text-bone"
                        : "text-ink hover:bg-ink/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to={isCore ? "/payments" : "/core"}
              className={cn(
                "text-xs font-semibold tracking-wide uppercase",
                isCore ? "text-bone/55 hover:text-bone" : "text-stone hover:text-ink",
              )}
            >
              {isCore ? "Cush Payments" : "Cush Core"}
            </Link>
            {isCore ? (
              <Button size="sm" asChild>
                <Link
                  to="/company"
                  hash="contact"
                  search={{ role: "institution" }}
                >
                  Talk to us
                </Link>
              </Button>
            ) : (
              <Button size="sm" onClick={() => openWaitlist("sender")}>
                Join the beta
              </Button>
            )}
          </div>

          <button
            type="button"
            className={cn(
              "flex size-11 items-center justify-center rounded-full md:hidden",
              isCore
                ? "bg-bone/10 text-bone shadow-[0_0_0_1px_rgb(255_252_248_/_0.16)]"
                : "bg-surface text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.08)]",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div
          className={cn(
            "fixed inset-0 z-40 pt-16 md:hidden",
            isCore ? "bg-ink text-bone" : "bg-paper text-ink",
          )}
        >
          <nav
            className={cn(
              "flex h-full flex-col px-5 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]",
              isCore ? "bg-ink" : "bg-paper",
            )}
          >
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-16 flex-col justify-center border-b",
                  isCore ? "border-bone/10" : "border-line",
                  pathname === item.to
                    ? "text-champagne"
                    : isCore
                      ? "text-bone"
                      : "text-ink",
                )}
              >
                <span className="text-lg font-semibold">{item.label}</span>
                <span
                  className={cn(
                    "text-sm font-normal",
                    isCore ? "text-bone/55" : "text-stone",
                  )}
                >
                  {item.hint}
                </span>
              </Link>
            ))}
            <Link
              to={isCore ? "/payments" : "/core"}
              className={cn(
                "flex min-h-16 flex-col justify-center border-b",
                isCore ? "border-bone/10 text-bone" : "border-line text-ink",
              )}
            >
              <span className="text-lg font-semibold">
                {isCore ? "Cush Payments" : "Cush Core"}
              </span>
              <span
                className={cn(
                  "text-sm font-normal",
                  isCore ? "text-bone/55" : "text-stone",
                )}
              >
                {isCore ? "Send money home" : "For banks and payment companies"}
              </span>
            </Link>
            {isCore ? (
              <Button className="mt-auto w-full" size="lg" asChild>
                <Link
                  to="/company"
                  hash="contact"
                  search={{ role: "institution" }}
                  onClick={() => setOpen(false)}
                >
                  Talk to us
                </Link>
              </Button>
            ) : (
              <Button
                className="mt-auto w-full"
                size="lg"
                onClick={() => {
                  setOpen(false);
                  openWaitlist("sender");
                }}
              >
                Join the beta
              </Button>
            )}
          </nav>
        </div>
      ) : null}
    </>
  );
}
