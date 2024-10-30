import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-w-[243px] font-rightGrotesk items-center justify-center whitespace-nowrap rounded-[12px] sm:text-2xl tracking-[3px] leading-none font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-button border-[8px] border-gray-900 uppercase transition-all duration-300 ease-in-out hover:shadow-button-hover hover:translate-x-1 hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "bg-magenta text-white hover:bg-primary/90 hover:bg-pink-400",
        mint: "bg-mint hover:bg-pink-300 hover:text-white",
        purple:
          "bg-purple-200 text-white hover:bg-red hover:text-white shadow-purple border-purple-300 hover:shadow-red hover:shadow-purple-hover ",
      },
      size: {
        default: "p-4 sm:py-5 sm:px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
