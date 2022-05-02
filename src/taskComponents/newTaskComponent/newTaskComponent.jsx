import './newTaskComponent.css'
import { useState } from "react";

const NewTaskComponent = (props) => {
  const [newTask, setNewTask] = useState({
    taskName: "",
    priority: 0,
    description: "",
    status: props.TASK_OPTIONS[0],
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
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" name="taskName" onChange={handleInputChange} value={newTask.taskName} />
        <label htmlFor="priority">Priority:</label>
        <input type="number" name="priority" onChange={handleInputChange} value={newTask.priority} min="0" />
        <label htmlFor="status">Status:</label>
        <select name="status" id="status" onChange={handleInputChange}>
          {props.TASK_OPTIONS.map(option => {
            return (
              <option value={option} key={option}>{option}</option>
            )
          })}
        </select>
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" onChange={handleInputChange} value={newTask.description} />
        <label htmlFor="points">Points:</label>
        <input type="number" name="points" onChange={handleInputChange} value={newTask.points} min="0" />
        <button type="submit">Create New Task</button>
      </form>
    </div>
  )
}

export default NewTaskComponent;