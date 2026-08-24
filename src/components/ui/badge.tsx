import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide text-champagne shadow-[0_0_0_1px_rgb(232_93_4_/_0.28)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
