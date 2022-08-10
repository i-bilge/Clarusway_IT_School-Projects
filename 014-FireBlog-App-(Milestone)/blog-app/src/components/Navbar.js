import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <nav>
        <div className="navbar">
          <Link to={"/"} className="navbar-brand">
            <h4>Ismail`s Blog</h4>
          </Link>
          <div className="buttons">
            {currentUser ? (
              <h5>
                {currentUser?.displayName}
              </h5>
            ) : (
              <button
                type="button"
                className="loginBtn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
            {currentUser ? (
              <button
                type="button"
                className="logoutBtn"
                onClick={() => logOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="registerBtn"
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
