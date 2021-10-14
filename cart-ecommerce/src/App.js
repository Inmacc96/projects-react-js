import React, { useState } from "react";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { urlApiProducts, STORAGE_PRODUCTS_CART } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = useState([]);

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);

    console.log("Producto añadido");
  };

  return (
    <div>
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
    </div>
  );
}

export default App;
