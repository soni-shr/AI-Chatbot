import React from 'react';
import { Message as MessageType } from '../types';
import { formatDistanceToNow } from '../utils/dateUtils';

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
    >
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-[#0D2840] text-white rounded-tr-none'
            : 'bg-[#F0F4F8] text-gray-800 rounded-tl-none border border-gray-200'
        }`}
      >
        <div className="flex flex-col">
          <p className="text-sm break-words">{message.content}</p>
          <span className={`text-xs mt-1 ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
            {formatDistanceToNow(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};