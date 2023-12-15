import { Portfolio, Portfolio1 } from "../components";

const Projects = () => {
  return (
        <section id="projects" className="padding-x  w-full min-h-screen relative my-24 max-lg:my-8">
      <div className="flex flex-col justify-center  top-24 relative max-md:top-0 h-auto">
        <div className="flex flex-col justify-start items-start text-left">
          <h1 className="text-2xl text-apple-blue2 font-bold font-Urbanist max-md:xl">
            Portfolio
          </h1>
          <h2 className="text-3xl text-black font-bold font-Sen max-md:text-lg">
            Responsive Dreams: Unveiling My FrontEnd Creations 🪁
          </h2>
        </div>
        <div className="flex gap-12 mt-8 justify-center items-center flex-nowrap max-xl:flex-col 	max">
          <div className="flex m">
            <Portfolio />
          </div>
          <dir className="flex m">
            <Portfolio1 />
          </dir>
        </div>
      </div>
    </section>
  );
};

export default Projects;
