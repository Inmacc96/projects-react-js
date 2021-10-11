import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

export default function ModalVideo(props) {
  const { videoKey, videoPlatform, isOpen, close } = props; // isOpen es para saber si está abierto o no el modal y close una función para cerrar el modal.

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close} // Para que el modal se cierre cuando pulsamos la x, se ejecuta la función close.
      footer={false}
    >
      Este es mi modal
    </Modal>
  );
}
