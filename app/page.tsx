import HeroVideo from "@/modules/home/HeroVideo";
import ServicesSection from "@/modules/home/ServicesSection";
import ParallaxNewsSection from "@/modules/home/ParallaxNewsSection";
import ServicesAlternateSection from "@/modules/home/ServicesAlternateSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroVideo />
      <ServicesSection />
      <ParallaxNewsSection />
      <ServicesAlternateSection />
    </div>
  );
}
