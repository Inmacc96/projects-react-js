import React from "react";
import { Container, Snackbar } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
    </Container>
  );
}

export default App;
