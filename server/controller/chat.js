import User from "../models/userModel.js";
import Chat from "../models/chatModel.js";

export const allChats = async (req, res) => {};

export const fetchSingleChat = async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    console.log("user id was not provided");
    return res.status(404).json({ message: "user id was not provided" });
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      isGroupChat: false,
      chatName: "sender",
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullChat);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
export const createGroupChat = async (req, res) => {};
export const renameGroupChat = async (req, res) => {};
export const addToGroupChat = async (req, res) => {};
export const leaveGroupChat = async (req, res) => {};
