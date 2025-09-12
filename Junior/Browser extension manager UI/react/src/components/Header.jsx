import iconMoon from "../img/icon-moon.svg";
import iconSun from "../img/icon-sun.svg";
import logoDark from "../img/logo-dark.svg";
import logoLight from "../img/logo-light.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-white shadow-lg dark:bg-[#1F2535] rounded-xl">
      <img className="dark:hidden" src={logoLight} alt="logo-light" />
      <img className="hidden dark:flex" src={logoDark} alt="logo-dark" />

      <button
        className="appearance-none bg-[#ECEFEE] dark:bg-[#2F354C] p-3 rounded-xl cursor-pointer"
        type="button"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
      >
        <img className="hidden dark:flex" src={iconSun} alt="sun-icon" />
        <img className="dark:hidden" src={iconMoon} alt="moon-icon" />
      </button>
    </header>
  );
}

export default Header;
