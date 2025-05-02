import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { useAnimation } from "@/lib/provider/animation-provider";

export function HeroSection() {
  const { ref, inView } = useAnimation("hero");

  const typewriterTexts = [
    "Powerful Solutions",
    "Innovative Apps",
    "Scalable Systems",
    "Digital Experiences",
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.95)), url('/images/tech-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-color-2/60 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-20 code-pattern"></div>
      {/* <div className="container px-4 md:px-6 relative z-10"> */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tighter text-[#F5F5F5] sm:text-5xl xl:text-6xl/none">
                Transforming Ideas into{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5F5F5] to-color-1">
                  <TypewriterEffect
                    texts={typewriterTexts}
                    className="min-h-[1.2em] inline-block"
                  />
                </span>
              </h1>
              <p className="max-w-[600px] text-[#F5F5F5]/90 md:text-xl">
                We build innovative, scalable, and user-friendly applications
                that drive business growth and enhance user experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <a href="#contact">
                <Button className="bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  className="border-[#F5F5F5] text-[#F5F5F5] hover:bg-[#F5F5F5]/10 transition-all duration-300"
                >
                  Our Services
                </Button>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-[#F5F5F5]/5 backdrop-blur-md rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-color-2/30 to-color-1/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-color-2/20 to-color-1/20 backdrop-blur-sm flex items-center justify-center animate-spin-slow"
                  >
                    <div
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-color-2/40 to-color-1/40 flex items-center justify-center animate-spin-slow"
                      style={{ animationDirection: "reverse" }}
                    >
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-bl from-color-2/60 to-color-1/60 flex items-center justify-center animate-pulse-slow">
                        <div className="text-white text-4xl md:text-6xl font-bold">
                          TN
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
