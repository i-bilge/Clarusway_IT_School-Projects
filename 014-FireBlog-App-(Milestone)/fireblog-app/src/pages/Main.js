import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { AuthContext } from "../context/AuthContext";
import { API_KEY } from "../auth/ApiKey";
import { db } from "../auth/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

// const API_KEY = HERE I AM IMPORTING MY KEY FROM ANOTHER FILE. AND I AM NOT SHARING IT. <OU HAVE TO USE YOUR KEY.
// const API_KEY = process.env.REACT_APP_TMDB_KEY;
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = ({ setUserInfo, setIsEdit, isLoading }) => {
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const { currentUser } = useContext(AuthContext);

  // const { setUserInfo, setIsEdit, isLoading } = props;
  const [contacts, setContacts] = useState([]);
//-----------------------------------------------------
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
  // useEffect(() => {
  //   getMovies(FEATURED_API);
  // }, []);

  // const getMovies = (API) => {
  //   axios
  //     .get(API)
  //     .then((res) => setMovies(res.data.results))
  //     .catch((err) => console.log(err));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchTerm && currentUser) {
  //     getMovies(SEARCH_API + searchTerm);
  //   } else if (!currentUser) {
  //     alert("Please log in to search a movie...");
  //   } else {
  //     alert("Please enter text...");
  //   }
  //   setSearchTerm("");
  // };

  return (
    <>
      {/* <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
{      console.log(contacts)
}      <div className="d-flex justify-content-center flex-wrap ">
        {contacts.map((contact) => (
          <PostCard contact={contact} key={contact.id} {...contact} setIsEdit={setIsEdit} setUserInfo={setUserInfo}/>
        ))}
      </div>
    </>
  );
};

export default Main;
