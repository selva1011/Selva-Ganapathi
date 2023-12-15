import { FiGithub, FiLink } from "react-icons/fi";

const Portfolio1 = () => {
  return (
    <div>
      <div className="flex bg-white p-5 w-[584px] max-lg:w-[360px] rounded-3xl justify-between items-center relative drop-shadow-xl h-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-2xl bg-cover h-80 w-[34rem] bg-hero1-pattern hover:bg-bottom	 ease-in-out transition-transform duration-1000 screen drop-shadow-md max-lg:w-80 max-lg:h-72">
            {/* <img src={hero} alt="hero" style={{height: "100%", width: "100%", objectFit: "contain", transform: "translateY(0%)", transition: "transform 10s ease-in-out 0s"}}/> */}
          </div>
          <div className="flex flex-col items-center justify-center mt-2 pt-4  max-lg:mt-0 ">
            <div className="flex gap-6 items-center">
              <h1 className="text-2xl font-Sen font-bold max-lg:text-lg">BEAVER SHOES 👟</h1>
              <p className="font-Sen text-xl font-medium max-lg:text-sm">
                {"( October 2023 )"}
              </p>
            </div>
            <p className="py-6 px-6 text-center font-Sen text-apple-black w-auto text-lg max-lg:text-sm max-lg:py-3">
              The Beaver Shoes app provides a seamless experience for purchasing
              high-quality footwear. Explore and shop for premium shoes
              effortlessly with the Beaver Shoes app.
            </p>
            <div className="flex gap-8 max-lg:gap-4 text-lg max-lg:text-sm">
              <p className="flex justify-center items-center rounded-xl px-4 py-2 bg-apple-white text-apple-black2 font-bold max-lg:font-normal max-lg:drop-shadow-md max-lg:px-2 max-lg:py-1 max-lg:rounded drop-shadow-lg">
                REACT{" "}
              </p>
              <p className="flex justify-center items-center rounded-xl px-4 py-2 bg-apple-white text-apple-black2 font-bold max-lg:font-normal max-lg:drop-shadow-md max-lg:px-2 max-lg:py-1 max-lg:rounded drop-shadow-lg">
                TAILWIND
              </p>
            </div>
            <div className="flex gap-12 justify-center items-center mt-8 max-lg:mt-5 max-lg:gap-6">
              <a href="https://github.com/selva1011/Beaver_shoes_landing_page" target="_blank">
              <div className="flex items-center gap-2 cursor-pointer hover:text-apple-blue2 text-apple-black2 max-lg:text-sm">
                <FiGithub size={20} />
                <p className="text-xl font-Sen font-bold max-lg:text-base">Code</p>
              </div>
              </a>
              <a href="https://beaver-shoes.vercel.app/" target="_blank">
              <div className="flex items-center gap-3 cursor-pointer hover:text-apple-orange text-apple-black2 max-lg:text-sm">
                <p className="text-xl font-Sen font-bold max-lg:text-base">Live Demo</p>
                <FiLink size={20} />
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
