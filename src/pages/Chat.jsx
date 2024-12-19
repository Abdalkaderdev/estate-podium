import React, { useState } from 'react';

    function Chat({ user, agent }) {
      const [messages, setMessages] = useState([]);
      const [message, setMessage] = useState('');

      const handleSendMessage = () => {
        setMessages([...messages, { sender: user, text: message }]);
        setMessage('');
      };

      return (
        <div>
          <h1>Chat with {agent}</h1>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === user ? 'user-message' : 'agent-message'}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      );
    }

    export default Chat;
