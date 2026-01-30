import cartLogo from "../assets/images/icon-add-to-cart.svg";
import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";

function Product({
  imageProduct,
  categoryProduct,
  nameProduct,
  priceProduct,
  onAdd,
  onAddDecrement,
  onRemove,
  quantity,
}) {
  const isAdded = quantity > 0;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center relative">
        <img
          className={`w-full rounded-lg transition-all ${
            isAdded ? "border-2 border-[#C83B10]" : "border-transparent"
          }`}
          src={imageProduct}
          alt={nameProduct}
        />

        {/* Cambiamos <button> por <div> para evitar el error de anidación */}
        <div
          className={`py-3 px-5 rounded-full border font-semibold absolute -bottom-6 flex gap-2 transition-all w-40 justify-center h-[50px] items-center ${
            isAdded
              ? "bg-[#C83B10] text-white border-none"
              : "bg-white border-[#B9ABAD] text-[#230E07] cursor-pointer"
          }`}
          // Solo ponemos el onClick aquí si NO está agregado, para que el div actúe como botón inicial
          onClick={!isAdded ? onAdd : undefined}
        >
          {isAdded ? (
            <div className="flex justify-between w-full items-center px-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  quantity === 1 ? onRemove() : onAddDecrement();
                }}
                className="border border-white rounded-full p-1 hover:bg-white hover:text-[#C83B10] flex items-center justify-center transition-colors w-6 h-6"
              >
                {quantity === 1 ? (
                  <FaRegTrashCan size={10} />
                ) : (
                  <FaMinus size={10} />
                )}
              </button>

              <span className="font-bold select-none">{quantity}</span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd();
                }}
                className="border border-white rounded-full p-1 hover:bg-white hover:text-[#C83B10] flex items-center justify-center transition-colors w-6 h-6"
              >
                <FaPlus size={10} />
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <img src={cartLogo} alt="cart-logo" className="w-5" />
              <span>Add to Cart</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <p className="font-medium text-sm text-[#B1A3A0]">{categoryProduct}</p>
        <h2 className="text-[#230E07] font-bold text-lg">{nameProduct}</h2>
        <p className="text-[#BA4C25] font-bold">${priceProduct.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;
