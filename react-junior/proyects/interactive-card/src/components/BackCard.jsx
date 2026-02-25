import backCardImg from "/bg-card-back.png";
import { motion, AnimatePresence } from "framer-motion";

function BackCard({ cvc, className }) {
  return (
    <div
      style={{ backgroundImage: `url(${backCardImg})` }}
      className={`relative bg-cover bg-center aspect-[1.82/1] w-full max-w-[200px] rounded-xl shadow-2xl ${className}`}
    >
      {/* El CVC posicionado relativo al tamaño de la tarjeta */}
      <AnimatePresence>
        <motion.span
          // La key cambia solo cuando el CVC se vacía por completo
          key={cvc === "" ? "emptyCVC" : "filledCVC"}
          // Solo hace el efecto de entrada cuando vuelve a estar vacío (reseteo)
          initial={cvc === "" ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-[45%] right-[12%] text-white text-sm font-bold tracking-widest"
        >
          {cvc || "000"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default BackCard;
