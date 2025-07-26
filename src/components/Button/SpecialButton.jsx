import GlareHover from "../GlareHover";

export default function SpecialButton({
  children,
  href = null,
  download = null,
  className = "",
  target = null,
  onClick = () => {},
}) {
  return (
    <GlareHover
      width="w-fit"
      height="h-fit"
      background="bg-transparent"
      className="hover:shadow-primary/50 rounded border-0 transition-all duration-300 hover:shadow-md"
      borderRadius="4px"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          target={target}
          {...(download ? { download } : {})}
          className={`from-primary to-secondary hover:from-secondary hover:to-primary flex h-full cursor-pointer items-center gap-2 rounded bg-gradient-to-br px-4 py-2 text-center font-semibold text-white ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={`from-primary to-secondary hover:from-secondary hover:to-primary flex h-full cursor-pointer items-center gap-2 rounded bg-gradient-to-br px-4 py-2 text-center font-semibold text-white ${className}`}
        >
          {children}
        </button>
      )}
    </GlareHover>
  );
}
