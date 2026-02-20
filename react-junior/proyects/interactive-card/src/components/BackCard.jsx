import backCardImg from "../assets/images/bg-card-back.png";

function BackCard({ cvc, className }) {
  return (
    <div
      style={{ backgroundImage: `url(${backCardImg})` }}
      className={`relative bg-cover bg-center aspect-[1.82/1] w-full max-w-[200px] rounded-xl shadow-2xl ${className}`}
    >
      {/* El CVC posicionado relativo al tamaño de la tarjeta */}
      <span className="absolute top-[45%] right-[12%] text-white text-sm font-bold tracking-widest">
        {cvc || "000"}
      </span>
    </div>
  );
}

export default BackCard;
