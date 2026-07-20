import { createFileRoute } from "@tanstack/react-router";
import { Hero, About } from "../components";

const Home = () => (
  <>
    <Hero />
    <About />
  </>
);

export const Route = createFileRoute("/")({
  component: Home,
});
