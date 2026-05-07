import TypingEngine from "./TypingEngine";
import logoSmall from "../assets/images/logo-small.svg";
import iconPB from "../assets/images/icon-personal-best.svg";
import StatsGroup from "./Stats/StatsGroup";
import { useEffect, useState, useRef } from "react";

function TypingTest() {
  const [startTyping, setStartTyping] = useState(false);
  const [time, setTime] = useState(60);
  const inputTying = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wpm, setWpm] = useState();
  const [accuracy, SetAccuracy] = useState({
    errors: 0,
    correct: 0,
  });

  useEffect(() => {
    if (!startTyping) return;

    if (time <= 0) {
      inputTying.current.disabled = true;
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTyping, time]);

  useEffect(() => {
    console.log("numero de errores " + accuracy.errors);
    console.log("numero de aciertos " + accuracy.correct);
  }, [accuracy]);

  useEffect(() => {
    calculateWPM();
  }, [startTyping, time]);

  const calculateWPM = () => {
    const secondsElapsed = 60 - time;

    const wpm = Math.floor((currentIndex / 5 / secondsElapsed) * 60);

    setWpm(wpm);
  };

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
        <StatsGroup time={time} accuracy={accuracy} wpm={wpm} />
      </div>
      <TypingEngine
        startTyping={startTyping}
        setStartTyping={setStartTyping}
        inputTying={inputTying}
        SetAccuracy={SetAccuracy}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default TypingTest;
