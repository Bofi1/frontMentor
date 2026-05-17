import { motion, AnimatePresence } from "framer-motion";

function StatsGroup({ time, accuracy, wpm }) {
  let colorTimer = "text-white";
  if (time < 60) colorTimer = "text-green-400";
  if (time < 41) colorTimer = "text-yellow-400";
  if (time < 21) colorTimer = "text-red-400";
  if (time < 10) if (time == 0) colorTimer = "text-white";

  let totalAtempts = accuracy.correct + accuracy.errors;

  let totalAccuracy =
    totalAtempts > 0
      ? Math.floor(
          (accuracy.correct / (accuracy.correct + accuracy.errors)) * 100
        )
      : "0";

  return (
    <div className="flex flex-col items-center justify-around w-full border-b-1 border-[#6C6D6C] pb-5">
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
      {/* <div className="w-full">
        <select
          className="p-2 text-white border border-[#6C6D6C] rounded-lg text-sm"
          name="difficulty"
        >
          <option value={"easy"}>easy</option>
          <option value={"medium"}>medium</option>
          <option value={"hard"}>hard</option>
        </select>
      </div> */}
    </div>
  );
}

export default StatsGroup;
