import React from 'react';



const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center m-auto">
          {/* Reachinbox Logo */}
          <a href="/" className="text-white text-xl  font-bold">
            <img src='./Logo.png' alt="Reachinbox Logo" className="h-8 inline-block " />
            
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;