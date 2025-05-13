import React, { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import { Message } from './Message';
import { TypingIndicator } from './TypingIndicator';

export const ChatWindow: React.FC = () => {
  const { messages, isTyping } = useChat();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div className="space-y-4 pb-2 pt-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={endOfMessagesRef} />
      </div>
    </div>
  );
};