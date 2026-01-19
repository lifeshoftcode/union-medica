import HeroVideo from "@/modules/home/HeroVideo";
import ServicesSection from "@/modules/home/ServicesSection";
import ParallaxNewsSection from "@/modules/home/ParallaxNewsSection";
import ServicesAlternateSection from "@/modules/home/ServicesAlternateSection";
import { getServices } from "./home/actions";

export default async function Home() {
  const [regularServices, alternateServices] = await Promise.all([
    getServices("card"),
    getServices("alternate")
  ]);

  return (
    <div className="flex flex-col">
      <HeroVideo />
      <ServicesSection services={regularServices} />
      <ParallaxNewsSection />
      <ServicesAlternateSection services={alternateServices} />
    </div>
  );
}

