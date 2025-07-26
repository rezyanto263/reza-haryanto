import Button from "@/components/Button/Button";
import { useState } from "react";

export default function ProjectCard({
  name,
  description,
  image,
  tech,
  preview,
  repository,
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      onClick={() => setIsFocused(!isFocused)}
      onMouseEnter={() => setIsFocused(!isFocused)}
      onMouseLeave={() => setIsFocused(false)}
      className={`${isFocused && "shadow-primary shadow-md"} aspect-video w-full overflow-hidden rounded bg-cover bg-center transition-shadow`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={` ${
          isFocused
            ? "visible opacity-100 backdrop-blur-md backdrop-saturate-100"
            : "invisible opacity-0"
        } flex size-full flex-col items-center justify-center gap-3 bg-white/70 p-4 transition-all duration-300 md:gap-5 dark:bg-black/70`}
      >
        <h2 className="text-primary text-xl font-bold md:text-2xl text-center">{name}</h2>
        <p className="text-center text-neutral-700 max-sm:text-sm dark:text-neutral-400 max-sm:line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap max-sm:gap-1 gap-3">
          {tech.map((t) => (
            <span className="bg-secondary inline-block rounded px-3 py-1 text-sm text-white max-sm:text-xs">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {preview && (
            <Button
              href={preview}
              target="__blank"
              background="transparent"
              foreground="primary"
              className="border-primary hover:bg-primary border-2 hover:text-white"
            >
              Preview
            </Button>
          )}
          <Button
            href={repository}
            target="__blank"
            background="transparent"
            foreground="primary"
            className="border-primary hover:bg-primary border-2 hover:text-white max-sm:text-sm"
          >
            Repository
          </Button>
        </div>
      </div>
    </div>
  );
}
