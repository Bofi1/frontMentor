import header from "/logo.svg";
import burgerIcon from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close-menu.svg";
import { motion, AnimatePresence } from "motion/react";

function Header({ menu, setMenu }) {
  return (
    <header className="flex justify-between items-center relative w-full max-w-340">
      <img className="z-2" src={header} alt="logo" />
      <nav className="hidden lg:block">
        <ul className="flex gap-8 text-white font-medium">
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer ">Discover</li>
          <li className="hover:text-gray-300 cursor-pointer ">Get Started</li>
        </ul>
      </nav>
      <button
        className="cursor-pointer z-2 lg:hidden"
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
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-1 lg:hidden"
              onClick={() => setMenu(false)} // Permite cerrar el menú al hacer clic fuera
            />

            <motion.nav
              key="navOpen"
              initial={{ opacity: 0, top: 35 }}
              animate={{ opacity: 1, top: 50 }}
              exit={{ opacity: 0, top: 35 }}
              transition={{ duration: 0.1 }}
              className="bg-white absolute w-full top-10 rounded-xl z-2 "
            >
              <ul className="text-lg font-semibold lg:hidden">
                <li className="p-5 border-b border-gray-200">About</li>
                <li className="p-5 border-b border-gray-200">Discover</li>
                <li className="p-5 border-b border-gray-200">Get Started</li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
