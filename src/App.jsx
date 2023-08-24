import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { StudentProvider } from "./Components/Context/StudentContext";
import LogInPage from "./Components/MainComponents/LogInPage";
import Manager from "./Components/MainComponents/Manager";
import Student from "./Components/MainComponents/Student";  
import StudentInManager from "./Components/AfterLogin/ManagerViewOnly/StudentInManager";

function App() {
  
  return (
    <StudentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route
            path="/manager"
            element={<Manager /> }
          />
          <Route
            path="/student/:studentIdentification"
            element={<Student /> }
          />
          <Route
            path="/manager/:studentIdentification"
            element={<StudentInManager />}
          />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
