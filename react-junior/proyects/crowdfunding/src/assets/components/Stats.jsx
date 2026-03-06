import CountUp from "react-countup";

function Stats() {
  return (
    <div className="bg-white flex flex-col items-center gap-5 border border-gray-200 rounded-xl w-full py-10 px-10">
      <div className="border-b border-gray-100 pb-5 text-center border-w-10">
        <p className="font-bold text-3xl">
          <CountUp
            end={89940}
            duration={0.1}
            separator=","
            prefix="$"
            decimals={0}
          />
        </p>

        <span className="text-[#808080] text-sm">of $100,000 backed</span>
      </div>

      <div className="border-b border-gray-100 pb-5 text-center">
        <p className="font-bold text-3xl">
          <CountUp end={5008} duration={0.1} separator="," decimals={0} />
        </p>
        <span className="text-[#808080] text-sm">total backed</span>
      </div>

      <div className="border-b border-gray-100 text-center">
        <p className="font-bold text-3xl">
          <CountUp end={56} duration={0.1} separator="," decimals={0} />
        </p>
        <span className="text-[#808080] text-sm">days left</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner overflow-hidden mt-3">
        {/* Progreso (La parte que crece) */}
        <div
          className="bg-[#3DB3AB]  h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          style={{ width: `48%` }}
        />
      </div>
    </div>
  );
}

export default Stats;
