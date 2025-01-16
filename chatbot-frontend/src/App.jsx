import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Footer from './components/Footer';

import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  const handleSendMessage = (sender, recipient, content) => {
    setMessages((prev) => [...prev, { sender, recipient, content }]);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const filteredMessages = messages.filter(msg => msg.content.includes(query));

  return (
    <div className="app">
      <div className="chat-container">
        <ChatWindow
          user="user1"
          messages={filteredMessages}
          onSendMessage={handleSendMessage}
          query={query}
          onQueryChange={handleQuery}
        />
        <ChatWindow
          user="user2"
          messages={filteredMessages}
          onSendMessage={handleSendMessage}
          query={query}
          onQueryChange={handleQuery}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
