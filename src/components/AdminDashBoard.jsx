import { useState } from "react";

const AdminDashBoard = () => {
  const [number, setNumber] = useState("0000");
  const handleClick = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
    setNumber(randomNum);
  };

  return (
    <div className="bg-black text-center items-center text-white h-full w-full m-2">
      <div className="flex justify-center mt-20">
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          {number[0]}
        </div>
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          {number[1]}
        </div>
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          {number[2]}
        </div>
        <div className="flex items-center justify-center text-3xl bg-gray-100 h-20 w-20 rounded-md font-semibold text-black m-2">
          {number[3]}
        </div>
      </div>
      <div>
        <p className="font-semibold text-xl mt-8">
          <span
            className="text-blue-600 hover:cursor-pointer"
            onClick={handleClick}
          >
            Click here
          </span>{" "}
          to view Admin DashBoard Secret Key, Only Admin has Access to it.
        </p>
      </div>
    </div>
  );
};

export default AdminDashBoard;
