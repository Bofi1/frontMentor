import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleMenu = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div>
      <Header burgerOpen={burgerOpen} />
    </div>
  );
}

export default App;
