import React from "react";

import { useNavigate } from "react-router-dom";

import image1 from "../../Assests/ServicePageImages/Media.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faUsers, faBuilding } from "@fortawesome/free-solid-svg-icons";

import { FaCode } from "react-icons/fa";

import { FaBullhorn, FaSearch } from "react-icons/fa";

import { MdAssignmentTurnedIn } from "react-icons/md";

import { AiOutlineLineChart } from "react-icons/ai";

import { FaMoneyBillAlt } from "react-icons/fa";

const Service = () => {
  const history = useNavigate();

  const BuyNow = () => {
    if (localStorage.getItem("login") !== null) {
      //  history("/loginandregister");

      history("/contact");
    } else {
      history("/register");
    }
  };

  return (
    <>
      {/* Banner-section */}

      <div className="relative w-full h-64 md:h-96 lg:h-96">
        <img
          src={image1}
          alt="Banner"
          className=" object-cover w-full h-64 md:h-96 lg:h-96"
        />

        {/*banner-content */}

        <div className="absolute top-0 left-5 lg:left-20 right-0 bottom-0 text-white flex flex-col justify-center ">
          <div className="container mx-auto">
            <h1 className="text-lg md:text-5xl font-bold">Our Services</h1>

            <p className="mt-4 text-md md:text-xl font-semibold">
              Start Investing and Trading with Trading E’s Steps
            </p>
          </div>
        </div>
      </div>

      {/* services-card */}

      <div className="mt-12 md:mt-20">
        <h1 className="text-[#034694] text-2xl md:text-4xl font-bold mt-4 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">
          <div className="border-2 rounded-lg group hover:shadow-2xl p-10 cursor-pointer">
            <div className="">
              <MdAssignmentTurnedIn className="w-10 h-10 text-[#059DC0]" />
            </div>

            <h2 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">
              Easy Registration
            </h2>

            <p className="text-[#64666C] mt-4">
              Enter your Mobile Number & Register for FREE Trial.
            </p>
          </div>

          <div class="border-2 rounded-lg group hover:shadow-2xl p-10 cursor-pointer">
            <div class="">
              <FaSearch className="w-10 h-10 text-[#059DC0]" />
            </div>

            <h2 class="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">
              Explore
            </h2>

            <p class="text-[#64666C] mt-4">
              Discover all in ONE Automated platform
            </p>
          </div>

          <div class="border-2 rounded-lg group hover:shadow-2xl p-10 cursor-pointer">
            <div class="">
              <FaCode className="w-10 h-10 text-[#059DC0]" />
            </div>

            <h2 class="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">
              Execute
            </h2>

            <p class="text-[#64666C] mt-4">
              Trade/Invest through our integrated broking platform
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32  mt-10 md:mt-20">
          <div class="border-2 rounded-lg group hover:shadow-2xl p-10 cursor-pointer">
            <div class="">
              <AiOutlineLineChart className="w-10 h-10 text-[#059DC0]" />
            </div>

            <h2 class="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">
              Evaluation
            </h2>

            <p class="text-[#64666C] mt-4">
              Auto monitoring and live alert system
            </p>
          </div>

          <div class="border-2 rounded-lg group hover:shadow-2xl p-10 cursor-pointer">
            <div class="">
              <FaMoneyBillAlt className="w-10 h-10 text-[#059DC0]" />
            </div>

            <h2 class="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">
              Earn Money
            </h2>

            <p class="text-[#64666C] mt-4">Begin now to grow your wealth</p>
          </div>

          <div class="border-2 rounded-lg group hover:shadow-2xl p-10 cursor-pointer">
            <div class="">
              <FaBullhorn className="w-10 h-10 text-[#059DC0]" />
            </div>

            <h2 class="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">
              IN-House
            </h2>

            <p class="text-[#64666C] mt-4">
              Based on IN-House developed Intelligence System and data analytics
              filtrations
            </p>
          </div>
        </div>
      </div>

      {/* plan-card */}

     
    </>
  );
};

export default Service;
