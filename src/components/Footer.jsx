import { footer_sign } from "../assets/images";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="flex relative flex-row justify-between items-center h-1/4 w-full max-sm:flex-col">
      <div className="flex flex-col pb-5 px-8 gap-2">
        <img src={footer_sign} alt="sign" className="h-[65px] w-[108px]" />
        <p className="font-Sen text-base text-apple-black2 font-normal">
          This Website is built with{" "}
          <a href="https://react.dev/" className="underline font-semibold text-apple-orange">
            React
          </a>{" "}
          and hosted on{" "}
          <a href="https://vercel.com/" className="underline font-semibold text-apple-orange">
            vercel
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col pb-5 px-8 gap-2">
        <div className="flex text-apple-black2 gap-4 justify-end py-2">
          <a href="https://github.com/selva1011">
            <FaGithub size={25} className="hover:text-apple-orange" />
          </a>

          <FaLinkedin size={25} className="hover:text-apple-blue2" />
        </div>
        <h3 className=" font-Sen text-lg text-apple-orange">
          © Selva Ganapathi 2023–Today.{" "}
          <span className="font-bold">All rights reserved.</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
