import { LuGithub, LuInstagram, LuLinkedin, LuMessageCircle } from "react-icons/lu";
import { waMeLink } from "./navbar";

export const socialMedias = [
  {
    name: 'GitHub',
    link: 'https://github.com/rezyanto263',
    icon: <LuGithub />
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/muhammadrezaharyanto',
    icon: <LuLinkedin />
  },
  {
    name: 'LinkedIn',
    link: 'https://www.instagram.com/rezyanto_',
    icon: <LuInstagram />
  },
  {
    name: 'WhatsApp',
    link: waMeLink,
    icon: <LuMessageCircle />
  },
]