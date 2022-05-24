import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({data}) => {
  // sample values to be replaced
  
  let totalTask = 0;
  let unCompletedTask = 0;
  let completde = 0
  for(var i=0; i<data.length; i++){
    if(data[i].done===true){
      completde++;
    }else{
      unCompletedTask++
    }
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task"> UNCOMPLETED..{unCompletedTask} </b>
      <b data-cy="header-total-task">OUT OF..{data.length}</b>
    </div>
  );
};

export default TaskHeader;
