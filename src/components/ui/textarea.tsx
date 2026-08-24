import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full resize-y rounded-md bg-paper px-3.5 py-3 text-sm text-ink shadow-[0_0_0_1px_rgb(23_20_17_/_0.12)] transition-[box-shadow] duration-150 placeholder:text-ash focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(232_93_4_/_0.7)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
