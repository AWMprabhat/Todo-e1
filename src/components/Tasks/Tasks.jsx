import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({data,MarkCompleted,handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(data)
  
  return  (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {
          data.map(item=>{
            return (<Task key = {item.id} {...item} handleCompleted={MarkCompleted} handleDelete={handleDelete}/>)
          })
        } 
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
