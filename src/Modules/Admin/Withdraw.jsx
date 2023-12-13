import React, { useEffect, useState } from "react";

import { servieUrl } from "../../env/env";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("login") != "admin") {

      navigate("/loginandregister");

    }

  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.otpurl + "growadmin/stock_fund/";

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const apiData = await response.json();

        // Filter the data based on the search query
        const filteredData = apiData.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [searchQuery]); // Run the effect whenever searchQuery changes

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleDelete = async (itemId) => {
    try {
      // Replace with the actual API endpoint URL for deleting an item
      const apiUrl = `${servieUrl.otpurl}growadmin/stock_fund/${itemId}`;
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
      {/* Search input field */}
      <div className="w-full bg-[#ccfbf1] p-1 ">
        <div className="flex flex-col items-start sm:flex-row sm:items-center my-2 pl-2">
          <input
            type="text"
            placeholder="Search by Name.."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border rounded-md py-2 px-4 hover:border-blue-950"
          />
          <p className="text-2xl font-bold text-blue-500 mt-4 sm:mt-0 sm:ml-2 lg:pl-[380px]">
            Withdraw Data Table
          </p>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full border-4">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Date
              </th>

              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Name
              </th>

              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Account
              </th>

              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                IFCS
              </th>

              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                PAN CARD
              </th>

              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 bg-red-600 text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr className="border" key={item.id}>
                <td className="p-2 text-center ">{item.date}</td>

                <td className="p-2 text-center font-semibold bg-slate-300">
                  {item.name}
                </td>

                <td className="p-2 text-center">{item.Account_No}</td>

                <td className="p-2 text-center font-semibold bg-slate-300">
                  {item.ifsc}
                </td>

                <td className="p-2 text-center">{item.panNo}</td>

                <td className="p-2 text-center font-semibold bg-slate-300">
                  {item.price}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                    className="bg-blue-900 text-white px-2 py-1 rounded ml-2 hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Withdraw;
