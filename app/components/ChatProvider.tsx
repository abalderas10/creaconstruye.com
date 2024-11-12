'use client';

import React, { createContext, useContext, useState } from 'react';
import ChatButton from './ChatButton';
import ChatInterface from './ChatInterface';

const ChatContext = createContext({
  isOpen: false,
  toggleChat: () => {},
});

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <ChatContext.Provider value={{ isOpen, toggleChat }}>
      {children}
      <ChatButton isOpen={isOpen} onClick={toggleChat} />
      <ChatInterface isOpen={isOpen} />
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);