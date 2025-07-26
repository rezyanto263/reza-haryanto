// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProjectCard from "@/components/Card/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10 py-10 lg:py-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-shadow-primary mb-3 text-center text-4xl font-bold text-neutral-800 text-shadow-lg dark:text-white">
          Projects Undertaken<span className="text-primary">.</span>
        </h1>
        <p className="text-center text-neutral-600">
          Some of the projects I’ve built as part of my learning, teamwork, or
          personal initiatives.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {projects.map((project, key) => (
          <ProjectCard key={key} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
