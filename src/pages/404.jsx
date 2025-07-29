import Button from "@/components/Button/Button";
import { LuCircleArrowLeft } from "react-icons/lu";

export default function PageNotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5 bg-white dark:bg-neutral-900">
      <h1 className="text-primary text-shadow-primary animate-pulse text-center text-8xl font-bold text-shadow-sm">
        404
      </h1>
      <h2 className="text-center text-4xl font-medium text-neutral-900 dark:text-white">
        Page Not Found!
      </h2>
      <Button
        href="/"
        background="transparent"
        foreground="primary"
        className="border-primary hover:bg-primary border-2 hover:text-white"
      >
        <LuCircleArrowLeft size={18} />
        Go to Home Page
      </Button>
    </main>
  );
}
