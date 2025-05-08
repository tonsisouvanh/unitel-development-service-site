import { BlogGrid } from "@/components/blog-grid";
import { BlogHeader } from "@/components/blog-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen flex-col">
      <BlogHeader />
      <BlogGrid />
    </main>
  );
}
