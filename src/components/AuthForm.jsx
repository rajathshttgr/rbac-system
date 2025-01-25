import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import BASE_URL from "../config";
import loadingGIF from "../assets/loadingGIF.gif";

const AuthForm = ({ currState = true }) => {
  const [isLogin, setIsLogin] = useState(currState);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
          email,
          password,
        });
        console.log(response.data);
        const { userRole } = response.data;
        const { token } = response.data;
        localStorage.setItem("userRole", userRole);
        sessionStorage.setItem("authToken", token);
        navigate("/dashboard");
      } else {
        const response = await axios.post(`${BASE_URL}/auth/register`, {
          fullname,
          email,
          password,
          role,
        });
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message); // Server error message
      } else {
        alert("An unexpected error occurred. Please try again later."); // Generic fallback
      }
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    setIsLogin(currState);
  }, [currState]);

  const handleToggle = (event) => {
    event.preventDefault(); // Prevent default behavior of <a> tag
    setIsLogin((prevState) => !prevState);
  };

  return loading ? (
    <div className="flex items-center justify-center h-screen w-screen">
      <img
        src={loadingGIF}
        alt="Loading..."
        className="max-w-full max-h-full"
      />
    </div>
  ) : (
    <div className="pt-8 flex-grow">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-10 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center">
              {isLogin ? "Login" : "Register"}
            </h2>
            {!isLogin && (
              <div className="mt-5">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 mt-1 border rounded-lg"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div className="mt-5">
                <label htmlFor="role" className="text-sm font-semibold">
                  Role
                </label>
                <select
                  id="role"
                  className="w-full p-2 mt-1 border rounded-lg"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
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
                <a href="#" className="text-blue-500" onClick={handleToggle}>
                  {isLogin ? "Register" : "Login"}
                </a>
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
