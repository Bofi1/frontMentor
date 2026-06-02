import { useState } from "react";
import Header from "./components/Header";
import FirstPage from "./components/pages/FisrtPage";
import Overlay from "./components/Overlay";
import { AnimatePresence } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <AnimatePresence>{menuOpen && <Overlay />}</AnimatePresence>
      <FirstPage />
    </div>
  );
}

export default App;
