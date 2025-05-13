import React from 'react';
import { Header } from './components/Header';
import { ChatLayout } from './components/ChatLayout';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <div className="flex flex-col h-screen bg-gray-50">
          <Header />
          <main className="flex-1 overflow-hidden">
            <ChatLayout />
          </main>
        </div>
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;