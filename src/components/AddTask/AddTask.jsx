import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ handleAdd }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [title, setTitle] = useState("");
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        placeholder="Add Here.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button data-cy="add-task-button" onClick={() => { handleAdd(title); setTitle("")} }>
        +
      </button>
    </div>
  );
};

export default AddTask;
