import { BsCurrencyDollar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import TipButton from "./TipButton";
import { useEffect, useState } from "react";

function TipForm({
  billValue,
  setBillValue,
  checkValue,
  setCheckValue,
  peopleValue,
  setPeopleValue,
  checkValueCustom,
  setCheckValueCustom,
  checkValueAll,
  setCheckValueAll,
  tipCheckedButton,
  setTipCheckedButton,
}) {
  const [tipChecked, setTipChecked] = useState("");

  const [peopleError, setPeopleError] = useState(false);

  useEffect(() => {
    if (isNaN(peopleValue)) {
      return setPeopleError(true);
    }
    setPeopleError(false);
  }, [peopleValue]);

  useEffect(() => {
    setCheckValueAll(parseFloat(checkValue + checkValueCustom));
  }, [checkValueCustom, checkValue]);

  useEffect(() => {
    console.log(checkValueAll);
  }, [checkValueAll]);

  return (
    <div className="w-full flex flex-col gap-10">
      {/* bill */}
      <div>
        <p className="font-semibold text-[#617D7C] mb-2 text-xl">Bill</p>
        <div className="relative flex items-center animation active:scale-90">
          <BsCurrencyDollar className="absolute left-5" color="#AFC2C3" />
          <input
            className="placeholder:text-[#AFC2C3] text-[#00494E] rounded-lg py-3 pr-5 text-end no-spinner outline-none appearance-none bg-[#F3F9FA] w-full font-bold focus:border-[#8ED6CD] focus:border "
            type="number"
            placeholder="0"
            value={billValue || ""}
            onKeyDown={(e) => {
              // Bloquea el signo menos, la 'e' y la 'E'
              if (["-", "e", "E"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onInput={(e) => {
              setBillValue(parseFloat(e.target.value));
            }}
          />
        </div>
      </div>

      {/* select tip % */}
      <div>
        <p className="font-semibold text-[#617D7C] mb-5 text-xl">
          Select Tip %
        </p>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 ">
          <TipButton
            value={5}
            name={"tip"}
            setTipChecked={setTipChecked}
            checkValue={setCheckValue}
            setCheckValue={setCheckValue}
            checkValueAll={setCheckValueAll}
            setCheckValueAll={setCheckValueAll}
            setCheckValueCustom={setCheckValueCustom}
            tipCheckedButton={tipCheckedButton}
            setTipCheckedButton={setTipCheckedButton}
          />
          <TipButton
            value={10}
            name={"tip"}
            setTipChecked={setTipChecked}
            checkValue={setCheckValue}
            setCheckValue={setCheckValue}
            checkValueAll={setCheckValueAll}
            setCheckValueAll={setCheckValueAll}
            setCheckValueCustom={setCheckValueCustom}
            tipCheckedButton={tipCheckedButton}
            setTipCheckedButton={setTipCheckedButton}
          />
          <TipButton
            value={15}
            name={"tip"}
            setTipChecked={setTipChecked}
            checkValue={setCheckValue}
            setCheckValue={setCheckValue}
            checkValueAll={setCheckValueAll}
            setCheckValueAll={setCheckValueAll}
            setCheckValueCustom={setCheckValueCustom}
            tipCheckedButton={tipCheckedButton}
            setTipCheckedButton={setTipCheckedButton}
          />
          <TipButton
            value={25}
            name={"tip"}
            setTipChecked={setTipChecked}
            checkValue={setCheckValue}
            setCheckValue={setCheckValue}
            checkValueAll={setCheckValueAll}
            setCheckValueAll={setCheckValueAll}
            setCheckValueCustom={setCheckValueCustom}
            tipCheckedButton={tipCheckedButton}
            setTipCheckedButton={setTipCheckedButton}
          />
          <TipButton
            value={50}
            name={"tip"}
            setTipChecked={setTipChecked}
            checkValue={setCheckValue}
            setCheckValue={setCheckValue}
            checkValueAll={setCheckValueAll}
            setCheckValueAll={setCheckValueAll}
            setCheckValueCustom={setCheckValueCustom}
            tipCheckedButton={tipCheckedButton}
            setTipCheckedButton={setTipCheckedButton}
          />
          <input
            className="w-full text-[#00494E] font-bold p-2 rounded-lg cursor-pointer no-spinner text-end appearance-none outline-none bg-[#F5F9FB] pr-5 focus:border focus:border-[#8ED6CD] animation active:scale-90  placeholder:font-bold"
            type="number"
            value={checkValueCustom}
            onFocus={() => {
              setTipChecked("custom");
              setCheckValue(0);
            }}
            placeholder="Custom"
            onKeyDown={(e) => {
              // Bloquea el signo menos, la 'e' y la 'E'
              if (["-", "e", "E"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onInput={(e) => {
              setCheckValue(0);
              setCheckValueCustom(parseFloat(e.target.value));
            }}
          />
          <input
            className="hidden"
            type="radio"
            name="tip"
            checked={tipChecked === "custom"}
            onChange={() => {}}
          />
        </div>
      </div>

      {/* number of people */}
      <div>
        <div className="flex justify-between">
          <p className="font-semibold text-#5F7B7C mb-2 text-[#617D7C] text-xl">
            Number of People
          </p>
          <p
            className={` font-bold  text-red-400  ${
              peopleError ? "flex" : "hidden"
            }`}
          >
            Can´t be zero
          </p>
        </div>
        <div
          className={`relative flex items-center animation  ${
            peopleError ? " " : "active:scale-95"
          }`}
        >
          <FaUser className="absolute left-5" color="#AFC2C3" />
          <input
            className={`placeholder:text-[#AFC2C3] text-[#00494E] rounded-lg py-3 pr-5 text-end no-spinner outline-none appearance-none bg-[#F3F9FA] w-full font-bold animation  ${
              peopleError
                ? " border-2 border-red-400 focus:border-red-400"
                : "focus:border-[#8ED6CD] focus:border "
            }`}
            type="number"
            placeholder="0"
            value={peopleValue || ""}
            onKeyDown={(e) => {
              // Bloquea el signo menos, la 'e' y la 'E'
              if (["-", "e", "E"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onInput={(e) => {
              setPeopleValue(parseFloat(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TipForm;
