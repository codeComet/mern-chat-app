import express from "express";
import chats from "./data/data.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from "./middlewares/errorHandler.js";

// parse various different custom JSON types as JSON

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json());

connectDB();

const PORT = process.env.PORT || 8000;

app.get("/", function (req, res) {
  res.send("sup, it works");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((chatId) => chatId._id === req.params.id);
  res.send(singleChat);
});

app.use("/api/user", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, console.log(`server running on port ${PORT}`));
