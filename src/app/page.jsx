import { Hero } from "./_components/home/heroSection/Hero";
import { Services } from "./_components/home/Services";
import { WhyChooseUs } from "./_components/home/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
    </main>
  );
}
