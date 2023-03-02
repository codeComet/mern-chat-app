import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Button,
  Input,
} from "@mui/material";
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

const Register = () => {
  const [signUpData, setSignUpData] = useState({
    signUpUserName: "",
    signUpUserEmail: "",
    signUpPassword: "",
    signUpConfirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpData.signUpPassword !== signUpData.signUpConfirmPassword) {
      toast.error("Password do not match", { style: errorStyles });
    } else {
      toast.success("Signup Successful!!!!!", { style: successStyles });
    }
  };
  const handleChangeSignUpData = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
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
          <InputLabel htmlFor="sign-up-password" sx={{ color: "#a1a1a1" }}>
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
        <Box sx={{ mt: 2 }}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
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
  );
};

export default Register;