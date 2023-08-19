import React from 'react';

const API_KEY = "";
const systemMessage = {
  role: "system",
  content: "You have to recommend the related accessories which are related to the product description provided by the user. Imagine you're an experienced fashion designer, and the result you generate will be used as a prompt for DALLIE-2, a text-to-image converter, to generate a product image with its features."
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUserMessage = async (message) => {
    await processMessageToChatGPT(message);
  }

  async function processMessageToChatGPT(message) {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        { role: "user", content: message },
      ],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      const responseData = await response.json();
      const assistantMessage = responseData.choices[0].message.content;

      const botMessage = createChatBotMessage(assistantMessage);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      // Handle the error gracefsully, display a user-friendly error message, etc.
    }
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleUserMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;