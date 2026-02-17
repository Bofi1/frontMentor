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

  return (
    <div className="grid grid-cols-1 bg-red-40  ">
      <div
        style={{ backgroundImage: `url(${bgMobile})` }}
        className="relative flex flex-col justify-center items-center px-7 pt-5 bg-cover "
      >
        <BackCard cvc={cvc} className="-mb-19 left-2.5" />
        <FrontCard
          className="-mb-10 z-100 relative right-2.5"
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          mm={mm}
          yy={yy}
        />
      </div>
      <div className="p-7">
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
        />
      </div>
    </div>
  );
}

export default InteractiveCardApp;
