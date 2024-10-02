"use client";

import { LightButton } from "@/components/ui/light-button";
import { AnchorContext } from "@/providers/anchor-provider";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
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
    offset: ["start end", "-25% start"],
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

  // mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex gap-3 flex-wrap justify-center relative">
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
      <nav className="flex lg:hidden">
        <LightButton
          onClick={() => setMobileOpen((v) => !v)}
          variant="ghost"
          className={`h-14 w-14 bg-white rounded-full ml-auto flex items-center p-2 text-5xl`}
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </LightButton>
        {mobileOpen && (
          <ul className="pl-4 py-4 border-t border-solid border-gray-300 fixed top-[5rem] left-0 h-landing w-svw bg-white text-lg">
            {[...links, { id: "#contact", title: "Contact" }].map((x, i) => {
              return (
                <li key={i}>
                  <Link
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    href={x.id}
                    className={twMerge(
                      "block py-2 relative group",
                      calculatedActive === i
                        ? "text-black font-bold"
                        : "text-zinc-500 hover:text-black transition-colors duration-300"
                    )}
                    onClick={() => {
                      setMobileOpen(false);
                      setForcedTarget(i);
                    }}
                  >
                    {x.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </>
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
