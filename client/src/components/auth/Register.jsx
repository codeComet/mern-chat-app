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
  FormLabel,
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
    signUpUserImage: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpData.signUpPassword !== signUpData.signUpConfirmPassword) {
      toast.error("Password do not match", { style: errorStyles });
    } else {
      toast.success("Signup Successful!!!!!", { style: successStyles });
      console.log(signUpData);
    }
  };

  const handleChangeSignUpData = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleImageUpload = async (photo) => {
    setLoading(true);
    if (photo === undefined) {
      toast.error("Please upload an image");
      return;
    } else if (photo.type === "image/jpeg" || photo.type === "image/png") {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "bishals-cloud");
      await fetch(
        "https://api.cloudinary.com/v1_1/bishals-cloud/image/upload",
        {
          method: "post",
          body: data,
          mode: "no-cors",
        }
      ).then((res) => console.log(res));
      // .then((data) => {
      //   console.log(data);
      //   setSignUpData({
      //     ...signUpData,
      //     signUpUserImage: data.url.toString(),
      //   });
      //   setLoading(false);
      // });
    } else {
      toast.error("Please upload an image");
      setLoading(false);
      return;
    }
  };
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
          <FormLabel sx={{ color: "#fff", my: 1 }}>Upload Photo</FormLabel>
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{ color: "#aaa" }}
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
        </Box>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
          type="submit"
          disabled={loading}
        >
          Sign up
        </Button>
      </form>
    </Box>
  );
};

export default Register;
