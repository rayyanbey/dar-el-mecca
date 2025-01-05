import BottomBar from "./_components/BottomBar";
import { Hero } from "./_components/home/heroSection/Hero";
import { Reviews } from "./_components/home/Reviews";
import { Services } from "./_components/home/Services";
import Stats from "./_components/home/Stats";
import { UmrahPackages } from "./_components/home/UmrahPackages";
import { WhyChooseUs } from "./_components/home/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <div className="w-full h-[1px] bg-[#00000014]"></div>
      <UmrahPackages/>
      <WhyChooseUs/>
      <Stats/>
      <Reviews/>
    </main>
  );
}
