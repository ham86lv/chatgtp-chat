import React, { useState, useEffect, useRef } from "react";
import { List } from "antd";
import { FooterForm, ListItem } from "../components";
import { Message } from "../interfaces";
import { fetchMockChatGPTResponse } from "../api/chat";
import "./App.css";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage: Message = { text: message, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoading(true);
    setMessage("");

    try {
      const response = await fetchMockChatGPTResponse(message);
      const { reply } = response.data;
      const botMessage: Message = { text: reply, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const botErrorMessage: Message = {
        text: "An error occurred. Please try again.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botErrorMessage]);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <List
        bordered
        dataSource={messages}
        renderItem={(item) => <ListItem item={item} />}
        locale={{ emptyText: "How can I help?" }}
        footer={
          <FooterForm
            loading={loading}
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
          />
        }
      />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default App;
