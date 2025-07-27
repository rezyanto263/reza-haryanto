import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/ThemeHook";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import NavbarLink from "./NavbarLink";
import { navbar, waMeLink } from "@/data/navbar";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import SpecialButton from "../Button/SpecialButton";

export default function Navbar() {
  const [isDarkMode, toggleTheme] = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      navbar.forEach((nav) => {
        const section = document.querySelector(nav.href);
        const heroSection = document.querySelector("#hero");
        if (
          scrollPosition >= section?.offsetTop - 300 &&
          scrollPosition < section?.offsetHeight + section?.offsetTop
        ) {
          setActiveLink(nav.href);
        } else if (
          scrollPosition <
          heroSection.offsetHeight + heroSection.offsetTop - 300
        ) {
          setActiveLink("#");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className={`fixed top-0 z-1 w-full bg-neutral-100/50 backdrop-blur dark:bg-black/50 ${isScrolled && "shadow backdrop-saturate-100"}`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Navbar Logo */}
          <a href="#" onClick={() => setActiveLink("#")}>
            <img
              src="/logo.svg"
              alt="Logo"
              className={`drop-shadow-primary h-8 w-8 drop-shadow-md transition-transform ${activeLink !== "#" && "animate-pulse"}`}
            />
          </a>
          {/* Navbar Link */}
          <ul className="flex items-center gap-8 max-md:hidden">
            {navbar.map((nav, key) => (
              <NavbarLink
                key={key + 1}
                nav={{ ...nav, active: nav.href === activeLink }}
              />
            ))}
          </ul>
          {/* Navbar Extra */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggleTheme}
              className="flex h-7 w-14 cursor-pointer items-center rounded-full bg-gray-200 px-1 inset-shadow-xs/50 transition-colors duration-300 dark:bg-gray-500"
            >
              <div className="text-primary rounded-full bg-white p-1 shadow-xs/50 transition-all duration-300 dark:translate-x-6.5 dark:bg-neutral-800">
                {isDarkMode ? <LuMoon size={14} /> : <LuSun size={14} />}
              </div>
            </button>
            <SpecialButton href={waMeLink} target="_blank" className="max-md:hidden">
              Get in touch
            </SpecialButton>
            <button
              className="hover:text-primary hover:border-primary hover:shadow-primary/50 cursor-pointer rounded border-2 text-gray-600 transition-all duration-300 hover:shadow-md md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <LuMenu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className={`align-center fixed top-0 z-2 flex h-full max-h-full w-full justify-center overflow-y-auto bg-white/70 backdrop-blur md:hidden dark:bg-black/70`}
          >
            <button
              className="text-primary border-primary absolute top-5 right-5 rounded border-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LuX size={30} />
            </button>
            <ul className="flex flex-col items-center justify-center gap-15">
              {navbar.map((nav, key) => (
                <NavbarLink
                  key={key + 1}
                  nav={{ ...nav, active: nav.href === activeLink }}
                  onClick={() => {
                    setActiveLink(nav.href);
                    setIsMenuOpen(!isMenuOpen);
                  }}
                />
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
