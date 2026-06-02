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
    <div className="w-full bg-[#FFFEFF] p-5 flex justify-between items-center relative z-10">
      <img src={logoDark} alt="logo-dark" />
      <ul className="flex gap-5">
        {menuList.map((item) => (
          <li
            key={item.name}
            className="hidden md:flex text-gray-400 cursor-pointer"
            href={item.href}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <button className="hidden md:flex rounded-full text-white font-bold bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-3 px-8">
        Request Invite
      </button>
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
            className={`bg-white w-[90%] flex flex-col items-center absolute top-[130%] rounded-xl left-1/2 -translate-x-1/2 md:hidden`}
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
