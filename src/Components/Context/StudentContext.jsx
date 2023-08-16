import {useState, createContext, useEffect} from 'react'

const StudentContext = createContext()
export const StudentProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [activeTaskId, setActiveTaskId] = useState(null);
    const [studentId, setStudentId] = useState("1")
    const url = "http://localhost:8000" 

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`${url}/tasks/${studentId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                setTasks(null);
            }
        };
        fetchTasks();
    }, []);


    const handleCheckboxChange = async (taskId, currentCompletedStatus) => {
        try {
            const response = await fetch(`${url}/tasks/${taskId}/complete`, {
                method: 'PATCH'
            });
            if (!response.ok) throw new Error("Failed to update task completion status");
            
            setTasks(prevTasks => prevTasks.map(task => 
                task.tasksid === taskId 
                ? {...task, completed: !currentCompletedStatus} 
                : task
            ));
        } catch (error) {
            console.error("There was a problem updating the task completion status:", error);
        }
    };


    const toggleAccordion = (taskId) => {
        setActiveTaskId(prevId => prevId === taskId ? null : taskId);
    };

    return <StudentContext.Provider value={{
      handleCheckboxChange,
      toggleAccordion,
      tasks,
      activeTaskId,
      setStudentId,
      studentId
    }}>{children} </StudentContext.Provider>
}

export default StudentContext
