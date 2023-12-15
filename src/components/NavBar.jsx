import { navLinks } from "../constants";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [phone, setPhone] = useState(false);

  const opener = () => {
    setPhone(!phone);
  };

  const Scroll_handle = () => {
    if (window.screenY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", Scroll_handle);

  const GoTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const Mobile_nav = (
    <>
      <div
        className="lg:hidden block absolute top-24 min-h-screen w-full left-0 right-0 bg-white ease-in-out	transition-all	 man"
        data-aos="fade-in"
      >
        <ul className="flex flex-col gap-10 text-center py-28 font-Sen font-semibold text-2xl">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:text-black">
              <a href={item.href} onClick={opener} >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <header
      className={`padding-x py-4 fixed z-10 w-full h-20 bg-white drop-shadow-md	 ${
        window.screenY > 150 ? " drop-shadow-md" : ""
      }`}
    >
      <nav
        className={`${
          sticky ? ".nav-play" : ""
        } flex justify-between items-center max-container `}
      >
        <div className="">
          <h1
            onClick={GoTop}
            className="flex justify-start items-center text-[2rem] m-0 cursor-pointer font-Urbanist font-extrabold "
          >
            Selva.dev
          </h1>
        </div>
        <ul className="flex-1 flex font-Sen font-semibold text-xl justify-end items-center gap-12 max-lg:hidden text-apple-black ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="hover:text-apple-blue2 hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-apple-blue2 active:text-red-700"
            >
              <a href={item.href} className="active:text-apple-blue2">{item.label}</a>
            </li>
          ))}
        </ul>
        <div>{phone && Mobile_nav}</div>
        <button className="hidden max-lg:block h-[25] w-[25]" onClick={opener}>
          {phone ? <RiCloseLine size={30} /> : <RiMenuLine size={30} />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
