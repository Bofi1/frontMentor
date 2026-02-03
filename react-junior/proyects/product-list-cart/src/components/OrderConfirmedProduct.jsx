import * as Images from "./index";

function OrderConfirmedProduct() {
  return (
    <div className="w-full bg-[#FBF9F5] flex justify-between items-center">
      <div className="flex gap-3">
        <img className="h-12" src={Images.waffleThumbnail} alt="" />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[#544E4A] text-sm">Classic Tiramisu</h2>
          <div>
            <span className="text-[#C83B10] font-bold mr-2">1x</span>
            <span className="text-[#ABA5A4]">@ $ 5.50</span>
          </div>
        </div>
      </div>
      <div className="font-semibold">$ 5.50</div>
    </div>
  );
}

export default OrderConfirmedProduct;
