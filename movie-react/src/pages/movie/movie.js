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
    movieInfo: { title },
  } = props;

  return (
    <div>
      <h1>Estamos en la película {title} </h1>
    </div>
  );
}
