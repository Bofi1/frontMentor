import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
