import {
  html_dock,
  css_dock,
  js_dock,
  react_dock,
  tailwind_dock,
  vue_dock,
  git_dock,
  vscode_dock,
  figma_dock,
} from "../assets/icons";

const DockBar = () => {
  return (
    <div className="">

      <div className="flex h-auto w-auto bg-apple-trans rounded-2xl relative p-2 gap-3 max-lg:gap-[.40rem] max-lg:rounded-xl">
        <div className="flex items-center justify-center  hover:cursor-pointer hover:animate-bounce">
          <img src={html_dock} alt="html" />
        </div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={css_dock} alt="css" />
        </div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={js_dock} alt="js" />
        </div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={react_dock} alt="react" />
        </div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={tailwind_dock} alt="tailwind_dock" />
        </div>
        

        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={git_dock} alt="git_dock" />
        </div>
        <div className="flex items-center justify-center h-auto w-[.08rem] bg-apple-black"></div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={vue_dock} alt="vue_dock" />
        </div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={figma_dock} alt="figma_dock" />
        </div>

        <div className="flex items-center justify-center h-auto w-[.08rem] bg-apple-black"></div>
        <div className="flex items-center justify-center hover:cursor-pointer hover:animate-bounce">
          <img src={vscode_dock} alt="vscode_dock" />
        </div>
      </div>
    </div>
  );
};

export default DockBar;
