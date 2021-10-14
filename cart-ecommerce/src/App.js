import React, { useEffect } from "react";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constans";

function App() {
  const products = useFetch(urlApiProducts, null);

  return (
    <div>
      <TopMenu />
      <Products products={products} />
    </div>
  );
}

export default App;
