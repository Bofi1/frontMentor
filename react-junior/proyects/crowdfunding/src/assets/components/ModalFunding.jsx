import { motion } from "motion/react";
import ModalReward from "./ModalReward";

function ModalFunding({ setBackProyect, setFundSent, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, top: "55%" }}
      animate={{ opacity: 1, top: "50%" }}
      exit={{ opacity: 0, top: "55%" }}
      className="bg-white z-20 w-full p-7 rounded-xl max-w-180"
    >
      <h2 className="font-bold  mb-5">Back this project</h2>
      <p className="text-[#9B9A9B] mb-5">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <div className="flex flex-col gap-7">
        {data.rewards.map((item) => (
          <ModalReward
            key={item.id}
            name={"reward"}
            setBackProyect={setBackProyect}
            setFundSent={setFundSent}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ModalFunding;
