import { useState } from "react";
import TipForm from "./TipForm";
import TipResults from "./TipResults";

function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [checkValue, setCheckValue] = useState(0);
  const [peopleValue, setPeopleValue] = useState("");
  const [checkValueCustom, setCheckValueCustom] = useState("");
  const [checkValueAll, setCheckValueAll] = useState(0);
  const [tipCheckedButton, setTipCheckedButton] = useState(0);

  return (
    <div className="flex flex-col font-space-mono">
      <div className="w-full  justify-center my-20 md:mt-0">
        <h1 className="text-center font-semibold text-2xl text-[#436668] tracking-[0.5rem]">
          <p>SPLI</p>
          <p>TTER</p>
        </h1>
      </div>

      <div className="bg-white p-5 md:p-10 w-full rounded-2xl grid grid-cols-1 gap-10 md:grid-cols-2 max-w-[1000px] ">
        <TipForm
          billValue={billValue}
          setBillValue={setBillValue}
          checkValue={checkValue}
          setCheckValue={setCheckValue}
          peopleValue={peopleValue}
          setPeopleValue={setPeopleValue}
          checkValueCustom={checkValueCustom}
          setCheckValueCustom={setCheckValueCustom}
          checkValueAll={checkValueAll}
          setCheckValueAll={setCheckValueAll}
          tipCheckedButton={tipCheckedButton}
          setTipCheckedButton={setTipCheckedButton}
        />
        <TipResults
          billValue={billValue}
          setBillValue={setBillValue}
          checkValue={checkValue}
          setCheckValue={setCheckValue}
          peopleValue={peopleValue}
          setPeopleValue={setPeopleValue}
          checkValueCustom={checkValueCustom}
          setCheckValueCustom={setCheckValueCustom}
          checkValueAll={checkValueAll}
          setCheckValueAll={setCheckValueAll}
          setTipCheckedButton={setTipCheckedButton}
        />
      </div>
    </div>
  );
}

export default TipCalculator;
