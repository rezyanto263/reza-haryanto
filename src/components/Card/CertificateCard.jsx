export default function CertificateCard({ name, image, from, isFocused }) {
  return (
    <div
      className="relative rounded"
    >
      <img src={image} alt={name} className="aspect-video w-full" />
      <div
        className={`${isFocused ? "visible opacity-100" : "invisible opacity-0"} absolute top-1/2 flex size-full -translate-y-1/2 flex-col items-center justify-center gap-2 bg-white/70 p-4 backdrop-blur-md backdrop-saturate-100 transition-all duration-300 dark:bg-black/70`}
      >
        <h2 className="text-primary text-center text-base font-bold md:text-lg lg:text-xl">
          {name}
        </h2>
        <p className="text-small text-center text-neutral-800 dark:text-white">
          {from}
        </p>
      </div>
    </div>
  );
}
