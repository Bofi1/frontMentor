import { motion } from "motion/react";

function Overlay({ setBackProyect, setFundSent }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 z-10"
      onClick={() => {
        setFundSent(false), setBackProyect(false);
      }}
    />
  );
}

export default Overlay;
