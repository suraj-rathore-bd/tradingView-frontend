import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { servieUrl } from "../../../env/env";
import React, { useEffect, useState } from "react";
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
import "../user.css";
import UserDashboard from "../UserDashboard";
const UserTradeNow = () => {
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

  const [formData, setFormData] = useState({
    stockSymbol: "",
    quantity: "",
    price: "",
  });

  const [tradeHistory, setTradeHistory] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.stockSymbol || !formData.quantity || !formData.price) {
      alert("Please fill out all fields.");
      return;
    }

    const trade = {
      stockSymbol: formData.stockSymbol,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
      timestamp: new Date().toLocaleString(),
    };

    setTradeHistory([trade, ...tradeHistory]);
    setFormData({
      stockSymbol: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <>
      <>
        <UserDashboard>
          <div className="py-md-5 py-3  flex items-center justify-center bg-gray-200">
            <div className="bg-gray-100 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
              <h2 className="text-2xl font-semibold mb-4">Trade Now</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="stockSymbol"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Stock Symbol
                  </label>
                  <input
                    type="text"
                    id="stockSymbol"
                    name="stockSymbol"
                    value={formData.stockSymbol}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-gray-100 px-4 py-2 border border-transparent rounded-md hover:border-blue-600  hover:bg-gray-100 hover:text-blue-600"
                >
                  Place Trade
                </button>
              </form>
              {!tradeHistory.length === 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Trade History</h3>
                  {tradeHistory.length === 0 ? (
                    <p>No trades placed yet.</p>
                  ) : (
                    <ul>
                      {tradeHistory.map((trade, index) => (
                        <li key={index} className="mb-2">
                          <span className="font-semibold">
                            {trade.stockSymbol}
                          </span>{" "}
                          - {trade.quantity} shares at ${trade.price} on{" "}
                          {trade.timestamp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </UserDashboard>
      </>
    </>
  );
};

export default UserTradeNow;
