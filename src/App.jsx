import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from "react-router-dom";
import { StudentProvider } from "./Components/Context/StudentContext";
import LogInPage from "./Components/MainComponents/LogInPage";
import Manager from "./Components/MainComponents/Manager";
import Student from "./Components/MainComponents/Student";  
import StudentInManager from "./Components/AfterLogin/ManagerViewOnly/StudentInManager";


function App() {
  const isAuthenticated = true; // not used
  const isManager = true; //not used 
  const isStudent = true; //not used 
  const { id } = useParams()
  return (
    <StudentProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LogInPage />}></Route>
              <Route
                path="/manager"
                element={
                  isAuthenticated && isManager ? <Manager /> : <LogInPage />
                }
              ></Route>
              <Route
                path="/student/:studentIdentification"
                element={
                  isAuthenticated && isStudent ? <Student /> : <LogInPage />
                }
              ></Route>
              <Route
                path="manager/:studentIdentification"
                element={
                   <StudentInManager />
                }
              ></Route>
            </Routes>
          </Router>
    </StudentProvider>


  );
}

export default App;
