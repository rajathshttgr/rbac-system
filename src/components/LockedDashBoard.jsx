// import React from 'react'
import { FaUserLock } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const LockedDashBoard = ({ access }) => {
  return (
    <div className="justify-center bg-black text-center items-center text-white h-full w-full m-2 pt-32">
      <FaUserLock className="h-16 w-24 mx-auto" />
      <p className="font-semibold text-xl mt-4">
        Only {access} Can Access this DashBoard
      </p>
    </div>
  );
};

export default LockedDashBoard;
