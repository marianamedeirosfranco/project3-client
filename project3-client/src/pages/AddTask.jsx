import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import projectService from "../services/project.service";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [importance, setImportance] = useState("");
  const [user, setUser] = useState("");
  const [comments, setComments] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleStatus = (e) => setDescription(e.target.value);
  const handleImportance = (e) => setImportance(e.target.value);
  const handleUser = (e) => setUser(e.target.value);
  const handleComments = (e) => setUser(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { title, description, status, importance, user, comments };
    try {
      await projectService.createProject({
        title,
        description,
        status,
        importance,
        user,
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
        <input
          type="text"
          name="status"
          id="status"
          value={status}
          onChange={handleStatus}
        />

<label htmlFor="importance">Importance</label>
        <input
          type="text"
          name="importance"
          id="importance"
          value={importance}
          onChange={handleImportance}
        />

<label htmlFor="user">User</label>
        <input
          type="text"
          name="user"
          id="importance"
          value={importance}
          onChange={handleImportance}
        />

        <button type="submit">Create project</button>
      </form>
    </section>
  );
}

export default AddProject;
