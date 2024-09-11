import React from "react";
import { FiSearch, FiRefreshCw, FiChevronDown } from "react-icons/fi";
const EmailList = () => {
          return (
            <div className="w-1/5 dark:bg-black bg-white p-4 text-gray-200">
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl dark:text-white text-black">All Inbox(s)</h2>
                <button className="text-gray-400">
                  <FiRefreshCw className="w-5 h-5" />
                </button>
              </div>
        
              
              <div className="flex justify-between items-center text-sm dark:text-gray-400 text-black mb-4">
                <span>25/25 Inboxes selected</span>
                <div className="flex items-center text-white cursor-pointer">
                  <span className="dark:text-white text-black" >Newest</span>
                  <FiChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
        
              
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full dark:bg-gray-800 border-black border  text-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
        
              <div className="text-gray-400 text-sm mb-4">26 New Replies</div>
        
           
              <div className="space-y-2">
                <div className=" dark:bg-black dark:text-white  bg-white   text-black email-item p-4 bg-black border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Beata@gmail.com</p>
                    <p className="text-xs text-gray-500">Mar 7</p>
                  </div>
                  <p className="text-sm mt-1">I've tried a lot and .</p>
                  <div className="flex justify-start gap-2 mt-2">
                    <span className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Interested
                    </span>
                    <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Campaign Name
                    </span>
                  </div>
                </div>
        
                <div className="email-item p-4 dark:bg-black dark:text-white  text-black  border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Sanya@gmail.com</p>
                    <p className="text-xs text-gray-500">Mar 7</p>
                  </div>
                  <p className="text-sm mt-1">I've tried a lot and .</p>
                  <div className="flex justify-start gap-2 mt-2">
                    <span className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Closed
                    </span>
                    <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Campaign Name
                    </span>
                  </div>
                </div>
        
                <div className="email-item p-4 dark:text-white   dark:bg-black bg-white   text-black bg-black border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">william@gmail.com</p>
                    <p className="text-xs text-gray-500">Mar 7</p>
                  </div>
                  <p className="text-sm mt-1">Payment not going through</p>
                  <div className="flex justify-start gap-2 mt-2">
                    <span className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Interested
                    </span>
                    <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Campaign Name
                    </span>
                  </div>
                </div>
        
                <div className="email-item p-4 dark:text-white  dark:bg-black bg-white   text-black bg-black border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">johnson@gmail.com</p>
                    <p className="text-xs text-gray-500">Mar 7</p>
                  </div>
                  <p className="text-sm mt-1">Could you tell me more about it</p>
                  <div className="flex justify-start gap-2 mt-2">
                    <span className="bg-purple-500 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Meeting Booked
                    </span>
                    <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Campaign Name
                    </span>
                  </div>
                </div>
        
                <div className="email-item dark:text-white  dark:bg-black bg-white   text-black p-4 bg-black">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">orlando@gmail.com</p>
                    <p className="text-xs text-gray-500">18:30</p>
                  </div>
                  <p className="text-sm mt-1">Hi, I am interested</p>
                  <div className="flex justify-start gap-2 mt-2">
                    <span className="bg-yellow-500 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Meeting Completed
                    </span>
                    <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">
                      Campaign Name
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        };
export default EmailList        