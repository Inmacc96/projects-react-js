import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function movies(props) {
  const { movies } = props;
  return (
    <div>
      <Menu />
      <h1 style={{ textAlign: "center" }}>Estamos en la página de películas</h1>
      {movies.map((movie, index) => (
        <Link key={index} href="/movie/[movie]" as={`/movie/${movie.id}`}>
          <a style={{ marginRight: 20 }}>{movie.name}</a>
        </Link>
      ))}
    </div>
  );
}

movies.getInitialProps = async () => {
  const res = await fetch("https://api.jsonserve.com/3fkD1V");
  const movies = await res.json();

  return { movies };
};
