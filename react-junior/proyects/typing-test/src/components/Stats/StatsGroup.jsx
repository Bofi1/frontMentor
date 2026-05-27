import { motion, AnimatePresence } from "framer-motion";

function StatsGroup({ time, totalAccuracy, wpm }) {
  let colorTimer = "text-white";
  if (time < 60) colorTimer = "text-green-400";
  if (time < 41) colorTimer = "text-yellow-400";
  if (time < 21) colorTimer = "text-red-400";
  if (time < 10) if (time == 0) colorTimer = "text-white";

  return (
    <div className="flex flex-col items-center justify-around w-full border-b-1 border-[#6C6D6C] pb-5 gap-5">
      <div className="flex justify-around w-full h-full">
        <div className="flex flex-col items-center h-full">
          <p className="text-[#6C6D6C]">WPM:</p>
          <AnimatePresence mode="wait">
            <motion.span
              key={wpm} // importante para que vaya reenderizando
              initial={
                !Number.isNaN(wpm) && Number.isFinite(wpm)
                  ? { opacity: 0, scale: 0.8 }
                  : false
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={
                !Number.isNaN(wpm) && Number.isFinite(wpm)
                  ? { opacity: 0, scale: 0.8 }
                  : false
              }
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="text-white font-bold font-mono inline-block"
            >
              {!Number.isNaN(wpm) && Number.isFinite(wpm) ? wpm : "-"}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex bg-[#6C6D6C] w-[1px] h-full"></div>
        <div className="flex flex-col items-center">
          <p className="text-[#6C6D6C]">Accuracy:</p>
          <AnimatePresence mode="wait">
            <motion.span
              key={totalAccuracy}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="text-white font-bold"
            >
              {totalAccuracy + " %"}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex bg-[#6C6D6C] w-[1px] h-full"></div>

        <div className="flex flex-col items-center">
          <p className="text-[#6C6D6C]">Time:</p>
          <AnimatePresence mode="wait">
            <motion.span
              key={time}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className={` font-bold ${colorTimer}`}
            >
              {time < 60 && "0:"}
              {time < 10 && "0"}
              {time}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-3">
        <select
          className="text-white text-center py-1 rounded-lg border border-gray-400"
          name="difficulty"
          id="difficulty"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <select
          className="text-white text-center py-1 rounded-lg border border-gray-400"
          name="time"
          id="time"
        >
          <option value="time60">time (60)</option>
          <option value="Passage">Passage</option>
        </select>
      </div>
    </div>
  );
}

export default StatsGroup;
