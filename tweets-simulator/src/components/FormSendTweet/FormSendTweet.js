import React from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FormSendTweet.scss";

export default function FormSendTweet(props) {
  // const {} =props;

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Enviar Tweet</h2>
      <form className="form-send-tweet__form">
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              name="tweet"
              multiline
              rows="6" // 6 lineas  por defecto
              placeholder="Escribe tu Tweet..."
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
