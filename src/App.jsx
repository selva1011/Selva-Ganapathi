import { Hero, About, Projects, Contact } from "./pages";
import { NavBar } from "./components";

export default function App() {
  return (
    <main className="relative debug-screens bg-apple-white">
      <NavBar />
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
