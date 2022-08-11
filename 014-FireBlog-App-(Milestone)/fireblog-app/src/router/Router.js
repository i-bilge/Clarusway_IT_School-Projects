import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import AddNew from "../pages/AddNew";
import Login from "../pages/Login";
import Main from "../pages/Main";
import { Detail } from "../pages/Detail";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="add" element={<AddNew />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
