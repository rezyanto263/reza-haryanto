export default function Button({
  children,
  background,
  foreground,
  className = "",
  onClick = () => {},
  href = null,
  target = null,
}) {
  return href ? (
    <a
      href={href}
      onClick={onClick}
      target={target}
      className={`bg-${background} flex cursor-pointer items-center gap-2 rounded bg-gradient-to-br px-4 py-2 text-center font-semibold transition-colors duration-300 text-${foreground} ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={`bg-${background} flex cursor-pointer items-center gap-2 rounded bg-gradient-to-br px-4 py-2 text-center font-semibold transition-colors duration-300 text-${foreground} ${className}`}
    >
      {children}
    </button>
  );
}
