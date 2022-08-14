import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { deleteContact } from "../auth/operations";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { collection, onSnapshot, query } from "firebase/firestore";
import { auth, db } from "../auth/firebase";

const PostCard = ({ setUserInfo, setIsEdit, isLoading, contact, title, poster_path, overview, vote_average, id }) => {

  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unSub = onSnapshot(
      query(collection(db, "contacts")),
      (querySnapshot) => {
        const userInfoArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setContacts(userInfoArray);
      }
    );

    return () => {
      unSub();
    };
  }, []);

  const columns = [
    { field: "name", headerName: "Name", flex: 0.3 },
    { field: "phone", headerName: "Phone", flex: 0.3 },
    { field: "gender", headerName: "Gender", flex: 0.3 },
    {
      field: "edit_column",
      headerName: "Edit",
      flex: 0.3,
      renderCell: () => {
        return (
          <IconButton>
            <EditIcon />
          </IconButton>
        );
      },
    },
    {
      field: "delete_column",
      headerName: "Delete",
      flex: 0.3,
      renderCell: () => {
        return (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

//-----------------------------------------------------------------------------
  return (
    <div
      className="movie"
      onClick={() =>
        // currentUser?
          navigate("details/" + contact.id, {state: {contact}})
          // : alert("Please log in to see details...")
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
        <h2>Content</h2>
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
      <p
      style={{fontSize:"15px", fontStyle:"italic"}}
      >Created By: {contact.data.creator}</p>
    </div>
  );
};
console.log("userInfo: ", auth.currentUser);

export default PostCard;