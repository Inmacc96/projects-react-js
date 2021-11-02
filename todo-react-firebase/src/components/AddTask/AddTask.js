import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { isEmpty } from "lodash";
import firebase from "../../utils/firebase";
import "firebase/firestore";
import { ReactComponent as Send } from "../../assets/send.svg";

import "./AddTask.scss";

//Inicializar la base de datos
const db = firebase.firestore(firebase);

export default function AddTask() {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //Para que no se recargue la página
    if (!isEmpty(task)) {
      // No podemos enviar task vacío a firebase. Por tanto lo validamos antes de enviarlo.
      db.collection("tasks")
        .add({
          name: task,
          completed: false,
        }) // Es una promesa
        .then(() => {
          console.log("Tarea creada");
        });
    }
  };

  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input
        type="text"
        placeholder="Nueva tarea..."
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
}
