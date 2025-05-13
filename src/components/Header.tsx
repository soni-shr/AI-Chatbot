import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { ChevronDown, LogOut, User as UserIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#0D2840] to-[#174468] text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="Lagbuster Logo" 
            className="h-10 w-auto" 
          />
          <h1 className="text-xl font-bold tracking-tight">Lagbuster</h1>
        </div>
        
        {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-opacity-20 bg-white px-3 py-2 rounded-lg transition-all hover:bg-opacity-30"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full object-cover border-2 border-teal-300"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-[#39A2AE] flex items-center justify-center">
                  <UserIcon size={16} />
                </div>
              )}
              <span className="hidden sm:inline text-sm font-medium">{user.name}</span>
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-1 z-50 overflow-hidden origin-top-right transition-all animate-dropdown">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};