import ticketImage from "../images/pattern-ticket.svg";
import githubIcon from "../images/icon-github.svg";

function Ticket({ image, formData }) {
  const ticketNumber = Math.floor(10000 + Math.random() * 90000);
  return (
    <div className="relative w-full max-w-[600px]  aspect-[600/280] mx-auto">
      <div className="absolute inset-0">
        <img src={ticketImage} alt="" />
      </div>

      <div className="relative w-full h-full z-10 p-[4%] flex flex-col justify-between ">
        <div>
          <img className="w-[50%]" src="/logo-full.svg" alt="logo" />
          <span className="pl-[13%] text-[#9694AD] text-[12px] md:text-lg">
            Jan 31, 2025 / Austin, TX
          </span>
        </div>

        <div className="flex gap-5 items-center">
          <div className="w-[19%] aspect-square rounded-lg  overflow-hidden">
            <img className="w-full h-full" src={image} alt="avatar-img" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 pt-[3%]">
            <p className="text-[white] text-md sm:text-4xl font-bold m">
              {formData.fullName}
            </p>
            <div className="flex gap-1 items-center">
              <img className="w-[10%]" src={githubIcon} alt="github-icon" />
              <p className="text-[#9694AD] text-[13px]">{formData.github}</p>
            </div>
          </div>
        </div>

        <p className="absolute text-[#9694AD] text-2xl font-mono rotate-90 whitespace-nowrap origin-center">
          {ticketNumber}#
        </p>
      </div>
    </div>
  );
}

export default Ticket;
