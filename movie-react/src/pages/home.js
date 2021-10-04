import React from "react";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const movies = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=d35c56878f963551eb582345c09533ae&language=es-ES&page=1"
  );

  console.log(movies);

  return "Estamos en Home";
}
