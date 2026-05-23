import completedIcon from "../assets/images/icon-completed.svg";
import restartIcon from "../assets/images/icon-restart.svg";
import { motion } from "motion/react";

function ModalResults({ wpm, totalAccuracy, accuracy }) {
  return (
    <motion.div
      key={"modal-results"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-[90%] rounded-lg p-5 shadow-2xl z-[99] "
    >
      <div className="flex flex-col items-center">
        <img className="w-10" src={completedIcon} alt="completed-icon" />
        <p className="text-white font-bold mt-5 mb-2 ">Baseline Established!</p>
        <span className="text-[#727373] text-center mb-5">
          You´ve set the bar. Now the real challenge begins-time to beat it.
        </span>

        <div className="w-full flex flex-col gap-5">
          <div className="py-3 px-5 w-full border border-[#727373] rounded-xl">
            <p className="text-[#727373]">WPM:</p>
            <span className="text-white">{wpm}</span>
          </div>
          <div className="py-3 px-5 w-full border border-[#727373] rounded-xl">
            <p className="text-[#727373]">Accuracy:</p>
            <span className="text-white">{totalAccuracy}%</span>
          </div>
          <div className="py-3 px-5 w-full border border-[#727373] rounded-xl">
            <p className="text-[#727373]">Characters:</p>
            <span className="text-white font-bold">
              <span className="text-green-400">{accuracy.correct}</span>
              <span className="font-normal">/</span>
              <span className="text-red-400">{accuracy.errors}</span>
            </span>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg font-semibold flex gap-2 items-center cursor-pointer mt-5">
          <span>Beat This Score</span>
          <img className="w-4" src={restartIcon} alt="restartIcon" />
        </div>
      </div>
    </motion.div>
  );
}

export default ModalResults;
