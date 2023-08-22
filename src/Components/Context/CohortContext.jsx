import { useState, createContext, useEffect, useContext } from "react";
import UrlContext from "./UrlContext";

const CohortContext = createContext();

export const CohortProvider = ({ children }) => {
  const { url } = useContext(UrlContext);
  const [currentManagerContent, setCurrentManagerContent] = useState(true);

  /* ------------------  To Grab Students First and Last Name By Cohort ------------------- */
  const [cohort, setCohort] = useState(0); //Current displayed Cohort
  const [displayedStudents, setDisplayedStudents] = useState([]); //Current students displayed
  const [studentAverage, setStudentAverage] = useState([]);
  const [cohortFormOpen, setCohortFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(`${url}/manager/${cohort}/students`);
        const data = await result.json();
        setDisplayedStudents([...data]);
      } catch (err) {
        setDisplayedStudents([]);
        console.log(err.message);
      }
    };
    getData();
  }, [cohort]);

  /* ---------------------Everything from Cohort Table ------------------------- */
  const [cohortList, setCohortList] = useState([]);
  const getData = async () => {
    try {
      const result = await fetch(`${url}/manager/cohorts`);
      const data = await result.json();
      setCohortList([...data]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  /* ---------------------All Tasks with Cohortid------------------------- */
  const [cohortTaskList, setCohortTaskList] = useState([]);
  const [average, setAverage] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(`${url}/manager/tasks/all`);
        const data = await result.json();
        setCohortTaskList([...data]);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);
  /* ---------------------Create an Array of all totals/averages per cohort------------------------- */
  useEffect(() => {
    let tempArray = createTasksTotalArray(cohortTaskList);
    setAverage(tempArray);
    setStudentAverage(taskProgressAveragePerStudent(cohortTaskList));
  }, [cohortTaskList]);

  /* ---------------------Post Request for Adding a Cohort------------------------- */
  const postCohort = async (formData) => {
    try {
      const response = await fetch(`${url}/cohort`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setCohortList((prevCohortList) => [...prevCohortList, data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CohortContext.Provider
      value={{
        displayedStudents,
        setCohort,
        postCohort,
        cohortList,
        cohortTaskList,
        average,
        studentAverage,
        cohort,
        setCohortFormOpen,
        cohortFormOpen,
        currentManagerContent,
        setCurrentManagerContent,
        getData,
        isVisible,
        setIsVisible,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CohortContext.Provider>
  );
};

export default CohortContext;

//Generates a data object with aggregated information for each cohort
function createTasksTotalArray(tasks) {
  const cohorts = [];
  if (tasks) {
    tasks.forEach((task) => {
      const cohortIndex = cohorts.findIndex(
        (cohort) => cohort.cohortsid === task.cohortsid
      );
      const completed = checkBoolean(task.completed);
      if (cohortIndex !== -1) {
        cohorts[cohortIndex].totalComplete += completed;
        cohorts[cohortIndex].totalTask++;
        cohorts[cohortIndex].average =
          cohorts[cohortIndex].totalComplete / cohorts[cohortIndex].totalTask;
      } else {
        const newCohort = {
          cohortname: task.cohortname,
          cohortsid: task.cohortsid,
          totalComplete: completed,
          totalTask: 1,
          average: completed ? 1 : 0,
        };
        cohorts.push(newCohort);
      }
    });
  }
  return cohorts;
}

//Takes boolean and returns numbers
function checkBoolean(value) {
  return value ? 1 : 0;
}

function calculateStudentProgress(studentTasks) {
  let totalTasks = studentTasks.length;
  let completedTasks = studentTasks.filter((task) => task.completed).length;

  if (totalTasks === 0) {
    return 0;
  }

  return completedTasks / totalTasks;
}

function taskProgressAveragePerStudent(data) {
  const arr = [];

  data.forEach((student) => {
    const studentIndex = arr.findIndex(
      (individual) => individual.studentsid === student.studentsid
    );
    const completed = checkBoolean(student.completed);
    if (studentIndex !== -1) {
      arr[studentIndex].totalComplete += completed;
      arr[studentIndex].totalTask++;
      arr[studentIndex].average =
        arr[studentIndex].totalComplete / arr[studentIndex].totalTask;
    } else {
      const newstudent = {
        studentsid: student.studentsid,
        totalComplete: completed,
        totalTask: 1,
        average: completed ? 1 : 0,
        cohortsid: student.cohortsid,
        ets: student.ets,
        firstname: student.firstname,
        lastname: student.lastname,
      };
      arr.push(newstudent);
    }
  });
  return arr;
}
