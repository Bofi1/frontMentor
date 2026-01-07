import TipForm from "./TipForm";
import TipResults from "./TipResults";

function TipCalculator() {
  return (
    <div className="bg-white p-5 md:p-10 w-full rounded-2xl grid grid-cols-1 gap-10 md:grid-cols-2 max-w-[1000px] font-space-mono">
      <TipForm />
      <TipResults />
    </div>
  );
}

export default TipCalculator;
