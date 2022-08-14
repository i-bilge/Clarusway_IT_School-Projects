import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
//---
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../auth/firebase";
import { Typography, Box, IconButton, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteContact, updateContact } from "../auth/operations";
import { async } from "@firebase/util";
import { AuthContext } from "../context/AuthContext";

export function Detail({ setUserInfo, setIsEdit, isLoading}) {

  const { currentUser } = useContext(AuthContext);
  const {state} = useLocation()
  console.log(state.contact.data.title)
  const { id } = useParams();
  const navigate = useNavigate();

  const clickHandler = async (e) => {
      if (e.target.name === "edit_column") {
        console.log(e.target.name)
        setIsEdit(true);
        setUserInfo("editted");
      } else if (e.target.name === "delete_column") {
        console.log(e.target.name, id)
        deleteContact(id);
        navigate("/");
      }
    }

//-------------------------------------------------------------------------------
  return (
    <div className="container py-5" style={{backgroundColor: "rgba(255, 0, 0, 0.5)", borderRadius: "40px", textAlign: "center", width:"400px", marginTop:"5%"}}>
      <h1>{state.contact.data.title}</h1>
        <img
        style={{width:"350px", height:"500px", borderRadius:"10px"}}
            src={state.contact.data.url}
            alt={state.contact.data.title}
          />
      <h4>{state.contact.data.explanation}</h4>
      <>
          {currentUser && (currentUser.displayName === state.contact.data.creator) ? (
          <>
            <button style={{borderRadius:"50%", width:"60px"}} name="edit_column" className="editBtn" onClick={clickHandler}>Edit
            </button>  
            <button style={{borderRadius:"50%", width:"60px"}} name="delete_column" className="deleteBtn" onClick={clickHandler}>Delete</button>  
          </>
          ) : (
            ""
          )}
      </>
      <p style={{margin:"5px"}}>
        <Link to={-1} className="card-link">
          Go Back
        </Link>
      </p>
    </div> 
  );
}
