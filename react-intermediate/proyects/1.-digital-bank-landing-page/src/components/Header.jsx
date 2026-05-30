// import { motion, AnimatePresence } from "framer-motion"; // Nota: si usas motion/react usa ese import
import logoDark from "../assets/images/logo-dark.svg";
import burger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import { div, img } from "framer-motion/client";

function Header({ menuOpen, toggleMenu }) {
  const menuList = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <div className="w-full bg-amber-50 p-5 flex justify-between items-center relative ">
      <img src={logoDark} alt="logo-dark" />
      <button
        className="cursor-pointer relative w-8 h-8 flex items-center justify-center md:hidden"
        onClick={toggleMenu}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={menuOpen ? "close" : "open"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="absolute w-[50%] h-[50%]"
            src={menuOpen ? close : burger}
            alt="close-icon"
          />
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className={`bg-white border border-gray-500 w-[90%] flex flex-col items-center absolute top-[130%] rounded-xl left-1/2 -translate-x-1/2`}
          >
            {menuList.map((item) => (
              <li
                key={item.name}
                className="hover:bg-[#e1e0e0] w-full p-5 text-center cursor-pointer"
                href={item.href}
              >
                {item.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
