import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./NavbarImages/logoNew.png";
import whatsapp from "./NavbarImages/whatsaap.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faArrowUpRightFromSquare,
  faLink,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PhoneButton from "../Modules/Main/PhoneButton";


const UserNavbar = ({setUserType}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuperAdminDropdown, setShowSuperAdminDropdown] = useState(false);
  const [showMyAccountDropdown, setShowMyAccountDropdown] = useState(false);

 const handleLogOut = () =>{
    setUserType("0");
    localStorage.removeItem("login")
    localStorage.removeItem("userData")
    setIsDrawerOpen(false) 
    debugger
    window.location.reload()
 }

  const toggleSuperAdminDropdown = () => {
    setShowSuperAdminDropdown(!showSuperAdminDropdown);
  };

  const toggleMyAccountDropdown = () => {
    setShowMyAccountDropdown(!showMyAccountDropdown);
  };

  return (
    <>
      <div className="bg-[#2774AE]">
        <div className="flex justify-between items-center px-5 md:px-20 py-3">
          <div className="flex">
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-5 w-5 text-white pr-3"
              />
              <span className="text-white font-semibold text-lg">
              info@Trading.com
              </span>
            </p>


            {/* <p className="pl-10">
              <FontAwesomeIcon
                icon={faPhone}
                className="h-5 w-5 text-white pr-3"
              />
              <span className="text-white font-semibold text-lg">
                8349227709
              </span>
            </p> */}


          </div>

          <div>
            <a
              href="https://www.moneycontrol.com/stocksmarketsindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="h-5 w-5 text-white pr-3 hover:cursor-pointer"
              />
              
            </a>
            <a
              href="https://www.moneycontrol.com/news/business/stocks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-4 w-4 text-white pr-3 hover:cursor-pointer"
              />
            </a>
           
             <a
              href="https://www.moneycontrol.com/portfolio-management/portfolio-investment-signup.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faNewspaper}
                className="h-4 w-4 text-white pr-3 hover:cursor-pointer"
              />
            </a>
           
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-5 md:px-10 py-2">
          <div className="">
            <Link to="/">
            <img src={LogoImage} className="w-[60px] h-[50px]"></img>
            
            </Link>
          </div>
          <div className="fixed left-4 bottom-3">
            <Link to="https://wa.me/918962163025?I want to Know more About this?">
              <img src={whatsapp} width="50" />
            </Link>
          </div>
          <PhoneButton/>

          <div className="hidden lg:flex space-x-5">
            <ul className="flex space-x-5">
              <li>
                <Link
                  to="/"
                  className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                  activeClassName="font-bold"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                  activeClassName="font-bold"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/service"
                  className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                  activeClassName="font-bold"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                  activeClassName="font-bold"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                  activeClassName="font-bold"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/fund"
                  className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                  activeClassName="font-bold"
                >
                  Funds
                </Link>
              </li>
            </ul>

            
            {/* My Account Dropdown */}
            <div className="relative">
              <button
                className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
                onClick={() =>setShowDropdown(!showDropdown)}
              >
              My Account <span className="ml-1">&#9660;</span>
              </button>

              {showDropdown && (
                <div className="absolute bg-blue-950 w-34 flex flex-col text-white hover:text-white cursor-pointer mt-2">
                   <p className="hover:bg-sky-500 hover:text-white border-b-2  m-2">
                        <Link
                          to="/userDashboard"
                          className="text-white "
                          // onClick={() => handleLogOut()}
                        >
                          UserDashboard
                        </Link>
                      </p>
                  <p className="hover:bg-sky-500 hover:text-white border-b-2  p-2 w-32">
                    <Link
                      to="/"
                      className="text-white "
                      onClick={() => handleLogOut()}
                    >
                      Logout
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:hidden">
            {/* Hamburger Icon */}
            <button
              className="text-black p-2 focus:outline-none"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer */}
          {isDrawerOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-[#059DC0] text-white p-4 transition-transform transform translate-x-0">
              <button
                className="text-white p-2 focus:outline-none absolute top-2 right-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-white text-xl hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-white text-xl hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service"
                    className="text-white text-xl hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Service
                  </Link>
                </li>

                <li>
                  <Link
                    to="/portfolio"
                    className="text-white text-xl hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link
                    to="/fund"
                    className="text-white text-xl hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Fund
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-white text-xl hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Contact
                  </Link>
                </li>

                
                <li>
                  <button
                    className="text-white text-xl hover:text-white relative"
                    onClick={toggleMyAccountDropdown}
                  >
                     My Account <span className="ml-1">&#9660;</span>
                  </button>

                  {showMyAccountDropdown && (
                    <div className="absolute bg-blue-950 w-40 flex flex-col text-white hover:text-white cursor-pointer">
                        <p className="hover:bg-sky-500 hover:text-white border-b-2  m-2">
                        <Link
                          to="/userDashboard"
                          className="text-white "
                          // onClick={() => handleLogOut()}
                        >
                          UserDashboard
                        </Link>
                      </p>
                      <p className="hover:bg-sky-500 hover:text-white border-b-2  m-2">
                        <Link
                          to="/"
                          className="text-white "
                          onClick={() => handleLogOut()}
                        >
                          Logout
                        </Link>
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
