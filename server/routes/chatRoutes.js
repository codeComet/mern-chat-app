import express from "express";
import {
  allChats,
  fetchSingleChat,
  createGroupChat,
  renameGroupChat,
  leaveGroupChat,
  addToGroupChat,
} from "../controller/chat.js";
import authrorized from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authrorized, allChats);
router.get("/getchat", authrorized, fetchSingleChat);
router.post("/creategroup", authrorized, createGroupChat);
router.put("/renamegroup", authrorized, renameGroupChat);
router.put("/leavegroup", authrorized, leaveGroupChat);
router.put("/addgroup", authrorized, addToGroupChat);

export default router;
