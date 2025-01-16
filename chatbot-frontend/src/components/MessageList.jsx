import React from 'react';
import './MessageList.css'; 

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender === currentUser ? 'message-right' : 'message-left'
          }`}
        >
          <div className="message-box">
            <div className="message-content">{message.content}</div>
            <div className="message-meta">
              <span>{message.sender}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
