import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-display mb-4">This page doesn&apos;t exist yet.</h1>
      <p className="text-ink-300 text-lg mb-10 max-w-md">
        But we can build it. Seriously, we build things.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="/" arrow>
          Take me home
        </Button>
        <Button href="/contact" variant="secondary" arrow>
          Start a project
        </Button>
      </div>
    </div>
  );
}
