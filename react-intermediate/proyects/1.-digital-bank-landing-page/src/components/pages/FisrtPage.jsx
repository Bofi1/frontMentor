import bgMobile from "../../assets/images/bg-intro-mobile.svg";
import bgDesktop from "../../assets/images/bg-intro-desktop.svg";

import phones from "../../assets/images/image-mockups.png";

function FisrtPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#FAFAFB] lg:bg-white relative flex justify-center lg:order-2">
        <img
          className="absolute inset-0 w-full h-full lg:hidden"
          src={bgMobile}
          alt="bgMobile"
        />
        <img
          className="absolute inset-0 w-full h-full hidden lg:flex scale-160 -mt-25 ml-10"
          src={bgDesktop}
          alt="bgMobile"
        />
        <img
          className="relative -mt-33 lg:-mb-33 lg:min-w-[690px] z-2"
          src={phones}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center lg:order-1 lg:justify-center">
        <div className="flex flex-col py-10 px-5 gap-7 lg:pr-30">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-center text-[#2E3343] lg:text-start ">
            Next generation digital banking
          </h2>
          <p className="text-center text-[#B7B7B9] lg:text-start lg:text-xl">
            Take you financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="self-center lg:self-start rounded-full text-white font-bold bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-3 px-8">
            Request Invite
          </button>
        </div>
      </div>
    </div>
  );
}

export default FisrtPage;
