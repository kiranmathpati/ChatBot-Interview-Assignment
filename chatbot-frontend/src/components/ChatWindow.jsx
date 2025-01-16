import React from "react";
import "./ChatWindow.css";

function ChatWindow({ user, messages, onSendMessage, query, onQueryChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.message.value;
    if (content.trim()) {
      const recipient = user === "user1" ? "user2" : "user1";
      onSendMessage(user, recipient, content);
      e.target.reset();
    }
  };

  const filteredMessages = messages.filter(msg => msg.content.includes(query));

  return (
    <div className="chat-window">
      <h2>{user}</h2>
      <input
        type="text"
        value={query}
        onChange={onQueryChange}
        placeholder={`Search ${user}'s messages...`}
        style={{backgroundColor:"#fff0f3"}}
      />
      <div className="message-list" style={{backgroundColor:'#d8dbe2'}}>
        {filteredMessages.map((msg, index) => (
          <div
            key={index}
            className={`message-container ${
              msg.sender === user ? "owner-message" : "sender-message"
            }`}
          >
            <div className="message">{msg.content}</div>
            {/* <div className="message-owner">
              {msg.sender === user ? `${user} (You)` : msg.sender}
            </div> */}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input type="text" name="message" placeholder="Type a message..."  style={{backgroundColor:'#495057',color:'#e7ecef', border:'1px solid black'}}/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
