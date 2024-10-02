import HomeSection from "@/components/layout/landing-section";
import Image from "next/image";
import dots from "../../../public/dots.svg";
import office2 from "../../../public/office2.png";

export default function SuccessStory() {
  return (
    <HomeSection
      index={3}
      id="success-story"
      className="bg-white flex justify-center px-4 sm:px-8"
    >
      <div className="w-full max-w-screen-xl py-20 max-lg:py-10 2xl:py-32 items-center gap-6 grid grid-cols-1 lg:grid-cols-[auto_40%]">
        <figure className="max-lg:hidden h-full py-12 px-12 relative">
          <div className="absolute h-36 w-24 bg-yellow-200 left-[2.25rem] top-[2.25rem]" />
          <Image
            src={dots}
            alt="dots"
            className="absolute object-cover object-center bottom-[1.25rem] right-[1.25rem] w-1/5"
          />
          <div className="h-full relative">
            <Image
              src={office2}
              alt="people in the office"
              className="object-cover object-center"
              fill
            />
          </div>
        </figure>
        <article className="h-full py-12 flex flex-col gap-7 justify-center">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Our success story
            </h1>
            <div className="h-[2px] bg-zinc-500 w-14 lg:w-28 mt-2 opacity-30" />
          </div>
          <p className="lg:text-lg text-zinc-500">
            Develop a website by finding a product identity that has real value
            for your company.
          </p>
          <ul className="flex gap-7 flex-wrap justify-between">
            <li className="flex flex-col gap-1">
              <span className="text-3xl lg:text-5xl font-bold">1000</span>
              <span className="font-bold lg:text-lg">Projects Complete</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-3xl lg:text-5xl font-bold">2350</span>
              <span className="font-bold lg:text-lg">Products Sold</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-3xl lg:text-5xl font-bold">1100</span>
              <span className="font-bold lg:text-lg">Future Milestones</span>
            </li>
          </ul>
        </article>
      </div>
    </HomeSection>
  );
}
