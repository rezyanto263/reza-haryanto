// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { techStack } from "../data/skills";
import SkillCard from "../components/Card/SkillCard";

export default function SkillsSection() {
  return (
    <>
      <section id="skills" className="space-y-10 py-10 lg:py-30">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-shadow-primary mb-3 text-center text-4xl font-bold text-neutral-800 text-shadow-lg dark:text-white">
            Tech Stack<span className="text-primary">.</span>
          </h1>
          <p className="text-center text-neutral-600">
            Tools I use and learn to build web applications, from frontend to
            backend.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6"
        >
          {techStack.map((tech, key) => (
            <SkillCard key={key} {...tech} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
