import Product from "./product";

function ProductListContainer() {
  return (
    <div className="p-5">
      <div className="text-[#230E07] w-full  font-bold text-4xl">Desserts</div>
      <div className="py-5">
        <Product />
      </div>
    </div>
  );
}

export default ProductListContainer;
