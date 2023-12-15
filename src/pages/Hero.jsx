import React from "react";
import { DockBar } from "../components";
import {
  selvaCircle,
  profilepic,
  profilepic1,
  profilepic2,
  profilepic3,
  profilepic4,
} from "../assets/images";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const hero = () => {
  return (
    <section id="home" className="padding-x min-h-screen w-full relative">
      <div className="flex flex-col justify-center items-center gap-40">
        <div className="flex max-lg:flex-col-reverse relative top-24 justify-center items-center gap-16 max-lg:gap-8">
          <div className="flex flex-col w-auto ">
            <div className="flex justify-start items-center">
              <p className="font-Sen font-light	 text-xl text-apple-orange max-sm:text-lg ">
                Hi, Everyone
              </p>
              <span className="text-4xl animate-wiggle">👋🏽</span>
            </div>
            <h1 className="pb-4 text-6xl font-Urbanist font-[900] leading-none max-sm:text-4xl">
              Front-End React <br />
              Developer
            </h1>
            <h3 className="pb-4 text-xl leading-relaxed max-sm:text-lg font-Sen font-normal text-apple-black">
              I'm{" "}
              <span className="text-apple-blue2 font-bold">
                Selva Ganapathi
              </span>
              . A Junior Front-end React <br />
              Developer based in TamilNadu, India.
            </h3>
            <div className="flex text-apple-black2 gap-4">
              <a href="https://github.com/selva1011">
                <FaGithub size={30} className="hover:text-apple-orange" />
              </a>
              <FaLinkedin size={30} className="hover:text-apple-blue2" />
            </div>
          </div>
          <div className="flex justify-center items-center h-[25rem] w-[25rem] max-sm:h-72 max-sm:w-72">
            <img src={profilepic4} alt="selva" />
          </div>
        </div>
        <div className="flex items-end justify-center">
          <DockBar />
        </div>
      </div>
    </section>
  );
};

export default hero;
