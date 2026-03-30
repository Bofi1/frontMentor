import { motion } from "motion/react";
import ModalReward from "./ModalReward";
import { useState } from "react";

function ModalFunding({
  setBackProyect,
  setFundSent,
  data,
  setTotalDonations,
  handleRestarStock,
  handleBackers,
}) {
  const [selectedPlan, setSelectedPlan] = useState(""); // Guarda el ID o nombre del plan

  return (
    <motion.div
      initial={{ opacity: 0, top: "55%" }}
      animate={{ opacity: 1, top: "50%" }}
      exit={{ opacity: 0, top: "55%" }}
      className="bg-white w-full p-7 rounded-xl max-w-180"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="font-bold  mb-5">Back this project</h2>
      <p className="text-[#9B9A9B] mb-5">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <div className="flex flex-col gap-7">
        {data.rewards.map((item) => (
          <ModalReward
            selected={selectedPlan === item.title}
            onChange={() => setSelectedPlan(item.title)}
            key={item.id}
            name={item.title}
            minPledge={item.minPledge}
            stock={item.stock}
            noLimit={item.noLimit}
            description={item.description}
            nameRadio={"rewards"}
            setBackProyect={setBackProyect}
            setFundSent={setFundSent}
            setTotalDonations={setTotalDonations}
            handleRestarStock={handleRestarStock}
            handleBackers={handleBackers}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ModalFunding;
