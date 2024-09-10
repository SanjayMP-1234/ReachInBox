import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import { MdOutlineMail, MdOutlineMarkunreadMailbox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { useState,useEffect } from 'react';







import { FiSearch, FiRefreshCw, FiChevronDown } from 'react-icons/fi'; // Assuming you're using react-icons for icons

const EmailList = () => {
  return (
    <div className="w-1/5 bg-black p-4 text-gray-200">
      {/* Header: All Inbox(s) and Inbox Count */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white">All Inbox(s)</h2>
        <button className="text-gray-400">
          <FiRefreshCw className="w-5 h-5" />
        </button>
      </div>

      {/* Selected inbox and sorting dropdown */}
      <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
        <span>25/25 Inboxes selected</span>
        <div className="flex items-center text-white cursor-pointer">
          <span>Newest</span>
          <FiChevronDown className="w-4 h-4 ml-1" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-800 text-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
      </div>

      {/* New Replies count */}
      <div className="text-gray-400 text-sm mb-4">26 New Replies</div>

      {/* Email List Items */}
      <div className="space-y-2">
        <div className="email-item p-4 bg-black border-b border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm">Beata@gmail.com</p>
            <p className="text-xs text-gray-500">Mar 7</p>
          </div>
          <p className="text-sm mt-1">I've tried a lot and .</p>
          <div className="flex justify-start gap-2 mt-2">
            <span className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded-full">Interested</span>
            <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">Campaign Name</span>
          </div>
        </div>

        <div className="email-item p-4 bg-black border-b border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm">Sanya@gmail.com</p>
            <p className="text-xs text-gray-500">Mar 7</p>
          </div>
          <p className="text-sm mt-1">I've tried a lot and .</p>
          <div className="flex justify-start gap-2 mt-2">
            <span className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded-full">Closed</span>
            <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">Campaign Name</span>
          </div>
        </div>

        <div className="email-item p-4 bg-black border-b border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm">william@gmail.com</p>
            <p className="text-xs text-gray-500">Mar 7</p>
          </div>
          <p className="text-sm mt-1">Payment not going through</p>
          <div className="flex justify-start gap-2 mt-2">
            <span className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded-full">Interested</span>
            <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">Campaign Name</span>
          </div>
        </div>

        <div className="email-item p-4 bg-black border-b border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm">johnson@gmail.com</p>
            <p className="text-xs text-gray-500">Mar 7</p>
          </div>
          <p className="text-sm mt-1">Could you tell me more about it</p>
          <div className="flex justify-start gap-2 mt-2">
            <span className="bg-purple-500 text-white font-bold text-xs px-2 py-1 rounded-full">Meeting Booked</span>
            <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">Campaign Name</span>
          </div>
        </div>

        <div className="email-item p-4 bg-black">
          <div className="flex justify-between items-center">
            <p className="text-sm">orlando@gmail.com</p>
            <p className="text-xs text-gray-500">18:30</p>
          </div>
          <p className="text-sm mt-1">Hi, I am interested</p>
          <div className="flex justify-start gap-2 mt-2">
            <span className="bg-yellow-500 text-white font-bold text-xs px-2 py-1 rounded-full">Meeting Completed</span>
            <span className="bg-gray-800 text-white font-bold text-xs px-2 py-1 rounded-full">Campaign Name</span>
          </div>
        </div>
      </div>
    </div>
  );
};





const EmailDetails = () => {
  const [isReplyOpen, setIsReplyOpen] = useState(false); // State to manage the visibility of the reply box

  // Handle the click event for the Reply button
  const handleReplyClick = () => {
    console.log("Reply button clicked");
    setIsReplyOpen(true); // Set the state to true, showing the reply component
  };
  return (
    <div className="flex-1 bg-black p-6  border-gray-600 border-solid border-x-[1px] text-gray-200">
     
      <div className='w-full flex gap-11 mb-6  ' >
        <div className='flex-1' >
          <h1>Orland</h1>
        <p>ssnjay@gmail.com</p>
        </div>
        <div className='flex gap-2 border-gray-800 border-4 justify-center items-center p-3 rounded-lg '  >
          <span><RxDotFilled/></span>
          <p>Meeting Completed</p>
          <RiArrowDropDownLine />
        </div>
       
        <div className='relative group inline-block'>
        <div className=' gap-2 border-gray-800 border-4 justify-center items-center p-3 rounded-lg flex  '  >
          <p>Move</p>
          <RiArrowDropDownLine />
          </div>
          <div className="absolute hidden group-hover:block bg-gray-800 text-white w-52 mt-2 rounded shadow-lg">
  <ul className="py-2">
    <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
      <MdOutlineMarkunreadMailbox/>
      Mark as unread </li>
    <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
      <MdEdit/>
      Edit lead</li>
    <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
      <MdOutlinePersonRemoveAlt1/>Remove Lead</li>
    <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
      <FaRegClock/>
      Set reminder</li>
    <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
      <MdDeleteOutline/>
      Delete</li>
  </ul>
</div>
</div>




        
        <div className='flex gap-2 w-18 border-gray-800 border-4 justify-center items-center p-3 rounded-lg '  >
        <BsThreeDots />
        </div>
        
      </div>
      <hr />
      
        <EmailCard />
      
      <button className='flex justify-center items-center gap-4 bg-blue-700 p-3 rounded-md w-90 bottom-0 absolute mb-9'   onClick={handleReplyClick}  >
      <FaReply />
          Reply
          </button>
    </div>
  );
};



const LeadDetails = () => {
  return (
    <div className="p-6 max-w-sm flex-1 bg-black text-white rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4  bg-gray-600 rounded-md p-2 ">Lead Details</h2>
        <div className="space-y-2">
          <p className='flex justify-between' ><span className="font-bold">Name</span> Orlando</p>
          <p className='flex justify-between' ><span className="font-bold">Contact No</span> +54-9062827869</p>
          <p className='flex justify-between' ><span className="font-bold">Email ID</span> orlando@gmail.com</p>
          <p className='flex justify-between' ><span className="font-bold">LinkedIn</span> linkedin.com/in/timvadde/</p>
          <p className='flex justify-between' ><span className="font-bold">Company Name</span> Reachinbox</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4  bg-gray-600 rounded-md p-2  ">Activities</h3>
        <h4 className="text-lg mb-2">Campaign Name</h4>
        <p className="mb-4">3 Steps | 5 Days in Sequence</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 p-2 rounded-full">
            <MdOutlineMail />
            </div>
            <div>
              <p className="font-semibold">Step 1: Email</p>
              <p className="text-sm text-gray-400">Sent 3rd, Feb</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 p-2 rounded-full">
            <MdOutlineMail />
            </div>
            <div>
              <p className="font-semibold">Step 2: Email</p>
              <p className="text-sm text-gray-400">Opened 5th, Feb</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 p-2 rounded-full">
              <MdOutlineMail />
            </div>
            <div>
              <p className="font-semibold">Step 3: Email</p>
              <p className="text-sm text-gray-400">Opened 5th, Feb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






const EmailCard = () => {
  return (
    <div className=" bg-gray-900 text-white p-6 rounded-md shadow-md    w-full mt-6 bg-gray-700 h-[300px] ">
      <h2 className="text-lg font-bold mb-4">New Product Launch</h2>
      <div className="text-sm text-gray-400 mb-4">
        <p>from: jeanne@icloud.com cc: lennon.j@mail.com</p>
        <p>to: lennon.j@mail.com</p>
      </div>
      <div className="mb-4">
        <p>Hi &#123;FIRST_NAME&#125;,</p>
        <p className="mt-4">
          I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
        </p>
      </div>
      <div className="text-right text-sm text-gray-400">
        <p>20 June 2022 : 9:16 AM</p>
      </div>
     
    </div>
  );
}




const Mail = () => {
  return (
    <div className="flex h-full w-full bg-gray-900">
     
      <EmailList />
      <EmailDetails />
      <LeadDetails />
    </div>
  );
};

export default Mail;



