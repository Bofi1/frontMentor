import Header from "./Header";
import Stats from "./Stats";
import About from "./About";
import ModalFunding from "./ModalFunding";
import ModalFundSent from "./ModalFundSent";
import Overlay from "./Overlay";
import BackThisProyect from "./BackThisProyect";

import { AnimatePresence } from "motion/react";
import { useState, useEffect, use } from "react";
import axios from "axios";

function CrowdFundingApp() {
  const [menu, setMenu] = useState(false); // false = closed, true = open
  const [backProyect, setBackProyect] = useState(false); // false = closed, true = open
  const [fundSent, setFundSent] = useState(false);
  const [data, setData] = useState([]);

  const donation = () => {
    setBackProyect(true);
  };

  useEffect(() => {
    if (backProyect || fundSent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [backProyect, fundSent]);

  const getJSON = async () => {
    // setLoading(true); // Empezamos a cargar
    try {
      const response = await axios.get(`./data.json`);
      setData(response.data.project);
    } catch (error) {
      console.error("Error", error);
    } finally {
      //   setLoading(false); // Terminamos de cargar (éxito o error)
      console.log("capturado correctamente");
    }
  };

  useEffect(() => {
    getJSON();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="grid relative ">
        <div className="bg-mobile bg-cover bg-top lg:bg-desktop h-75 lg:h-100 px-5 py-8 lg:py-12 flex justify-center items-start ">
          <Header menu={menu} setMenu={setMenu} />
        </div>

        <div className="p-4 -mt-20 flex flex-col items-center gap-5 w-full ">
          <BackThisProyect donation={donation} />
          <Stats data={data} />
          <About donation={donation} data={data} />
        </div>
      </div>
      <AnimatePresence>
        {(backProyect || fundSent) && (
          <Overlay
            setBackProyect={setBackProyect}
            setFundSent={setFundSent}
          ></Overlay>
        )}

        {(backProyect || fundSent) && (
          <div className="fixed inset-0 z-[100]  bg-transparent overflow-y-auto flex justify-center items-start py-10 px-6">
            {backProyect && (
              <ModalFunding
                setBackProyect={setBackProyect}
                setFundSent={setFundSent}
                data={data}
              />
            )}

            {fundSent && <ModalFundSent setFundSent={setFundSent} />}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CrowdFundingApp;
