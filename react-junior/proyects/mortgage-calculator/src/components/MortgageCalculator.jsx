import { useState } from "react";
import MortgageForm from "./MortgageForm";
import MortgageResults from "./MortgageResults";

function MortgageCalculator() {
  const [mortgageAmountValue, setMortgageAmountValue] = useState("");
  const [mortgageTermValue, setMortgageTermValue] = useState("");
  const [interestRateValue, setInterestRateValue] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [submit, setSubmit] = useState(false);

  const [showResults, setShowResults] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-w-[375px] md:max-w-[1000px] md:shadow-2xl md:rounded-xl bg-white">
      <div className="p-10 bg-white rounded-2xl w-full">
        <MortgageForm
          mortgageAmountValue={mortgageAmountValue}
          setMortgageAmountValue={setMortgageAmountValue}
          mortgageTermValue={mortgageTermValue}
          setMortgageTermValue={setMortgageTermValue}
          interestRateValue={interestRateValue}
          setInterestRateValue={setInterestRateValue}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          setShowResults={setShowResults}
          submit={submit}
          setSubmit={setSubmit}
        />
      </div>
      <div className="bg-bg-results md:rounded-bl-[100px] md:rounded-tr-2xl md:rounded-br-2xl">
        <MortgageResults
          showResults={showResults}
          mortgageAmountValue={mortgageAmountValue}
          mortgageTermValue={mortgageTermValue}
          interestRateValue={interestRateValue}
          mortgageType={mortgageType}
          submit={submit}
        />
      </div>
    </div>
  );
}

export default MortgageCalculator;
