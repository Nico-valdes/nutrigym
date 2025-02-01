import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../components/Options/Option.js';

const botName = 'Sportacus';
const config = {
  initialMessages: [createChatBotMessage(`Hola!, Soy ${botName} tu asistente virtual, ¿En qué puedo ayudarte?`),
    {
      widget:'opciones',

    }
  ],
  botName : botName,
  customStyles: {
  botMessageBox: {
      backgroundColor: "#0A0A0A",
    },
    chatButton: {
      backgroundColor: "#0A0A0A",
    },
  },
  widgets: [
    {
      widgetName: 'opciones',
       widgetFunc: (props) => <Options {...props} />,
       mapStateToProps: ['gist', 'infoBox'],
    },
  ],


};

export default config;