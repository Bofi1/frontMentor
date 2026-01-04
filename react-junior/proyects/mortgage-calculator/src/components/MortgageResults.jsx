import { useEffect, useState } from "react";
import illustrationEmpty from "../assets/illustration-empty.svg";

function MortgageResults({
  showResults,
  mortgageAmountValue,
  mortgageTermValue,
  interestRateValue,
  mortgageType,
  submit,
}) {
  if (showResults) {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [returnPayment, setReturnPayment] = useState(0);
    const [interestOnly, setInterestOnly] = useState(0);
    const [returnInterestOnly, setReturnInterestOnly] = useState(0);

    let p = parseFloat(mortgageAmountValue);
    let r = interestRateValue / 100 / 12;
    let n = mortgageTermValue * 12;

    useEffect(() => {
      if (mortgageType === "Repayment") {
        setMonthlyPayment(
          (p * ((r * (1 + r) ** n) / ((1 + r) ** n - 1))).toFixed(2)
        );
      }

      if (mortgageType === "Interest Only") {
        setInterestOnly((p * r).toFixed(2));
      }
    }, [submit]);

    useEffect(() => {
      setReturnPayment((monthlyPayment * n).toFixed(2));
    }, [monthlyPayment]);

    useEffect(() => {
      setReturnInterestOnly((interestOnly * n + p).toFixed(2));
    }, [interestOnly]);

    return (
      <div className="w-full h-full bg-bg-results flex flex-col justify-center text-start p-15 gap-8 md:rounded-bl-[100px] md:rounded-tr-2xl md:rounded-br-2xl">
        <h2 className="text-white font-medium text-2xl">Your results</h2>
        <p className="text-sm text-[#7997AB]">
          {`Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate ${
            mortgageType === "Repayment" ? "repayment" : "interest only"
          }"
          again`}
        </p>
        <div className="border-t-3 border-pickle rounded-2xl p-5 text-start flex flex-col gap-3 bg-[#0D2431] w-full">
          <div>
            <span className="text-[#7997AB] text-sm">
              Your monthly repayments
            </span>
            <div className="text-pickle flex items-center mt-2.5 overflow-x-scroll overflow-y-hidden gap-1">
              <span className="text-5xl font-bold">$</span>
              <span className="text-5xl font-bold ">
                {mortgageType === "Repayment" && monthlyPayment}
                {mortgageType === "Interest Only" && interestOnly}
              </span>
            </div>
          </div>
          <div className="bg-[#293E4B] h-0.5"></div>
          <div className="flex flex-col justify-center">
            <span className="text-[#7997AB] text-sm">
              Total you´ll repay over the term
            </span>
            <div className="mt-2.5 flex gap-1">
              <span className="text-lg text-white font-bold">$</span>
              <span className="text-lg text-white font-bold">
                {mortgageType === "Repayment" && returnPayment}
                {mortgageType === "Interest Only" && returnInterestOnly}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full bg-bg-results flex flex-col justify-center items-center p-15 text-center gap-5 md:rounded-bl-[100px] md:rounded-tr-2xl md:rounded-br-2xl">
        <img className="h-40" src={illustrationEmpty} alt="" />
        <p className="text-white font-bold text-xl">Results shown here</p>
        <span className="text-[#7997AB] text-sm">
          Complete the form and click "calculate" to see what your monthly
          repayments would be
        </span>
      </div>
    );
  }
}

export default MortgageResults;
