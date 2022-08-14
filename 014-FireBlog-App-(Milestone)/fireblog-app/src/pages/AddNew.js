import React from 'react'
import { useState } from "react";
import { Grid } from "@mui/material";
import BlogForm from '../components/BlogForm'

const AddNew = ({userInfo, setUserInfo, isEdit, setIsEdit, isLoading, setIsLoading}) => {
  // const [userInfo, setUserInfo] = useState({
  //   title: "",
  //   url: "",
  //   explanation: "",
  // });
  // const [isEdit, setIsEdit] = useState(false)
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <Grid
        sx={{
          width: "80%",
          margin: "auto",
          height: "100%",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Grid item xs={5} sx={{ justifyContent: "center" }}>
          <BlogForm userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </Grid>
      </Grid>
  )
}

export default AddNew