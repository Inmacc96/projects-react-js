import React from "react";
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
}
