import Product from "./product";
import Cart from "./Cart";
import OrderConfirmed from "./OrderConfirmed";
import { useState, useEffect } from "react";
import * as Images from "./index";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

function ProductListContainer() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItemsCart, setTotalItemsCart] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    console.log(cart);

    setTotalItemsCart(totalQuantity);
  }, [cart]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [showModal]);

  return (
    <>
      {
        <AnimatePresence>
          {showModal && (
            /* BACKDROP: Se encarga del fondo oscuro y de centrar el modal */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[99] flex items-end md:items-center justify-center"
            >
              <OrderConfirmed
                cart={cart}
                setCart={setCart}
                setShowModal={setShowModal}
              />
            </motion.div>
          )}
        </AnimatePresence>
      }

      <div className="p-5 md:py-10 relative bg-[#FBF9F5] lg:grid lg:justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:px-15 lg:gap-20 max-w-[2000px]">
          <div>
            <div className="text-[#230E07]  mb-10 font-bold text-4xl md:text-6xl">
              Desserts
            </div>
            <div className="py-5 gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
              {data.map((item) => {
                // Buscamos si el item actual ya está en el carrito para saber su cantidad
                const productInCart = cart.find(
                  (cartItem) => cartItem.name === item.name
                );
                const currentQuantity = productInCart
                  ? productInCart.quantity
                  : 0;

                return (
                  <Product
                    key={item.name}
                    imageProduct={item.image}
                    categoryProduct={item.category}
                    nameProduct={item.name}
                    priceProduct={item.price}
                    quantity={currentQuantity}
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
          </div>

          <Cart
            cart={cart}
            totalItemsCart={totalItemsCart}
            RemoveTo={RemoveTo}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </>
  );
}

export default ProductListContainer;
