import './updateTaskComponent.css'
import { useState } from "react";

const UpdateTaskComponent = (props) => {
  const [updatedTask, setUpdatedTask] = useState({
    taskName: props.task.taskName,
    priority: props.task.priority,
    status: props.task.status,
    description: props.task.description,
    points: props.task.points,
    _id: props.task._id,
  });

  const handleInputChange = (e) => {
    setUpdatedTask({
      ...updatedTask,
      [e.target.name]: e.target.value
    });
  }

  const submitUpdatedTask = (e) => {
    e.preventDefault();

    props.updateTask(props.task._id, updatedTask);
    props.setUpdateModalIsOpen(false);
  }

  return (
    <div className="task-form">
      <form onSubmit={submitUpdatedTask}>
        Task Name: <input type="text" value={updatedTask.taskName} name="taskName" onChange={handleInputChange} />
        priority: <input type="number" value={updatedTask.priority} name="priority" onChange={handleInputChange} />
        Status: <input type="text" value={updatedTask.status} name="status" onChange={handleInputChange} />
        Description: <input type="text" value={updatedTask.description} name="description" onChange={handleInputChange} />
        Points: <input type="number" value={updatedTask.points} name="points" onChange={handleInputChange} />
        <button type="submit">Update Task</button>
      </form>
    </div>
  )
}

export default UpdateTaskComponent;