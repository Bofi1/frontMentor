import Product from "./product";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import * as Images from "./index";
import axios from "axios";

function ProductListContainer() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItemsCart, setTotalItemsCart] = useState([0]);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductOnCart = prevCart.find(
        (item) => item.name === product.name
      );

      if (isProductOnCart) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const addToCartDecrement = (product) => {
    setCart((prevCart) => {
      const isProductOnCart = prevCart.find(
        (item) => item.name === product.name
      );

      if (isProductOnCart) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const RemoveTo = (product) => {
    setCart((prevCart) => {
      // Versión simplificada sin llaves (return implícito)
      return prevCart.filter((item) => item.name !== product.name);
    });
  };

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const clearData = (product) => {
    setData((prevData) => {
      const name = prevData.find((item) => {
        item.name === product.name;
      });

      setQuantity(0);
    });
  };

  useEffect(() => {
    console.log(cart);

    setTotalItemsCart(totalQuantity);
  }, [cart]);

  useEffect(() => {
    console.log(totalItemsCart);
  }, [totalItemsCart]);

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
              onAdd={() => {
                addToCart(item);
              }}
              onAddDecrement={() => {
                addToCartDecrement(item);
              }}
              onRemove={() => {
                RemoveTo(item);
              }}
            />
          );
        })}
      </div>

      <Cart
        cart={cart}
        totalItemsCart={totalItemsCart}
        RemoveTo={RemoveTo}
        clearData={clearData}
      />
    </div>
  );
}

export default ProductListContainer;
