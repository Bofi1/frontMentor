import cartLogo from "../assets/images/icon-add-to-cart.svg";
import decrement from "../assets/images/icon-decrement-quantity.svg";
import increment from "../assets/images/icon-increment-quantity.svg";

import { FaRegTrashCan, FaPlus, FaMinus } from "react-icons/fa6";

import { useEffect, useState } from "react";

function Product({ imageProduct, categoryProduct, nameProduct, priceProduct }) {
  const [itemAdded, setItemAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = (e) => {
    e.stopPropagation(); // Evita conflictos de clicks
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation(); // Evita conflictos de clicks
    setQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(quantity);
  }, [quantity]);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center relative">
        {/* cambiar */}
        <img className="w-full rounded-lg" src={imageProduct} alt="" />
        <button
          className={`py-3 px-5 rounded-full  border  font-semibold absolute -bottom-6 flex gap-2 cursor-pointer outline-none appearance-none ${
            itemAdded
              ? "bg-[#C83B10] border-none text-white"
              : "bg-white border-[#B9ABAD]"
          }`}
        >
          {itemAdded ? (
            <div className="flex justify-between w-30 items-center">
              {quantity === 1 ? (
                <FaRegTrashCan
                  onClick={(e) => {
                    e.stopPropagation();
                    setItemAdded(false);
                    setQuantity(0);
                  }}
                />
              ) : (
                <FaMinus onClick={handleDecrement} />
              )}

              <span>{quantity}</span>
              <FaPlus onClick={handleIncrement} />
            </div>
          ) : (
            <div
              className="flex gap-2"
              onClick={() => {
                setItemAdded(true);
                setQuantity(1);
              }}
            >
              <img src={cartLogo} alt="cart-logo" />
              <span>Add to Cart</span>
            </div>
          )}
        </button>
      </div>

      <div className="mt-10">
        <p className="font-semibold text-sm text-[#B1A3A0]">
          {categoryProduct}
        </p>
        <h2 className="text-[#230E07] font-semibold text-lg">{nameProduct}</h2>
        <p className="text-[#BA4C25] font-semibold ">
          <span>$</span>
          {priceProduct}
        </p>
      </div>
    </div>
  );
}

export default Product;
