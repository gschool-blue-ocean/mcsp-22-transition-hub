import { useState, createContext, useEffect, useContext } from "react";
import UrlContext from "./UrlContext";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const { url } = useContext(UrlContext);
  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    dueDate: "",
    apptDate: "",
  });

  const grabStudentId = async (url, username) => {
    try {
      const response = await fetch(`${url}/user/${username}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data[0]) {
        setStudentId(data[0].studentsid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      if (studentId) {
        try {
          const response = await fetch(`${url}/tasks/${studentId}`);
          if (!response.ok) throw new Error("Network response was not ok");
          const data = await response.json();
          setTasks(data);
        } catch (error) {
          console.log(error); //Setting tasks here will cause en error code
        }
      } else {
        console.log(`No student id, current: ${studentId}`);
      }
    };
    fetchTasks();
  }, [studentId]);

  const handleChange = (name, value) => {
    if ((name === "dueDate" || name === "apptDate") && value) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      if (!datePattern.test(value)) {
        alert("The date fields need to be in YYYY-MM-DD format");
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit called");
    e.preventDefault();

    const newTask = {
      studentsId: studentId,
      ...formData,
      completed: false,
    };
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        alert("Task added successfully");
        const data = await response.json();
        setTasks((prevTasks) => [...prevTasks, data]);
        setAddTaskVisible(false);
        setFormData({
          taskName: "",
          taskDescription: "",
          dueDate: "",
          apptDate: "",
        });
      } else {
        const data = await response.json();
        alert("Failed to add task: " + data.message);
      }
    } catch (err) {
      alert("Failed to add task");
      console.error(err);
    }
  };

  const handleCheckboxChange = async (taskId, newCompletedStatus) => {
    try {
      const response = await fetch(`${url}/tasks/${taskId}/complete`, {
        method: "PATCH",
      });
      if (!response.ok)
        throw new Error("Failed to update task completion status");

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.tasksid === taskId
            ? { ...task, completed: newCompletedStatus }
            : task
        )
      );
    } catch (error) {
      console.error(
        "There was a problem updating the task completion status:",
        error
      );
    }
  };

  const toggleAccordion = (taskId) => {
    setActiveTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  return (
    <StudentContext.Provider
      value={{
        handleCheckboxChange,
        toggleAccordion,
        tasks,
        activeTaskId,
        setStudentId,
        studentId,
        formData,
        handleChange,
        handleSubmit,
        grabStudentId,
        addTaskVisible,
        setAddTaskVisible,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
