import { motion, AnimatePresence } from "framer-motion";

function StatsGroup({ time, accuracy, wpm }) {
  let colorTimer = "text-white";
  if (time < 60) colorTimer = "text-green-400";
  if (time < 41) colorTimer = "text-yellow-400";
  if (time < 21) colorTimer = "text-red-400";
  if (time < 10) if (time == 0) colorTimer = "text-white";

  // Aplicamos la validación: si total es 0, devolvemos 100.

  let totalAtempts = accuracy.correct + accuracy.errors;

  let totalAccuracy =
    totalAtempts > 0
      ? Math.floor(
          (accuracy.correct / (accuracy.correct + accuracy.errors)) * 100
        )
      : "0";

  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex flex-col items-center">
        <p className="text-[#6C6D6C]">WPM:</p>
        <AnimatePresence mode="wait">
          <motion.span
            // CLAVE: Al usar el valor de wpm como 'key', Framer re-renderiza
            // y anima este elemento cada vez que el número cambia.
            key={wpm}
            // 1. Estado Inicial (de dónde viene)
            initial={{ opacity: 0, y: 15, scale: 0.8 }} // 2. Estado de Animación (a dónde llega)
            animate={{ opacity: 1, y: 0, scale: 1 }}
            // 3. Estado de Salida (a dónde se va el número viejo)
            exit={false}
            // 4. Configuración de la transición (suavidad)
            transition={{
              duration: 0.15, // Muy rápido para que no distraiga al escribir
              ease: "easeOut", // Comienza rápido, termina suave
            }}
            // Mantienes tus clases de Tailwind para el estilo
            className="text-white font-bold font-mono inline-block"
          >
            {/* Tu validación lógica se mantiene igual */}
            {!Number.isNaN(wpm) && Number.isFinite(wpm) ? wpm : "-"}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="w-[1px] h-full bg-[#6C6D6C]"></div>
      <div className="flex flex-col items-center">
        <p className="text-[#6C6D6C]">Accuracy:</p>
        <span className="text-white font-bold">{totalAccuracy + " %"}</span>
      </div>
      <div className="w-[1px] h-full bg-[#6C6D6C]"></div>
      <div className="flex flex-col items-center">
        <p className="text-[#6C6D6C]">Time:</p>
        <span className={` font-bold ${colorTimer}`}>
          {time < 60 && "0:"}
          {time < 10 && "0"}
          {time}
        </span>
      </div>
    </div>
  );
}

export default StatsGroup;
