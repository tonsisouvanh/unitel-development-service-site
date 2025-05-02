import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { useAnimation } from "@/lib/provider/animation-provider";

export function PortfolioSection() {
  const { ref, inView } = useAnimation("portfolio");

  const projects = [
    {
      category: "web",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with advanced product filtering and secure payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      category: "mobile",
      title: "Fitness Tracking App",
      description:
        "A mobile app that helps users track their workouts, nutrition, and progress towards fitness goals.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
    },
    {
      category: "web",
      title: "Real Estate Dashboard",
      description:
        "An admin dashboard for real estate agents to manage listings, clients, and transactions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    },
    {
      category: "mobile",
      title: "Food Delivery App",
      description:
        "A mobile app connecting users with local restaurants for food delivery and pickup orders.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    },
    {
      category: "web",
      title: "Learning Management System",
      description:
        "An online platform for educational institutions to manage courses, students, and learning materials.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "AWS", "MySQL"],
    },
    {
      category: "mobile",
      title: "Travel Companion",
      description:
        "A travel app with itinerary planning, booking integration, and local recommendations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
    },
  ];

  return (
    <section
      id="portfolio"
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
            Our Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Recent Projects
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Explore our latest work and see how we've helped businesses achieve
            their goals.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <TabsList className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "web")
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    inView={inView}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "mobile")
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    inView={inView}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: any;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden card-hover border-0 shadow-lg pt-0">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-color-2 mb-2 dark:text-[#F5F5F5]">
            {project.title}
          </h3>
          <p className="text-zinc-500 mb-4 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-color-2/10 text-color-2 dark:bg-color-2/20 dark:text-[#F5F5F5]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="outline"
            className="w-full border-color-2 text-color-2 hover:bg-color-2 hover:text-white transition-all duration-300 dark:border-[#F5F5F5] dark:text-[#F5F5F5] dark:hover:bg-[#F5F5F5] dark:hover:text-color-2"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
