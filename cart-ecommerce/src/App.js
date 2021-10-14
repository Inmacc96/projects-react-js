import React, { useEffect } from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constans";

function App() {
  const result = useFetch(urlApiProducts);

  console.log(result);

  return (
    <div>
      <TopMenu />
    </div>
  );
}

export default App;
