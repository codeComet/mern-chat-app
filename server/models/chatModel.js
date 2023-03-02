const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [{ type: mongoose.Schema.Types.ObjectID, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
