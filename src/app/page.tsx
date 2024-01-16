import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import { FC } from "react";
import NavBar from "./components/NavBar";

const Home:FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar></NavBar>
      <Welcome></Welcome>
      <Experience></Experience>
      <Skills></Skills>
    </main>
  )
}

export default Home