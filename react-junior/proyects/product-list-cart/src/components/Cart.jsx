import emptyCart from "../assets/images/illustration-empty-cart.svg";
import ProductInCart from "./ProductInCart";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";

function Cart({ totalItemsCart, cart, RemoveTo, setShowModal }) {
  const orderTotal = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <div className="w-full my-5 px-5 py-5 pb-10 bg-white rounded-lg flex flex-col items-center lg:max-h-[750px] lg:sticky lg:top-10 h-fit">
      <h2 className="text-[#C83B10] text-xl md:text-3xl font-bold self-start">
        Your Cart ( {totalItemsCart} )
      </h2>
      {totalItemsCart == 0 ? (
        <div className="flex flex-col items-center md:p-10">
          <img
            className="mt-10 mb-5 w-35"
            src={emptyCart}
            alt="empty-cart-image"
          />
          <span className="text-[#988583] font-semibold md:text-xl">
            Your added items will appear here
          </span>
        </div>
      ) : (
        <div className=" w-full flex flex-col justify-between  gap-5 mt-5 md:mt-7 ">
          <div className="flex flex-col items-center w-full lg:max-h-[400px] lg:overflow-scroll">
            {cart.map((item) => {
              return (
                <ProductInCart
                  key={item.name}
                  productName={item.name}
                  x={item.quantity}
                  productValue={item.price}
                  totalValue={item.price * item.quantity}
                  onRemove={() => {
                    RemoveTo(item);
                  }}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between w-full my-2 ">
            <span className="text-[#8F8688] font-semibold text-sm md:text-lg">
              Order Total
            </span>
            <span className="font-bold text-[#200C09] text-2xl md:text-3xl">
              ${orderTotal}
            </span>
          </div>

          <div className="bg-[#FBF9F5] w-full flex justify-center gap-2 py-3 rounded-xl">
            <img src={carbonNeutral} alt="carbon-neutral-img" />
            <span className="text-[#6F6361] text-sm md:text-lg">
              This is a<span className="font-bold"> carbon-neutral </span>
              delivery
            </span>
          </div>

          <button
            className="w-full rounded-full bg-[#C83B10] text-white py-4 font-[500] flex justify-center md:text-lg cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Confirm order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
