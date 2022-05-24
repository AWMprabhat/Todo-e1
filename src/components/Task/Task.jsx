import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({text,id,done,count,handleCompleted,handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log(text)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onChange={()=>{handleCompleted(id) }} className={styles.checked}/>
      <div data-cy="task-text" style={{textDecoration:done?'line-through':'none',color:done?'grey':'blue'}} className={styles.text}>{text}</div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button" className={styles.remove} onClick={()=>{handleDelete(id)}}>X</button>
    </li>
  );
};

export default Task;
