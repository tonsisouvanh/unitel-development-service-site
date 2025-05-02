import { motion } from "motion/react";
import { Code, Database, Globe, Layers, Smartphone, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/lib/provider/animation-provider";
import { Link } from "@tanstack/react-router";

export function ServicesSection() {
  const { ref, inView } = useAnimation("services");
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      details: [
        "Responsive design for all devices",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Content Management Systems",
        "Web portals and dashboards",
      ],
      bgColor: "from-blue-600 to-blue-800",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      details: [
        "iOS and Android native apps",
        "Cross-platform development",
        "Mobile UI/UX design",
        "App store optimization",
        "Mobile app maintenance",
      ],
      bgColor: "from-orange-500 to-orange-700",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Custom Software",
      description:
        "Bespoke software solutions designed to solve your specific business challenges.",
      details: [
        "Enterprise software development",
        "Legacy system modernization",
        "Process automation",
        "Custom CRM and ERP systems",
        "Industry-specific solutions",
      ],
      bgColor: "from-purple-600 to-purple-800",
    },
    {
      icon: <Database className="h-10 w-10 text-white" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services for your growing business needs.",
      details: [
        "Cloud migration strategies",
        "AWS, Azure, and GCP solutions",
        "Serverless architecture",
        "Cloud-native applications",
        "DevOps and CI/CD pipelines",
      ],
      bgColor: "from-cyan-500 to-cyan-700",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "DevOps",
      description:
        "Streamline your development and operations with our DevOps services.",
      details: [
        "CI/CD implementation",
        "Infrastructure as Code",
        "Containerization with Docker",
        "Kubernetes orchestration",
        "Monitoring and logging solutions",
      ],
      bgColor: "from-green-600 to-green-800",
    },
    {
      icon: <Layers className="h-10 w-10 text-white" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive and engaging digital experiences.",
      details: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design systems creation",
      ],
      bgColor: "from-pink-500 to-pink-700",
    },
  ];

  const handleServiceClick = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section
      id="services"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-full bg-color-2/10 px-4 py-1.5 text-sm font-medium text-color-2 dark:bg-color-2/20 dark:text-[#F5F5F5]">
            Our Services
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            What We <span className="text-color-1">Offer</span>
          </h2>
          <p className="max-w-[800px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
            We provide end-to-end software development services tailored to your
            business needs, helping you transform ideas into powerful digital
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                activeService === index ? "scale-[1.02]" : "hover:scale-[1.02]"
              }`}
              onClick={() => handleServiceClick(index)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-90`}
              ></div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="rounded-full bg-white/20 p-4 w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6">{service.description}</p>

                <motion.div
                  className="mt-auto"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeService === index ? "auto" : 0,
                    opacity: activeService === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeService === index && (
                    <div className="pt-4 border-t border-white/20">
                      <ul className="space-y-2 text-white/90 mb-6">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2 text-color-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Link to="/" hash="contact">
                        <Button className="w-full bg-white text-color-2 hover:bg-white/90 transition-all duration-300">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  )}
                </motion.div>

                {activeService !== index && (
                  <div className="flex items-center text-white/90 mt-auto cursor-pointer group">
                    <span className="mr-1">Learn more</span>
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
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link to="/" hash="contact">
            <Button className="bg-color-2 text-white hover:bg-color-2/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full">
              <span>Get a Free Consultation</span>
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
