import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-champagne text-bone hover:bg-champagne-2 rounded-full",
        secondary:
          "bg-transparent text-ink rounded-full shadow-[0_0_0_1px_rgb(23_20_17_/_0.16)] hover:bg-ink/5",
        ghost: "bg-transparent text-ink hover:bg-ink/5 rounded-full",
        ink: "bg-ink text-bone hover:bg-ink-2 rounded-full",
        onPhoto:
          "bg-transparent text-bone rounded-full shadow-[0_0_0_1px_rgb(255_252_248_/_0.45)] hover:bg-bone/10",
        link: "rounded-none bg-transparent px-0 text-champagne underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
