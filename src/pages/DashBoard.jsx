// import React from 'react'

const DashBoard = () => {
  return (
    <div className="bg-gray-800 flex flex-col h-screen">
      <div className="text-right">
        <button className="text-gray-400 m-4 rounded-lg p-1 font-medium hover:text-white">
          Logout
        </button>
      </div>
      <div className="flex flex-row items-center justify-center h-full">
        <div className="bg-gray-800 h-full w-52 flex flex-col">
          <button className="text-left text-white m-2">⬜ Admin</button>
          <button className="text-left text-white m-2">⬜ Moderator</button>
          <button className="text-left text-white m-2">⬜ User</button>
        </div>
        <div className="bg-black text-center text-white h-full w-full m-2">
          <h1>Only Admin can access this Content</h1>
        </div>
      </div>

      <div className="footer">
        <p className="text-gray-500 text-center">
          © 2024 Rajath Shettigar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
