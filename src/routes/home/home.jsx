import './home.css';
import { useState, useEffect } from 'react';

const Home = () => {
  const BASE_URL = "https://task-tracker-back-end.herokuapp.com/tasks"
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const tasks = await fetch(BASE_URL);
      const parsedTasks = await tasks.json();
      setTasks(parsedTasks.data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getTasks()
  }, []);

  return (
    <main id="home-main-content">
      <h3>Welcome to Victor Sarmiento's Task Tracker <hr /></h3>
      <section id='stats-section'>
        <div className='stats-details'>
          <h1>Total Tickets</h1>
          <p>{tasks.length}</p>
        </div>
        <div className='stats-details'>
          <h1>Tickets In Progress</h1>
          <p>{tasks.filter((task) => task.status === "In Progress").length}</p>
        </div>
        <div className='stats-details'>
          <h1>Tickets Ready</h1>
          <p>{tasks.filter((task) => task.status === "Ready").length}</p>
        </div>
        <div className='stats-details'>
          <h1>Tickets Completed</h1>
          <p>{tasks.filter((task) => task.status === "Done").length}</p>
        </div>
      </section>
    </main>
  )
}

export default Home;