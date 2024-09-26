import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./components/login/SignIn";
import Register from "./components/register/Register";
import Home from "./components/dashboard/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="home-container">
        <nav className="navbar">
          <Link to="/signin" className="logo-link">
            <div className="logo">PRODIGY_FS_01</div>
          </Link>
          <div className="navbar-buttons">
            <Link to="/signin">
              <button className="signin">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="register">Register</button>
            </Link>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="Dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
