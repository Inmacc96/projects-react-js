import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, KEY_API } from "../utils/constans";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";
import Pagination from "../components/Pagination";

export default function Popular() {
  const [movieList, setmovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/popular?api_key=${KEY_API}&lenguague=es-ES&page=${page}`
      );
      const movies = await response.json();
      setmovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Películas populares
        </h1>
      </Col>
      {movieList.results ? (
        <>
          {/* Necesita solo un elemento. */}
          <Col span="24">
            <Row>
              <MovieCatalog movies={movieList} />
            </Row>
          </Col>
          <Col span="24">
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </>
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
