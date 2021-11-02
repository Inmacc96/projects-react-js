import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as Send } from "../../assets/send.svg";

import "./AddTask.scss";

export default function AddTask() {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //Para que no se recargue la página
    console.log("Formulario enviado...");
    console.log(task);
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
