// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { description } from "../data/profile";

export default function AboutSection() {
  return (
    <section className="space-y-10 py-10 lg:py-30" id="about">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-neutral-800 text-center text-4xl font-bold dark:text-white text-shadow-lg text-shadow-primary"
      >
        About Me<span className="text-primary">.</span>
      </motion.h1>
      {description.long.map((text, key) => (
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={key}
          className="text-center text-xl text-neutral-700 md:text-2xl dark:text-neutral-400"
        >
          {text}
        </motion.p>
      ))}
    </section>
  );
}
