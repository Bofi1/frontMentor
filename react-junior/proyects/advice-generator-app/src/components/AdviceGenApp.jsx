import { useState, useEffect } from "react";
import AdviceSkeleton from "./AdviceSkeleton";

import axios from "axios";
import dividerDesktop from "/images/pattern-divider-desktop.svg";
import dividerMobile from "/images/pattern-divider-mobile.svg";
import dice from "/images/icon-dice.svg";

function AdviceGenApp() {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(false); // Nuevo estado de carga

  const getAdvice = async () => {
    setLoading(true); // Empezamos a cargar
    try {
      const response = await axios.get(
        `https://api.adviceslip.com/advice?t=${Date.now()}`
      );
      setAdvice(response.data.slip);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false); // Terminamos de cargar (éxito o error)
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-[#303A49] font-Manrope rounded-xl shadow-lg px-5 py-10 text-center relative flex flex-col items-center w-full min-w-[300px] max-w-[437px]">
      {loading || !advice ? (
        <div className="w-full">
          <AdviceSkeleton />
        </div>
      ) : (
        <>
          <span className="text-[#5EE3A4] text-[0.8rem] font-[800] tracking-[0.2rem] uppercase">
            ADVICE #{advice.id}
          </span>
          <p className="text-[#CCDFE8] font-bold text-2xl leading-9 mt-5">
            "{advice.advice}"
          </p>
          <picture className="mt-6 mb-6">
            <source media="(min-width: 768px)" srcSet={dividerDesktop} />

            <img
              src={dividerMobile}
              alt="divider line"
              className="w-full h-auto"
            />
          </picture>
        </>
      )}
      <div
        className={`bg-[#52FEAB] p-5 rounded-full w-fit flex justify-center absolute -bottom-8 cursor-pointer transition-all ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={!loading ? getAdvice : null}
      >
        <img
          className={loading ? "animate-spin" : ""}
          src={dice}
          alt="icon-dice"
        />
      </div>
    </div>
  );
}

export default AdviceGenApp;
