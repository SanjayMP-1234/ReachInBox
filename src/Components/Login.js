import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Login = () => {    
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Create a new account</h2>
        <button className="flex items-center justify-center w-full p-2 mt-4 text-white bg-white bg-opacity-10 rounded-lg">
        <FcGoogle />
          Sign Up with Google
        </button>
        <button className="w-full p-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg">
          Create an Account
        </button>
        <div className="text-center">
          <p className="text-gray-500">Already have an account? <a href="/signin" className="text-blue-500">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
