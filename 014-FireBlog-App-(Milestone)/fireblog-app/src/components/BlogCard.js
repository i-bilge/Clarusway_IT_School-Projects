import { Typography, Box, IconButton, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//-------------------------------------------------
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../auth/firebase";
import { deleteContact } from "../auth/operations";


const BlogCard = (props) => {
  const { setUserInfo, setIsEdit, isLoading } = props;
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
  //------------------------------------------------
  const columns = [
    { field: "title", headerName: "Title", flex: 0.3 },
    { field: "url", headerName: "URL", flex: 0.3 },
    { field: "explanation", headerName: "Explanation", flex: 0.9 },
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
  //-------------------------------------------------


  return (
    
    <Box p={3} component={Paper} elevation={3}>
      <Typography variant="h4">Contents</Typography>

      <Box sx={{ height: 400 }}>
      {console.log(contacts)}
      {contacts.map((contact) => {
        return(
          <div key={contact.id}>
            <img src={contact.url} alt={contact.title} />
            <h3>{contact.title}</h3>

          </div>
        )
      })}
        <DataGrid
          columns={columns}
          rows={contacts.map((contact) => ({
            id: contact.id,
            ...contact.data,
          }))}
          loading={isLoading}
          hideFooterPagination={isLoading}
          onCellClick={async (params) => {
            if (params.field === "edit_column") {
              setIsEdit(true);
              setUserInfo(params.row);
            } else if (params.field === "delete_column") {
              deleteContact(params.row.id);
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default BlogCard