import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Lightbulb } from "lucide-react";
import { useRef } from "react";
import { useAnimation } from "@/lib/provider/animation-provider";
import { Link } from "@tanstack/react-router";

export function AboutSection() {
  const { ref, inView } = useAnimation("about");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const achievements = [
    { number: "10+", label: "Years of Experience" },
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Team Members" },
    { number: "20+", label: "Countries Served" },
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-color-1" />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      icon: <Target className="h-8 w-8 text-color-1" />,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in everything we do.",
    },
    {
      icon: <Users className="h-8 w-8 text-color-1" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership with our clients.",
    },
    {
      icon: <Heart className="h-8 w-8 text-color-1" />,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical business practices.",
    },
  ];

  const timelineEvents = [
    {
      year: "2013",
      title: "Company Founded",
      description:
        "Unitel was founded with a vision to create innovative software solutions.",
    },
    {
      year: "2015",
      title: "First Major Client",
      description:
        "Secured our first enterprise client and expanded our team to 15 members.",
    },
    {
      year: "2017",
      title: "International Expansion",
      description:
        "Opened our first international office and started serving clients globally.",
    },
    {
      year: "2019",
      title: "Award Recognition",
      description:
        "Received industry recognition for our innovative approach to software development.",
    },
    {
      year: "2021",
      title: "50+ Team Members",
      description:
        "Reached a milestone of 50 team members and 100+ successful projects.",
    },
    {
      year: "2023",
      title: "New Headquarters",
      description:
        "Moved to a new headquarters and launched our advanced R&D department.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div ref={containerRef} className="container px-4 md:px-6 relative">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-0 w-64 h-64 rounded-full bg-color-2/5 dark:bg-color-2/10 z-0"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-color-1/5 dark:bg-color-1/10 z-0"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16 relative z-10"
        >
          <div className="inline-block rounded-full bg-color-2/10 px-4 py-1.5 text-sm font-medium text-color-2 dark:bg-color-2/20 dark:text-[#F5F5F5]">
            About Us
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Our <span className="text-color-1">Story</span>
          </h2>
          <p className="max-w-[800px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
            We are a team of passionate developers, designers, and strategists
            dedicated to creating exceptional software solutions that transform
            businesses and drive innovation.
          </p>
        </motion.div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="Our Team"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-color-2/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-color-1/10 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-color-2/10 rounded-full z-[-1]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5]">
              Who We Are
            </h3>
            <p className="text-zinc-500 text-lg dark:text-zinc-400">
              Founded in 2013, Unitel has grown from a small startup to a
              leading software development company with a global presence. Our
              journey has been driven by a passion for technology and a
              commitment to delivering exceptional value to our clients.
            </p>
            <p className="text-zinc-500 text-lg dark:text-zinc-400">
              Today, we are a team of 50+ talented professionals working
              together to create innovative solutions that help businesses
              thrive in the digital age. Our expertise spans across various
              technologies and industries, allowing us to tackle complex
              challenges and deliver results that exceed expectations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-color-1 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10"
        >
          <div className="bg-gradient-to-br from-color-2 to-color-2/80 rounded-2xl p-8 text-white shadow-xl">
            <div className="rounded-full bg-white/20 p-3 w-fit mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 text-lg">
              To empower businesses through innovative technology solutions that
              drive growth and create exceptional user experiences. We are
              committed to delivering high-quality software that solves
              real-world problems and helps our clients achieve their goals.
            </p>
          </div>

          <div className="bg-gradient-to-br from-color-1 to-color-1/80 rounded-2xl p-8 text-white shadow-xl">
            <div className="rounded-full bg-white/20 p-3 w-fit mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 text-lg">
              To be the leading software development partner known for
              delivering cutting-edge solutions that transform industries and
              improve lives. We aspire to create a future where technology
              enhances human potential and makes the world a better place.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24 relative z-10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
              Our Core Values
            </h3>
            <p className="max-w-[800px] mx-auto text-zinc-500 text-lg dark:text-zinc-400">
              These principles guide our actions and decisions, shaping our
              company culture and the way we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="rounded-full bg-color-2/10 dark:bg-color-2/20 p-3 w-fit mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-color-2 dark:text-[#F5F5F5] mb-2">
                  {value.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 relative z-10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
              Our Journey
            </h3>
            <p className="max-w-[800px] mx-auto text-zinc-500 text-lg dark:text-zinc-400">
              From our humble beginnings to where we are today, our journey has
              been defined by growth, innovation, and a relentless pursuit of
              excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-color-2 to-color-1 transform md:-translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="text-color-1 font-bold text-xl mb-2">
                        {event.year}
                      </div>
                      <h4 className="text-xl font-bold text-color-2 dark:text-[#F5F5F5] mb-2">
                        {event.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-16 flex justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-color-2 flex items-center justify-center shadow-lg z-10 relative"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-color-2 to-color-1 blur-md opacity-30"></div>
                    </div>
                  </div>
                  <div className="flex-1 md:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 relative z-10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
              Our Leadership
            </h3>
            <p className="max-w-[800px] mx-auto text-zinc-500 text-lg dark:text-zinc-400">
              Meet the talented individuals who drive our vision and lead our
              teams to success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=300&text=Team Member ${index + 1}`}
                    alt={`Team Member ${index + 1}`}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <div className="flex space-x-2">
                        <a
                          href="#"
                          className="hover:text-color-1 transition-colors duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="hover:text-color-1 transition-colors duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-color-2 dark:text-[#F5F5F5] mb-1">
                    {index === 0
                      ? "Sarah Johnson"
                      : index === 1
                        ? "Michael Chen"
                        : index === 2
                          ? "Emily Rodriguez"
                          : "David Kim"}
                  </h4>
                  <p className="text-color-1 font-medium mb-3">
                    {index === 0
                      ? "CEO & Founder"
                      : index === 1
                        ? "CTO"
                        : index === 2
                          ? "Design Director"
                          : "Head of Operations"}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {index === 0
                      ? "Visionary leader with 15+ years of experience in the tech industry."
                      : index === 1
                        ? "Tech expert specializing in scalable architecture and emerging technologies."
                        : index === 2
                          ? "Award-winning designer focused on creating exceptional user experiences."
                          : "Operations specialist with a background in process optimization and team management."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center relative z-10"
        >
          <Link to="/" hash="contact">
            <Button className="bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full">
              Join Our Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
