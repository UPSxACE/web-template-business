"use client";

import { AnchorContext } from "@/providers/anchor-provider";
import { ComponentProps, useContext } from "react";
import { twJoin } from "tailwind-merge";

type Props = {
  index: number;
  top?: string | number;
} & ComponentProps<"section">;

export default function HomeSection({
  id,
  index,
  top,
  children,
  ...props
}: Props) {
  const refs = useContext(AnchorContext);

  if (!refs) throw new Error("refs is null");

  return (
    <section
      ref={(el) => {
        refs[index].current = el;
      }}
      {...props}
    >
      <div
        id={id}
        style={{ top: top }}
        className={twJoin("relative block invisible", !top && "-top-[80px]")}
      />
      {children}
    </section>
  );
}
