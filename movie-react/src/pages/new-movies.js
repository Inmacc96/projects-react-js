import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, KEY_API } from "../utils/constans";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function NewMovies() {
  const [movieList, setmovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${KEY_API}&lenguague=es-ES&page=${page}`
      ); //el await es para que espere que le devuelva algo el fetch para continuar-
      const movies = await response.json();
      setmovieList(movies);
    })();
  }, [page]);

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Últimos lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Col span="24">Todas las películas......</Col>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}

      <Col span="24">
        <Footer />
      </Col>
    </Row>
  );
}
