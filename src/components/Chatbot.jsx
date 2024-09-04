// src/components/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', height: '400px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <p style={{ background: message.sender === 'user' ? '#dcf8c6' : '#fff', display: 'inline-block', padding: '10px', borderRadius: '10px', margin: '5px 0' }}>
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSend} style={{ padding: '10px', marginLeft: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
