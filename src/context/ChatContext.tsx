import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Message } from '../types';

interface ChatContextType {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (content: string) => void;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Lagbuster, your AI assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (userMessage: string): string => {
    const responses = [
      "I understand your concern. Let me help you with that.",
      "That's a great question! Here's what I can tell you...",
      "I've analyzed your request and I recommend the following steps...",
      "Based on your input, I'd suggest optimizing your system by...",
      "Let me check that for you. According to my analysis...",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate assistant response after a delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const clearMessages = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm Lagbuster, your AI assistant. How can I help you today?",
        sender: 'assistant',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, isTyping, sendMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};