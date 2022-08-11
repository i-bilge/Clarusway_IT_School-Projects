import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const MovieCard = ({ contact, title, poster_path, overview, vote_average, id }) => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);


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
        src={contact.data.url}
        alt={contact.data.title}
      />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{contact.data.title}</h5>
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{contact.data.explanation}</p>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </div>
  );
};

export default MovieCard;