import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";

function MortgageForm({ setShowResults }) {
  const [mortgageAmountValue, setMortgageAmountValue] = useState("");
  const [mortgageAmountValueError, setMortgageAmountValueError] =
    useState(false);

  const [mortgageTermValue, setMortgageTermValue] = useState("");
  const [mortgageTermValueError, setMortgageTermValueError] = useState(false);

  const [interestRateValue, setInterestRateValue] = useState("");
  const [interestRateValueError, setInterestRateValueError] = useState(false);

  const [mortgageType, setMortgageType] = useState("");
  const [mortgageTypeError, setMortgageTypeError] = useState(false);

  const [submit, setSubmit] = useState(false);

  const [submitClearAll, setSubmitClearAll] = useState(false);

  const getValue = (e, callback) => {
    const value = e.target.value;

    callback(value);
  };

  const clearAll = () => {
    setMortgageAmountValue("");
    setMortgageAmountValueError(false);

    setMortgageTermValue("");
    setMortgageTermValueError(false);

    setInterestRateValue("");
    setInterestRateValueError(false);

    setMortgageType("");
    setMortgageTypeError(false);

    setSubmitClearAll(true);
  };

  useEffect(() => {
    setSubmitClearAll(false);
    setShowResults(false);
  }, [submitClearAll]);

  const validation = () => {
    if (mortgageAmountValue == "") {
      setMortgageAmountValueError(true);
    } else {
      setMortgageAmountValueError(false);
    }

    if (mortgageTermValue == "") {
      setMortgageTermValueError(true);
    } else {
      setMortgageTermValueError(false);
    }

    if (interestRateValue == "") {
      setInterestRateValueError(true);
    } else {
      setInterestRateValueError(false);
    }

    if (mortgageType == "") {
      setMortgageTypeError(true);
    } else {
      setMortgageTypeError(false);
    }

    setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      if (
        mortgageAmountValueError === false &&
        mortgageTermValueError === false &&
        interestRateValueError === false &&
        mortgageTypeError === false
      ) {
        setShowResults(true);
        setSubmit(false);
      } else {
        setShowResults(false);
      }
    }
  }, [
    mortgageAmountValueError,
    mortgageTermValueError,
    interestRateValueError,
    mortgageTypeError,
    submit,
  ]);

  return (
    <div className="p-5 font-principal flex flex-col gap-8 w-full ">
      <div className="md:flex md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 ">Mortgage Calculator</h1>
        <p
          className="text-gray-400 underline decoration-gray-400 underline-offset-4 text-sm cursor-pointer h-full mb-2 hover:text-black"
          onClick={clearAll}
        >
          Clear All
        </p>
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="">
          <span>Mortgage Amount</span>
          <div
            className={`flex w-full mt-3 border border-border hover:border-black rounded-lg  has-[:focus]:border-pickle group ${
              mortgageAmountValueError != false
                ? "border-redError has-[:focus]:border-redError hover:border-redError"
                : ""
            }`}
          >
            <div
              className={`bg-blue-sky w-15 h-12 flex justify-center items-center rounded-l-lg group-focus-within:bg-pickle ${
                mortgageAmountValueError != false
                  ? "bg-redError group-focus-within:bg-redError"
                  : ""
              }`}
            >
              <FaDollarSign
                color={mortgageAmountValueError != false ? "white" : ""}
              />
            </div>
            <input
              type="number"
              className="outline-none appearance-none w-full pl-5 font-bold no-spinner"
              value={mortgageAmountValue}
              onChange={(e) => getValue(e, setMortgageAmountValue)}
            />
          </div>
          {mortgageAmountValueError != false ? (
            <div className="text-redError text-sm mt-2">
              This field is required
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-5 md:mb-0">
            <span>Mortgage Term</span>
            <div
              className={`flex w-full mt-3 border border-border hover:border-black rounded-lg  has-[:focus]:border-pickle group ${
                mortgageTermValueError != false
                  ? "border-redError has-[:focus]:border-redError hover:border-redError"
                  : ""
              }`}
            >
              <input
                type="number"
                className="outline-none appearance-none  w-full pl-5 font-bold rounded-l-md peer no-spinner"
                onChange={(e) => getValue(e, setMortgageTermValue)}
                value={mortgageTermValue}
              />
              <div
                className={`bg-blue-sky  h-12 flex justify-center items-center rounded-r-md peer-focus:bg-pickle ${
                  mortgageTermValueError != false
                    ? "bg-redError peer-focus:bg-redError"
                    : ""
                }`}
              >
                <span
                  className={`font-bold px-3 ${
                    mortgageTermValueError != false ? "text-white" : ""
                  }`}
                >
                  years
                </span>
              </div>
            </div>
            {mortgageTermValueError != false ? (
              <div className="text-redError text-sm mt-2">
                This field is required
              </div>
            ) : (
              ""
            )}
          </div>

          <div>
            <span>Interest Rate</span>
            <div
              className={`flex w-full mt-3 border border-border hover:border-black rounded-lg  has-[:focus]:border-pickle group ${
                interestRateValueError != false
                  ? "border-redError has-[:focus]:border-redError hover:border-redError"
                  : ""
              }`}
            >
              <input
                type="number"
                className="outline-none appearance-none  w-full pl-5 font-bold rounded-l-md peer no-spinner"
                onChange={(e) => getValue(e, setInterestRateValue)}
                value={interestRateValue}
              />
              <div
                className={`bg-blue-sky w-15  h-12 flex justify-center items-center rounded-r-md peer-focus:bg-pickle ${
                  interestRateValueError != false
                    ? "bg-redError peer-focus:bg-redError"
                    : ""
                }`}
              >
                <FaPercent
                  color={interestRateValueError != false ? "white" : ""}
                />
              </div>
            </div>
            {interestRateValueError != false ? (
              <div className="text-redError text-sm mt-2">
                This field is required
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mt-2">
          <span>Mortgage Type</span>
          <div className="flex w-full mt-3">
            <div className="flex flex-col w-full">
              <label className=" mb-2 w-full border border-border hover:border-black p-2 px-5 rounded-lg has-checked:bg-[#FAFAE0] has-checked:border-pickle cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  className="mr-5 w-3 h-3 rounded-full border-white checked:border-[#FAFAE0] border ring-1 ring-gray-500 checked:ring-pickle ring-offset-1 checked:bg-pickle appearance-none"
                  checked={mortgageType === "Repayment"}
                  onChange={() => {
                    setMortgageType("Repayment");
                  }}
                />
                <span className="font-bold ">Repayment</span>
              </label>

              <label className="w-full border border-border hover:border-black p-2 px-5 rounded-lg has-checked:bg-[#FAFAE0] has-checked:border-pickle cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  className="mr-5 w-3 h-3 rounded-full border-white checked:border-[#FAFAE0] border ring-1 ring-gray-500 checked:ring-pickle ring-offset-1 checked:bg-pickle appearance-none"
                  checked={mortgageType === "Interest Only"}
                  onChange={() => {
                    setMortgageType("Interest Only");
                  }}
                />
                <span className="font-bold ">Interest Only</span>
              </label>
              {mortgageTypeError != false ? (
                <div className="text-redError text-sm mt-2">
                  This field is required
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={validation}
        className="flex items-center justify-center w-full rounded-full bg-pickle cursor-pointer hover:bg-[#ECED97] active:bg-pickle active:scale-[0.95]"
      >
        <div className="flex items-center justify-center p-3 ">
          <FaCalculator />
          <span className="ml-2">Calculate</span>
        </div>
      </button>
    </div>
  );
}

export default MortgageForm;
