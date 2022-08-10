import "./App.css";
import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { Form } from "./components/Form";
import { Contacts } from "./components/Contacts";

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    gender: "",
  });
  const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
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
          <Form userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </Grid>
        <Grid item xs={7} sx={{ justifyContent: "center" }}>
          <Contacts setUserInfo={setUserInfo} setIsEdit={setIsEdit} isLoading={isLoading}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
