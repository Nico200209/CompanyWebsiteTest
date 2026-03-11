import { HeroSection } from "@/components/ui/hero-section";
import { ValuesSection } from "@/components/ui/values-section";
import { ServicesSection } from "@/components/ui/services-section";
import { AboutSection } from "@/components/ui/about-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FooterSection } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}