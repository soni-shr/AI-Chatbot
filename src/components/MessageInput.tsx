import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import { Send } from 'lucide-react';

export const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, isTyping } = useChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isTyping) {
      sendMessage(message);
      setMessage('');
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="border-t border-gray-200 bg-white p-4"
    >
      <div className="flex items-end space-x-2 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            disabled={isTyping}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:border-[#39A2AE] focus:ring-2 focus:ring-[#39A2AE] focus:ring-opacity-30 resize-none transition-all"
            rows={1}
            style={{
              minHeight: '48px',
              maxHeight: '120px',
              height: 'auto',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!message.trim() || isTyping}
          className={`rounded-full p-2.5 ${
            !message.trim() || isTyping
              ? 'bg-gray-200 text-gray-400'
              : 'bg-[#39A2AE] text-white hover:bg-[#2A8A96] transition-colors'
          }`}
        >
          <Send size={20} />
        </button>
      </div>
      {isTyping && (
        <p className="text-xs text-gray-500 mt-2 text-center animate-pulse">
          Lagbuster is thinking...
        </p>
      )}
    </form>
  );
};