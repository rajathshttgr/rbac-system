import { useState } from "react";
import AdminDashBoard from "../components/AdminDashBoard";
import ModeratorDashBoard from "../components/ModeratorDashBoard";
import UserDashBoard from "../components/UserDashBoard";
import LockedDashBoard from "../components/LockedDashBoard";

const DashBoard = () => {
  const input = "user";

  const [role, setRole] = useState("user");

  let timer = "01:59";
  return (
    <div className="bg-gray-800 flex flex-col h-screen">
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-white font-extralight ml-0 m-4 mr-0 p-1 ">
            Session Expires in:
          </p>
          <p className="text-white font-semibold my-4 p-1">{timer}</p>
        </div>
        <div>
          <button className="text-gray-400 m-4 mr-8 rounded-lg p-1 font-medium hover:text-white">
            Logout
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-full ">
        <div className="bg-gray-800 h-full w-52 flex flex-col">
          <button
            className={`text-left text-white m-1 p-2 rounded-md ${
              role === "user" ? "bg-gray-600" : "hover:bg-gray-600"
            }`}
            onClick={() => setRole("user")}
          >
            ⬜ User
          </button>
          <button
            className={`text-left text-white m-1 p-2 rounded-md ${
              role === "moderator" ? "bg-gray-600" : "hover:bg-gray-600"
            }`}
            onClick={() => setRole("moderator")}
          >
            ⬜ Moderator
          </button>
          <button
            className={`text-left text-white m-1 p-2 rounded-md ${
              role === "admin" ? "bg-gray-600" : "hover:bg-gray-600"
            }`}
            onClick={() => setRole("admin")}
          >
            ⬜ Admin
          </button>
        </div>
        {input === "user" && (
          <>
            {role === "user" && <UserDashBoard />}
            {role === "moderator" && (
              <LockedDashBoard access={"Admin & Moderator"} />
            )}
            {role === "admin" && <LockedDashBoard access={"Admin"} />}
          </>
        )}
        {input === "moderator" && (
          <>
            {role === "user" && <UserDashBoard />}
            {role === "moderator" && <ModeratorDashBoard />}
            {role === "admin" && <LockedDashBoard access={"Admin"} />}
          </>
        )}
        {input !== "user" && input !== "moderator" && (
          <>
            {role === "user" && <UserDashBoard />}
            {role === "moderator" && <ModeratorDashBoard />}
            {role === "admin" && <AdminDashBoard />}
          </>
        )}
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
