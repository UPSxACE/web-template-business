import HomeSection from "@/components/layout/landing-section";
import Image from "next/image";
import { BiMessageCheck, BiSolidVideos, BiTrendingUp } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import dots from "../../../public/dots.svg";
import img1 from "../../../public/pics/img1.png";
import img2 from "../../../public/pics/img2.png";
import img3 from "../../../public/pics/img3.png";
import img4 from "../../../public/pics/img4.png";

export default function Services() {
  return (
    <HomeSection
      index={2}
      // top={"-1rem"}
      id="services"
      className="bg-white flex justify-center px-4 sm:px-8"
    >
      <div className="w-full max-w-screen-xl py-20 max-lg:py-10 flex lg:justify-evenly items-center gap-6">
        <article className="flex justify-start">
          <div className="w-full flex flex-col justify-center lg:text-lg max-w-[44rem] gap-4 lg:gap-6">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold">
                Service we provide
              </h1>
              <div className="h-[2px] bg-zinc-500 w-14 lg:w-28 mt-2 opacity-30" />
            </div>
            <p className="text-zinc-500">
              We will solve a client&apos;s problems to improve their social
              media peformance
            </p>
            <ul className="space-y-4 lg:space-y-6 max-w-[32rem]">
              <li className="flex gap-3 lg:gap-5">
                <div className="flex justify-center items-center bg-t-gray rounded-lg w-10 h-10 lg:w-12 lg:h-12 shrink-0 text-xl lg:text-2xl pt-1">
                  <BiTrendingUp />
                </div>
                <div>
                  <h2 className="font-bold text-lg lg:text-xl">
                    Performance Marketing
                  </h2>
                  <p className="text-zinc-600 text-sm lg:text-base">
                    Help create a website and redesign it so that it becomes a
                    website that is more trendy and looks fresh.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 lg:gap-5">
                <div className="flex justify-center items-center bg-t-gray rounded-lg w-10 h-10 lg:w-12 lg:h-12 shrink-0 text-xl lg:text-2xl pt-1">
                  <BiMessageCheck />
                </div>
                <div>
                  <h2 className="font-bold text-lg lg:text-xl">
                    Feed Management E-Commerce
                  </h2>
                  <p className="text-zinc-600 text-sm lg:text-base">
                    Create customizable illustrations with attractive designs
                    that are made visually through high creativity.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 lg:gap-5">
                <div className="flex justify-center items-center bg-t-gray rounded-lg w-10 h-10 lg:w-12 lg:h-12 shrink-0 text-2xl">
                  <BiSolidVideos />
                </div>
                <div>
                  <h2 className="font-bold text-lg lg:text-xl">
                    Content Production
                  </h2>
                  <p className="text-zinc-600 text-sm lg:text-base">
                    Make the appearance of a mobile application that has quality
                    and increases user convenience.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 lg:gap-5">
                <div className="flex justify-center items-center bg-t-gray rounded-lg w-10 h-10 lg:w-12 lg:h-12 shrink-0 text-xl">
                  <BsMegaphone />
                </div>
                <div>
                  <h2 className="font-bold text-lg lg:text-xl">
                    Influencer Marketing
                  </h2>
                  <p className="text-zinc-600 text-sm lg:text-base">
                    Create customizable illustrations with attractive designs
                    that are made visually through high creativity.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </article>
        <figure className="max-lg:hidden aspect-[1.75/2] h-[90%] relative max-h-[44rem] pl-12">
          <Image
            src={dots}
            alt="dots"
            className="absolute object-cover object-center bottom-[1.25rem] left-0 w-2/6"
          />
          <Image
            src={dots}
            alt="dots"
            className="absolute object-cover object-center top-[1.25rem] right-[1.25rem] w-2/6"
          />
          <div className="w-full h-full flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <div className="relative">
                <Image
                  src={img1}
                  fill
                  alt="marketing"
                  className="object-cover object-bottom"
                />
              </div>
              <div className="pt-12">
                <div className="h-full w-full relative">
                  <Image
                    src={img2}
                    fill
                    alt="marketing"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[30%_auto] gap-4 h-1/2">
              <div className="pb-12">
                <div className="h-full w-full relative">
                  <Image
                    src={img3}
                    fill
                    alt="marketing"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative">
                <Image
                  src={img4}
                  fill
                  alt="marketing"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </figure>
      </div>
    </HomeSection>
  );
}
