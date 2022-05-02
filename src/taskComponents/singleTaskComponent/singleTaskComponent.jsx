import './singleTaskComponent.css'
import { useState } from 'react';
import Modal from 'react-modal';
import UpdateTaskComponent from '../updateTaskComponent/updateTaskComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SingleTaskComponent = (props) => {
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

  return (
    <div className="index-single-task">
      
      <h2>{props.task.taskName} P{props.task.priority} <button onClick={() => setUpdateModalIsOpen(true)}><FontAwesomeIcon icon="fa-solid fa-pencil"/> EDIT</button></h2>
      <p>Status: {props.task.status}</p>
      <p>Description: {props.task.description}</p>
      <p>Points: {props.task.points}</p>
      <p>Created: {props.task.createdAt}</p>
      <p>Last Updated: {props.task.updatedAt}</p>
      <button className="delete-button" onClick={() => {
        props.deleteTask(props.task._id)
      }}>Delete</button>
      <Modal isOpen={updateModalIsOpen}>
        <UpdateTaskComponent
          updateTask={props.updateTask}
          setUpdateModalIsOpen={setUpdateModalIsOpen}
          task={props.task}>
          key={props.task._id}
        </UpdateTaskComponent>
        <button onClick={() => setUpdateModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  )
}

export default SingleTaskComponent;