import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import NoPage from "./pages/NoPage";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
        <Link to="/about" style={{color: "white", textDecoration: "none"}}>About</Link>
        <Link to="/details" style={{color: "white", textDecoration: "none"}}></Link>
        <Link to="/login" style={{color: "white", textDecoration: "none"}}>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
