import './taskboard.css'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NewTaskComponent from "../../taskComponents/newTaskComponent/newTaskComponent";
import SingleTaskComponent from "../../taskComponents/singleTaskComponent/singleTaskComponent";
import Modal from 'react-modal';

const TaskBoard = () => {
  const TASK_OPTIONS = ["Ready", "In Progress", "Done"]
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [tasks, setTasks] = useState([]);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  const deleteTask = async (idToDelete) => {
    try {
      const apiResponse = await fetch(`${BASE_URL}/${idToDelete}`, {
        method: "DELETE"
      })
      const parsedResponse = await apiResponse.json();
      if(parsedResponse.success){
        const newTasks = tasks.filter(task => task._id !== idToDelete);
        setTasks(newTasks);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const createNewTask = async (newTask) => {
    const apiResponse = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const parsedResponse = await apiResponse.json();
    if(parsedResponse.success){
      setTasks([parsedResponse.data, ...tasks]);
      setCreateModalIsOpen(false);
    }else {
      alert(parsedResponse.data)
    }
  }

  const updateTask = async (idToUpdate, taskToUpdate) => {
    const apiResponse = await fetch(`${BASE_URL}/${idToUpdate}`, {
      method: "PUT",
      body: JSON.stringify(taskToUpdate),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const parsedResponse = await apiResponse.json();

    if(parsedResponse.success){
      const newTasks = tasks.map(task => task._id === idToUpdate? taskToUpdate : task);
      setTasks(newTasks);
    } else {
      alert(parsedResponse.data)
    }
  }

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await fetch(process.env.REACT_APP_BASE_URL);
        const parsedTasks = await tasks.json();
        setTasks(parsedTasks.data);
      } catch (err) {
        console.log(err);
      }
    }

    getTasks()
  }, []);

  return (
    <div id='task-dashboard-container'>
      <header id='task-dashboard-header'>
        <h1>Task Board</h1>
        <span><button onClick={() => setCreateModalIsOpen(true)}><FontAwesomeIcon icon="fa-solid fa-plus" /> Create Task</button></span>
      </header>
      <Modal isOpen={createModalIsOpen}>
        <NewTaskComponent
          createNewTask={createNewTask}
          TASK_OPTIONS={TASK_OPTIONS}
          setCreateModalIsOpen={setCreateModalIsOpen}>
        </NewTaskComponent>
        <button onClick={() => setCreateModalIsOpen(false)}>Cancel</button>
      </Modal>

      <div className='task-dashboard'>
        {tasks.sort((task1, task2) => task1.priority - task2.priority).map(task => {
          return (
            <SingleTaskComponent
              key={task._id}
              deleteTask={deleteTask}
              updateTask={updateTask}
              task={task}>
            </SingleTaskComponent>
          )
        })}
      </div>
    </div>
  )
}

export default TaskBoard;