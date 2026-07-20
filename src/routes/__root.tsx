import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components";
const RootComponent = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
