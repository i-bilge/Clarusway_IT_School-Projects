import {
  Box,
  TextField,
  Stack,
  InputAdornment,
  Button,
  Skeleton,
  Paper,
} from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';
import LinkIcon from '@mui/icons-material/Link';
import NotesIcon from '@mui/icons-material/Notes';//--------------------------------------------------
import React from 'react'
import { updateContact, createContact } from '../auth/operations'
import { useNavigate } from "react-router-dom";

const BlogForm = ({ userInfo, setUserInfo, isEdit, setIsEdit, isLoading, setIsLoading }) => {

  const navigate = useNavigate();
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      isEdit ? await updateContact(userInfo) : await createContact(userInfo);
    } catch (error) {
      console.log("Contact creation error: ", error);
    }
    setUserInfo({ title: "", url: "", explanation:"" });
    setIsEdit(false);
    setIsLoading(false);
    navigate("/");
  };

  const handleChange = (inputType, value) => {
    setUserInfo((prev) => {
      return { ...prev, [inputType]: value };
    });
  };
  return (
    <>
      <Box component={Paper} elevation={3}>
        <Box component="form" sx={{ p: 4 }} onSubmit={onSubmit}>
          {isLoading && <Skeleton />}
          <Stack spacing={3}>
            <TextField
              label="Title"
              required
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AbcIcon />
                  </InputAdornment>
                ),
              }}
              value={userInfo.title}
              onChange={(event) => handleChange("title", event.target.value)}
            />
            <TextField
              label="Image URL"
              required
              variant="outlined"
              value={userInfo.url}
              onChange={(event) => handleChange("url", event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Explanation"
              required
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NotesIcon />
                  </InputAdornment>
                ),
              }}
              value={userInfo.explanation}
              onChange={(event) => handleChange("explanation", event.target.value)}
            />
            <Button type="submit" variant="outlined"
            >
              {isEdit ? "Edit" : "Add"}
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default BlogForm