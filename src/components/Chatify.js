import React, { useEffect, useState } from 'react';
// import botMessages from "../data/demoData";
import { FcAssistant } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
// import backgroundImage from '../images/chatBackground.jpg'
const url = "https://bot-server-nxtd.onrender.com/"

const Chatify = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

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

  };
  }

  return (
    <div className="d-flex p-2 justify-content-center align-items-center mt-5 mx-5 rounded-5">
      <div className="d-flex flex-column align-items-start border border-success border-2 rounded-4 p-2"style={{ width: '350px', height:'550px'}}>
        <div className="w-100 flex-fill" style={{overflowY: 'auto' }} >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`d-flex border border-success rounded-5 p-1 mx-2 mt-2 ${message.type === 'sent' ? 'justify-content-end' : 'justify-content-start'}`}
              style={{color: message.type === 'incoming' ? 'blue' : 'green' }}
            >
              <div>
              {message.content}<IoPerson />
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex  mt-2  border border-4 rounded-4 w-100">
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
