// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/Card/CertificateCard";
import { useState } from "react";

export default function CertificatesSection() {
  const [focusedIndex, setFocusedIndex] = useState(null);
  return (
    <section id="certificates" className="space-y-10 py-10 lg:py-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-shadow-primary mb-3 text-center text-4xl font-bold text-neutral-800 text-shadow-lg dark:text-white">
          My Certificates<span className="text-primary">.</span>
        </h1>
        <p className="text-center text-neutral-600">
          A collection of certifications I’ve earned through courses, training,
          and achievements in learning and collaboration.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Splide
          options={{
            width: "100%",
            type: "loop",
            perPage: 3,
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 2,
              pauseOnHover: true,
              rewind: false,
            },
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
                autoScroll: {
                  speed: 1,
                },
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {certificates.map((certificate, key) => (
            <SplideSlide
              key={key}
              className="group overflow-hidden rounded"
              onClick={() => setFocusedIndex(focusedIndex ? null : key)}
              onMouseEnter={() => setFocusedIndex(key)}
              onMouseLeave={() => setFocusedIndex(null)}
            >
              <CertificateCard
                {...certificate}
                isFocused={focusedIndex === key}
              />
            </SplideSlide>
          ))}
        </Splide>
      </motion.div>
    </section>
  );
}
