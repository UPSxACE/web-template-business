"use client";
import {
  CarouselNext,
  CarouselPrevious,
} from "@/components/layout/carousel/carousel-buttons";
import useCarouselState from "@/components/layout/carousel/use-carousel-state";
import HomeSection from "@/components/layout/landing-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/sui/carousel";
import Image from "next/image";
import avatar1 from "../../../public/avatars/avatar1.png";

export default function Testimonial() {
  const state = useCarouselState();
  return (
    <HomeSection
      index={5}
      id="testimonial"
      className="bg-white flex justify-center px-4 sm:px-8"
    >
      <div className="w-full max-w-screen-xl py-20 max-lg:py-10 2xl:py-32 px-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          What our customers say
        </h1>
        <Carousel
          setApi={state.setApi}
          className="mt-14 lg:mt-28 w-full max-w-[56rem]"
          opts={{ loop: true }}
        >
          <CarouselContent>
            <CarouselItem className="flex flex-col gap-8 items-center">
              <div className="bg-blue-300 w-20 h-20 rounded-full relative">
                <Image src={avatar1} fill alt="testimony" />
              </div>
              <p className="mt-3 h-40 lg:h-28 text-center text-sm lg:text-lg max-w-[40rem] line-clamp-[8] lg:line-clamp-4 text-zinc-600 px-3">
                Quantic is the friendliest and most efficient company I have
                ever worked with. The whole thing of finding a product takes
                time, and they helped us filter only the best opportunities that
                really suited us. They help from start to finish to create a
                great product identity for your company.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-center mb-1 text-lg lg:text-xl font-bold">
                  Shalima Hayden
                </span>
                <span className="text-center mb-1 max-lg:text-sm text-zinc-700">
                  Product Designer
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col gap-8 items-center">
              <div className="bg-blue-300 w-20 h-20 rounded-full relative">
                <Image src={avatar1} fill alt="testimony" />
              </div>
              <p className="mt-3 h-40 lg:h-28 text-center text-sm lg:text-lg max-w-[40rem] line-clamp-[8] lg:line-clamp-4 text-zinc-600">
                Quantic is the friendliest and most efficient company I have
                ever worked with. The whole thing of finding a product takes
                time, and they helped us filter only the best opportunities that
                really suited us. They help from start to finish to create a
                great product identity for your company.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-center mb-1 text-lg lg:text-xl font-bold">
                  Shalima Hayden
                </span>
                <span className="text-center mb-1 max-lg:text-sm text-zinc-700">
                  Product Designer
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col gap-8 items-center">
              <div className="bg-blue-300 w-20 h-20 rounded-full relative">
                <Image src={avatar1} fill alt="testimony" />
              </div>
              <p className="mt-3 h-40 lg:h-28 text-center text-sm lg:text-lg max-w-[40rem] line-clamp-[8] lg:line-clamp-4 text-zinc-600">
                Quantic is the friendliest and most efficient company I have
                ever worked with. The whole thing of finding a product takes
                time, and they helped us filter only the best opportunities that
                really suited us. They help from start to finish to create a
                great product identity for your company.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-center mb-1 text-lg lg:text-xl font-bold">
                  Shalima Hayden
                </span>
                <span className="text-center mb-1 max-lg:text-sm text-zinc-700">
                  Product Designer
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious state={state} />
          <CarouselNext state={state} />
        </Carousel>
      </div>
    </HomeSection>
  );
}
