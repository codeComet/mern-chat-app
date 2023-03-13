import React, { useState } from "react";
import API from "../../api/api-config";
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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (signUpData.signUpPassword !== signUpData.signUpConfirmPassword) {
      toast.error("Password do not match", { style: errorStyles });
      return;
    } else {
      setLoading(true);
      try {
        const { data } = await API.post("/api/user/signup", {
          userName: signUpData.signUpUserName,
          email: signUpData.signUpUserEmail,
          password: signUpData.signUpPassword,
          confirmPassword: signUpData.signUpConfirmPassword,
          pic: signUpData.signUpUserImage,
        });
        toast.success("Signup Successful!!", { style: successStyles });
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/chats");
      } catch (error) {
        console.log(error);
        toast.error("something went wrong", { style: errorStyles });
      }
      setLoading(false);
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
      const formData = new FormData();
      formData.append("file", photo);
      formData.append("upload_preset", "chat-app");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/bishals-cloud/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setSignUpData({ ...signUpData, signUpUserImage: data.secure_url });
      toast.success("Image uploaded successfully!!", { style: successStyles });
      setLoading(false);
    } else {
      toast.error("Please upload an image", { style: errorStyles });
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
            required
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
