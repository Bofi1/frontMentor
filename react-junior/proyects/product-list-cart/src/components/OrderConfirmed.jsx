import OrderConfirmedProduct from "./OrderConfirmedProduct";
import check from "../assets/images/icon-order-confirmed.svg";

function OrderConfirmed() {
  return (
    <div className="bg-white rounded-t-2xl p-5 w-full flex flex-col gap-10">
      <div>
        <img className="mb-5" src={check} alt="check-icon" />
        <h2 className="font-bold text-4xl mr-50 mb-2">Order Confirmed</h2>
        <span className="text-sm ">We hope you enjoy your food</span>
      </div>
      <div className="p-5 bg-[#FBF9F5]">
        <OrderConfirmedProduct />
        <div className="flex justify-between items-center mt-10">
          <span className="text-sm">Order Total</span>
          <span className="text-2xl font-bold">$46.50</span>
        </div>
      </div>
      <button className="bg-[#C83B10] text-white py-4 font-[500] rounded-full">
        Start New Order
      </button>
    </div>
  );
}

export default OrderConfirmed;
