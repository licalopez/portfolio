import Landing from "./components/landing";
import About from "./components/about/about";
import Projects from './components/projects/projects';


export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Projects />
    </main>
  );
}
