import React from 'react'
import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import BlogForm from '../components/BlogForm'
import BlogCard from '../components/BlogCard';

const AddNew = () => {
  const [userInfo, setUserInfo] = useState({
    title: "",
    url: "",
    explanation: "",
  });
  const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

  return (
    <Grid
        container
        sx={{
          width: "80%",
          margin: "auto",
          height: "100%",
          alignItems: "center",
        }}
        spacing={3}
      >
        <Grid item xs={5} sx={{ justifyContent: "center" }}>
          <BlogForm userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </Grid>
        <Grid item xs={7} sx={{ justifyContent: "center" }}>
          <BlogCard setUserInfo={setUserInfo} setIsEdit={setIsEdit} isLoading={isLoading}/>
        </Grid>
      </Grid>
  )
}

export default AddNew