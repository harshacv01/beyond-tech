import { motion } from "framer-motion";
import React from "react";
import { Badge } from "./ui/badge";
import { ProjectCard } from "./project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    id: "1",
    title: "Financial Dashboard",
    description:
      "A comprehensive financial dashboard for tracking expenses, income, and investments.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    demoUrl: "https://dashboard-sandy-ten.vercel.app/",
    imageUrl: "/dashboard.png",
    category: "all",
  },
  {
    id: "project-2",
    title: "E-commerce Platform",
    description:
      "A complete e-commerce solution with product management, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://e-commerce-fe-ten.vercel.app/",

    imageUrl: "/e-commerce.png",
    category: "all",
  },
  {
    id: "project-3",
    title: "CMS for E-commerce",
    description:
      "A flexible CMS for managing products, orders, and users in an e-commerce application.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://e-commerce-admin-one-gamma.vercel.app/",
    imageUrl: "/cms.png",
    category: "frontend",
  },
  {
    id: "project-4",
    title: "Skill Gate Consultancy Agency",
    description:
      "A consultancy agency website with a focus on skills development and training.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://skill-gate-v03.vercel.app/",
    imageUrl: "/skillgate.png",
    category: "all",
  },
  {
    id: "project-5",
    title: "Real Estate Web App",
    description:
      "A web application for browsing and managing real estate listings with advanced search features.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],

    demoUrl: "https://real-estate-app-khaki-six.vercel.app/",
    imageUrl: "/real-estate.png",
    category: "frontend",
  },
  {
    id: "project-6",
    title: "E-commerce Store Backend",
    description:
      "A robust backend for an e-commerce store, handling product listings, user authentication, and order management.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "backend",
    demoUrl: "https://e-commerce-be-ashen.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Latest Work
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Explore our portfolio of projects across different technology stacks
            and domains.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="rounded-full p-1">
              <TabsTrigger value="all" className="rounded-full px-6">
                All
              </TabsTrigger>
              <TabsTrigger value="frontend" className="rounded-full px-6">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="rounded-full px-6">
                Backend
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((project) => project.category === "all")
                .map((project, i) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="fullstack">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((project) => project.category === "fullstack")
                .map((project, i) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="backend">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((project) => project.category === "backend")
                .map((project, i) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="frontend">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((project) => project.category === "frontend")
                .map((project, i) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
