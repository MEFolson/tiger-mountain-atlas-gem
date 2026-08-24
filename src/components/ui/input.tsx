import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] transition-[box-shadow] duration-150 placeholder:text-ash focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
