import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";

import React, { Children, useEffect, useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
  AiOutlineProfile,
  AiOutlineLock,
  AiOutlineLogout,
  AiOutlineCustomerService,
  AiOutlineHistory,
} from "react-icons/ai";
import { GiTrade } from "react-icons/gi";
import "../../Account/user.css";
import { servieUrl } from "../../../env/env";
import UserDashboard from "../UserDashboard";

const DashboardUser = ({ Children }) => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
    debugger;
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: AiOutlineDashboard },
    { name: "Transaction", icon: BsFillClipboard2DataFill },
    { name: "Add Fund", icon: AiOutlineFundProjectionScreen },
    { name: "Withdraw", icon: AiOutlineMoneyCollect },
    { name: "Trade Now", icon: GiTrade },
    { name: "Edit Profile", icon: AiOutlineProfile },
    { name: "Change Password", icon: AiOutlineLock },
    { name: "Logout", icon: AiOutlineLogout },
    { name: "Support Ticket", icon: AiOutlineCustomerService },
    { name: "Payout History", icon: AiOutlineHistory },
  ];

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
    // You can perform additional actions here if needed
  };

  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/loginandregister");
    }
  }, [navigate]);
  const [dataValue, setDataValue] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/UserAmountStatus/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let totalProfit = 0;
        let totalLoss = 0;
        let totalPrice = 0;

        // Loop through the data array
        result.forEach((item) => {
          const { profit, loss, price } = item.fields;
          // Add the profit, loss, and price values to the corresponding totals
          totalProfit += Number(profit);
          totalLoss += Number(loss);
          totalPrice += Number(price);
        });

        // Create an object to store the total values
        const result1 = {
          profit: totalProfit,
          loss: totalLoss,
          price: totalPrice,
        };
        debugger;
        setDataValue(result1);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));
    debugger;

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/uploadProfile/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProfile(result);
      })
      .catch((error) => console.log("error", error));
    console.log(profile);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64Image(e.target.result);

        if (e.target.result) {
          var formdata = new FormData();
          formdata.append("userEmail", localStorage.getItem("userData"));
          formdata.append("image", e.target.result);
          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
          };

          fetch(servieUrl.url + "rolebased/uploadProfile/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              alert("successfully update image");
            })
            .catch((error) => console.log("error", error));
        }
        // console.log("base64",e.target.result)
      };
      reader.readAsDataURL(file);
    }

    console.log("base64", e.target.result);
  };

  return (
    <>
      <UserDashboard>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  mx-10 md:mx-10 lg:mx-28 gap-10 m-2">
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  gap-10 mx-10 md:mx-10 lg:mx-28  m-2">
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 mx-10 md:mx-10 lg:mx-28  m-2 gap-10">
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
      </UserDashboard>
    </>
  );
};

export default DashboardUser;
