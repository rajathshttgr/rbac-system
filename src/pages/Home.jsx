import { useState } from "react";
import Welcome from "../components/Welcome";
import AuthForm from "../components/AuthForm";

const Home = () => {
  const [status, setStatus] = useState(null);

  return (
    <>
      <div className="bg-gray-800 flex flex-col h-screen">
        <div className="text-right">
          <button
            className="text-gray-400 m-6 rounded-lg p-1 font-medium hover:text-white"
            onClick={() => setStatus(true)}
          >
            Login
          </button>
          <button
            className="text-gray-400 mr-20 rounded-lg p-1 font-medium hover:text-white"
            onClick={() => setStatus(false)}
          >
            Register
          </button>
        </div>

        {status == null ? <Welcome /> : <AuthForm currState={status} />}

        <div className="footer">
          <p className="text-gray-500 text-center">
            © 2024 Rajath Shettigar. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
