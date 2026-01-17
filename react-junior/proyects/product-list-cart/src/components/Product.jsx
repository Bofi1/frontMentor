import cartLogo from "../assets/images/icon-add-to-cart.svg";

function Product() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center relative">
        {/* cambiar */}
        <img
          className="w-full rounded-lg"
          src="./images/image-brownie-mobile.jpg"
          alt=""
        />
        <button className="py-3 px-5 rounded-full bg-white border border-[#B9ABAD] font-semibold absolute -bottom-6 flex gap-2 cursor-pointer">
          <img src={cartLogo} alt="cart-logo" />
          Add to cart
        </button>
      </div>

      <div className="mt-10">
        <p className="font-semibold text-sm text-[#B1A3A0]">Waffle</p>
        <h2 className="text-[#230E07] font-semibold text-lg">
          Waffle with Berries
        </h2>
        <p className="text-[#BA4C25] font-semibold ">
          <span>$</span>6.50
        </p>
      </div>
    </div>
  );
}

export default Product;
