// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { cvLink, description, myPhoto, roleAs } from "../data/profile";
import { LuDownload } from "react-icons/lu";
import SpecialButton from "@/components/Button/SpecialButton";
import Button from "@/components/Button/Button";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="grid grid-cols-2 py-10 lg:py-35 gap-y-20"
      id="hero"
    >
      <div className="order-2 col-span-2 flex flex-col justify-center lg:order-1 lg:col-span-1">
        <TypeAnimation
          sequence={roleAs.flatMap((role) => [role, 2000])}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="max-lg:mx-auto text-xl md:text-3xl font-semibold text-neutral-800 lg:mr-auto dark:text-white"
        />
        <h1 className="from-primary to-secondary bg-gradient-to-br bg-clip-text text-center font-bold text-transparent py-2 box-border text-4xl lg:text-start sm:text-5xl xl:text-6xl">
          M. Reza Haryanto
        </h1>
        <p className="my-5 text-center lg:text-justify text-neutral-700 dark:text-neutral-400 lg:text-lg">
          {description.short}
        </p>
        <div className="flex gap-2 justify-center lg:justify-start">
          <SpecialButton href={cvLink} download="Muhammad_Reza_Haryanto_CV.pdf">
            <LuDownload size={20} />
            Download CV
          </SpecialButton>
          <Button
            href="#about"
            background="transparent"
            foreground="primary"
            className="border-primary hover:bg-primary border-2 hover:text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="order-1 col-span-2 flex items-center justify-center lg:order-2 lg:col-span-1 lg:justify-end">
        <div className="relative">
          <div className="animate-slow-spin absolute top-1/2 left-1/2 w-55 h-55 sm:w-75 sm:h-75 lg:h-[420px] lg:w-[420px] -translate-1/2 rounded-full border-4 border-dashed border-orange-500"></div>
          <img
            src={myPhoto}
            alt="Photo"
            className="shadow-primary w-50 h-50 sm:w-70 sm:h-70 lg:h-[400px] lg:w-[400px] rounded-full shadow-[0_0_2rem_1rem_var(--color-secondary)]/70"
          />
        </div>
      </div>
    </motion.section>
  );
}
