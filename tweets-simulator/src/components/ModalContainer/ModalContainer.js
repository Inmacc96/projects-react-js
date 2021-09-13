import React from "react";
import { Modal } from "@material-ui/core";

import "./ModalContainer.scss";

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children } = props;

  return (
    <Modal
      className="modal-container"
      open={isOpenModal} // El modal se abre cuando se activa isOpenModal
      onClose={closeModal} //Se cierra pulsando la pantalla
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
