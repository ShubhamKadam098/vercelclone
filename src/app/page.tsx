import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <h1>Home Page</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
