export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}