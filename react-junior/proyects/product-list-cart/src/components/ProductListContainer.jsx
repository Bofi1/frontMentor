import Product from "./product";
import { useState, useEffect } from "react";
import * as Images from "./index";
import axios from "axios";

function ProductListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="p-5">
      <div className="text-[#230E07] w-full mb-10 font-bold text-4xl">
        Desserts
      </div>
      <div className="py-5 grid grid-rows-1 gap-10">
        {data.map((item) => {
          return (
            <Product
              key={item.name}
              imageProduct={Images[item.image.mobile]}
              categoryProduct={item.category}
              nameProduct={item.name}
              priceProduct={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductListContainer;
