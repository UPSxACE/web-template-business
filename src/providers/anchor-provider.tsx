"use client";
import { createContext, MutableRefObject, useRef } from "react";

export const AnchorContext = createContext<
  MutableRefObject<HTMLElement | null>[] | null
>(null);

export default function AnchorProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref0 = useRef<HTMLElement | null>(null);
  const ref1 = useRef<HTMLElement | null>(null);
  const ref2 = useRef<HTMLElement | null>(null);
  const ref3 = useRef<HTMLElement | null>(null);
  const ref4 = useRef<HTMLElement | null>(null);
  const ref5 = useRef<HTMLElement | null>(null);

  const refs = [ref0, ref1, ref2, ref3, ref4, ref5];

  return (
    <AnchorContext.Provider value={refs}>{children}</AnchorContext.Provider>
  );
}
