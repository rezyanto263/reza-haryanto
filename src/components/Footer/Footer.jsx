import {
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMessageCircle,
} from "react-icons/lu";
import { socialMedias } from "@/data/socials";

const iconList = { LuGithub, LuInstagram, LuLinkedin, LuMessageCircle };

export default function Footer() {
  return (
    <footer className="relative mt-10 lg:mt-20">
      <div className="from-primary to-secondary h-1 w-full bg-linear-to-r"></div>
      <div className="w-full bg-neutral-100 pt-10 pb-5 dark:bg-neutral-900">
        <h1 className="text-center text-xl font-bold text-neutral-900 dark:text-white">
          Let's Connect with Me!
        </h1>
        <p className="text-center text-neutral-500">
          Open heart. Open mind. Open to opportunities.
        </p>
        <ul className="mt-5 flex items-center justify-center gap-5">
          {socialMedias.map((social, key) => {
            const Icon = iconList[social.icon];
            return (
              <li key={key} className="group">  
                <a
                  href={social.link}
                  target="__blank"
                  className="border-primary group-hover:bg-primary block rounded border-2 p-1 transition-colors duration-300"
                >
                  <Icon
                    size={22}
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-10">
          <p className="text-neutral-900 dark:text-white text-center">
            © 2025 Muhammad Reza Haryanto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
