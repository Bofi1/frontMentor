import { motion } from "motion/react";

function Overlay({ setBackProyect, setFundSent, children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[100] bg-black/50  flex justify-center items-start py-10 px-6 ${className}`}
      onClick={() => {
        setFundSent(false), setBackProyect(false);
      }}
    >
      {children}
    </motion.div>
  );
}

export default Overlay;
