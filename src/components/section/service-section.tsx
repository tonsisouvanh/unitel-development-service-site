import { Button } from "@/components/ui/button";
import { useAnimation } from "@/lib/provider/animation-provider";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Code,
  ShieldCheck,
  Server,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ServicesSection() {
  const { ref, inView } = useAnimation("services");
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Software Development",
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
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      title: "Network Security",
      description:
        "We provide comprehensive network security solutions to protect your digital assets and ensure business continuity.",
      details: [
        "Firewall management",
        "Intrusion detection and prevention",
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits",
        "VPN and secure remote access",
        "Network segmentation",
        "Security awareness training",
      ],
      bgColor: "from-orange-500 to-orange-700",
    },
    {
      icon: <Server className="h-10 w-10 text-white" />,
      title: "Digital Infrastructure Service",
      description:
        "We build and manage robust digital foundations that empower your business operations and drive innovation.",
      details: [
        "Cloud infrastructure setup and management (AWS, Azure, GCP)",
        "Server infrastructure design and maintenance (on-premise, hybrid)",
        "Network design and implementation",
        "Data storage and management solutions",
        "Disaster recovery and business continuity planning",
        "IT infrastructure monitoring and support",
        "Automation and orchestration of IT processes",
        "Scalability and performance optimization",
      ],
      bgColor: "from-purple-600 to-purple-800",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: "Digital Transformation Service",
      description:
        "We guide your organization through strategic changes, leveraging technology to enhance processes, customer experiences, and business models.",
      details: [
        "Digital strategy development and roadmap creation",
        "Business process automation and optimization",
        "Customer experience (CX) design and implementation",
        "Data analytics and insights for decision-making",
        "Cloud adoption and migration strategies",
        "Enterprise resource planning (ERP) system implementation",
        "Change management and user adoption programs",
        "Innovation workshops and technology scouting",
      ],
      bgColor: "from-cyan-500 to-cyan-700",
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-white" />,
      title: "Fraud Prevention Reconciliation",
      description:
        "We ensure the accuracy and integrity of your fraud prevention efforts through meticulous reconciliation and analysis.",
      details: [
        "Transaction monitoring system reconciliation",
        "False positive analysis and reduction",
        "Chargeback and dispute reconciliation",
        "Data integrity checks across fraud prevention platforms",
        "Identification and resolution of reconciliation discrepancies",
        "Reporting and analysis of reconciliation outcomes",
        "Process improvement for reconciliation efficiency",
        "Customized reconciliation strategies based on your systems",
      ],
      bgColor: "from-green-600 to-green-800",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: "IT Training Consulting",
      description:
        "We provide expert guidance to develop and implement effective IT training programs that empower your workforce and enhance organizational capabilities.",
      details: [
        "Needs assessment and skills gap analysis",
        "Custom curriculum development for various IT domains",
        "Training program design and delivery strategy",
        "Selection and implementation of learning management systems (LMS)",
        "Development of training materials (e-learning, workshops, documentation)",
        "Train-the-trainer programs",
        "Evaluation and measurement of training effectiveness",
        "Ongoing support and program refinement",
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
      className="w-full relative py-12 md:py-24 lg:py-32 px-3 bg-white"
    >
      <img
        className="absolute top-0 right-0 w-full h-full object-cover opacity-20"
        src="/assets/images/polygon.png"
        alt=""
      />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-full bg-color-1/10 px-4 py-1.5 text-sm font-medium text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
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
          className="flexd justify-center mt-16 hidden"
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
