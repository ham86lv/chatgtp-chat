import React from "react";
import { Input, Button } from "antd";
import { MessageInputProps } from "../interfaces";

const styleSendButton = { marginTop: 10, width: "100%" };

const FooterForm: React.FC<MessageInputProps> = React.memo(
  ({ loading, message, setMessage, handleSendMessage }) => {
    return (
      <>
        <Input.TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPressEnter={message.trim() ? handleSendMessage : undefined}
          placeholder="Write your question..."
          disabled={loading}
        />
        <Button
          type="primary"
          loading={loading}
          onClick={handleSendMessage}
          disabled={loading || !message.trim()}
          style={styleSendButton}
        >
          Send
        </Button>
      </>
    );
  }
);

export default FooterForm;
