import React from 'react';
import {Link} from "react-router-dom"
import { FaHome, FaUserFriends, FaEnvelope, FaPaperPlane, FaList, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen w-16 flex flex-col  items-center py-6">
      {/* Logo */}
      <div className="text-white text-3xl font-bold">M</div>

      {/* Icons */}
      <nav className="space-y-6  mt-12 text-white">
      <Link className='flex' to="/" aria-label="Home">
          <FaHome size={24} />
        </Link>
        <Link className='flex' to="/friends" aria-label="Friends">
          <FaUserFriends size={24} />
        </Link>
        <Link className='flex' to="/envelope" aria-label="Envelope">
          <FaEnvelope size={24} />
        </Link>
        <Link className='flex' to="/plane" aria-label="Paper Plane">
          <FaPaperPlane size={24} />
        </Link>
        <Link className='flex' to="/list" aria-label="List">
          <FaList size={24} />
        </Link>
        <Link className='flex' to="/Mail" aria-label="Chart">
        <div className="relative">
        
          <FaEnvelope    size={24}  />
         
          <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">29</span>
        </div>
        </Link>
        <Link className='flex' to="/chart" aria-label="Chart">
          <FaChartBar size={24} />
        </Link>
      </nav>

      {/* User Profile */}
      <div className="text-white absolute bottom-0 mb-5 bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-xl">AS</div>
    </div>
  );
};

export default Sidebar;

