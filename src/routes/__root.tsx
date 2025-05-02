import { Footer } from "@/components/footer";
import { Navbar } from "@/components/nav-bar";
import NotFound from "@/components/not-found";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  notFoundComponent: () => <NotFound />,
  component: () => (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});
