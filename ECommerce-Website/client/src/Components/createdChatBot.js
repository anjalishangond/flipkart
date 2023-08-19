import config from '../bot/config.js';
import MessageParser from '../bot/Messageparser.js';
import ActionProvider from '../bot/ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import React, { useState } from 'react';
import '../App.css';

const CreatedChatBot = () => {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    console.log('msg is svaed')
    // localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
   let messages = 'hello'
    // const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div  styles={{
      boxshadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px'
    }}>
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      )}
      <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
    </div>
  )
}

export default CreatedChatBot
