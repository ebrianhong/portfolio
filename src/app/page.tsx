import Experience from "./components/Experience";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import { FC } from "react";

const Home:FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Socials></Socials>
      <Welcome></Welcome>
      <Experience></Experience>
      <Skills></Skills>
    </main>
  )
}

export default Home