import React, { useEffect, useState } from 'react';
// import botMessages from "../data/demoData";
import { FcAssistant } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
// import backgroundImage from '../images/chatBackground.jpg'
const url = "https://bot-server-nxtd.onrender.com/"

const Chatify = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  // const [id, setId] = useState(0);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages, 
        { content: newMessage, type: 'sent' }
      ]);
      setNewMessage('');
    }
  };
  
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="d-flex p-2 justify-content-center align-items-center mt-5 mx-5 " >
      <div className="d-flex flex-column align-items-start border border-success border-2 rounded-4 mt-2" style={{ width: "350px", height: "500px"}}>
        <div className="p-2 w-100 flex-fill" style={{ maxHeight: '550px', overflowY: 'auto' }} >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-container border rounded rounded-5 p-1 mt-3 ${message.type === 'sent' ? 'text-right' : 'text-right'}`}
              style={{ color: message.type === 'incoming' ? 'blue' : 'green' }}
            >
              <div>
              <IoPerson />{message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-self-start mt-3 mb-1 border border-4 rounded-4 w-100">
          <input className="d-flex flex-grow-1 rounded-4"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleEnterKeyPress}
            placeholder="Type your message..."
          />
          <button className="btn btn-primary rounded-2" id='send' onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>

  );
};

export default Chatify;
