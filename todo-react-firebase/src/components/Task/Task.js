import React from "react";

import "./Task.scss";

export default function Task(props) {
  const { task } = props;

  return (
    <div className="task">
      <div>
        <h3> {task.name} </h3>
      </div>
    </div>
  );
}
