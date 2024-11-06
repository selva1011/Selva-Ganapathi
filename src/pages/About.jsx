import { js, reactJs, tailwind, html } from "../assets/icons";
import { anim } from "../assets/images";
const about = () => {
  return (
    <section
      id="about"
      className="padding-x mx-auto max-w-[1440px] relative justify-between max-lg:my-48 max-md:my-36 max-sm:my-32 my-48"
    >
      <div className="flex flex-row max-lg:flex-col relative top-28 max-lg:top-4 max-lg:gap-8  items-center justify-center px-12 max-md:px-1  min">
        <div className="flex flex-1 justify-center items-center">
          <div className="relative h-96 w-96 max-sm:h-72 max-sm:w-72 justify-center items-center ">
            <img src={anim} alt="svg computer" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="pb-4 text-4xl font-Urbanist font-[700] leading-none max-sm:text-2xl">
            <span className="text-apple-black">I'm</span> Selva Ganpathi,
          </h3>
          <p className=" text-xl leading-normal max-sm:text-lg font-Sen text-apple-black max-lg:text-center max-sm:text-left">
            Self-taught{" "}
            <span className="text-apple-blue2 font-medium">
              Indian FrontEnd enthusiast
            </span>{" "}
            skilled in{" "}
            <span className="text-apple-blue2 font-medium">
              HTML, CSS, Tailwind, JavaScript,
            </span>{" "}
            and <span className="text-apple-blue2 font-medium">React</span>.
            Dedicated to crafting visually seamless user experiences, staying
            updated on industry trends. Eager to contribute to innovative
            projects, blending creativity and technical acumen in{" "}
            <span className="text-apple-blue2 font-medium">
              FrontEnd development
            </span>
            . Excited to collaborate, learn, and make a positive impact in the
            ever-evolving{" "}
            <span className="text-apple-blue2 font-medium">
              web technologies
            </span>{" "}
            landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
