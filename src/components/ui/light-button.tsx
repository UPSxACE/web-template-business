import {
  ButtonProps,
  Button as ButtonSDN,
  buttonVariants,
} from "@/components/sui/button";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const LightButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <ButtonSDN
        className={twMerge(
          "bg-white text-t-black hover:bg-neutral-200 duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
LightButton.displayName = "LightButton";

export { buttonVariants, LightButton };
