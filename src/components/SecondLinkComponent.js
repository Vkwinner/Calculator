import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { content: newMessage, type: 'sent' }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ width: '300px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.type === 'incoming' ? 'left' : 'right',
              margin: '5px 0',
              color: message.type === 'incoming' ? 'blue' : 'green',
            }}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px', display: 'flex' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: '1', marginRight: '5px' }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
