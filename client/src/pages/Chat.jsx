import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api/api-config";

const Chat = () => {
  const [chatData, setChatData] = useState([]);

  const fetchChatData = async () => {
    const { data } = await API.get("/api/chats");
    setChatData(data);
  };

  useEffect(() => {
    fetchChatData();
  }, []);
  return (
    <div>
      {chatData.map((c) => (
        <p key={c._id}>{c.chatName}</p>
      ))}
    </div>
  );
};

export default Chat;
