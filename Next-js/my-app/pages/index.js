import React from "react";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <h1 style={{ color: "green", textAlign: "center" }}>
        {" "}
        Welcome to Next.js{" "}
      </h1>
    </div>
  );
}

// Studying the styles CSS, SASS
/* import React from "react";
import CssExterno from "../components/CssExterno";
import ScssExterno from "../components/ScssExterno";

export default function Home() {
  return (
    <div>
      <h1 style={{ color: "green", textAlign: "center" }}>
        {" "}
        Welcome to Next.js{" "}
      </h1>
      <CssExterno />
      <ScssExterno />
    </div>
  );
} */
