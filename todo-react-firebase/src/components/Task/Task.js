import React from "react";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";

import "./Task.scss";

export default function Task(props) {
  const { task } = props;

  return (
    <div className="task">
      <div>
        <Check />
      </div>
      <div>{task.name}</div>
      <div>
        <Delete />
      </div>
    </div>
  );
}
