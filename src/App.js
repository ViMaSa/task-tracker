import './App.css';
import { Outlet,Link } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <nav>
        <img src='../taskTracker.png' alt='task tracker logo'></img>
        <Link to="/">Home</Link>
        <Link to="/tasks">Task Board</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
