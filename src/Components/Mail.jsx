import React, { useEffect } from "react";
import { useState } from "react";
import EmailReply from "./EmailReply";
import axios from "axios";
import EmailDetails from "./EmailDetails";
import LeadDetails from "./LeadDetails";
import EmailList from "./EmailList";

const Mail = ({ token }) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [mailList, setMailList] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
       `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${mailList[0].threadId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FnYXJpa3MyMDAzQGdtYWlsLmNvbSIsImlkIjoxNDU4LCJmaXJzdE5hbWUiOiJzYWdhcmkiLCJsYXN0TmFtZSI6ImtzIn0sImlhdCI6MTcyNTk5Mjg3OCwiZXhwIjoxNzU3NTI4ODc4fQ.fXEpltSOuaZDkEiFYlls6G0H7EIISMX0KoDbnY0YFEk",
          },
        }
      );
      if(response.status===200){
        mailList.shift()
      }
    } catch (err) {
      console.log(err);
    }
    setIsModalOpen(false);
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list/",
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FnYXJpa3MyMDAzQGdtYWlsLmNvbSIsImlkIjoxNDU4LCJmaXJzdE5hbWUiOiJzYWdhcmkiLCJsYXN0TmFtZSI6ImtzIn0sImlhdCI6MTcyNTk5Mjg3OCwiZXhwIjoxNzU3NTI4ODc4fQ.fXEpltSOuaZDkEiFYlls6G0H7EIISMX0KoDbnY0YFEk",
            },
          }
        );
        if (response.status === 200) {
          setMailList(response.data.data);
          console.log(response.data.data);
        }
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleReplyClick() {
    setIsReplyOpen((prevState) => !prevState);
  }
  const handleCloseReply = () => {
    setIsReplyOpen(false); // This will close the reply modal
  };

  return (
    <div className="flex h-full w-full bg-gray-900">
       {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
              Are you sure?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your selected email will be deleted.
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <EmailList />
      {isReplyOpen && <EmailReply toMaildetails={mailList[0]|" "} handleReplyClick={handleReplyClick} handleClose={handleCloseReply}  />}
      {mailList && (
        <EmailDetails
        handleDeleteClick={handleDeleteClick}
          handleReplyClick={handleReplyClick}
          replyList={mailList}
          isReplyOpen={isReplyOpen}
        />
      )}
      <LeadDetails />
    </div>
  );
};

export default Mail;