import React from "react";
import { MdOutlineMail} from "react-icons/md";
const LeadDetails = () => {
          return (
            <div className="p-6 max-w-sm flex-1 dark:bg-black bg-white dark:text-white rounded-lg shadow-md">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4  bg-gray-600 rounded-md p-2 ">
                  Lead Details
                </h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-bold">Name</span> Orlando
                  </p>
                  <p className="flex justify-between">
                    <span className="font-bold">Contact No</span> +54-9062827869
                  </p>
                  <p className="flex justify-between">
                    <span className="font-bold">Email ID</span> orlando@gmail.com
                  </p>
                  <p className="flex justify-between">
                    <span className="font-bold">LinkedIn</span>{" "}
                    linkedin.com/in/timvadde/
                  </p>
                  <p className="flex justify-between">
                    <span className="font-bold">Company Name</span> Reachinbox
                  </p>
                </div>
              </div>
        
              <div>
                <h3 className="text-xl font-semibold mb-4  bg-gray-600 rounded-md p-2  ">
                  Activities
                </h3>
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
        };
export default LeadDetails        