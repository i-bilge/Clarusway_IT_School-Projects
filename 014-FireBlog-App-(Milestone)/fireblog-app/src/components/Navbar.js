import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";
import AddNew from "../pages/AddNew";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // const currentUser = { displayName: "felix franko" };
  // const currentUser = false;
  // console.log(currentUser);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>Fireblog App</h4>
          </Link>
          <div className="buttons text-white align-items-center">
            {currentUser ? (
              <button className="mb-0 text-capitalize"
              onClick={() =>
                  navigate("profile/")
              }
              >
              {currentUser?.displayName}
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
            {currentUser ? (
              <>
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => logOut()}
              >
                Logout
              </button>

              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/add")}
              >
                Add New
              </button>
              </>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
