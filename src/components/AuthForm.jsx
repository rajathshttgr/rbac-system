import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthForm = ({ currState }) => {
  const [isLogin, setIsLogin] = useState(currState || true);

  useEffect(() => {
    setIsLogin(currState);
  }, [currState]);

  const handleToggle = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="pt-8 flex-grow ">
      <div className="flex justify-center">
        <form action="submit">
          <div className="flex flex-col p-10 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center">
              {isLogin ? "Login" : "Register"}
            </h2>
            {isLogin ? (
              ""
            ) : (
              <div className="mt-5">
                <label htmlFor="text" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 mt-1 border rounded-lg"
                  required
                />
              </div>
            )}
            <div className="mt-5">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 mt-1 border rounded-lg"
                required
              />
            </div>
            {isLogin ? (
              ""
            ) : (
              <div className="mt-5">
                <label htmlFor="role" className="text-sm font-semibold">
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  className="w-full p-2 mt-1 border rounded-lg"
                  required
                >
                  <option value="" disabled selected>
                    Select your role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                  <option value="user">User</option>
                </select>
              </div>
            )}
            <button
              type="submit"
              className="w-full p-2 mt-5 bg-slate-900 text-white rounded-lg"
            >
              {isLogin ? "Login" : "Register"}
            </button>
            <div>
              <p className="mt-5 text-sm text-center">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                {isLogin ? (
                  <a
                    href="#register"
                    className="text-blue-500"
                    onClick={handleToggle}
                  >
                    Register
                  </a>
                ) : (
                  <a
                    href="#login"
                    className="text-blue-500"
                    onClick={handleToggle}
                  >
                    Login
                  </a>
                )}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
AuthForm.propTypes = {
  currState: PropTypes.bool,
};

export default AuthForm;
