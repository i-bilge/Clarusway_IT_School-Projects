import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
//---
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../auth/firebase";
import { Typography, Box, IconButton, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteContact } from "../auth/operations";
import { async } from "@firebase/util";
import { AuthContext } from "../context/AuthContext";

export function MovieDetail({ setUserInfo, setIsEdit, isLoading}) {

  const { currentUser } = useContext(AuthContext);
  const {state} = useLocation()
  console.log(state.contact.data.title)
  const { id } = useParams();

  const clickHandler = async (e) => {
      if (e.name === "edit_column") {
        setIsEdit(true);
        setUserInfo(e.state);
      } else if (e.name === "delete_column") {
        deleteContact(e.state.id);
      }
    }

//-------------------------------------------------------------------------------
  return (
    <div className="container py-5" style={{backgroundColor: "rgba(255, 0, 0, 0.5)", borderRadius: "40px", textAlign: "center"}}>
      <h1>{id}</h1>
      <img
        src={state.contact.data.url}
        alt={state.contact.data.title}
      />
      <h4>{state.contact.data.explanation}</h4>
      <>
      {currentUser ? (
        <>
        <button style={{borderRadius:"50%"}} name="edit_column" className="editBtn" onClick={clickHandler}>Edit<br/>
        <EditIcon />
      </button>  
      <button style={{borderRadius:"50%"}} name="delete_column" className="deleteBtn" onClick={clickHandler}>Delete<br/>
        <DeleteIcon />
      </button>  
        </>
            ) : (
              ""
            )}
      </>
      

      <li className="list-group-item">
        <Link to={-1} className="card-link">
          Go Back
        </Link>
      </li>
    </div> 
  );
}
