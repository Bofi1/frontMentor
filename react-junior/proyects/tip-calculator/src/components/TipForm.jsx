import { BsCurrencyDollar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import TipButton from "./TipButton";
import { useState } from "react";

function TipForm() {
  const [tipChecked, setTipChecked] = useState(null);

  return (
    <div className="w-full ">
      {/* bill */}
      <div>
        <p className="font-semibold text-#5F7B7C mb-2">Bill</p>
        <div className="relative flex items-center">
          <BsCurrencyDollar className="absolute left-2" color="#AFC2C3" />
          <input
            className=" rounded-lg py-1 pr-5 text-end no-spinner outline-none appearance-none bg-[#F3F9FA] w-full font-bold"
            type="number"
            name=""
            id=""
          />
        </div>
      </div>

      {/* select tip % */}
      <div>
        <p className="font-semibold text-#5F7B7C mb-2">Select Tip %</p>
        <div className="grid grid-cols-2 gap-5">
          <TipButton value={5} name={"tip"} setTipChecked={setTipChecked} />
          <TipButton value={10} name={"tip"} setTipChecked={setTipChecked} />
          <TipButton value={15} name={"tip"} setTipChecked={setTipChecked} />
          <TipButton value={25} name={"tip"} setTipChecked={setTipChecked} />
          <TipButton value={50} name={"tip"} setTipChecked={setTipChecked} />
          <input
            className="w-full font-bold p-2 rounded-lg cursor-pointer no-spinner text-end appearance-none outline-none bg-[#F5F9FB] pr-5 focus:border focus:border-[#8ED6CD] placeholder:font-bold"
            type="number"
            onFocus={() => setTipChecked("custom")}
            placeholder="Custom"
          />
          <input
            className="hidden"
            type="radio"
            name="tip"
            checked={tipChecked === "custom"}
          />
        </div>
      </div>

      {/* number of people */}
      <div>
        <p className="font-semibold text-#5F7B7C mb-2">Number of People</p>
        <div className="relative flex items-center">
          <FaUser className="absolute left-2" color="#AFC2C3" />
          <input
            className=" rounded-lg py-1 pr-5 text-end no-spinner outline-none appearance-none bg-[#F3F9FA] w-full font-bold"
            type="number"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
}

export default TipForm;
