import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";

const errorStyles = {
  background: "#ce0000",
  color: "#fff",
};

const successStyles = {
  background: "#00a400",
  color: "#fff",
};

const Home = () => {
  const [value, setValue] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const emailList = [];
  const [signInData, setSignInData] = useState({
    signInUserName: "",
    signInPassword: "",
  });
  const [signUpData, setSignUpData] = useState({
    signUpUserName: "",
    signUpUserEmail: "",
    signUpPassword: "",
    signUpConfirmPassword: "",
  });

  const handleChangeSignInData = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };
  const handleChangeSignUpData = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [error, setError] = useState({
    passwordMatched: null,
    emailExists: false,
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(signInData);
    toast.success("Sign in successful!", {
      style: successStyles,
    });
    setSignInData({
      signInUserName: "",
      signInPassword: "",
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (emailList.includes(signUpData.signUpUserEmail)) {
      toast.error("Email address already taken");
    } else if (signUpData.signUpPassword !== signUpData.signUpConfirmPassword) {
      toast.error("Password do not match");
    } else {
      toast.success("Signup Successful!!!!!");
      emailList.push(signUpData.signUpUserEmail);
      setSignUpData({
        signUpUserName: "",
        signUpUserEmail: "",
        signUpPassword: "",
        signUpConfirmPassword: "",
      });
    }
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
              <form onSubmit={handleSignIn}>
                <TextField
                  variant="outlined"
                  label="User name or Email"
                  fullWidth
                  required
                  name="signInUserName"
                  value={signInData.signInUserName}
                  onChange={handleChangeSignInData}
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
                    name="signInPassword"
                    value={signInData.signInPassword}
                    onChange={handleChangeSignInData}
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
              <form onSubmit={handleSignUp}>
                <TextField
                  variant="outlined"
                  label="User name"
                  fullWidth
                  required
                  name="signUpUserName"
                  value={signUpData.signUpUserName}
                  onChange={handleChangeSignUpData}
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
                  name="signUpUserEmail"
                  value={signUpData.signUpUserEmail}
                  onChange={handleChangeSignUpData}
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
                    name="signUpPassword"
                    value={signUpData.signUpPassword}
                    onChange={handleChangeSignUpData}
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
                    name="signUpConfirmPassword"
                    value={signUpData.signUpConfirmPassword}
                    onChange={handleChangeSignUpData}
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
  error: {
    borderRadius: "10px",
    background: "#ce0000",
    color: "#fff",
  },
  success: {
    background: "#00a400",
    color: "#fff",
  },
});
