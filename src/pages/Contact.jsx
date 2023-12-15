import { Footer } from "../components";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FcHome, FcGoogle, FcPhoneAndroid } from "react-icons/fc";

const Contact = () => {
  return (
    <section
      id="contact"
      className="padding-x min-h-screen w-full relative bg-white"
    >
      <div className="flex flex-col relative top-36  justify-center items-center gap-24 max-lg:gap-8">
        <div className="flex flex-col justify-center items-start top-32">
          <h1 className="text-4xl font-Urbanist font-extrabold text-apple-blue2 max-sm:text-2xl">
            Contact
          </h1>
          <p className="py-4 max-lg:py-0 max-lg:pt-2 text-xl leading-normal max-sm:text-lg font-Sen font-semibold text-black w-auto">
            Don't hesitate! Reach out and let's code your vision into reality.
            <span className="text-2xl"> 👇🏽</span>
          </p>
          <div className="flex max-lg:flex-col gap-12 font-Sen pt-12 max-lg:gap-6 max-lg:pt-6">
            <div className="flex gap-4">
              <div className="flex items-center justify-center h-[50px] w-[50px] drop-shadow-lg	bg-white rounded-full">
                <FcPhoneAndroid size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl max-sm:text-lg font-[700] hover:text-apple-blue cursor-pointer">
                  Phone
                </h2>
                <h3 className="text-lg max-sm:text-base font-[500] text-apple-black">
                  +91 80154 42789
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-[50px] w-[50px] drop-shadow-lg	bg-white rounded-full items-center justify-center">
                <FcGoogle size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl max-sm:text-lg font-[700] hover:text-apple-blue cursor-pointer">
                  Gmail
                </h2>
                <h3 className="text-lg max-sm:text-base font-[500] text-apple-black">
                  Selvaganapathi1011.selva@gmail.com
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center justify-center h-[50px] w-[50px] drop-shadow-lg	bg-white		 rounded-full">
                <FcHome size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl max-sm:text-lg font-[700] hover:text-apple-blue cursor-pointer">
                  Location
                </h2>
                <h3 className="text-lg max-sm:text-base font-[500] text-apple-black">
                  TamilNadu, India
                </h3>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Contact;
