import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import AddNew from "../pages/AddNew";
import Login from "../pages/Login";
import Main from "../pages/Main";
import { Detail } from "../pages/Detail";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRouter = ({userInfo, setUserInfo, isEdit, setIsEdit, isLoading, setIsLoading}) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Detail userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="add" element={<AddNew userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
