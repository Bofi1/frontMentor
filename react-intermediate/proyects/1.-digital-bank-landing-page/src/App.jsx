import { useState } from "react";
import Header from "./components/Header";
import FirstPage from "./components/pages/FisrtPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";
import Overlay from "./components/Overlay";
import { AnimatePresence } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="overflow-hidden">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <AnimatePresence>{menuOpen && <Overlay />}</AnimatePresence>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
