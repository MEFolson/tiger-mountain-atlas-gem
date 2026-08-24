import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { productFromPath } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const product = productFromPath(pathname);

  return (
    <div data-product={product} className="min-h-svh bg-paper text-ink">
      <SiteNav />
      {children}
      <SiteFooter />
      <WaitlistDialog />
    </div>
  );
}
