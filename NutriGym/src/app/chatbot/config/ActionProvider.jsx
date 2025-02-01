import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const retrieve = () => {
    const botMessage = createChatBotMessage(
      "¿Como puedo ayudar? Aquí tienes algunas opciones",
      {
        widget: 'opciones',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

  };

  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            retrieve,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;