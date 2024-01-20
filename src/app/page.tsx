import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Welcome></Welcome>
      <Experience></Experience>
      <Skills></Skills>
    </main>
  );
};

export default Home;
