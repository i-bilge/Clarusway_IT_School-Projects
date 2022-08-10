import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Register from "../pages/Register";
import AddNew from "../pages/AddNew";
import About from "../pages/About"

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;