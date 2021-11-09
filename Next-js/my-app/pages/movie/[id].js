import React from "react";
import Menu from "../../components/Menu";
import Router, { useRouter } from "next/router";

export default function movie() {
  const router = useRouter();
  const { id } = router.query;

  const goToHome = () => {
    Router.push("/");
  };
  return (
    <div>
      <Menu />
      <h2 style={{ textAlign: "center" }}>Estás viendo...</h2>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={goToHome}>Ir a inicio</button>
      </div>
    </div>
  );
}
