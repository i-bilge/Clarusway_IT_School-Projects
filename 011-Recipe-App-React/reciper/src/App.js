import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import NoPage from "./pages/NoPage";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" style={{color: "black", textDecoration: "none"}}>Home</Link>
        <Link to="/about" style={{color: "black", textDecoration: "none"}}>About</Link>
        <Link to="/details" style={{color: "black", textDecoration: "none"}}>Details</Link>
        <Link to="/login" style={{color: "black", textDecoration: "none"}}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
