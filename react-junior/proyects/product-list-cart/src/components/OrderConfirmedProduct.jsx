function OrderConfirmedProduct({
  imageProduct,
  nameProduct,
  x,
  price,
  priceTotal,
}) {
  return (
    <div className="w-full bg-[#FBF9F5] flex justify-between items-center">
      <div className="flex gap-3 md:gap-5 items-center">
        <img className="h-12" src={imageProduct} alt="" />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[#544E4A] text-sm md:text-lg">
            {nameProduct}
          </h2>
          <div>
            <span className="text-[#C83B10] font-bold mr-2 text-sm md:text-lg">
              {x}x
            </span>
            <span className="text-[#ABA5A4] text-sm md:text-lg">
              @ ${price}
            </span>
          </div>
        </div>
      </div>
      <div className="font-bold md:text-lg">${priceTotal}</div>
    </div>
  );
}

export default OrderConfirmedProduct;
