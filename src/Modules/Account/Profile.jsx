import React, { useEffect, useState } from 'react';
import { servieUrl } from "../../env/env";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ setUserType }) => {
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

        localStorage.setItem("userData",username);
        localStorage.setItem("Name",data.first_name)
        // Login successful, set the user's role
        setRole(data.role);
        setUserType(data.role);
        
      } else {
        // Login failed, display error message
        console.log(response)
        setShowSuccessPopup(true)
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
      localStorage.setItem("login","admin")
      navigate("/adminDashboard");
      window.location.reload()
    } else if (role === "2") {
    
      navigate("/page2");
    } else if (role === "3") {
      localStorage.setItem("login","user")
      
      navigate("/userDashboard");
      window.location.reload()

   
    }
  }, [role, navigate]);

  
 
  return (
    <>
    <div className="max-w-md mx-auto mt-8 p-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form >
        {/* Mobile Number/UserID */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
            Mobile Number/UserID
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
                onChange={(e) => setUsername(e.target.value)}
            className={`mt-1 p-2 w-full border rounded-md ${
              error.mobileNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error.mobileNumber && (
            <p className="text-red-500 text-sm mt-1">{error.mobileNumber}</p>
          )}
        </div>
 
        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 p-2 w-full border rounded-md ${
              error.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
        </div>
 
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
          onClick={() => {
            handleLogin();
          }}
          
        >
        
          Login
        </button>
      </form>
    </div>
    {showSuccessPopup && (

<div className="fixed inset-0 flex items-center justify-center z-10">

  <div className="bg-white p-8 rounded shadow-lg text-center">

    <h2 className="text-2xl font-semibold text-red-500 mb-4">

     Login UnScussessFul

    </h2>

    <p className="text-gray-700">

      your form will be approved as soon

      as possible.

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
};
 
export default LoginForm;