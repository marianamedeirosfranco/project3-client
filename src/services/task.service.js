import axios from "axios";

class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
    });

    //here we intercept every request that uses this api and call a middleware function
    this.api.interceptors.request.use((config) => {
      //inside this middleware function the first thing we do is get the token from the localstorage
      const storedToken = localStorage.getItem("authToken");

      //if there is a token we're going to add it to the headers of the request
      if (storedToken) {
        //here we pass to the headers an object with Authorization and the Bearer token
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  //Here we can create the methods to connect to the API

  //Get All Tasks
  getAllTasks = () => {
    return this.api.get("/api/tasks");
    //the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
  };

  //Create a task
  //body refers to the object with title and description
  createTask = (body) => {
    return this.api.post("/api/tasks", body);
  };
  getSingleTask = (id) => {
    return this.api.get(`/api/tasks/${id}`);
  };

  //getbyId / details

  getSingleTask = (id) => {
    return this.api.get(`api/tasks/${id}`);
  };
  //update
  updateTask = (id) => {
    return this.api.get(`api/tasks/${id}`);
  };

  //delete
}

const taskService = new TaskService();

export default taskService;
