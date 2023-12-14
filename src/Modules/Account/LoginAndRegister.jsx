import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import RAndL from "../../Assests/Register&Login/Register&LoginImage.jpg";
import { servieUrl } from "../../env/env";

export default function LoginAndRegister({ setUserType }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null); // Store the user's role
  const [error, setError] = useState(null); // Store login error message
  const navigate = useNavigate(); // Access the navigation function

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleLogin = async () => {
    try {
      // Make a fetch request to the login API
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "csrftoken=Z9nseXk0218jRsyMVwAhHRYLPsrUDGZf");

      var raw = JSON.stringify({
        email: username,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        servieUrl.otpurl + "rolebased/login/",
        requestOptions
      );
      const data = await response.json();

      if (response.status === 200) {
        // localStorage.setItem("username", username);

        localStorage.setItem("userData", username);
        localStorage.setItem("Name", data.first_name);
        // Login successful, set the user's role
        setRole(data.role);
        setUserType(data.role);
      } else {
        // Login failed, display error message
        console.log(response);
        setShowSuccessPopup(true);
        setError("Login failedsss");
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed");
    }
  };

  useEffect(() => {
    // Use the useEffect hook to trigger navigation when the role changes
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
  }, [role, navigate]);

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-10 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form>
          <p className="mt-10">
            <label className="font-bold text-2xl">Email</label>

            <input
              type="email"
              className={`mt-1 p-2 w-full border rounded-md `}
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </p>

          <p className="mt-5">
            <label className="font-bold text-2xl">Password</label>

            <input
              type="password"
              className={`mt-1 p-2 w-full border rounded-md `}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

          <Link to="/forget">
            <h1 className="text-[#64666C] text-lg font-semibold hover:underline mt-3">
              Forgot Password
            </h1>
          </Link>

          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

          <p className="mt-1">
            <Link to="">
              <button
                onClick={() => {
                  handleLogin();
                }}
                className="bg-[#2774AE] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg hover:cursor-pointer"
              >
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="bg-[#2774AE] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg ml-5 hover:cursor-pointer">
                Register
              </button>
            </Link>
          </p>
        </form>

        {/* <div>
          <img src={RAndL} className="rounded-lg"></img>
        </div> */}
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Login UnSuccessFully
            </h2>

            <p className="text-gray-700">
              your form will be approved as soon as possible.
            </p>

            <div className="mt-6">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setShowSuccessPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
