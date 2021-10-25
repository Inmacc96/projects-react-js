import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTask from "./components/AddTask";

import "./App.scss";

export default function App() {
  return (
    <div>
      <Container fluid className="app">
        {/* fluid: para que la cabecera ocupe todo el ancho. */}
        <div className="title">
          <h1>Listado de tareas diarias</h1>
        </div>

        <Row className="todo">
          <Col
            className="todo__title"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            {/*  Bootstrap tabaja con 12 columnas, lo anterior significa 
         que va ocupar 6 columnas y tendra 3 columnas separadas de la derecha y otra 3 de la izquierda  */}
            <h2>Today</h2>
          </Col>
          <Col
            className="todo__list"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <p> Lista de tareas</p>
          </Col>
          <Col
            className="todo__input"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <AddTask />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
