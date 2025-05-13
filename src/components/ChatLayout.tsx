import React from 'react';
import { ChatWindow } from './ChatWindow';
import { MessageInput } from './MessageInput';

export const ChatLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <ChatWindow />
      <MessageInput />
    </div>
  );
};