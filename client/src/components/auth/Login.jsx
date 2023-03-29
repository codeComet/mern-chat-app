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
} from "@mui/material";
import { GoEye, GoEyeClosed } from "react-icons/go";
import toast from "react-hot-toast";
import API from "../../api/api-config";
import { useNavigate } from "react-router-dom";

const errorStyles = {
  background: "#ce0000",
  color: "#fff",
};

const successStyles = {
  background: "#00a400",
  color: "#fff",
};

const Login = () => {
  const [signInData, setSignInData] = useState({
    signInUserEmail: "",
    signInPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChangeSignInData = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/api/user/signin", {
        email: signInData.signInUserEmail,
        password: signInData.signInPassword,
      });
      toast.success("Login Successful!!", { style: successStyles });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/chats");
    } catch (error) {
      toast.error(
        error?.response?.data?.message,

        {
          style: errorStyles,
        }
      );
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Box>
      <form onSubmit={handleSignIn}>
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          required
          name="signInUserEmail"
          value={signInData.signInUserEmail}
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
          <InputLabel htmlFor="signin-password" sx={{ color: "#a1a1a1" }}>
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
          disabled={loading}
        >
          Sign In
        </Button>
        <Button
          color="error"
          fullWidth
          variant="contained"
          type="submit"
          onClick={() =>
            setSignInData({
              signInUserEmail: "demo@user.com",
              signInPassword: "1234",
            })
          }
        >
          Sign In as a guest
        </Button>
      </form>
    </Box>
  );
};

export default Login;
