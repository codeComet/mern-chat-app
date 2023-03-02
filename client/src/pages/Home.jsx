import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Tab,
  TextField,
  FormControl,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Home = () => {
  const [value, setValue] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const classes = useStyles();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            <Box>
              <form>
                <TextField
                  variant="outlined"
                  label="User name or Email"
                  fullWidth
                  required
                  inputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#a1a1a1" }, //styles the label
                    "&:hover > .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#3f51b5" },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#6a6a6a" },
                    },
                  }}
                />
                <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
                  <InputLabel
                    htmlFor="signin-password"
                    sx={{ color: "#a1a1a1" }}
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="signin-password"
                    required
                    type={showPassword ? "text" : "password"}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6a6a6a",
                      },
                      "&:hover > .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3f51b5",
                      },
                    }}
                    inputProps={{ style: { color: "#fff", width: "100%" } }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <GoEyeClosed style={{ color: "#bababa" }} />
                          ) : (
                            <GoEye style={{ color: "#bababa" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  color="primary"
                  fullWidth
                  variant="contained"
                  sx={{ my: 2 }}
                  type="submit"
                >
                  Sign In
                </Button>
              </form>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box>
              <form>
                <TextField
                  variant="outlined"
                  label="User name"
                  fullWidth
                  required
                  inputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#a1a1a1" }, //styles the label
                    "&:hover > .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#3f51b5" },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#6a6a6a" },
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Email Address"
                  fullWidth
                  required
                  type="email"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#a1a1a1" }, //styles the label
                    "&:hover > .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#3f51b5" },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#6a6a6a" },
                    },
                    mt: 2,
                  }}
                />
                <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
                  <InputLabel
                    htmlFor="sign-up-password"
                    sx={{ color: "#a1a1a1" }}
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="sign-up-password"
                    type={showPassword ? "text" : "password"}
                    required
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6a6a6a",
                      },
                      "&:hover > .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3f51b5",
                      },
                    }}
                    inputProps={{ style: { color: "#fff", width: "100%" } }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <GoEyeClosed style={{ color: "#bababa" }} />
                          ) : (
                            <GoEye style={{ color: "#bababa" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
                  <InputLabel
                    htmlFor="signup-confirm-password"
                    sx={{ color: "#a1a1a1", backgroundColor: "#00001b", pr: 1 }}
                  >
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="signup-confirm-password"
                    type={showPassword ? "text" : "password"}
                    required
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6a6a6a",
                      },
                      "&:hover > .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3f51b5",
                      },
                    }}
                    inputProps={{ style: { color: "#fff", width: "100%" } }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <GoEyeClosed style={{ color: "#bababa" }} />
                          ) : (
                            <GoEye style={{ color: "#bababa" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  color="primary"
                  fullWidth
                  variant="contained"
                  sx={{ my: 2 }}
                  type="submit"
                >
                  Sign up
                </Button>
              </form>
            </Box>
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
