import React from "react";
import { List } from "antd";
import { ListItemProps } from "../interfaces";

const bgColorBot = "#e0e0e0";
const bgColorUser = "#d1e7ff";

const styleListItem = { display: "flex", padding: "10px" };
const styleMessage = {
  padding: "10px",
  borderRadius: 8,
  maxWidth: "80%",
};

const ListItem: React.FC<ListItemProps> = React.memo(({ item }) => {
  return (
    <List.Item
      style={{
        ...styleListItem,
        justifyContent: item.sender === "user" ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          ...styleMessage,
          backgroundColor: item.sender === "user" ? bgColorUser : bgColorBot,
        }}
      >
        {typeof item.text === "object" ? JSON.stringify(item.text) : item.text}
      </div>
    </List.Item>
  );
});

export default ListItem;
