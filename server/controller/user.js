import User from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { email, userName, password, confirmPassword, picture } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists!" });
      return;
    }
    if (password !== confirmPassword) {
      res.status(400).json({ message: "Passwords do not match!" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: userName,
      pic: picture,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "chat-app",
      { expiresIn: "1hr" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.log(error);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (!userExists) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists.password
    );

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Invalid credentials!" });
      return;
    }

    const token = jwt.sign(
      { email: userExists.email, id: userExists._id },
      "chat-app",
      { expiresIn: "1hr" }
    );

    res.status(200).json({ result: userExists, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.log(error);
  }
};
