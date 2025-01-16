import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit} style={{backgroundColor:'#adb5bd'}}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
       
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
