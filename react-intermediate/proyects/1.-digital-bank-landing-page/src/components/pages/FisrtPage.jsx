import bgMobile from "../../assets/images/bg-intro-mobile.svg";
import bgDesktop from "../../assets/images/bg-intro-desktop.svg";

import phones from "../../assets/images/image-mockups.png";

function FisrtPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
      <div className="bg-[#FAFAFB] md:bg-white relative flex justify-center md:order-2">
        <img
          className="absolute inset-0 w-full h-full md:hidden"
          src={bgMobile}
          alt="bgMobile"
        />
        <img
          className="absolute inset-0 w-full h-full hidden md:flex scale-150 -mt-25 ml-10"
          src={bgDesktop}
          alt="bgMobile"
        />
        <img className="relative -mt-33" src={phones} alt="" />
      </div>

      <div className="flex flex-col items-center md:order-1 md:justify-center">
        <div className="flex flex-col px-20 p-5 gap-7">
          <h2 className="text-4xl md:text-5xl text-center text-[#2E3343] md:text-start">
            Next generation digital banking
          </h2>
          <p className="text-center text-[#B7B7B9] md:text-start md:text-xl">
            Take you financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="self-center md:self-start rounded-full text-white font-bold bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-3 px-8">
            Request Invite
          </button>
        </div>
      </div>
    </div>
  );
}

export default FisrtPage;
