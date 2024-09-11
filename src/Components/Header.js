import React from 'react';
import { useState,useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
          const [isDarkMode, setIsDarkMode] = useState(true);

          // Toggle dark mode
          const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
          };
        
          // Apply dark mode class to the root element (HTML or body)
          useEffect(() => {
            if (isDarkMode) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }, [isDarkMode]);
        
  return (
          <div className="dark:bg-gray-800 dark:text-white px-6 py-4 flex justify-between items-center">
          {/* Title */}
          <h1 className="text-xl   font-semibold">Onebox</h1>
    
          {/* Toggle Dark Mode */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-gray-200">
             
              <div
                className={`relative inline-block w-10 h-6 cursor-pointer ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-400'
                } rounded-full transition duration-300`}
                onClick={toggleDarkMode}
              >
                <span
                  className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${
                    isDarkMode ? 'transform translate-x-4' : ''
                  }`}
                />
              </div>
            </label>
    
            {/* Workspace text */}
            <div className="flex items-center">
              <span className="mr-2">Tim's Workspace</span>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
  );
};

export default Header;
