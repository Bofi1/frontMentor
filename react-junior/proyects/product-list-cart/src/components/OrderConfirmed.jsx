import OrderConfirmedProduct from "./OrderConfirmedProduct";
import check from "../assets/images/icon-order-confirmed.svg";
import { motion } from "framer-motion"; // 1. Importar motion
import * as Images from "./index";

function OrderConfirmed({ cart, setCart, setShowModal }) {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }} // Empieza fuera de la pantalla (arriba)
      animate={{ y: 0, opacity: 1 }} // Baja a su posición normal
      exit={{ y: "100vh", opacity: 0 }} // Sube al cerrarse
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
      }}
      className="bg-white rounded-t-2xl md:rounded-3xl p-5 w-full flex flex-col gap-10 md:max-w-[700px]"
    >
      <div>
        <img className="mb-5" src={check} alt="check-icon" />
        <h2 className="font-bold text-4xl mr-50 mb-2 text-[#302924]">
          Order Confirmed
        </h2>
        <span className="text-sm md:text-lg">We hope you enjoy your food</span>
      </div>
      <div className="bg-[#FBF9F5]">
        <div className=" flex flex-col gap-5 md:gap-8 p-5 max-h-[200px] overflow-y-scroll">
          {cart.map((item) => {
            return (
              <OrderConfirmedProduct
                key={item.name}
                imageProduct={Images[item.image.thumbnail]}
                nameProduct={item.name}
                x={item.quantity}
                price={item.price}
                priceTotal={item.quantity * item.price}
              />
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-2 p-5">
          <span className="text-sm md:text-lg md:font-[500]">Order Total</span>
          <span className="text-2xl font-bold ">
            $
            {cart.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)}
          </span>
        </div>
      </div>
      <button
        className="bg-[#C83B10] text-white py-4 font-[500] rounded-full md:text-lg cursor-pointer"
        onClick={() => {
          setCart([]);
          setShowModal(false);
          window.scrollTo(0, 0);
        }}
      >
        Start New Order
      </button>
    </motion.div>
  );
}

export default OrderConfirmed;
