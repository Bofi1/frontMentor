import { IoIosCloseCircleOutline } from "react-icons/io";

function ProductInCart({ productName, x, productValue, totalValue, onRemove }) {
  return (
    <div className="flexbg-amber-400 flex w-full items-center justify-between pb-3 border-b border-[#F6F6F6] mb-3">
      <div className=" flex flex-col gap-1">
        <h1 className="font-bold text-[#544E4A] text-sm">{productName}</h1>
        <div className="flex gap-4 text-sm">
          <span className="font-bold text-[#C83B10]">x{x}</span>
          <span className="text-[#ABA5A4]">
            @ $ <span>{productValue}</span>
          </span>
          <span className="font-bold text-[#948885]">
            $ <span>{totalValue}</span>
          </span>
        </div>
      </div>

      <IoIosCloseCircleOutline size={25} color="#C2BBB8" onClick={onRemove} />
    </div>
  );
}

export default ProductInCart;
