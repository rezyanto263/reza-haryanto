import Navbar from "@/components/Navbar/Navbar";
import Aurora from "@/components/Aurora";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";

export default function App() {
  return (
    <div className="relative z-1 min-h-screen overflow-hidden bg-neutral-100 antialiased opacity-100 dark:bg-black dark:text-white">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-0 h-screen w-full overflow-hidden bg-neutral-100 dark:bg-black"
      >
        <Aurora
          colorStops={["#ca435e", "#f0b100", "#ba6930"]}
          blend={0.5}
          amplitude={0.5}
          speed={0.7}
        />
      </motion.div>
      <div className="from-primary via-secondary fixed z-0 h-full w-full bg-gradient-to-br overflow-hidden from-0% via-30% to-transparent to-60% opacity-50 backdrop-blur-lg dark:opacity-10"></div>
      <Navbar />
      <main className="relative container mx-auto mt-16 px-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>
    </div>
  );
}
