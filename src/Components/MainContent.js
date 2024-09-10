import React from 'react';
 // Ensure you have this image in your public/assets folder

const MainContent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-black text-white text-center">
      <img src="" alt="Email Icon" className="w-36 mb-6" />
      <h2 className="text-2xl font-semibold">It's the beginning of a legendary sales pipeline</h2>
      <p className="text-gray-400 mt-2">When you have inbound E-mails, you'll see them here.</p>
    </div>
  );
};

export default MainContent;
