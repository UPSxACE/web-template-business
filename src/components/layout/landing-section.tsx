"use client";

import { AnchorContext } from "@/providers/anchor-provider";
import { ComponentProps, useContext } from "react";
import { twJoin } from "tailwind-merge";

type Props = {
  index: number;
  anchorClassname?: string;
} & ComponentProps<"section">;

export default function HomeSection({
  id,
  index,
  anchorClassname,
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
        className={twJoin(
          "relative block invisible",
          !anchorClassname
            ? "-top-[2.5rem] max-lg:!-top-[2.5rem] 2xl:top-[2.5rem]"
            : anchorClassname
        )}
      />
      {children}
    </section>
  );
}
