import HeroVideo from "@/components/home/HeroVideo";
import ServicesSection from "@/components/home/ServicesSection";
import ParallaxNewsSection from "@/components/home/ParallaxNewsSection";
import ServicesAlternateSection from "@/components/home/ServicesAlternateSection";

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
