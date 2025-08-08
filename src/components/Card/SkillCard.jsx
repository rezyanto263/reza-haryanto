import {
  SiBootstrap,
  SiCodeigniter,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiDocker
} from "react-icons/si";
import SpotlightCard from "../SpotlightCard";

import SvgHapi from "@/assets/hapijs.svg";
import SvgGoogleCloud from "@/assets/gcloud.svg";
import SvgPostgresql from "@/assets/postgresql.svg";

const listIcon = {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiCodeigniter,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SvgHapi,
  SvgGoogleCloud,
  SvgPostgresql,
  SiDocker
};

export default function SkillCard({ name, icon, color, learning = false }) {
  const Icon = listIcon[icon];
  return (
    <SpotlightCard
      className="hover:shadow-primary flex cursor-default flex-col items-center justify-center rounded border-0 bg-gray-200 p-1 transition-transform duration-300 hover:scale-105 hover:shadow-md dark:bg-neutral-900"
      spotlightColor="var(--color-primary)"
    >
      {typeof Icon === "string" ? (
        <img
          src={Icon}
          className="mb-2 sm:mb-5 size-9 sm:size-15 lg:size-18"
        />
      ) : (
        <Icon className={`${color} mb-2 sm:mb-5 size-9 sm:size-15 lg:size-18`} />
      )}
      <span className="block text-sm sm:text-base text-center font-medium">{name}</span>
      {learning && (
        <span className="bg-secondary text-xs sm:text-base mt-2 sm:mt-3 block rounded px-2 py-0.5 text-white">
          Learning
        </span>
      )}
    </SpotlightCard>
  );
}
