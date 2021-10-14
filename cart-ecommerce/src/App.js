import React, { useState } from "react";
import { ToastContainer, Toast, toast } from "react-toastify";
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

    toast.success(`${name} añadido al carrito correctamente.`);
  };

  return (
    <div>
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
