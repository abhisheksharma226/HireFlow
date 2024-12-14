import './App.css'

import Home from "./components/common/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import OutsourceInterviews from './OutsourceInterviews';
import Login from "./components/core/login/Login"; 
import Signup from './components/core/signup/Signup';
import LoginOpt from './components/core/LoginOpt/LoginOpt';
import Profile from "./components/core/User/Profile"
import TechRoles from "./components/core/User/TechRoles"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginOpt" element={<LoginOpt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userProfile" element={<Profile />} />
        <Route path="/techRoles" element={<TechRoles />} />

      </Routes>
    </Router>
  );
};

export default App
