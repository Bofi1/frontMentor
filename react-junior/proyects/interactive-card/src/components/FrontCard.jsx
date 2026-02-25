import frontCardImg from "../assets/images/bg-card-front.png";
import logoCard from "../assets/images/card-logo.svg";
import { motion, AnimatePresence } from "framer-motion";

function FrontCard({
  cardHolder,
  cardNumber,
  mm,
  yy,
  className,
  send,
  setSend,
}) {
  const cardHolderMayus = (cardHolder || "").toUpperCase();

  return (
    <AnimatePresence>
      <div
        style={{ backgroundImage: `url(${frontCardImg})` }}
        className={`bg-cover bg-center aspect-[1.82/1] w-full max-w-[200px] p-6 text-white rounded-xl shadow-2xl flex flex-col justify-between ${className}`}
      >
        {/* Logo */}
        <div className="w-16">
          <img src={logoCard} alt="card logo" />
        </div>

        {/* Información */}
        <div className="flex flex-col gap-4">
          <motion.span
            // La clave es que la KEY cambie solo cuando el número está vacío
            // Si hay número, la key es "lleno", si no, es "vacio"
            key={cardNumber === "" ? "emptyNumber" : "filledNumber"}
            // Solo animamos el 'initial' si el número está vacío (los ceros)
            initial={cardNumber === "" ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            // Animamos la salida solo cuando se borra todo
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl tracking-[0.15em] font-medium block"
          >
            {cardNumber || "0000 0000 0000 0000"}
          </motion.span>

          <div className="flex justify-between uppercase text-[10px]  tracking-widest text-slate-200">
            <motion.span
              key={cardHolderMayus === "" ? "emptyName" : "filledName"}
              initial={cardHolderMayus === "" ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className=" max-w-[70%]"
            >
              {cardHolderMayus || "JANE APPLESEED"}
            </motion.span>
            <motion.span
              key={mm === "" && yy === "" ? "emptyDate" : "filledDate"}
              initial={mm === "" && yy === "" ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {mm || "00"}/{yy || "00"}
            </motion.span>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default FrontCard;
