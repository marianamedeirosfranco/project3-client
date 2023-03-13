import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./components/Private";
import AddTask from "../src/pages/AddTask";
import EditTask from "../src/pages/EditTask";
import Homepage from "../src/pages/Homepage";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tasks"
          element={
            <Private>
              <AddTask />
              <EditTask />
            </Private>
          }
        />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/tasks/new" element={<AddTask />} />
        <Route path="/tasks/edit/:id" element={<EditTask />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
