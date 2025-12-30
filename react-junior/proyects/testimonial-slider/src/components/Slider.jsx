import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

function Slider() {
  const [media, setMedia] = useState([]);
  const [secuence, setSecuence] = useState(0);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setMedia(response.data);
        console.log("JSON recuperado con Axios:", response.data);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo:", error.message);
      });
  }, []);

  if (media.length === 0) {
    return <div>Cargando datos...</div>;
  }

  const handlePrevious = () => {
    setSecuence((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSecuence((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center lg:flex-row ">
      <div className="inline-flex flex-col  items-center lg:order-2 relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={secuence}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.1 }}
          >
            <img
              className="h-50 lg:h-[500px] rounded-lg shadow-xl relative z-99"
              src={media[secuence].url}
              alt=""
            />
            <img
              class="absolute top-0 scale-135"
              alt=""
              src="/img/pattern-bg.svg"
            ></img>
          </motion.div>
        </AnimatePresence>

        <img
          class="absolute lg:-left-85 lg:top-21 -bottom-23 scale-45 lg:scale-100"
          alt=""
          src="/img/pattern-quotes.svg"
        ></img>

        <div className=" shadow-lg rounded-full inline -mt-3 z-99 lg:mr-[300px] lg:-mt-6">
          <button
            className="bg-white p-3 lg:p-5 rounded-l-full cursor-pointer active:bg-[#e7e5e5]"
            type="button"
            onClick={handlePrevious}
          >
            <span>
              <IoIosArrowBack size="0.8rem" color="#86849E" />
            </span>
          </button>

          <button
            className="bg-white p-3 lg:p-5 rounded-r-full cursor-pointer active:bg-[#e7e5e5]"
            type="button"
            onClick={handleNext}
          >
            <span>
              <IoIosArrowForward size="0.8rem" color="#86849E" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={secuence}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.1 }}
          className="text-center max-w-80 mt-10 lg:order-1 flex flex-col lg:max-w-[490px] lg:-mr-[60px] relative z-[100]"
        >
          <p className="lg:text-start text-[18px] lg:text-[25px]">
            {media[secuence].description}
          </p>
          <motion.div
            key={secuence}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 70 }}
            transition={{ duration: 0.1 }}
            className="text-[12px] lg:text-[16px] mt-5 lg:flex gap-2"
          >
            <p className="font-bold ">{media[secuence].name}</p>
            <p className="font-[600] text-[#CBCAD3]">
              {media[secuence].occupation}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <img
        class="absolute bottom-0 left-0 "
        alt=""
        src="/img/pattern-curve.svg"
      ></img>
    </div>
  );
}

export default Slider;
