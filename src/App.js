import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from './screens/SignUp';
import Login from './screens/Login';
import TaskManager from './screens/TaskManager';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login"  element={<Login/>}/>
          <Route exact path="/SignUp" element={<Signup />}/>
          <Route exact path="/TaskManager" element={<TaskManager/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
