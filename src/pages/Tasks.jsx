import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import taskService from "../services/task.service";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await taskService.getAllTasks();
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section>
      <h1>Tasks</h1>
      {tasks.map((task) => {
        return (
          <Link to={`/tasks/edit/${task._id}`} key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.date}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Tasks;
