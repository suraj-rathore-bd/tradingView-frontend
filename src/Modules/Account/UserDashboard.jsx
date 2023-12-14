import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";

const UserDashboard = () => {
  

  return (
    <>
        <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  mx-10 md:mx-10 lg:mx-28 gap-10 mt-10">
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">ACTIVE CUSTOMERS</h2>
            <h1 className="font-bold">79</h1>
          </div>
          <span className="ml-4">
            <IoPerson className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">BLOCKED CUSTOMERS</h2>
            <h1 className="font-bold">0</h1>
          </div>
          <span className="ml-4">
            <IoPerson className="text-5xl text-red-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL BLOGS</h2>
            <h1 className="font-bold">3</h1>
          </div>
          <span className="ml-4">
            <MdLibraryBooks className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL TRADE METHOD</h2>
            <h1 className="font-bold">79</h1>
          </div>
          <span className="ml-4">
            <MdLibraryBooks className="text-5xl text-green-500" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  gap-10 mx-10 md:mx-10 lg:mx-28  mt-10">
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL DEPOSITS</h2>
            <h1 className="font-bold">177</h1>
          </div>
          <span className="ml-4">
            <BsFillClipboard2DataFill className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL DEPOSIT AMOUNT</h2>
            <h1 className="font-bold">664087.86$</h1>
          </div>
          <span className="ml-4">
            {" "}
            <FaDollarSign className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm"> TOTAL WITHDRAW AMOUNT</h2>
            <h1 className="font-bold">1556.11$</h1>
          </div>
          <span className="ml-4">
            {" "}
            <FaDollarSign className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL WITHDRAW CHARGE AMOUNT</h2>
            <h1 className="font-bold">56.19$</h1>
          </div>
          <span className="ml-4">
            {" "}
            <FaDollarSign className="text-5xl text-green-500" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 mx-10 md:mx-10 lg:mx-28  mt-10 gap-10">
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL REFERRAL BONUS</h2>
            <h1 className="font-bold">10$</h1>
          </div>
          <span className="ml-4">
            {" "}
            <FaDollarSign className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL BALANCE TRANSFER</h2>
            <h1 className="font-bold">6</h1>
          </div>
          <span className="ml-4">
            <BsFillClipboard2DataFill className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL BALANCE TRANSFER AMOUNT</h2>
            <h1 className="font-bold ">3440$</h1>
          </div>
          <span className="ml-4">
            <BsFillClipboard2DataFill className="text-5xl text-green-500" />
          </span>
        </div>
        <div className="shadow-lg p-10 flex items-center">
          <div>
            <h2 className="text-sm">TOTAL TRADES</h2>
            <h1 className="font-bold">323</h1>
          </div>
          <span className="ml-4">
            <BsFillClipboard2DataFill className="text-5xl text-green-500" />
          </span>
        </div>
      </div>
    </>

    </>
  );
};

export default UserDashboard;
