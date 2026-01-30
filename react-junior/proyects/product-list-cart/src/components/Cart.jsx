import emptyCart from "../assets/images/illustration-empty-cart.svg";
import ProductInCart from "./ProductInCart";

function Cart({ totalItemsCart, cart, RemoveTo, clearData }) {
  return (
    <div className="w-full my-5 px-5 py-5 pb-10 bg-white rounded-lg flex flex-col items-center h-[312px]">
      <h2 className="text-[#C83B10] text-xl font-bold self-start">
        Your Cart ( {totalItemsCart} )
      </h2>
      {totalItemsCart == 0 ? (
        <div className="flex flex-col items-center">
          <img
            className="mt-10 mb-5 w-35"
            src={emptyCart}
            alt="empty-cart-image"
          />
          <span className="text-[#988583] font-semibold ">
            Your added items will appear here
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center py-5 w-full">
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
                  clearData(item);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
