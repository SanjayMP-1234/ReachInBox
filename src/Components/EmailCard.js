import React from "react";
import Parser from 'html-react-parser';
const EmailCard = ({ replyList }) => {
          return (
            <>
              {replyList.map((reply) => {
                return (
                  <div key={reply.id} className=" dark:bg-gray-900 bg-white text-black dark:text-white p-6 rounded-md shadow-md    w-full mt-6 bg-gray-700 h-[300px] ">
                    <h2 className="text-lg font-bold mb-4">{reply.subject}</h2>
                    <div className="text-sm text-gray-400 mb-4">
                      <p>from: {reply.fromEmail} cc: {reply.cc}</p>
                      <p>to: {reply.toEmail}</p>
                    </div>
                    <div className="mb-4">
                      {Parser(reply.body)}
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>{reply.sentAt}</p>
                    </div>
                  </div>
                );
              })}
            </>
          );
        };
 export default EmailCard       