import { useState, useEffect } from "react";
import Header from "./Header";
import Stats from "./Stats";
import About from "./About";
import ModalFunding from "./ModalFunding";

import BackThisProyect from "./BackThisProyect";
import { AnimatePresence } from "motion/react";

function CrowdFundingApp() {
  const [menu, setMenu] = useState(false); // false = closed, true = open
  const [backProyect, setBackProyect] = useState(false); // false = closed, true = open

  const donation = () => {
    setBackProyect(true);
  };

  useEffect(() => {
    if (backProyect) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [backProyect]);

  return (
    <>
      <div className={`grid relative ${backProyect && "overflow-y-hidden"}`}>
        <div className="bg-mobile bg-cover bg-top lg:bg-desktop h-75 lg:h-100 px-5 py-8 lg:py-12 flex justify-center items-start ">
          <Header menu={menu} setMenu={setMenu} />
        </div>

        <div className="p-4 -mt-20 flex flex-col items-center gap-5 w-full ">
          <BackThisProyect donation={donation} />
          <Stats />
          <About donation={donation} />
        </div>
      </div>
      <AnimatePresence>
        {backProyect && <ModalFunding setBackProyect={setBackProyect} />}
      </AnimatePresence>
    </>
  );
}

export default CrowdFundingApp;
