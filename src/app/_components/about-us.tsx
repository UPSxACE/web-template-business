import HomeSection from "@/components/layout/landing-section";
import Image from "next/image";
import office from "../../../public/office.png";

export default function AboutUs() {
  return (
    <HomeSection
      index={1}
      id="about-us"
      anchorClassname={"top-[2.5rem] max-lg:!top-0"}
      className="bg-white flex justify-center px-4 sm:px-8"
    >
      <div className="w-full lg:aspect-[16/9] max-w-screen-xl mt-20 py-20 max-lg:mt-10 max-lg:py-10 grid grid-cols-1 lg:grid-cols-[36%_auto] gap-8 items-center">
        <figure className="max-lg:hidden w-full h-full px-8 pt-8 relative max-h-[44rem]">
          <div className="absolute border-8 border-solid border-yellow-300 w-full h-64 top-0 left-0"></div>
          <div className="relative w-full h-full max-h-[40rem]">
            <Image
              src={office}
              alt="people in the office"
              className="object-cover object-center"
              fill
            />
          </div>
        </figure>
        <article className="flex justify-center">
          <div className="w-full flex flex-col justify-center lg:text-lg lg:max-w-[44rem] gap-6">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold">About us</h1>
              <div className="h-[2px] bg-zinc-500 w-14 lg:w-28 mt-2 opacity-30" />
            </div>
            <p>
              <strong>Quantic</strong> is a Quantic is a template social agency
              that offers full-service social media solutions.
            </p>
            <p>
              With our co-founder Philip Deml we have one of the biggest German
              influencers in our team which also gives our clients a direct
              access to the influencer world.
            </p>
            <p>
              Our target group is primarily established brands that know us as a
              modern premium agency.
            </p>
          </div>
        </article>
      </div>
    </HomeSection>
  );
}
