// import { motion, AnimatePresence } from "framer-motion"; // Nota: si usas motion/react usa ese import
import logoDark from "../assets/images/logo-dark.svg";
import burger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

function Header({ burgerOpen }) {
  return (
    <div className="w-full bg-amber-50 p-5 flex justify-between">
      <img src={logoDark} alt="logo-dark" />
      <div className="cursor-pointer relative w-8 h-8 flex items-center justify-center"></div>
    </div>
  );
}

export default Header;
