import React, { useState } from "react";
import { Container, Snackbar } from "@material-ui/core";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000} // 1segundo
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
