import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chatData, setChatData] = useState([]);

  const fetchChatData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chats");
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
