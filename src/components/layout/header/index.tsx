import Link from "next/link";

import { Button } from "@/components/ui/button";
import Links from "./_components/links";

export default function Header() {
  return (
    <header className="min-h-header flex justify-center items-center px-4 sm:px-8 sticky top-0 bg-white z-30">
      <div className="w-full max-w-screen-xl flex items-center gap-2">
        <Links />
        <Contact />
      </div>
    </header>
  );
}

function Contact() {
  return (
    <Button asChild className="max-lg:hidden ml-auto px-6 h-auto py-[0.6rem]">
      <Link href="#contact">Contact</Link>
    </Button>
  );
}
