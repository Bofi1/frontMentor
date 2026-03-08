import { useState } from "react";
import Header from "./Header";
import Stats from "./Stats";
import About from "./About";

import BackThisProyect from "./BackThisProyect";

function CrowdFundingApp() {
  const [menu, setMenu] = useState(false); // false = closed, true = open

  return (
    <div className="grid ">
      <div className="bg-mobile bg-cover bg-top lg:bg-desktop h-75 lg:h-100 px-5 py-8 lg:py-12 flex justify-center items-start ">
        <Header menu={menu} setMenu={setMenu} />
      </div>

      <div className="p-4 -mt-20 flex flex-col items-center gap-5 w-full ">
        <BackThisProyect />
        <Stats />
        <About />
      </div>
    </div>
  );
}

export default CrowdFundingApp;
