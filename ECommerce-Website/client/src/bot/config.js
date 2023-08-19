// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   initialMessages: [createChatBotMessage(`Hello world`)]
// }

// export default config

// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../Components/dogPicture';
const botName = 'AI Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  customComponents :{
    header: () => <div style={{padding: "5px", borderRadius: "3px" }}>This is the {botName}</div>
  },
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ]
};

export default config;
