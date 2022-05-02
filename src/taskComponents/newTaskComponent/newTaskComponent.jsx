import './newTaskComponent.css'
import { useState } from "react";

const NewTaskComponent = (props) => {
  const [newTask, setNewTask] = useState({
    taskName: "",
    priority: 0,
    description: "",
    status: "",
    points: 0
  })

  const handleInputChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  const submitNewTask = (e) => {
    e.preventDefault();

    props.createNewTask(newTask);
  }

  return (
    <div className="task-form">
      <form onSubmit={submitNewTask}>
        Task Name: <input type="text" name="taskName" onChange={handleInputChange} value={newTask.taskName} />
        Priority: <input type="number" name="priority" onChange={handleInputChange} value={newTask.priority} min="0" />
        Status: <input type="text" name="status" onChange={handleInputChange} value={newTask.status} />
        Description: <input type="text" name="description" onChange={handleInputChange} value={newTask.description} />
        Points: <input type="number" name="points" onChange={handleInputChange} value={newTask.points} min="0" />
        <button type="submit">Create New Task</button>
      </form>
    </div>
  )
}

export default NewTaskComponent;