import React from "react";
import { Layout } from "antd";

import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <p> &copy; Creado por Inma Caballero Carrero</p>
    </Footer>
  );
}
