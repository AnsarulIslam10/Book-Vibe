import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 text-center px-4">
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
        404
      </h1>
      <p className="text-3xl font-semibold text-gray-300 mt-4 animate-bounce">
        Lost in Space? Page Not Found.
      </p>
      <p className="text-lg text-gray-400 mt-2 max-w-md">
        The page you’re looking for might be on another planet. Return home and
        try again.
      </p>
      <button
        className="mt-8 btn btn-primary hover:bg-teal-500 hover:text-black transition-all duration-300 shadow-lg shadow-teal-400/20"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
