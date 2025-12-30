import axios from "axios";
import { useEffect, useState } from "react";

function AutoCompleteSearchBar() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [productSelected, setProductSelected] = useState(0);
  const [showProduct, setShowProduct] = useState([]);

  // asi se obtiene la api
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products/");
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleQueryChange = (e) => {
    // obtiene que valor que se introduce en el input
    const value = e.target.value;
    setQuery(value);

    setSearchResults(
      products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    );
    // console.log(searchResults);
  };

  const itemSelected = (e) => {
    let itemValue = e.target.innerText;
    // console.log(itemValue);

    setShowProduct(
      searchResults.filter((product) =>
        product.title.toLowerCase().includes(itemValue.toLowerCase())
      )
    );

    setQuery("");
  };

  useEffect(() => {
    console.log(showProduct.length);
  }, [showProduct]);

  return (
    <>
      <div className="flex flex-col mx-auto bg-amber-300 mt-20 relative max-w-lg ">
        <input
          type="text"
          className="px-4 outline-none appearance-none"
          onChange={handleQueryChange}
        />
        <div className="max-h-[420px] overflow-y-scroll absolute mt-6">
          {query !== "" &&
            searchResults.map((product) => (
              <div
                key={product.id}
                className="p-5 h-[84px] hover:bg-[#dfb92f] cursor-pointer flex items-center bg-amber-300"
                onClick={itemSelected}
              >
                {product.title}
              </div>
            ))}
        </div>
      </div>

      <div className="mx-auto max-w-lg">
        {showProduct.length !== 0 &&
          showProduct.map((product) => (
            <div className="mt-20 p-5 bg-red-400" key={product.id}>
              {product.title}
            </div>
          ))}
      </div>
    </>
  );
}

export default AutoCompleteSearchBar;
