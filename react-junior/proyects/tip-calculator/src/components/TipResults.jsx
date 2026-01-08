import { useEffect, useState } from "react";

function TipResults({
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
  setTipCheckedButton,
}) {
  const [valid, setValid] = useState(false);

  const [tipAmountPersonValue, setTipAmountPersonValue] = useState(0);
  const [tipAmountTotalValue, setTipAmountTotalValue] = useState(0);

  const b = billValue;
  const p = checkValueAll;
  const n = peopleValue;

  const calculation = () => {
    // Tip Amount / person

    setTipAmountPersonValue(((b * (p / 100)) / n).toFixed(2));
    // Tip Total / person
    setTipAmountTotalValue((b / n + (b * (p / 100)) / n).toFixed(2));
  };

  useEffect(() => {
    if (billValue > 0 && checkValueAll > 0 && peopleValue > 0) {
      setValid(true);
      calculation();
    } else {
      setValid(false);
      setTipAmountPersonValue(0);
      setTipAmountTotalValue(0);
    }
  }, [billValue, checkValueAll, peopleValue]);

  return (
    <div className="bg-[#00474B] p-10 rounded-xl flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between w-full items-center ">
          <div className="flex flex-col min-w-[123px]">
            <p className="text-white text-xl font-semibold">Tip Amount</p>
            <span className="text-[#7B9CA4]">/ person</span>
          </div>
          <p className="font-bold text-[#28C1AD] text-xl md:text-2xl overflow-x-scroll overflow-y-hidden ml-10 md:ml-20">{`$${tipAmountPersonValue}${
            tipAmountPersonValue == 0 ? ".00" : ""
          } `}</p>
        </div>
        <div className="flex justify-between w-full items-center ">
          <div className="flex flex-col min-w-[123px]">
            <p className="text-white text-xl font-semibold">Total</p>
            <span className="text-[#7B9CA4]">/ person</span>
          </div>
          <p className="font-bold text-[#28C1AD] text-end text-xl md:text-2xl overflow-x-scroll overflow-y-hidden ml-10 md:ml-20 ">{`$${tipAmountTotalValue}${
            tipAmountTotalValue == 0 ? ".00" : ""
          } `}</p>
        </div>
      </div>
      <input
        disabled={!valid}
        className={`bg-[#0B676D] text-[#00474B]  p-4 text-xl rounded-xl mt-20  font-bold animation ${
          valid
            ? "hover:bg-[#9FE8DF] cursor-pointer active:bg-[#28C1AD] active:scale-95 bg-[#28C1AD]"
            : ""
        }`}
        onClick={() => {
          setBillValue("");
          setCheckValue(0);
          setPeopleValue("");
          setTipAmountPersonValue(0);
          setTipAmountTotalValue(0);
          setCheckValueAll("");
          setCheckValueCustom("");
          setTipCheckedButton(0);
        }}
        type="button"
        value="RESET"
      />
    </div>
  );
}

export default TipResults;
