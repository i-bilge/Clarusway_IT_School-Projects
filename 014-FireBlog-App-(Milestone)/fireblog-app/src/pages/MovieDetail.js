import { borderRadius } from "@mui/system";
import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export function MovieDetail() {

  const {state} = useLocation()
  console.log(state.contact.data.title)
  const { id } = useParams();

  return (
    <div className="container py-5" style={{backgroundColor: "rgba(255, 0, 0, 0.5)", borderRadius: "40px", textAlign: "center"}}>
      <h1>{id}</h1>
      <img
        src={state.contact.data.url}
        alt={state.contact.data.title}
      />
      <h4>{state.contact.data.explanation}</h4>
        <li className="list-group-item">
          <Link to={-1} className="card-link">
            Go Back
          </Link>
        </li>
    </div> 
  );
}
