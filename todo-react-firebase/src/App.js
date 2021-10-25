import React from "react";
import { Container } from "react-bootstrap";

import "./App.scss";

export default function App() {
  return (
    <div>
      <Container fluid className="app">
        {/* fluid: para que la cabecera ocupe todo el ancho. */}
        <div className="title">
          <h1>Inma Caballero</h1>
        </div>
      </Container>
    </div>
  );
}
