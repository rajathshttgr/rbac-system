import { useState, useEffect } from "react";
import AdminDashBoard from "../components/AdminDashBoard";
import ModeratorDashBoard from "../components/ModeratorDashBoard";
import UserDashBoard from "../components/UserDashBoard";
import LockedDashBoard from "../components/LockedDashBoard";
import { useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const DashBoardx = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const input = localStorage.getItem("userRole");

  const [role, setRole] = useState(input);

  const [tInSec, setTInSec] = useState(120);

  const handlesetRole = (val) => {
    if (val) {
      setRole(val);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (!token) {
      return;
    }

    const expirationTime = 122 * 1000;
    const logoutTimer = setTimeout(() => {
      alert("Session expired. Please login again.");
      sessionStorage.removeItem("authToken");
      navigate("/");
    }, expirationTime);

    return () => clearTimeout(logoutTimer);
  }, [navigate]);

  useEffect(() => {
    if (tInSec <= -1) navigate("/");

    const intervalId = setInterval(() => {
      setTInSec((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [tInSec]);

  const mins = Math.floor(tInSec / 60)
    .toString()
    .padStart(2, "0");
  const secs = (tInSec % 60).toString().padStart(2, "0");
  const timer = `${mins}:${secs}`;

  return (
    <div className="bg-gray-800 flex flex-col h-screen">
      <div className="flex justify-between overflow-hidden">
        <div className="flex shrink-0">
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none my-3 p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <IoMenu className="w-8 h-8" />
            </button>
          </div>
          <p className="text-white font-extralight ml-0 m-4 mr-0 p-1 ">
            Session Expires in:
          </p>
          <p className="text-white font-semibold my-4 p-1">{timer}</p>
        </div>
        <div>
          <button
            className="text-gray-400 m-4 mr-8 rounded-lg p-1 font-medium hover:text-white"
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
      </div>

      <div className=" bg-gray-800 flex flex-1 overflow-hidden">
        <div className="hidden md:flex bg-gray-800 w-15 sm:w-52 flex flex-col shrink-0">
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

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="w-3/4 h-full bg-black text-white shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <IoClose className="w-8 h-8 text-white hover:text-gray-400" />
            </button>
          </div>

          {/* mobile menu bar */}

          <div className="flex flex-col space-y-4 p-6">
            <button
              className={`text-left text-white m-1 p-2 rounded-md ${
                role === "user" ? "bg-gray-600" : "hover:bg-gray-600"
              }`}
              onClick={() => handlesetRole("user")}
            >
              ⬜ User
            </button>
            <button
              className={`text-left text-white m-1 p-2 rounded-md ${
                role === "moderator" ? "bg-gray-600" : "hover:bg-gray-600"
              }`}
              onClick={() => handlesetRole("moderator")}
            >
              ⬜ Moderator
            </button>
            <button
              className={`text-left text-white m-1 p-2 rounded-md ${
                role === "admin" ? "bg-gray-600" : "hover:bg-gray-600"
              }`}
              onClick={() => handlesetRole("admin")}
            >
              ⬜ Admin
            </button>
          </div>
        </div>
      </div>
      <div className="footer overflow-hidden">
        <p className="text-gray-500 text-center">
          © 2024 Rajath Shettigar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DashBoardx;
