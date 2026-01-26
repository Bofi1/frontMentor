import emptyCart from "../assets/images/illustration-empty-cart.svg";

function Cart() {
  return (
    <div className="w-full my-5 px-5 py-5 pb-10 bg-white rounded-lg flex flex-col items-center">
      <h2 className="text-[#C83B10] text-xl font-bold self-start">
        Your Cart (0)
      </h2>
      <img className="mt-10 mb-5 w-35" src={emptyCart} alt="empty-cart-image" />
      <span className="text-[#988583] font-semibold ">
        Your added items will appear here
      </span>
    </div>
  );
}

export default Cart;
