import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-[#F0F4F8] text-gray-800 rounded-2xl rounded-tl-none border border-gray-200 px-4 py-3">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-[#39A2AE] animate-bounce"></div>
          <div className="h-2 w-2 rounded-full bg-[#39A2AE] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="h-2 w-2 rounded-full bg-[#39A2AE] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};