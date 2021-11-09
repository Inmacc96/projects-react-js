import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";

export default function movies() {
  const movies = [
    { id: "joker", name: "Joker" },
    { id: "spiderman", name: "Spider-Man" },
    { id: "batman", name: "Batman" },
  ];
  return (
    <div>
      <Menu />
      <h1 style={{ textAlign: "center" }}>Estamos en la página de películas</h1>
      {movies.map((movie, index) => (
        <Link key={index} href="/movie/[movie]" as={`movie/${movie.id}`}>
          <a style={{ marginRight: 20 }}>{movie.name}</a>
        </Link>
      ))}
    </div>
  );
}
