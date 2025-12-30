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
      <div className="inline-flex flex-col  items-center lg:order-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={secuence}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.1 }}
          >
            <img
              className="h-50 lg:h-[500px] rounded-lg shadow-xl"
              src={media[secuence].url}
              alt=""
            />
          </motion.div>
        </AnimatePresence>

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
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className="text-center max-w-80 mt-10 lg:order-1 flex flex-col lg:max-w-[490px] lg:-mr-[60px] z-98"
        >
          <p className="text-start">{media[secuence].description}</p>
          <div className="text-[16px] mt-5 lg:flex gap-2">
            <p className="font-bold ">{media[secuence].name}</p>
            <p className="font-[600] text-[#CBCAD3]">
              {media[secuence].occupation}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slider;
