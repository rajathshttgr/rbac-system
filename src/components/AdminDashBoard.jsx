// import React from "react";

const AdminDashBoard = () => {
  return (
    <div className="bg-black text-center items-center text-white h-full w-full m-2">
      <div className="flex justify-center mt-20">
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          0
        </div>
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          0
        </div>
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          0
        </div>
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          0
        </div>
      </div>
      <div>
        <p className="font-semibold text-xl mt-8">
          <span className="text-blue-600 hover:cursor-pointer">Click here</span>{" "}
          to Generate Admin DashBoard Secret Key, Only Admin has Access to it.
        </p>
      </div>
    </div>
  );
};

export default AdminDashBoard;
