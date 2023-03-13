import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import taskService from "../services/task.service";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [importance, setImportance] = useState("");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleImportance = (e) => setImportance(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleComments = (e) => setComments(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { title, description, status, importance, date, comments };
    try {
      await taskService.createTask({
        title,
        description,
        status,
        importance,
        date,
        comments,
      });
      navigate("/tasks");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Create Task:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="status">Select the status:</label>
        <select
          name="status"
          id="status"
          onChange={handleStatus}
          value={status}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        {/*         <input
          type="text"
          name="status"
          id="status"
          value={status}
          
        /> */}

        <label htmlFor="importance">Importance:</label>
        <select
          name="importance"
          id="importance"
          onChange={handleImportance}
          value={importance}
        >
          <option value="highPriority">High Priority</option>
          <option value="important">Important</option>
          <option value="normal">Normal</option>
        </select>

        <label htmlFor="user">Date</label>
        <input
          type="text"
          name="user"
          id="importance"
          value={date}
          onChange={handleDate}
        />

        <button type="submit">Create task</button>
      </form>
    </section>
  );
}

export default AddTask;
