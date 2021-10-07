import React from "react";
import { Row, Col, Botton } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { URL_API, KEY_API } from "../../utils/constans";
import Loading from "../../components/Loading";

import "./movie.scss";

export default function Movie() {
  const { id } = useParams();

  const movieInfo = useFetch(
    `${URL_API}/movie/${id}?api_key=${KEY_API}&language=es-ES`
  );

  if (movieInfo.loading || !movieInfo.result) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo.result} />;
}

function RenderMovie(props) {
  const {
    movieInfo: { title, backdrop_path },
  } = props;

  const backdropPath = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <div className="movie" style={{ backgroundImage: `url(${backdropPath})` }}>
      <div className="movie__dark" />
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          Caratula..
        </Col>
        <Col span={10} className="movie__info">
          Movie Info...
        </Col>
      </Row>
    </div>
  );
}
