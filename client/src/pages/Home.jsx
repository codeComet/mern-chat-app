import React, { useState } from "react";
import { Container, Typography, Box, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const Home = () => {
  const [value, setValue] = useState("2");
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 4 }}>
        <Typography variant="h3" align="center">
          Welcome
        </Typography>
      </Box>
      <Box className={classes.parent}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Login"
                value="1"
                style={{ color: "#fff", width: "50%" }}
              />
              <Tab
                label="Register"
                value="2"
                style={{ color: "#fff", width: "50%" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Login />
          </TabPanel>
          <TabPanel value="2">
            <Register />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Home;

const useStyles = makeStyles({
  parent: {
    width: "30%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});
