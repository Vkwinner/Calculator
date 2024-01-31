import React, { useState, useEffect } from 'react';

const ChatApp = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatIndex, setChatIndex] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);
  const [botMessages, setBotMessages] = useState([]);

  useEffect(() => {
    const fetchBotMessages = async () => {
      try {
        const response = await fetch('https://bot-server-nxtd.onrender.com');  
        if (response.ok) {
          const data = await response.json();
          setBotMessages(data);
        } else {
          console.error('Failed to fetch bot messages:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching bot messages:', error);
      }
    };

    fetchBotMessages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only add a bot message if there are more bot messages available
    if (chatIndex < botMessages.length) {
      setChatHistory([...chatHistory, { user: userMessage, bot: botMessages[chatIndex].content }]);
      setChatIndex(chatIndex + 1); // Move to the next bot message
    } else {
      // Display a message indicating no more responses
      setChatHistory([...chatHistory, { user: userMessage, bot: "No more responses available" }]);
    }
    setUserMessage('');
  };

  const handleUserMessage = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <div>
      <div>
        {chatHistory.map((message, index) => (
          <div key={index} className='border '>
            <div>User: {message.user}</div>
            {message.bot && <div>Bot: {message.bot}</div>}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userMessage} onChange={handleUserMessage} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
