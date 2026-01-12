import { useState } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import BrowserContainer from "./BrowserContainer";

function BrowserApp() {
  const [checkStatus, setCheckStatus] = useState("all");

  return (
    <div className="p-5 w-full max-w-[1400px]">
      <NavBar />
      <div className="mt-15">
        <Filter checkStatus={checkStatus} setCheckStatus={setCheckStatus} />
      </div>

      <div className="mt-15">
        <BrowserContainer
          checkStatus={checkStatus}
          setCheckStatus={setCheckStatus}
        />
      </div>
    </div>
  );
}

export default BrowserApp;
