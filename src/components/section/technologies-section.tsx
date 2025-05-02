import { useAnimation } from "@/lib/provider/animation-provider";
import { motion } from "motion/react";

export function TechnologiesSection() {
  const { ref, inView } = useAnimation("technologies");

  const technologies = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
    },
    {
      category: "Database",
      items: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Firebase",
        "Supabase",
      ],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Jira", "Figma", "Postman", "VS Code"],
    },
  ];

  return (
    <section
      id="technologies"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5] dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-color-2/10 px-3 py-1 text-sm text-color-2 dark:bg-color-2/20 dark:text-[#F5F5F5]">
            Our Tech Stack
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Technologies We Use
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            We leverage the latest technologies to build robust, scalable, and
            high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="bg-gradient-to-r from-color-2 to-[#F97316] p-1">
                <div className="bg-white dark:bg-gray-800 p-4">
                  <h3 className="text-xl font-bold text-color-2 mb-4 dark:text-[#F5F5F5]">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + itemIndex * 0.05,
                        }}
                        className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-color-2/10 text-color-2 dark:bg-color-2/20 dark:text-[#F5F5F5]"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
