'use client'

import React, {Component} from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from '../config/config.js';
import MessageParser from '../config/MessageParser.jsx';
import ActionProvider from '../config/ActionProvider.jsx';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { BotMessageSquare } from 'lucide-react';



export default function MainChatBot(){

  const [isOpen,setIsOpen] = useState(false);
  const toggleChatbot = ()=>{setIsOpen(!isOpen);}

  return (
    <div className="chatBot-container">
      <div className={`chatbot-content ${isOpen ? 'open':'close'}`}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
      <div className="chatbot-button">
        <button onClick={toggleChatbot}>
          <span className="icon"><BotMessageSquare size={28}/></span>
        </button>
      </div>
    </div>
    
  );
};