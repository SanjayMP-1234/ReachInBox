import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  function handleClick() {
    window.location.replace(
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/Home"
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-950 rounded-lg ring-[1px] ring-gray-800 shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-white">
          Create a new account
        </h2>

        <button
          className="flex items-center justify-center w-full  p-2 mt-4 text-white bg-white bg-opacity-10 rounded-lg"
          onClick={handleClick}
        >
          <FcGoogle className="mr-2 " />
          Sign Up with Google
        </button>

        <button className="w-1/2 p-3  font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-800  rounded-lg">
          Create an Account
        </button>

        <div className="text-center">
          <p className="text-gray-500">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
