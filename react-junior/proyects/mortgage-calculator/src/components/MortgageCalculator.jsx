import MortgageForm from "./MortgageForm";
import MortgageResults from "./MortgageResults";

function MortgageCalculator() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1000px]">
      <div className="p-10">
        <MortgageForm />
      </div>
      <div className="p-10 ">
        <MortgageResults />
      </div>
    </div>
  );
}

export default MortgageCalculator;
