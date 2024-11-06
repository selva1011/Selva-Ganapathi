import { Hero, About, Projects, Contact } from "./pages";
import { NavBar } from "./components";
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <main className="relative bg-apple-white w-full">
      <SpeedInsights />
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
