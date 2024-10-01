"use client";

import { AnchorContext } from "@/providers/anchor-provider";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Links() {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0]);

  const refs = useContext(AnchorContext);
  if (!refs) throw new Error("refs is null");

  const { scrollYProgress } = useScroll({
    // container: container,
    target: refs[0],
    offset: ["start end", "0px start"],
    layoutEffect: false,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    setProgress((p) => {
      const newP = [...p];
      newP[1] = latest === 1 ? 1 : 0;
      return newP;
    });
  });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    // container: container,
    target: refs[1],
    offset: ["start end", "-25% start"],
    layoutEffect: false,
  });
  useMotionValueEvent(scrollYProgress1, "change", (latest) => {
    // console.log(latest);
    setProgress((p) => {
      const newP = [...p];
      newP[1] = latest === 1 ? 1 : 0;
      return newP;
    });
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    // container: container,
    target: refs[2],
    offset: ["start end", "-25% start"],
    layoutEffect: false,
  });
  useMotionValueEvent(scrollYProgress2, "change", (latest) => {
    setProgress((p) => {
      const newP = [...p];
      newP[2] = latest === 1 ? 1 : 0;
      return newP;
    });
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    // container: container,
    target: refs[3],
    offset: ["start end", "-90% start"],
    layoutEffect: false,
  });
  useMotionValueEvent(scrollYProgress3, "change", (latest) => {
    setProgress((p) => {
      const newP = [...p];
      newP[3] = latest === 1 ? 1 : 0;
      return newP;
    });
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    // container: container,
    target: refs[4],
    offset: ["start end", "-25% start"],
    layoutEffect: false,
  });
  useMotionValueEvent(scrollYProgress4, "change", (latest) => {
    setProgress((p) => {
      const newP = [...p];
      newP[4] = latest === 1 ? 1 : 0;
      return newP;
    });
  });
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    // container: container,
    target: refs[5],
    offset: ["start end", "-25% start"],
    layoutEffect: false,
  });
  useMotionValueEvent(scrollYProgress5, "change", (latest) => {
    setProgress((p) => {
      const newP = [...p];
      newP[5] = latest === 1 ? 1 : 0;
      return newP;
    });
  });

  const active = refs[0].current
    ? progress.reduce((acc, curr) => acc + curr, 0)
    : -1;

  const [forcedTarget, setForcedTarget] = useState<number | null>(null);

  useEffect(() => {
    if (forcedTarget !== null) {
      const timeout = setTimeout(() => {
        setForcedTarget(null);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [forcedTarget]);

  const calculatedActive = forcedTarget !== null ? forcedTarget : active;

  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const currentTab = tabsRef?.current?.[calculatedActive];

  return (
    <nav className="flex gap-3 flex-wrap justify-center relative">
      <div
        style={{
          width: currentTab ? currentTab?.clientWidth : 0,
          left: currentTab ? currentTab?.offsetLeft : 0,
        }}
        className="absolute bg-t-black w-full h-1 bottom-0 transition-all duration-300 z-10"
      />

      {links.map((x, i) => {
        return (
          <Link
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            key={i}
            href={x.id}
            className={twMerge(
              "px-1 py-3 block relative group font-semibold",
              calculatedActive === i ? "text-black" : "text-zinc-500"
            )}
            onClick={() => {
              setForcedTarget(i);
            }}
          >
            {x.title}
            <div className="absolute bg-gray-300 w-full h-1 bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </Link>
        );
      })}
    </nav>
  );
}

type Anchor = {
  id: string;
  title: string;
};

const links: Anchor[] = [
  {
    id: "/#home",
    title: "Home",
  },
  {
    id: "/#about-us",
    title: "About us",
  },
  {
    id: "/#services",
    title: "Services",
  },
  {
    id: "/#success-story",
    title: "Success Story",
  },
  {
    id: "/#our-team",
    title: "Our Team",
  },
  {
    id: "/#testimonial",
    title: "Testimonial",
  },
];
