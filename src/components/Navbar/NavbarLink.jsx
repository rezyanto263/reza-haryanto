export default function NavbarLink({ nav, onClick }) {
  return (
    <li
      className={`border-b-2 transition-colors duration-300 ${nav.active ? "border-b-primary" : "border-b-transparent"}`}
    >
      <a
        className={`font-semibold text-neutral-500 max-md:text-4xl transition-colors duration-300 ${nav.active ? 'text-primary drop-shadow-primary drop-shadow-xl' : 'hover:text-primary hover:drop-shadow-primary hover:drop-shadow-xl'}`}
        href={nav.href}
        onClick={onClick}
      >
        {nav.text}
      </a>
    </li>
  );
}
