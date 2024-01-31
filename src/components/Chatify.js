import React, { useEffect, useState } from 'react';
import { FcAssistant } from "react-icons/fc";
import moment from 'moment';

import { IoPerson } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

// import backgroundImage from '../images/chatBackground.jpg'
const url = "https://bot-server-nxtd.onrender.com/"

const Chatify = () => {
  const [newMessage, setNewMessage] = useState('');
  const [chatIndex, setChatIndex] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);
  const [botMessages, setBotMessages] = useState([]);


  useEffect(() => {
    const fetchBotMessages = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setBotMessages(data)
          // console.log(botMessages);
        } else {
          console.log('Failed to fetch bot messages : ', response.statusText);
        }
      } catch (error) {
        console.error("Error fetching bot message:", error)
      }
    };

    fetchBotMessages();
  }, []);

  const handleSendMessage = () => {

    if (chatIndex < botMessages.length) {
      if (newMessage.trim() !== '') {
        setChatHistory([
          ...chatHistory,
          { user: newMessage, bot: botMessages[chatIndex].content }
        ]);
        setChatIndex(chatIndex + 1);
      }
    } else {
      setChatHistory([...chatHistory, { user: newMessage, bot: "No more responses available" }]);
    }
    setNewMessage('');
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    };
  }
  const handleUserMessage = (e) => {
    setNewMessage(e.target.value);
  }



  return (
    <div className="d-flex p-2 justify-content-center align-items-center mt-5 mx-5 rounded-5">
      <div>
        <div className="d-flex flex-column align-items-start border border-success border-2 rounded-4 p-2" style={{ backgroundColor: 'aliceblue', width: '350px', height: '550px' }}>
          <div className='d-flex bg-secondary justify-content-center align-items-center text-white w-100 rounded p-2' style={{ height: '40px' }}>
            <div><IoChatboxEllipsesOutline /> Chatify </div>
          </div>
          <div className="w-100 flex-fill " style={{ overflowY: 'auto' }} >
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={' d-flex flex-column text-break'}
              >

                <div className='d-flex justify-content-end align-items-center border border-success rounded-4  p-2 mx-2 mt-2 ' style={{ color: 'rgb(54, 82, 173)' }}>
                  <div>{moment().format("LT")}</div>
                  <div>{message.user} </div>
                  <div><IoPerson /></div>
                </div>
                {message.bot &&
                  <div className='d-flex justify-content-start align-items-center border border-success rounded-4  p-2 mx-2 mt-2 ' style={{ color: 'rgb(120, 148, 97)' }}>
                    <div><FcAssistant /></div>
                    <div>{message.bot}</div>
                    <div>{moment().format("LT")}</div>
                  </div>}
              </div>
            ))}
          </div>
          <div className="d-flex  mt-2  border border-4 rounded-4 w-100">
            <input className="d-flex flex-grow-1 rounded-4 p-1"
              type="text"
              value={newMessage}
              onChange={handleUserMessage}
              onKeyDown={handleEnterKeyPress}
              placeholder="Type your message..."
            />
            <button className="btn btn-primary rounded-2 mx-1 rounded-3" id='send' onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Chatify;
