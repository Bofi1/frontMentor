import frontCardImg from "../assets/images/bg-card-front.png";
import logoCard from "../assets/images/card-logo.svg";

function FrontCard({ cardHolder, cardNumber, mm, yy, className }) {
  const cardHolderMayus = (cardHolder || "").toUpperCase();

  return (
    <div
      style={{ backgroundImage: `url(${frontCardImg})` }}
      className={`bg-cover bg-center aspect-[1.82/1] w-full max-w-[447px] p-6 text-white rounded-xl shadow-2xl flex flex-col justify-between ${className}`}
    >
      {/* Logo */}
      <div className="w-16">
        <img src={logoCard} alt="card logo" />
      </div>

      {/* Información */}
      <div className="flex flex-col gap-4">
        <span className="text-xl md:text-2xl tracking-[0.15em] font-medium">
          {cardNumber || "0000 0000 0000 0000"}
        </span>

        <div className="flex justify-between uppercase text-[10px] md:text-xs tracking-widest text-slate-200">
          <span className=" max-w-[70%]">
            {cardHolderMayus || "JANE APPLESEED"}
          </span>
          <span>
            {mm || "00"}/{yy || "00"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
