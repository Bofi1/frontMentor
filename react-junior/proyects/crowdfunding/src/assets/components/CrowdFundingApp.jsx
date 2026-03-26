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
  const [totalDonations, setTotalDonations] = useState(0);

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

  const handleRestarStock = (nombreDeRecompensa) => {
    setData((prevData) => {
      // 1. Clonamos las recompensas y restamos a la elegida
      const nuevasRewards = prevData.rewards.map((item) => {
        if (item.title === nombreDeRecompensa) {
          return { ...item, stock: item.stock - 1 }; // Restamos 1
        }
        return item; // Los demás se quedan igual
      });

      // 2. Retornamos el objeto DATA actualizado
      return {
        ...prevData,
        rewards: nuevasRewards,
      };
    });
  };

  const handleBackers = () => {
    setData((prevData) => {
      // 1. Retornamos el nuevo objeto completo
      return {
        ...prevData, // Mantenemos todo lo demás (rewards, etc.)
        stats: {
          ...prevData.stats, // Mantenemos las otras stats (goal, totalRaised)
          // 2. Solo sumamos 1 al número de personas
          totalBackers: (prevData.stats.totalBackers || 0) + 1,
        },
      };
    });
  };

  return (
    <>
      <div className="grid relative ">
        <div className="bg-mobile bg-cover bg-top lg:bg-desktop h-75 lg:h-100 px-5 py-8 lg:py-12 flex justify-center items-start ">
          <Header menu={menu} setMenu={setMenu} />
        </div>

        <div className="p-4 -mt-20 flex flex-col items-center gap-5 w-full ">
          <BackThisProyect donation={donation} />
          <Stats data={data} totalDonations={totalDonations} />
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
          <div
            className="fixed inset-0 z-[100]  bg-transparent overflow-y-auto flex justify-center items-start py-10 px-6"
            onClick={() => setBackProyect(false)}
          >
            {backProyect && (
              <ModalFunding
                setBackProyect={setBackProyect}
                setFundSent={setFundSent}
                data={data}
                setTotalDonations={setTotalDonations}
                totalDonations={totalDonations}
                handleRestarStock={handleRestarStock}
                handleBackers={handleBackers}
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
