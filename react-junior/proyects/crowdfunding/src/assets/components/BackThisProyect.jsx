import logoMaster from "../images/logo-mastercraft.svg";
import iconCheck from "../images/icon-bookmark.svg";

function BackThisProyect() {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center border border-gray-200 p-5 relative text-center w-full max-w-170 lg:px-10 lg:pb-10">
      <img
        className="rounded-full absolute -top-7"
        src={logoMaster}
        alt="logo-master"
      />
      <h1 className="font-bold text-xl px-5 mt-7 lg:text-2xl lg:font-extrabold">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-[#878687] my-7 lg:mb-10">
        A beautiful handcrafted monitor stand to reduce neck and eye strain
      </p>
      <div className="flex gap-5 justify-center lg:justify-between w-full">
        <button className="rounded-full bg-[#3DB2AA] text-white font-semibold flex justify-center text-sm items-center px-10 cursor-pointer">
          Back this proyect
        </button>
        <div className="cursor-pointer relative flex ">
          <img
            className="relative z-10 lg:absolute lg:-left-10"
            src={iconCheck}
            alt="icon-check"
          />
          <div className="bg-[#F4F5F5] rounded-r-full text-[#8D8A8A] hidden items-center justify-center font-bold lg:flex px-5 py-4 pl-7">
            Bookmark
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackThisProyect;
