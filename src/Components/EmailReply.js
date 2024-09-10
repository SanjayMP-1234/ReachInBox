
import React from 'react';

const EmailReply = () => {
  return (
    
    <div className="w-[900px] mx-auto my-10 pb-4  border rounded-lg shadow-md bg-gray-900 text-white">
          <div className='bg-gray-600 w-full flex rounded-md h-[30px] p-[20px] justify-between items-center ' ><p>Reply</p></div>
      <div className=" after:w-full flex bg-gray-800  items-center">
        <label className="block text-[16px] mb-1 mx-6 ">To:</label>
        <input 
          type="email"
          placeholder="Enter the Mail"
          className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white outline-none border-none  items-center"
          
        />
      </div>
       <hr/>
      
      <div className=" flex bg-gray-800  items-center">
        <label className="block text-[16px] mb-1  mx-6">From:</label>
        <input 
          type="email"
          placeholder="Enter  your mail"
          className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white outline-none border-none  items-center"
          
        />
      </div>
      <hr/>
      <div className=" flex bg-gray-800  items-center">
        <label className="block text-[16px] mb-1 mx-6 ">Subject:</label>
        <input 
          type="text"
          placeholder="enter the subject"
          className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white outline-none border-none  items-center"
          
        />
      </div>
      <hr/>
      <div className="mb-4">
        <textarea
          placeholder="Hi Jeanne,"
          className="w-full h-[200px] px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      
      <div className="flex items-center ">
        <button className="bg-blue-500 mx-6 text-white py-2 px-4 rounded hover:bg-blue-600">
          Send
        </button>
        {/* Additional options aligned to the right of the Send button */}
        <div className="flex space-x-4  items-center">
          <button className="text-gray-400 hover:text-white">Variables</button>
          <button className="text-gray-400 hover:text-white">Preview Email</button>
          <button className="text-gray-400 hover:text-white">A</button>
          <button className="text-gray-400 hover:text-white">🔗</button>
          <button className="text-gray-400 hover:text-white">😊</button>
          <button className="text-gray-400 hover:text-white">👤</button>
          <button className="text-gray-400 hover:text-white">&lt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default EmailReply;