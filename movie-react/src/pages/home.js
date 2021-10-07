import React from "react";
import useFetch from "../hooks/useFetch";
import { URL_API, KEY_API } from "../utils/constans";

import SliderMovies from "../components/SliderMovies";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${KEY_API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
    </>
  );
}
