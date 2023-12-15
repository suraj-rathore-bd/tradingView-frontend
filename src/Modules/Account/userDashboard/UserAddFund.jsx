import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { servieUrl } from "../../../env/env";
import React, { useEffect, useState } from "react";
import { AiOutlineDashboard, AiOutlineFundProjectionScreen, AiOutlineMoneyCollect, AiOutlineProfile, AiOutlineLock, AiOutlineLogout, AiOutlineCustomerService, AiOutlineHistory } from "react-icons/ai";
import { GiTrade } from "react-icons/gi";
import "../user.css"


import image5 from "../../../Assests/FundPageImages/QRcodeheading1.svg";

import image2 from "../../../Assests/FundPageImages/accountdetailheading1.svg";

import image4 from "../../../Assests/FundPageImages/Qrcodeimg1.svg";

import image3 from "../../../Assests/FundPageImages/UPIheading1.svg";

import image7 from "../../../Assests/FundPageImages/UPIdetail.svg";

import image8 from "../../../Assests/FundPageImages/bankaccount.svg";


import WithdrawForm from "../../Account/WithdrawForm";

import FundsPopup from "../../Account/FundsPopup";


 
const UserAddFund = () => {
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
 
 
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

  const [showFundsPopup, setShowFundsPopup] = useState(false);

 
  const openWithdrawForm = () => {

    setShowWithdrawForm(true);

  };
  const [data,setdata]=useState({})
 
useEffect(()=>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
   
    redirect: 'follow'
  };
  
  fetch(servieUrl.url + "rolebased/AccountDetails/", requestOptions)
    .then(response => response.json())
    .then(result => {
      setdata(result)
    })
    .catch(error => console.log('error', error));
},[])
  const openFundsPopup = () => {

    setShowFundsPopup(true);

  };
  return (
    <>
 
<div className="row">
<div className="min-h-screen flex   bg-gray-100">
      <div className="lg:w-1/4 bg-gray-100 p-5">
        <ul className="space-y-3">
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Dashboard" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Dashboard")}
          >
            <Link to="/UserDashboard" className="flex items-center">
              <AiOutlineDashboard className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Transaction" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Transaction")}
          >
            <Link to="/usertransaction" className="flex items-center">
              <BsFillClipboard2DataFill className="mr-2" />
              Transaction
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Fund" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Fund")}
          >
            <Link to="/user-fund" className="flex items-center">
              <AiOutlineFundProjectionScreen className="mr-2" />
             Add Fund
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Withdraw" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Withdraw")}
          >
            <Link to="/user-withdraw" className="flex items-center">
              <AiOutlineMoneyCollect className="mr-2" />
              Withdraw
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Now" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Now")}
          >
            <Link to="/trade-now" className="flex items-center">
              <GiTrade className="mr-2" />
              Trade Now
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Profile" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Profile")}
          >
            <Link to="/edit-profile" className="flex items-center">
              <AiOutlineProfile className="mr-2" />
            Edit  Profile
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Password" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Password")}
          >
            <Link to="/change-password" className="flex items-center">
              <AiOutlineLock className="mr-2" />
              Change Password
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Logout" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Logout")}
          >
            <Link to="/user-logout" className="flex items-center">
              <AiOutlineLogout className="mr-2" />
              Logout
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "Ticket" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("Ticket")}
          >
            <Link to="/support-ticket" className="flex items-center">
              <AiOutlineCustomerService className="mr-2" />
              Support Ticket
            </Link>
          </li>
          <li
            className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${selectedMenuItem === "History" ? "font-bold" : ""}`}
            onClick={() => handleMenuItemClick("History")}
          >
            <Link to="/payout-history" className="flex items-center">
              <AiOutlineHistory className="mr-2" />
              Payout History
            </Link>
          </li>
        </ul>
      </div>
    </div>
  <div className="col-lg-10 col-sm-12">
  <>
  <div className=" flex justify-center mt-10 ">

<button

  onClick={openWithdrawForm}

  className="border-2 border-[#034694] rounded-[4px] px-5 py-2 text-xl cursor-pointer"

>

  Withdraw

</button>

{/* <button

  onClick={openFundsPopup}

  className="border-2 border-[#034694] ml-5 rounded-[4px] px-5 py-2 text-xl cursor-pointer"

>

  Add Funds

</button> */}

</div>

{showWithdrawForm && (

<WithdrawForm

  isOpen={true}

  onClose={() => setShowWithdrawForm(false)}

/>

)}

{showFundsPopup && (

<FundsPopup isOpen={true} onClose={() => setShowFundsPopup(false)} />

)}

<div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  mx-5  md:mx-10 lg:mx-14  mt-5 md:mt-14   p-5">

<div className="">

  <div className="">

    <img src={image2}></img>

  </div>

  <div className="mt-10 flex justify-center ">

    <img src={image8}></img>

  </div>

  <ul className="mt-10 text-center text-lg">

    <li>

      <b>Name: </b> {data?.fields?.Name}{" "}

    </li>

    <li>

      <b>Account No: </b> {data?.fields?.AccountNO}{" "}

    </li>

    <li>

      {" "}

      <b>IFSC code: </b>  {data?.fields?.IfscCode}{" "}

    </li>

  </ul>

</div>



<div className="">

  <div className=" flex justify-center">

    <img src={image5}></img>

  </div>



  <div className="mt-10 ">

    <img src={data?.fields?.QRcodeImage}></img>

  </div>

</div>



<div className="">

  <div className="flex justify-center">

    <img src={image3}></img>

  </div>



  <div className="mt-10 flex justify-center">

    <img src={image7} className="  w-full md:w-4/5  h-auto"></img>

  </div>

  <ul className="mt-5  text-center  text-lg ">

    <li>
    
      <b>UPI ID: </b> {data?.fields?.UPIid}

    </li>

    <li>

      <b>Mobile Number: </b>{data?.fields?.mobileNumber}{" "}

    </li>

    <li>

      <b>Bank Name: </b> {data?.fields?.BankName}

    </li>

  </ul>

</div>

</div>
  
  </>
 
  </div>
  </div>
 
       
    </>
  );
};
 
export default UserAddFund;