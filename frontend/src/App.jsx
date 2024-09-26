import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/login/SignIn";
import Register from "./components/register/Register";
import Home from "./components/dashboard/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <div className="home-container">
        <nav className="navbar">
          <div className="logo-link-container">
          <Link to="/signin" className="logo-link">
            <div className="logo">PRODIGY_FS_01</div>
          </Link>
          </div>
          {/* <div className="navbar-buttons">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <button className="dashboard">Dashboard</button>
              </Link>
            ) : (
              <>
                <Link to="/signin">
                  <button className="signin">Sign In</button>
                </Link>
                <Link to="/register">
                  <button className="register">Register</button>
                </Link>
              </>
            )}
          </div> */}

          {isAuthenticated && (
            <button className="logout" onClick={handleLogout}> Logout</button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : (
              <div className="main-screen">
                <Link to="/signin">
                  <button className="signin">Sign In</button>
                </Link>
                <Link to="/register">
                  <button className="register">Register</button>
                </Link>
              </div>
            )
          } />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
