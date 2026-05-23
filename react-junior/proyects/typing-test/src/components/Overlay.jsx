import { motion } from "motion/react";

function Overlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] bg-black overflow-y-auto flex justify-center items-start py-10 px-6 "
    ></motion.div>
  );
}

export default Overlay;
