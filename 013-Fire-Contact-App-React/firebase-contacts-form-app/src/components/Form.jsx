import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  InputAdornment,
  Button,
  Skeleton,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import { updateContact, createContact } from "../util/operations";

export const Form = (props) => {
  const { userInfo, setUserInfo, isEdit, setIsEdit, isLoading, setIsLoading } =
    props;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      isEdit ? await updateContact(userInfo) : await createContact(userInfo);
    } catch (error) {
      console.log("Contact creation error: ", error);
    }
    setUserInfo({ name: "", phone: "", gender: "" });
    setIsEdit(false);
    setIsLoading(false);
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
              label="Name"
              required
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              value={userInfo.name}
              onChange={(event) => handleChange("name", event.target.value)}
            />
            <TextField
              label="Phone Number"
              required
              variant="outlined"
              type="number"
              value={userInfo.phone}
              onChange={(event) => handleChange("phone", event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                required
                value={userInfo.gender}
                label="Gender"
                // onChange={handleChange}
                onChange={(event) => handleChange("gender", event.target.value)}
              >
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"nfts"}>Not Prefer To Say</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="outlined">
              {isEdit ? "Edit" : "Add"}
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
