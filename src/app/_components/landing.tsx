import HomeSection from "@/components/layout/landing-section";
import { LightButton } from "@/components/ui/light-button";
import Image from "next/image";
import iphone1 from "../../../public/iphone1.png";
import iphone2 from "../../../public/iphone2.png";

export default function Landing() {
  return (
    <HomeSection
      index={0}
      id="home"
      className="bg-t-black text-white min-h-landing flex justify-center px-4 sm:px-8"
      anchorClassname="-top-[5rem] max-lg:!-top-[2.5rem]"
    >
      <div className="w-full max-w-screen-xl py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <article className="flex flex-col justify-center gap-8">
          <h1 className="text-3xl lg:text-6xl leading-tight">
            Authentic content for
            <br /> your <mark className="px-2 bg-yellow-300">social media</mark>
            <br /> presence?
          </h1>
          <p className="lg:text-lg">
            We have made it our business to offer unique solutions in the field
            of social media, authentic content productions, e-commerce and brand
            building.
          </p>
          <LightButton className="w-fit text-lg h-auto">
            Get Started
          </LightButton>
        </article>
        <div className="h-full relative max-lg:hidden">
          {/* <div className="absolute bg-yellow-300 h-5/6 aspect-square z-0 left-0 right-[10%] ml-auto mr-auto mt-auto mb-auto top-[15%] bottom-0" />
           */}
          <div className="absolute w-9/12 h-[80%] right-0 top-0 bottom-0 mt-auto mb-auto">
            <Image
              className="w-full z-10 object-contain"
              src={iphone1}
              alt="iphone"
              fill
              quality={100}
            />
          </div>
          <div className="absolute w-9/12 h-[80%] left-0 top-0 bottom-0 mt-auto mb-auto">
            <Image
              className="w-full z-10 object-contain"
              src={iphone2}
              alt="iphone"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
