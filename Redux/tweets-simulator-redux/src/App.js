import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import Modal from "./components/Modal";

//Redux
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        {" "}
        {/* Es un estilo de boostrap. Significa un margin top de 5 */}
        <h1 className="text-center">TWEETS</h1>
      </Container>
      <Modal>Formulario para añadir nuevo Tweet</Modal>
    </Provider>
  );
}
