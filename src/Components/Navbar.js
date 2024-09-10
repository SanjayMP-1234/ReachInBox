import React from 'react';
import { image } from '../assest/assets.js'
const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Reachinbox Logo */}
          <a href="/" className="text-white text-xl font-bold">
            <img src={image.reachBox} alt="Reachinbox Logo" className="h-8 inline-block" />
            <span className="ml-2">REACHINBOX</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
