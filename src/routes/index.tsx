import { AboutSection } from "@/components/section/about-section";
import { ContactSection } from "@/components/section/contact-section";
import { HeroSection } from "@/components/section/hero-section";
import { PortfolioSection } from "@/components/section/portfolio-section";
import { ServicesSection } from "@/components/section/service-section";
import { ServiceShowcase } from "@/components/section/service-showcase";
import { TechnologiesSection } from "@/components/section/technologies-section";
import { TestimonialsSection } from "@/components/section/testimonials-section";
import { WorkProcessSection } from "@/components/section/work-process-section";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <ParticlesBackground />
      <HeroSection />
      <ServicesSection />
      <ServiceShowcase />
      <AboutSection />
      {/* <TechnologiesSection /> */}
      <WorkProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </main>
  );
}
