import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./portfolio.css";
import {
  faAngleLeft,
  faAngleRight,
  faArrowTrendDown,
  faArrowTrendUp,
  faMoneyBill,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import FundsPopup from "./FundsPopup";
import EditStock from "../Admin/EditStock";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
const Portfolio = () => {
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [showFundsPopup, setShowFundsPopup] = useState(false);
  const [editData, setrEditData] = useState(null);
  const openFundsPopup = (value) => {
    debugger;
    setrEditData(value);
    setShowFundsPopup(true);
  };

  const [name, setName] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("login") == "user") {

  //     console.log("data",data)
  //     setData(
  //       data.filter((e) => e.user_email == localStorage.getItem("userData"))
  //     );
  //   }
  // }, [data]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.otpurl + "rolebased/userData/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        debugger;
        console.log("result ", result);
        setName(result[0].fields.first_name + " " + result[0].fields.last_name);
      })
      .catch((error) => console.log("error", error));
  }, []);
  const handleFormSubmit = (updatedData) => {
    // Handle the update logic here, e.g., send the updated data to your server
    debugger;
    console.log("Updated Data:", updatedData);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(updatedData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/UpdateStockData/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const [filter, setFilter] = useState({
    name: "",
    fromDate: "",
    endDate: "",
    quantity: "",
  });
  const filteredData = (e) => {
    const value1 = data.filter((item) => {
      const isNameMatch = filter.name
        ? item.stock_name.toLowerCase() === filter.name.toLowerCase()
        : true;
      const isFromDateMatch = filter.fromDate
        ? item.date >= filter.fromDate
        : true;
      const isEndDateMatch = filter.endDate
        ? item.date <= filter.endDate
        : true;
      const isQuantityMatch = filter.quantity
        ? item.buy_quantity == filter.quantity
        : true;

      return (
        isNameMatch && isFromDateMatch && isEndDateMatch && isQuantityMatch
      );
    });
    debugger;
    console.log(value1);
  };
  const [dataValue, setDataValue] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/loginandregister");
    }
  }, []);
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
    async function fetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.otpurl + "growadmin/stock_form/";

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        if (localStorage.getItem("login") == "user") {
          setData(
            data.filter((e) => e.user_email == localStorage.getItem("userData"))
          );
        } else {
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const [addfund, setAddfund] = useState([]);

  useEffect(() => {
    async function AddFundfetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.url + "growadmin/amount_account/";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setAddfund(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    AddFundfetchData();
  }, []);

  const [addData, setaddData] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = servieUrl.otpurl + "rolebased/UpdateAmountStatus/";

    // Make a GET request using fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setaddData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      // Replace with the actual API endpoint URL for deleting an item
      const apiUrl = `${servieUrl.otpurl}growadmin/stock_form/${itemId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: itemId }), // Pass the item ID to delete
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming successful deletion, you can remove the item from your state
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-200 p-4 w-full overflow-hidden">
        <div className="overflow-x-auto">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="5"
            className="text-md" // Adjust text size for responsiveness
          >
            <strong className="px-3">
              NIFTY 100 | Price:{" "}
              <span className="text-green-500 font-normal">19488.25 </span>
            </strong>
            <strong className="px-2">
              BAJAJHLDNG | Price:{" "}
              <span className="text-green-500 font-normal">6861.15</span>
            </strong>
            <strong className="px-3">
              MUTHOOTFIN | Price:{" "}
              <span className="text-green-500 font-normal">1251.45</span>
            </strong>
            <strong className="px-3">
              ZOMATO | Price:{" "}
              <span className="text-green-500 font-normal">114</span>
            </strong>
            <strong className="px-3">
              KOTAKBANK | Price:{" "}
              <span className="text-green-500 font-normal"> 1733.5</span>
            </strong>
            <strong className="px-3">
              NESTLEIND | Price:{" "}
              <span className="text-green-500 font-normal">24099.95</span>
            </strong>
            <strong className="px-3">
              INDUSINDBK | Price:{" "}
              <span className="text-green-500 font-normal">1448</span>
            </strong>
            <strong className="px-3">
              BERGEPAINT | Price:
              <span className="text-green-500 font-normal"> 572</span>
            </strong>
            <strong className="px-3">
              TCS | Price:{" "}
              <span className="text-green-500 font-normal">3450.4</span>
            </strong>
            <strong className="px-3">
              GODREJCP | Price:
              <span className="text-green-500 font-normal"> 980.25</span>
            </strong>
          </marquee>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-12 mt-8">
        <div className="  p-10 bg-red-500 text-white rounded-3xl ">
          <p className=" text-2xl md:text-4xl font-bold ">Welcome</p>
          <p className="mt-2">{name}</p>
          <p className=" text-2xl md:text-3xl font-semibold  mt-2">
            Profit & Loss Details
          </p>
        </div>

        <div className="  p-5  bg-slate-400 rounded-3xl">
          <p className="text-2xl  font-bold mt-3  "> Balance Status</p>

          <div className="flex  mt-5  ">
            <div>
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="h-10 w-10  p-4  bg-blue-600 rounded-full"
              />
            </div>

            <div className="font-bold mt-2  pl-5 ">
              {dataValue?.price}
              <br />
              <span className="font-bold text-lg "> PayAmount</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mt-5 p-5 bg-blue-200 shadow-xl rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className="h-8 w-8 p-3 bg-green-600 rounded-full "
              />
            </div>

            <div className="font-semibold  pl-5  ">
              {dataValue?.profit}
              <br />
              <span className="font-bold"> Profit</span>
            </div>
          </div>

          <div className="flex mt-5 p-5 bg-blue-200 shadow-xl rounded-lg  ">
            <div>
              <FontAwesomeIcon
                icon={faArrowTrendDown}
                className="h-8 w-8 p-3  bg-red-600 rounded-full "
              />
            </div>

            <div className="font-semibold  pl-5  ">
              {dataValue?.loss}
              <br />
              <span className="font-bold"> Loss</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-2xl md:text-3xl font-semibold mt-10  text-blue-500 text-center">
        CUSTOMER PORTFOLIO PROFIT AND LOSS DETAILS
      </div>

      <div className="bg-[#50e536] mt-5 p-5 ">
        <div className="text-xl font-semibold  text-center">WELCOME {name}</div>
      </div>

      {/* <div className="flex flex-wrap mx-5 mt-10  items-center justify-center">
        <p className="w-full sm:w-1/2 md:w-auto">
          <input
            type="text"
            placeholder="Filter by Name"
            className="w-full border border-gray-300 rounded-lg p-4 hover:border-indigo-600"
            value={filter.name}
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          />
        </p>
        <p className="w-full sm:w-1/2   md:w-auto sm:mx-3  mt-4 sm:mt-0  ">
          <input
            type="date"
            placeholder="Filter by From Date"
            className="w-full border border-gray-300 rounded-lg p-4 hover:border-indigo-600"
            value={filter.fromDate}
            onChange={(e) => setFilter({ ...filter, fromDate: e.target.value })}
          />
        </p>
        <p className="w-full sm:w-1/2   md:w-auto sm:mx-3  mt-4 sm:mt-0  ">
          <input
            type="date"
            placeholder="Filter by End Date"
            className="w-full border border-gray-300 rounded-lg p-4 hover:border-indigo-600"
            value={filter.endDate}
            onChange={(e) => setFilter({ ...filter, endDate: e.target.value })}
          />
        </p>
        <p className="w-full sm:w-1/2   md:w-auto sm:mx-3  mt-4 sm:mt-0  ">
          <input
            type="text"
            placeholder="Filter by Quantity"
            className="w-full border border-gray-300 rounded-lg p-4 hover:border-indigo-600"
            value={filter.quantity}
            onChange={(e) => setFilter({ ...filter, quantity: e.target.value })}
          />
        </p>
        <p className="w-full sm:w-1/2   md:w-auto sm:mx-3  mt-4 sm:mt-0  ">
          <button
            onClick={filteredData}
            id="apply-button"
            class="apply-button bg-blue-500   hover:bg-blue-900 text-white py-2 px-10 rounded-full "
          >
            Apply
          </button>
        </p>
      </div> */}

      <div className="overflow-x-auto mt-10">
        {data.length == 0 ? (
          <p className="py-2 text-center bg-orange-200">
            Please Buy some Stocks
          </p>
        ) : (
          <table className="w-full table-auto border-4 bg-sky-100">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">No</th>
                <th className="p-2">Date</th>
                <th className="px-2 p-2">StockName</th>
                <th className="p-2 ">Buy Price</th>
                <th className="p-2">Buy Qauntity</th>
                <th className="p-2 ">Sell Price</th>
                <th className="p-2">Sell Quantity</th>
                <th className="p-2">Buy/Sell</th>
                <th className="p-2">Profit/Loss</th>
                {localStorage.getItem("login") == "admin" ? (
                  <th className="p-2">Action</th>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr className="border-y border-black" key={item.id}>
                  <td className="p-2 text-center  ">{index + 1}</td>
                  <td className="p-2 text-center  ">{item.date}</td>
                  <td className="p-2 text-center bg-slate-200 font-semibold uppercase">
                    {item.stock_name}
                  </td>
                  <td className="p-2 text-center font-bold text-green-600  ">
                    {item.buy_price}
                  </td>
                  <td className="p-2 text-center bg-slate-200 font-semibold">
                    {item.buy_quantity}
                  </td>
                  <td className="p-2 text-center font-bold text-red-600">
                    {item.sell_price}
                  </td>
                  <td className="p-2 text-center bg-slate-200 font-semibold">
                    {item.sell_quantity}
                  </td>
                  <td className="p-1 text-center font-semibold capitalize ">
                    {item.buy_sell}
                  </td>
                  <td className="p-2 text-center bg-slate-200 font-semibold">
                    <div class="text-base">
                      <span class="bg-green-500 text-white rounded-full px-2 py-1 mr-2 profit-amount">
                        +{item.profit}
                      </span>
                      <span class="bg-red-500 text-white rounded-full px-2 py-1 loss-amount">
                        -{item.loss}
                      </span>
                    </div>
                  </td>
                  {localStorage.getItem("login") == "admin" ? (
                    <th className="p-2">
                      {" "}
                      <td className="p-2 text-center">
                        <button
                          onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                          className="   text-center  hover:cursor-pointer"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="h-4 w-4 text-black pr-3"
                          />
                        </button>
                      </td>
                      <td>
                        <button
                          variant="primary"
                          onClick={() => openFundsPopup(item)}
                        >
                          Edit
                        </button>
                        {/* You can also add a Delete button here */}
                      </td>
                    </th>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={handlePageClick}
        containerClassName={"pagination-container"}
        pageClassName={"pagination-page"}
        pageLinkClassName={"pagination-link"}
        activeClassName={"active"}
      />

      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="2"
        className="font-bold bg-teal-600 p-3 mt-2"
      >
        म्यूचुअल फंड बाज़ार से जुड़े निवेश हैं और इस तरह वे कभी पूरी तरह से
        सुरक्षित नहीं हो सकते हैं। हालांकि, जोखिम कम करने के लिए इन पर कई तरह के
        नियम लागू होते हैं और म्यूचुअल फण्ड में से पैसा कई क्षेत्रों में निवेश
        किया जाता है, इस तरह स्टॉक या बॉन्ड के मुकाबले इनमें कम जोखिम होता है।
      </marquee>

      <EditStock
        isOpen={showFundsPopup}
        onClose={() => setShowFundsPopup(false)}
        data={editData}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Portfolio;
