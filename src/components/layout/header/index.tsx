import Image from "next/image";
import Link from "next/link";
import logoSvg from "../../../../public/logo.svg";

import { Button } from "@/components/ui/button";
import Links from "./_components/links";

export default function Header() {
  return (
    <header className="min-h-header flex justify-center items-center px-4 sticky top-0 bg-white z-30">
      <div className="w-full max-w-screen-xl flex items-center gap-2">
        <Logo />
        <Links />
        <Contact />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="mr-auto">
      <Image src={logoSvg} alt="logo" height={28} className="max-w-none" />
    </Link>
  );
}

function Contact() {
  return (
    <Button asChild className="ml-auto px-6 h-auto py-[0.6rem]">
      <Link href="#contact">Contact</Link>
    </Button>
  );
}
