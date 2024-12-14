import './App.css'

import Home from "./components/common/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import OutsourceInterviews from './OutsourceInterviews';
import Login from "./components/core/login/Login"; 
import Signup from './components/core/signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App
