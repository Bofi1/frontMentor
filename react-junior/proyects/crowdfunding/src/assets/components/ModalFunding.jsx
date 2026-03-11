import { AnimatePresence, motion } from "motion/react";
import ModalReward from "./ModalReward";

function ModalFunding({ setBackProyect }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-10"
        onClick={() => setBackProyect(false)} // Permite cerrar el menú al hacer clic fuera
      />

      <motion.div
        initial={{ opacity: 0, top: "55%" }}
        animate={{ opacity: 1, top: "50%" }}
        exit={{ opacity: 0, top: "55%" }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 w-[90%] p-7 rounded-xl max-w-180"
      >
        <h2 className="font-bold  mb-5">Back this project</h2>
        <p className="text-[#9B9A9B] mb-5">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <ModalReward name={"reward"} />
      </motion.div>
    </>
  );
}

export default ModalFunding;
