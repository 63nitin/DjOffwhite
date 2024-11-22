import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center bg-black items-center space-x-2 h-screen">
          <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-400"></div>
        </div>
      );
};

export default Loading;