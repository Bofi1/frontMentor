import { useState, useEffect } from "react";
import logoLight from "../assets/images/logoLight.svg";
import logoDark from "../assets/images/logoDark.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

function NavBar() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Si no hay nada guardado, usamos la preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. Sincronización con el DOM y LocalStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="w-full flex justify-between items-center bg-white dark:bg-[#1F2535] py-3 px-5 rounded-2xl shadow-md animation">
      <div>
        <img src={isDark ? logoDark : logoLight} alt="" />
      </div>

      <button
        className="bg-[#EDF0EF] hover:bg-[#C6C6C5] dark:bg-[#2F354C] dark:hover:bg-[#525868] rounded-xl active:scale-95 cursor-pointer dark:cursor-pointer"
        onClick={toggleDarkMode}
      >
        <img className="p-3 cursor-pointer" src={isDark ? sun : moon} alt="" />
      </button>
    </div>
  );
}

export default NavBar;
