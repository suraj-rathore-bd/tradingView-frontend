import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { servieUrl } from "../../env/env";

export default function LoginAndRegister({ setUserType }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null); // Reset error on new login attempt
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ email: username, password: password });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(servieUrl.otpurl + "rolebased/login/", requestOptions);
      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("userData", username);
        localStorage.setItem("Name", data.first_name);
        setRole(data.role);
        setUserType(data.role);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("Login failed. Please try again later.");
    }
  };

  useEffect(() => {
    if (role) {
      if (role === "1") {
        localStorage.setItem("login", "admin");
        navigate("/adminDashboard");
        window.location.reload();
      } else if (role === "2") {
        navigate("/page2");
      } else if (role === "3") {
        localStorage.setItem("login", "user");
        navigate("/userDashboard");
        window.location.reload();
      }
    }
  }, [role, navigate]);

  return (

    <div className="flex justify-center items-center h-screen bg-gray-200"> {/* Updated background color */}
    <div className="flex md:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden"> {/* Lighter shade for the form container */}
      <div className="hidden md:block md:w-1/2">
      <img src="https://miro.medium.com/v2/resize:fit:960/1*43wCZ5wJDhoWJS3kT0sAbQ.gif" alt="Trading" className="object-cover w-full h-full" />

      </div>
      <div className="w-full md:w-1/2 p-8">
      <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block font-bold text-lg text-white">Email</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label className="block font-bold text-lg text-white">Password</label>
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Error Message */}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            {/* Forgot Password Link */}
            <div className="mb-6">
              <Link to="/forget" className="text-blue-400 hover:underline">
                Forgot Password?
              </Link>
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleLogin}
                className="bg-blue-600 px-5 py-2 text-white rounded hover:bg-blue-700"
              >
                Login
              </button>
              <Link to="/register" className="bg-green-600 px-5 py-2 text-white rounded hover:bg-green-700">
                Register
              </Link>
            </div>
          </form>
      </div>
    </div>
  </div>
  
   
  );
}
