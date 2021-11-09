import React from "react";
import Menu from "../../components/Menu";
import { useRouter } from "next/router";

export default function movie() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Menu />
      <h2 style={{ textAlign: "center" }}>Estás viendo...</h2>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
    </div>
  );
}
