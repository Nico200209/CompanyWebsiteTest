import { HeroSection } from "@/components/ui/hero-section";
import { ValuesSection } from "@/components/ui/values-section";
import { ServicesSection } from "@/components/ui/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      {/* Next sections go here */}
    </main>
  );
}