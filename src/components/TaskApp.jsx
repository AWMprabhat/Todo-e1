import React, { useState } from "react";
import styles from "./taskApp.module.css";
import TaskHeader from './TaskHeader/TaskHeader';
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks'
import {v4 as uuid} from 'uuid'
import init_tasks from '../data/tasks.json'

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [tasks, setTask] = useState(init_tasks);
  const handleAdd = (title)=>{
    if( title === "" ){
      return null;
    }
    const payload = {
      id:uuid(),
      text:title,
      done:false,
      count:1
    }
    for(let i=0; i<tasks.length; i++){
      if(tasks[i].text === title){
        return null;
      }
    }
    setTask([...tasks,payload])
  }


  const MarkDone = (id)=>{
    // alert(id)
    let updatedList = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTask(updatedList);

  }

  const DeleteItem = (id)=>{
    let updatedList = tasks.filter((item) =>{
        return  item.id !== id
    })
    setTask(updatedList);
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={tasks}/>
      {/* Add Task */}
      <AddTask handleAdd={handleAdd}/>
      {/* Tasks */}
      <Tasks  data = {tasks} MarkCompleted={MarkDone} handleDelete={DeleteItem}/>
    </div>
  );
};

export default TaskApp;
