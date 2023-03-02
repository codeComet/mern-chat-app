const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

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

app.listen(PORT, console.log(`server running on port ${PORT}`));
