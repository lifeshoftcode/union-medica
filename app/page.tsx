import HeroVideo from "@/components/HeroVideo";
import ServicesSection from "@/components/ServicesSection";
import ParallaxNewsSection from "@/components/ParallaxNewsSection";
import ServicesAlternateSection from "@/components/ServicesAlternateSection";

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
