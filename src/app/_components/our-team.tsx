import HomeSection from "@/components/layout/landing-section";
import Image from "next/image";
import team1 from "../../../public/team/team1.png";
import team2 from "../../../public/team/team2.png";
import team3 from "../../../public/team/team3.png";
import team4 from "../../../public/team/team4.png";
import team5 from "../../../public/team/team5.png";
import team6 from "../../../public/team/team6.png";

export default function OurTeam() {
  return (
    <HomeSection
      index={4}
      id="our-team"
      className="bg-white flex justify-center px-4 sm:px-8"
    >
      <div className="w-full py-20 max-w-screen-xl">
        <article className="flex flex-col gap-10 lg:gap-16">
          <h1 className="text-center text-3xl lg:text-5xl font-bold">
            Our Awesome Team
          </h1>
          <ul className="flex gap-8 lg:gap-12 justify-around flex-wrap">
            <li className="basis-full lg:basis-1/3 flex flex-col text-center w-full max-w-72">
              <div className="bg-gray-100 w-full aspect-square max-w-72 relative">
                <Image src={team1} fill alt="team member" />
              </div>
              <span className="text-lg mt-3 lg:mt-6 text-zinc-700">
                Hi! My Name is
              </span>
              <span className="text-3xl font-bold lg:mt-1">Shoo Thar Mien</span>
              <span className="text-zinc-600 mt-1 lg:mt-2">
                Senior UX Designer
              </span>
            </li>
            <li className="basis-full lg:basis-1/3 flex flex-col text-center w-full max-w-72">
              <div className="bg-gray-100 w-full aspect-square max-w-72 relative">
                <Image src={team2} fill alt="team member" />
              </div>
              <span className="text-lg mt-3 lg:mt-6 text-zinc-700">
                Hi! My Name is
              </span>
              <span className="text-3xl font-bold lg:mt-1">Shoo Prat Mhan</span>
              <span className="text-zinc-600 mt-1 lg:mt-2">
                Senior UI Designer
              </span>
            </li>
            <li className="basis-full lg:basis-1/3 flex flex-col text-center w-full max-w-72">
              <div className="bg-gray-100 w-full aspect-square max-w-72 relative">
                <Image src={team3} fill alt="team member" />
              </div>
              <span className="text-lg mt-3 lg:mt-6 text-zinc-700">
                Hi! My Name is
              </span>
              <span className="text-3xl font-bold lg:mt-1">Shoo Yhan Tho</span>
              <span className="text-zinc-600 mt-1 lg:mt-2">
                Creative Director
              </span>
            </li>
            <li className="basis-full lg:basis-1/3 flex flex-col text-center w-full max-w-72">
              <div className="bg-gray-100 w-full aspect-square max-w-72 relative">
                <Image src={team4} fill alt="team member" />
              </div>
              <span className="text-lg mt-3 lg:mt-6 text-zinc-700">
                Hi! My Name is
              </span>
              <span className="text-3xl font-bold lg:mt-1">Shoo Bro Tho</span>
              <span className="text-zinc-600 mt-1 lg:mt-2">
                Motion Designer
              </span>
            </li>
            <li className="basis-full lg:basis-1/3 flex flex-col text-center w-full max-w-72">
              <div className="bg-gray-100 w-full aspect-square max-w-72 relative">
                <Image src={team5} fill alt="team member" />
              </div>
              <span className="text-lg mt-3 lg:mt-6 text-zinc-700">
                Hi! My Name is
              </span>
              <span className="text-3xl font-bold lg:mt-1">Shoo Mhar No</span>
              <span className="text-zinc-600 mt-1 lg:mt-2">Illustrator</span>
            </li>
            <li className="basis-full lg:basis-1/3 flex flex-col text-center w-full max-w-72">
              <div className="bg-gray-100 w-full aspect-square max-w-72 relative">
                <Image src={team6} fill alt="team member" />
              </div>
              <span className="text-lg mt-3 lg:mt-6 text-zinc-700">
                Hi! My Name is
              </span>
              <span className="text-3xl font-bold lg:mt-1">Shoo Mhan Tho</span>
              <span className="text-zinc-600 mt-1 lg:mt-2">
                Senior UX Researcher
              </span>
            </li>
          </ul>
        </article>
      </div>
    </HomeSection>
  );
}
