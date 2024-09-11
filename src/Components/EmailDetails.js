import React, { useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import {MdOutlineMarkunreadMailbox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import EmailCard from "./EmailCard";
const EmailDetails = ({ handleReplyClick, replyList,handleDeleteClick,isReplyOpen }) => {
  return (
    <div className="flex-1 dark:bg-black p-6 w-full bg-white text-black  border-gray-600 border-solid border-x-[1px] dark:text-gray-200">
      <div className="w-full flex gap-11 mb-6  ">
        <div className="flex-1">
          <h1>Orland</h1>
          <p>ssnjay@gmail.com</p>
        </div>
        <div className="flex gap-2 border-gray-800 border-4 justify-center items-center p-3 rounded-lg ">
          <span>
            <RxDotFilled />
          </span>
          <p>Meeting Completed</p>
          <RiArrowDropDownLine />
        </div>

        <div className="relative group inline-block">
          <div className=" gap-2 border-gray-800 border-4 justify-center items-center p-3 rounded-lg flex  ">
            <p>Move</p>
            <RiArrowDropDownLine />
          </div>
          <div className="absolute hidden group-hover:block bg-gray-800 text-white w-52 mt-2 rounded shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
                <MdOutlineMarkunreadMailbox />
                Mark as unread{" "}
              </li>
              <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
                <MdEdit />
                Edit lead
              </li>
              <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
                <MdOutlinePersonRemoveAlt1 />
                Remove Lead
              </li>
              <li className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
                <FaRegClock />
                Set reminder
              </li>
              <li onClick={handleDeleteClick} className="px-4 py-2 flex  gap-3   items-center hover:bg-gray-700 cursor-pointer">
                <MdDeleteOutline />
                Delete
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 w-18 border-gray-800 border-4 justify-center items-center p-3 rounded-lg ">
          <BsThreeDots />
        </div>
      </div>
      <hr />
     <EmailCard replyList={replyList} />
      
      <button
        className={isReplyOpen?"hidden":"flex justify-center items-center gap-4 bg-blue-700 p-3 rounded-md w-90 bottom-0 absolute mb-9"}
        onClick={() => handleReplyClick()}
      >
        <FaReply />
        Reply
      </button>


    </div>
  );
};
export default EmailDetails