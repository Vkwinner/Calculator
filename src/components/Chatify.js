import React, { useState } from 'react';
import chatbotmsg from "../data/demoData";

const Chatify = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { content: newMessage, type: 'sent' }]);
      setNewMessage('');
      // setTimeout(()=>{
      //   setMessages([chatbotmsg[0],{content: chatbotmsg[0], type: 'incoming'}])
      // },3000);
    }
  };

  return (
    <div className="d-flex p-2 justify-content-center align-items-center mt-5 mx-5 border border-success border-2 rounded-5">
      <div className="border border-success border-2 rounded-4"style={{ width: '300px'}}>
        <div className="p-2  " style={{ maxHeight: '200px', overflowY: 'auto' }} >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-container ${message.type === 'incoming' ? 'text-left' : 'text-right'}`}
              style={{ margin: '5px 0', color: message.type === 'incoming' ? 'blue' : 'green' }}
            >
              {message.content}
            </div>
          ))}
        </div>

        <div className="d-flex  mt-4 mb-1 border border-4 rounded-4">
          <input className="d-flex flex-grow-1 rounded-4"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="btn btn-primary rounded-2" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatify;
