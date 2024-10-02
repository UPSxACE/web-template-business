import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import logoSvg from "../../../public/logo-white.svg";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center px-4 sm:px-8 py-16 bg-neutral-900 text-white">
        <div className="w-full max-w-screen-xl gap-12 lg:gap-2 flex justify-between flex-wrap">
          <div className="flex flex-col gap-4 w-full lg:max-w-72 lg:w-fit max-lg:items-center max-lg:text-center">
            <Logo />
            <p className="leading-6">
              Quantic is a boutique social media agency that offers full-service
              social media solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full lg:max-w-72 lg:w-fit max-lg:items-center max-lg:text-center">
            <span className="text-2xl font-bold">Company</span>
            <ul className="text-2xl space-y-4">
              <li className="flex gap-3 items-center justify-center">
                <Link href="/#home" className="text-base max-lg:text-center">
                  Home
                </Link>
              </li>
              <li className="flex gap-3 items-center justify-center">
                <Link
                  href="/#about-us"
                  className="text-base max-lg:text-center"
                >
                  About Us
                </Link>
              </li>
              <li className="flex gap-3 items-center justify-center">
                <Link
                  href="/#services"
                  className="text-base max-lg:text-center"
                >
                  Services
                </Link>
              </li>
              <li className="flex gap-3 items-center justify-center">
                <Link href="/#contact" className="text-base max-lg:text-center">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full lg:max-w-72 lg:w-fit max-lg:items-center max-lg:text-center">
            <span className="text-2xl font-bold">Social Media</span>
            <ul className="text-2xl gap-4 flex">
              <li className="flex gap-3 items-center">
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li className="flex gap-3 items-center">
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="flex gap-3 items-center">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full lg:max-w-72 lg:w-fit max-lg:items-center max-lg:text-center">
            <span className="text-2xl font-bold">Get in Touch</span>
            <ul className="text-2xl space-y-4">
              <li className="flex gap-3 items-center">
                <FaRegEnvelope />
                <span className="text-base">yourmail@hello.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt />
                <span className="text-base">+1 386-688-3295</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center h-12 bg-t-black px-8 sm:px-12 text-gray-300 max-sm:h-24 max-lg:h-16">
        <div className="flex max-md:flex-col max-md:justify-center md:items-center w-full max-w-screen-xl max-md:gap-1">
          <span className="text-center">© Quantic. All rights reserved.</span>
          <span className="md:ml-auto max-md:text-center max-md:justify-center flex items-center">
            Developed by{" "}
            <Link href="https://vyzion.pt" target="_blank" className="ml-1">
              Vyzion.pt
            </Link>{" "}
            <Link
              href="https://vyzion.pt"
              className="flex items-start  relative h-[18px] aspect-[151/119] mx-1"
            >
              <Image
                alt="vyzion logo"
                src="/vyzion-white.svg"
                fill
                className="object-contain"
              />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <Link href="/" className="mr-auto max-lg:ml-auto">
      <Image src={logoSvg} alt="logo" height={32} className="max-w-none" />
    </Link>
  );
}
