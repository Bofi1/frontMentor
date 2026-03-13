import { motion } from "motion/react";
import checkImg from "../images/icon-check.svg";

function ModalFundSent({ setFundSent }) {
  return (
    <motion.div
      initial={{ opacity: 0, top: "55%" }}
      animate={{ opacity: 1, top: "50%" }}
      exit={{ opacity: 0, top: "55%" }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 w-[90%] p-7 rounded-xl max-w-100 text-center w-full"
    >
      <div className="w-full mb-5 flex justify-center">
        <img src={checkImg} alt="checkImg" />
      </div>
      <h2 className="font-bold">Thanks for your support!</h2>
      <p className="text-[#9B9A9B] my-7">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaing is
        completed
      </p>
      <button
        className="text-white bg-[#3DB2AA] p-3 rounded-full font-semibold w-full cursor-pointer max-w-[150px]"
        onClick={() => {
          setFundSent(false);
        }}
      >
        Got it!
      </button>
    </motion.div>
  );
}

export default ModalFundSent;
