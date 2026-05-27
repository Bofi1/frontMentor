import { useEffect, useState, useRef } from "react";
import TypingEngine from "./TypingEngine";
import logoSmall from "../assets/images/logo-small.svg";
import iconPB from "../assets/images/icon-personal-best.svg";
import StatsGroup from "./Stats/StatsGroup";
import ModalResults from "./ModalResults";
import Overlay from "./Overlay";

function TypingTest() {
  const [startTyping, setStartTyping] = useState(false);
  const [time, setTime] = useState(2);
  const inputTying = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wpm, setWpm] = useState();
  const [gameFinished, setGameFinished] = useState(false);
  const [accuracy, SetAccuracy] = useState({
    errors: 0,
    correct: 0,
  });

  useEffect(() => {
    if (!startTyping) return;

    if (time <= 0) {
      inputTying.current.disabled = true;
      setGameFinished(true);
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
    if (time == 0) {
      return;
    }

    const secondsElapsed = 60 - time;

    const wpm = Math.floor((currentIndex / 5 / secondsElapsed) * 60);

    setWpm(wpm);
  };

  // local storage

  const [bestWPM, setBestWPM] = useState(() => {
    const saved = localStorage.getItem("wpmScores");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wpmScores", JSON.stringify(bestWPM));
  }, [bestWPM]);

  const [record, setRecord] = useState();
  const [lastRecord, setLastRecord] = useState();

  const wpmRecord = () => {
    if (time === 0) {
      setBestWPM((prev) => [...prev, wpm]);
    }

    setRecord(Math.max(...bestWPM));
    setLastRecord(record);
  };

  useEffect(() => {
    wpmRecord();
  }, [time]);

  useEffect(() => {
    setRecord(Math.max(...bestWPM));
    console.log(bestWPM);
  }, [bestWPM]);

  let totalAtempts = accuracy.correct + accuracy.errors;

  let totalAccuracy =
    totalAtempts > 0
      ? Math.floor(
          (accuracy.correct / (accuracy.correct + accuracy.errors)) * 100
        )
      : "0";

  return (
    <>
      <div className="flex flex-col w-full p-5 relative">
        <header className="flex w-full justify-between items-center z-[100]">
          <div className="flex items-center ">
            <img src={logoSmall} alt="logo" />
          </div>
          <div className="flex gap-2 items-center pt-1">
            <div>
              <img src={iconPB} alt="iconPB" />
            </div>
            <p className="text-[#6C6D6C]">
              Best:{" "}
              <span className="text-white">
                {isFinite(record) ? record : ""} + WPM
              </span>
            </p>
          </div>
        </header>
        <div className="w-full flex justify-center pt-8">
          <StatsGroup time={time} totalAccuracy={totalAccuracy} wpm={wpm} />
        </div>
        <div className="w-full flex justify-center ">
          <TypingEngine
            startTyping={startTyping}
            setStartTyping={setStartTyping}
            inputTying={inputTying}
            SetAccuracy={SetAccuracy}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            gameFinished={gameFinished}
            setGameFinished={setGameFinished}
          />
        </div>
      </div>

      {gameFinished && (
        <>
          <Overlay />
          <ModalResults
            wpm={wpm}
            totalAccuracy={totalAccuracy}
            accuracy={accuracy}
            bestWPM={bestWPM}
            record={record}
            lastRecord={lastRecord}
          />
        </>
      )}
    </>
  );
}

export default TypingTest;
