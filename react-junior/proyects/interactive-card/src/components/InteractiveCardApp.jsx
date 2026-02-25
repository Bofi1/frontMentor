import Form from "./Form";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

import bgMobile from "../assets/images/bg-main-mobile.png";

import { useState } from "react";

function InteractiveCardApp() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [mm, setMM] = useState("");
  const [yy, setYY] = useState("");
  const [cvc, setCVC] = useState("");
  const [send, setSend] = useState(false);

  return (
    <div className="grid grid-cols-1 bg-red-4 h-full min-h-screen lg:grid-cols-[1fr_2fr]">
      <div className="relative flex flex-col justify-center items-center px-7 pt-5 bg-cover bg-no-repeat bg-mobile lg:bg-desktop transition-all duration-500 h-[280px] lg:h-full gap-12">
        <BackCard
          className="top-[33%] lg:top-0 left-2.5 order-1 lg:mb-0 lg:left-[60%] lg:order-2 min-w-[321px] lg:min-w-[374px]"
          cvc={cvc}
          send={send}
          setSend={setSend}
        />
        <FrontCard
          className="bottom-[15%] lg:bottom-0 z-100 order-2 relative right-2.5 lg:mb-0 lg:left-[30%] lg:order-1 lg:z-0 min-w-[321px] lg:min-w-[374px]"
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          mm={mm}
          yy={yy}
          send={send}
          setSend={setSend}
        />
      </div>
      <div className="p-7  lg:flex lg:justify-center lg:items-center transition-all duration-500">
        <Form
          className="mt-10"
          cardHolder={cardHolder}
          setCardHolder={setCardHolder}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          mm={mm}
          setMM={setMM}
          yy={yy}
          setYY={setYY}
          cvc={cvc}
          setCVC={setCVC}
          send={send}
          setSend={setSend}
        />
      </div>
    </div>
  );
}

export default InteractiveCardApp;
