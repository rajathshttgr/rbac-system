// import React from 'react'
import userData from "../datasets/userData";

const ModeratorDashBoard = () => {
  return (
    <div className="bg-black text-center items-center text-white h-full w-full m-2">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Year of Joining
              </th>
              <th scope="col" className="px-6 py-3">
                Job Role
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.fullName}
                </th>
                <td className="px-6 py-4">{user.yearOfJoining}</td>
                <td className="px-6 py-4">{user.jobRole}</td>
                <td className="px-6 py-4">{user.salary}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600  dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModeratorDashBoard;
