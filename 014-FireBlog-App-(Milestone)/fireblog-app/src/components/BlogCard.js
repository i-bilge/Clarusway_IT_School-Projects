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
  //-------------------------------------------------


  return (
    <Box p={3} component={Paper} elevation={3}>
      <Typography variant="h4">Contacts</Typography>

      <Box sx={{ height: 400 }}>
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