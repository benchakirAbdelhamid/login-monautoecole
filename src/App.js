import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import SignUp from './pages/SignUp';
import Home from './pages/home';
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
    </Router>
  );
}

export default App;
