import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Dynamically import components
const AboutSection = lazy(() =>
  import("@/components/section/about-section").then((module) => ({
    default: module.AboutSection,
  }))
);
const ContactSection = lazy(() =>
  import("@/components/section/contact-section").then((module) => ({
    default: module.ContactSection,
  }))
);
const HeroSection = lazy(() =>
  import("@/components/section/hero-section").then((module) => ({
    default: module.HeroSection,
  }))
);
const PortfolioSection = lazy(() =>
  import("@/components/section/portfolio-section").then((module) => ({
    default: module.PortfolioSection,
  }))
);
const ServicesSection = lazy(() =>
  import("@/components/section/service-section").then((module) => ({
    default: module.ServicesSection,
  }))
);
const ServiceShowcase = lazy(() =>
  import("@/components/section/service-showcase").then((module) => ({
    default: module.ServiceShowcase,
  }))
);
const TestimonialsSection = lazy(() =>
  import("@/components/section/testimonials-section").then((module) => ({
    default: module.TestimonialsSection,
  }))
);
const WorkProcessSection = lazy(() =>
  import("@/components/section/work-process-section").then((module) => ({
    default: module.WorkProcessSection,
  }))
);
const ParticlesBackground = lazy(() =>
  import("@/components/ui/particles-background").then((module) => ({
    default: module.ParticlesBackground,
  }))
);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
        }
      >
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
      </Suspense>
    </main>
  );
}
