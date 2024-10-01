import AboutUs from "./_components/about-us";
import Contact from "./_components/contact";
import Landing from "./_components/landing";
import OurTeam from "./_components/our-team";
import Services from "./_components/services";
import SuccessStory from "./_components/success-story";
import Testimonial from "./_components/testimonial";

export default function Home() {
  return (
    <main>
      <Landing />
      <AboutUs />
      <Services />
      <SuccessStory />
      <OurTeam />
      <Testimonial />
      <Contact />
    </main>
  );
}
