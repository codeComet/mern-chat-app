const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes.js");

var bodyParser = require("body-parser");

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

app.listen(PORT, console.log(`server running on port ${PORT}`));
