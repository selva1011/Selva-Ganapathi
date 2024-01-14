import { js, reactJs, tailwind, html } from "../assets/icons";
import { anim } from "../assets/images";
const about = () => {
  return (
    <section
      id="about"
      className="padding-x min-h-screen w-full relative justify-between max-lg:my-48 max-md:my-36 max-sm:my-32"
    >
      <div className="flex flex-row max-lg:flex-col relative top-28 max-lg:top-4 max-lg:gap-8  items-center justify-center px-12 max-md:px-1  min">
        <div className="flex flex-1 justify-center items-center">
          <div className="relative h-96 w-96 max-sm:h-72 max-sm:w-72 justify-center items-center ">
            <img src={anim} alt="svg computer" />
            {/* <div className="flex h-48 w-48 bg-white rounded-full absolute animate-spin top-16 left-28">
              <img src={tailwind} alt="selva" height={100} width={100} />
            </div>
            <div className="flex gap-36 p-10 relative ani">
              <img src={html} alt="selva" height={90} width={90} className="" />
              <img
                src={reactJs}
                alt="selva"
                height={100}
                width={100}
                className="animate-sp"
              />
            </div>
            <div className="flex gap-36 p-10 relative">
              <img src={tailwind} alt="selva" height={100} width={100} />
              <img src={js} alt="selva" height={90} width={90} />
            </div> */}
            {/* <div className="absolute h-36 w-36 bg-white  ">
              <div className="relative p-4 border-8 rounded-full animate-spin">$</div>
              <p className="relative">₹</p>
            </div> */}
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
