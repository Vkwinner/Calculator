import { useState, useEffect } from 'react';
import axios from 'axios';


const useBotMessage = () => {
  const [botMessage, setBotMessage] = useState(null);

  useEffect(() => {
    const fetchBotResponse = async () => {
      try {
        const response = await axios.get(`https://bot-server-nxtd.onrender.com/`);
        setBotMessage(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchBotResponse();

  }, []);

  return botMessage;
};

export default useBotMessage;
