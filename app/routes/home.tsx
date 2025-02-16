import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jukify" },
    { name: "description", content: "Fuck you pay me" },
  ];
}

export default function Home() {
  return <Welcome />;
}
