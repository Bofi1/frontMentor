import logo from "/logo.svg";
import burgerIcon from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close-menu.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function CrowdFundingApp() {
  const [menu, setMenu] = useState(false); // false = closed, true = open

  return (
    <div className="bg-mobile bg-cover bg-top lg:bg-desktop h-75 lg:h-100">
      <header className="flex justify-between px-5 py-7">
        <img src={logo} alt="logo" />
        <button
          className="cursor-pointer"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menu ? (
              <motion.img
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="w-4.5"
                src={closeMenu}
                alt="close-menu"
              />
            ) : (
              <motion.img
                key="burger"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="w-5"
                src={burgerIcon}
                alt="burger-icon"
              />
            )}
          </AnimatePresence>
        </button>
      </header>
    </div>
  );
}

export default CrowdFundingApp;
