"use client";

import { Button } from "@/components/ui/button";
import { AnchorContext } from "@/providers/anchor-provider";
import Image from "next/image";
import { useContext } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { twJoin } from "tailwind-merge";
import dots from "../../../public/dots.svg";
import office3 from "../../../public/office3.png";

export default function Contact() {
  const refs = useContext(AnchorContext);

  if (!refs) throw new Error("refs is null");

  return (
    <section className="bg-white flex justify-center px-4 sm:px-8">
      <div
        id="contact"
        style={{ top: "1rem" }}
        className={twJoin("relative block invisible")}
      />
      <div className="w-full max-w-screen-xl py-20 mb-20 flex lg:justify-evenly gap-6 xl:gap-0 items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="basis-full lg:basis-1/2 grid grid-cols-2 gap-6  lg:gap-8 lg:max-w-[32rem]"
        >
          <h1 className="text-3xl lg:text-5xl font-bold col-span-2 mb-0 lg:mb-3">
            Get in touch
          </h1>
          <fieldset className="flex flex-col max-lg:col-span-2">
            <label className="text-zinc-500">First Name</label>
            <input
              className="mt-2 bg-gray-100 p-4 px-5 rounded-md"
              placeholder="Enter your first name"
            ></input>
          </fieldset>
          <fieldset className="flex flex-col max-lg:col-span-2">
            <label className="text-zinc-500">Last Name</label>
            <input
              className="mt-2 bg-gray-100 p-4 px-5 rounded-md"
              placeholder="Enter your last name"
            ></input>
          </fieldset>
          <fieldset className="flex flex-col col-span-2">
            <label className="text-zinc-500">Email</label>
            <input
              type="email"
              className="mt-2 bg-gray-100 p-4 px-5 rounded-md"
              placeholder="Enter your email"
            ></input>
          </fieldset>
          <fieldset className="flex flex-col col-span-2">
            <label className="text-zinc-500">Message</label>
            <textarea
              className="mt-2 bg-gray-100 p-4 px-5 rounded-md resize-none"
              placeholder="Enter your message"
              rows={6}
            ></textarea>
          </fieldset>
          <Button className="w-fit col-span-2 h-auto py-2 px-6 text-base">
            SEND
          </Button>
        </form>
        <div className="max-lg:hidden basis-1/2 aspect-video pl-14 mt-14 relative">
          <Image
            src={dots}
            alt="dots"
            className="absolute object-cover object-center bottom-[0.75rem] left-[0.75rem] w-1/4"
          />
          <div className=" aspect-video relative">
            <Image
              src={office3}
              alt="people in the office"
              className="object-cover object-center"
              fill
            />
          </div>
          <div className="h-14 w-56 ml-auto flex">
            <div className="mt-2 mr-2 leading-5 text-xl text-zinc-600">
              <MdOutlineLocationOn />
            </div>
            <span className="text-zinc-500 mt-2 leading-5">
              8819 Ohio St. South Gate,
              <br />
              CA 90280
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
