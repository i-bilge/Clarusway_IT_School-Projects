import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  // console.log(props);
  // const { title, poster_path, overview, vote_average, id } = props;
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div
      className="movie"
      // make onclick later
      onClick={() =>
        currentUser
          ? navigate("details/" + id)
          : alert("Please log in to see details...")
      }
    >
      <img
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt={title}
      />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{title}</h5>
        {/* check for current user later */}
        {currentUser ? (
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        ) : null}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;