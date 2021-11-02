import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { map, size } from "lodash";
import firebase from "./utils/firebase";
import "firebase/firestore";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

import "./App.scss";

const db = firebase.firestore(firebase);

export default function App() {
  const [tasks, setTasks] = useState(null);
  const [reloadTasks, setReloadTasks] = useState(false);

  useEffect(() => {
    db.collection("tasks")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response.docs, (task) => {
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
      });
    setReloadTasks(false);
  }, [reloadTasks]);

  return (
    <div>
      <Container fluid className="app">
        {/* fluid: para que la cabecera ocupe todo el ancho. */}
        <div className="title">
          <h1>Listado de tareas diarias</h1>
        </div>

        <Row className="todo">
          <Col
            className="todo__title"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            {/*  Bootstrap tabaja con 12 columnas, lo anterior significa 
         que va ocupar 6 columnas y tendra 3 columnas separadas de la derecha y otra 3 de la izquierda  */}
            <h2>Today</h2>
          </Col>
          <Col
            className="todo__list"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            {!tasks ? (
              <div className="loading">
                <Spinner animation="border" />
                <span>Cargando...</span>
              </div>
            ) : size(tasks) == 0 ? (
              <h3> No hay tareas pendientes </h3>
            ) : (
              map(tasks, (task, index) => <Task key={index} task={task} />)
            )}
          </Col>
          <Col
            className="todo__input"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <AddTask setReloadTasks={setReloadTasks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
