export interface Message {
  text: string | object;
  sender: "user" | "bot";
}

export interface ListItemProps {
  item: Message;
  styleListItem?: React.CSSProperties;
  onClick?: () => void;
}

export interface MessageInputProps {
  loading: boolean;
  message: string;
  setMessage: (value: string) => void;
  handleSendMessage: () => void;
}

export interface ChatGPTResponse {
  reply: string;
}
