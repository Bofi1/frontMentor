import TypingEngine from "./TypingEngine";
import logoSmall from "../assets/images/logo-small.svg";
import iconPB from "../assets/images/icon-personal-best.svg";
import StatsGroup from "./Stats/StatsGroup";
import { useEffect, useState } from "react";

function TypingTest() {
  const [startTyping, setStartTyping] = useState(false);
  const [time, setTime] = useState(60);

  const timerOn = () => {
    setTimeout(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    if (!startTyping) return;

    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTyping, time]);

  return (
    <div className="flex flex-col w-full p-5">
      <header className="flex w-full justify-between items-center">
        <div className="flex items-center ">
          <img src={logoSmall} alt="logo" />
        </div>
        <div className="flex gap-2 items-center pt-1">
          <div>
            <img src={iconPB} alt="iconPB" />
          </div>
          <p className="text-[#6C6D6C]">
            Best: <span className="text-white">{"92"} + WPM</span>
          </p>
        </div>
      </header>
      <div className="w-full flex justify-center pt-8">
        <StatsGroup time={time} />
      </div>
      <TypingEngine startTyping={startTyping} setStartTyping={setStartTyping} />
    </div>
  );
}

export default TypingTest;
