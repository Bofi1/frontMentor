import React from "react";

function StatsGroup({ time }) {
  let colorTimer = "text-white";
  if (time < 60) colorTimer = "text-green-400";
  if (time < 41) colorTimer = "text-yellow-400";
  if (time < 21) colorTimer = "text-red-400";
  if (time < 10) if (time == 0) colorTimer = "text-white";

  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex flex-col items-center">
        <p className="text-[#6C6D6C]">WPM:</p>
        <span className="text-white font-bold">{"40"}</span>
      </div>
      <div className="w-[1px] h-full bg-[#6C6D6C]"></div>
      <div className="flex flex-col items-center">
        <p className="text-[#6C6D6C]">Accuracy:</p>
        <span className="text-white font-bold">{"94" + "%"}</span>
      </div>
      <div className="w-[1px] h-full bg-[#6C6D6C]"></div>
      <div className="flex flex-col items-center">
        <p className="text-[#6C6D6C]">Time:</p>
        <span className={` font-bold ${colorTimer}`}>
          {time < 60 && "0:"}
          {time < 10 && "0"}
          {time}
        </span>
      </div>
    </div>
  );
}

export default StatsGroup;
