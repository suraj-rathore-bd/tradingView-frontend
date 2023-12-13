import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login") != "admin") {
      navigate("/loginandregister");
    }
  }, []);

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694] mt-10">
        Welcome To Admin Page
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-center mt-5">
        Here is the link given below
      </h2>

      <div className="text-center mt-8">
        <Link to="/stockform">
          <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px]">
            Stock Form
          </button>
        </Link>

        <Link to="/withdraw">
          <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] ml-3">
            Withdraw Data
          </button>
        </Link>

        <Link to="/addfund">
          <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] md:ml-3 mt-4 md:mt-0">
            Add Fund
          </button>
        </Link>

        <Link to="/pendingrequest">
          <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] ml-3 mt-4 md:mt-0">
            Pending Request
          </button>
        </Link>

        <Link to="/AccountDetails">
          <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] ml-3 mt-4 md:mt-0">
            AccountDetails
          </button>
        </Link>
      </div>
    </>
  );
}
