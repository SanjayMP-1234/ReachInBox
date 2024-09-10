import React, { useState } from 'react';
function EmailDetails() {
  const [isReplyOpen, setIsReplyOpen] = useState(false); // State to manage the visibility of the reply box

  // Handle the click event for the Reply button
  const handleReplyClick = () => {
    console.log("Reply button clicked");
    setIsReplyOpen(true); // Set the state to true, showing the reply component
  };

  return (
    
    <div className="text-white">
      {/* Conditionally render the EmailReply component */}
      {isReplyOpen && <EmailReply />}
      <h2 className="text-xl font-semibold mb-4">New Product Launch</h2>
      <div className="mb-4">
        <p className="text-gray-400">From: jeanne@icloud.com</p>
        <p className="text-gray-400">To: lennon@jmail.com</p>
        <p className="text-gray-400">Date: 20 June 2022, 9:16 AM</p>
      </div>

      <div className="mb-4">
        <p>Hi <strong>{'{FIRST_NAME}'}</strong>,</p>
        <p>
          I would like to introduce you to SaaSGrow, a productized design service specifically
          tailored for SaaS startups. Our aim is to enhance the user experience and boost the visual appeal of your...
        </p>
      </div>

      {/* Reply button with event handler */}
      <button 
        onClick={handleReplyClick} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Reply
      </button>

      {/* Lead Details */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Lead Details</h3>
        <p>Name: Orlando</p>
        <p>Contact No: +54-9062827869</p>
        <p>Email ID: orlando@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/timwadd...</p>
        <p>Company Name: Reachinbox</p>
      </div>

      {/* Campaign Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Campaign Name</h3>
        <p>Step 1: Email Sent (3rd Feb)</p>
        <p>Step 2: Email Opened (5th Feb)</p>
      </div>

      {/* Conditionally render the EmailReply component */}
      {isReplyOpen && <EmailReply />}
    </div>
  );
}

export default EmailDetails;
