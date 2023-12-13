import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import { useNavigate } from "react-router-dom";

const StockForm = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("login") != "admin") {

      navigate("/loginandregister");

    }

  }, []);

  const [formData, setFormData] = useState({
    type: "",

    buyPrice: "",

    sellPrice: "",

    amount: "",

    profit: "",

    stockName: "",

    buyQuantity: "",

    sellQuantity: "",

    loss: "",

    date: "",

    userEmail: "",
  });
  // useEffect(()=>{

  // },[formData?.type])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };


const amountUpdate=()=>{
  debugger
  var formdata = new FormData();
formdata.append("userEmail",formData.userEmail);
formdata.append("amount", formData.amount);
formdata.append("losss", formData.loss);
formdata.append("profit", formData.profit);
formdata.append("date", formData.date);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch(servieUrl.url+"rolebased/updateNewAmount/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


  const handleSubmit = (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("buy_sell", formData.type);
    formdata.append("stock_name", formData.stockName);
    formdata.append("date", formData.date);
    formdata.append("buy_price", formData.buyPrice);
    formdata.append("sell_price", formData.sellPrice);
    formdata.append("amount", formData.amount);
    formdata.append("profit", formData.profit);
    formdata.append("buy_quantity", formData.buyQuantity);
    formdata.append("sell_quantity", formData.sellQuantity);
    formdata.append("loss", formData.loss);
    formdata.append("user_email", formData.userEmail);
    amountUpdate()
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.otpurl + "growadmin/stock_form/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    //  alert("Submitted Successfully !")

    setFormData({
      type: "",

      buyPrice: "",

      sellPrice: "",

      amount: "",

      profit: "",

      stockName: "",

      buyQuantity: "",

      sellQuantity: "",

      loss: "",

      date: "",

      userEmail: "",
    });
    setRegistrationSuccess(true);

    // console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-300">
      <div className="bg-white p-6 rounded-md shadow-lg w-[900px] mt-3 ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="type"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Buy/Sell
              </label>

              <select
                name="type"
                id="type"
                className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                value={formData.type}
                required
              >
                <option value="" disabled>
                  Select
                </option>

                <option value="buy">Buy</option>

                <option value="sell">Sell</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="stockName"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Stock Name
              </label>

              <input
                type="text"
                name="stockName"
                id="stockName"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.stockName}
                required
              />
            </div>
{true?<div>
<div>
              <label
                htmlFor="buyPrice"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Buy Price
              </label>

              <input
                type="text"
                name="buyPrice"
                id="buyPrice"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.buyPrice}
                required
              />
            </div>

            <div>
              <label
                htmlFor="buyQuantity"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Buy Quantity
              </label>

              <input
                type="text"
                name="buyQuantity"
                id="buyQuantity"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.buyQuantity}
                required
              />
            </div>
</div>:null}
{true?<div>
<div>
              <label
                htmlFor="sellPrice"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Sell Price
              </label>

              <input
                type="text"
                name="sellPrice"
                id="sellPrice"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.sellPrice}
                required
              />
            </div>
            <div>
              <label
                htmlFor="sellQuantity"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Sell Quantity
              </label>

              <input
                type="text"
                name="sellQuantity"
                id="sellQuantity"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.sellQuantity}
                required
              />
            </div>
</div>:null}
           
            
            <div>
              <label
                htmlFor="amount"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Amount
              </label>

              <input
                type="text"
                name="amount"
                id="amount"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.amount}
                required
              />
            </div>
            
            <div>
              <label
                htmlFor="loss"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Loss
              </label>
              <input
                type="text"
                name="loss"
                id="loss"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.loss}
                required
              />
            </div>
            <div>
              <label
                htmlFor="profit"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Profit
              </label>
              <input
                type="text"
                name="profit"
                id="profit"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.profit}
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Date
              </label>

              <input
                type="date"
                name="date"
                id="date"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.date}
                required
              />
            </div>
            <div>
              <label
                htmlFor="userEmail"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                User Email
              </label>

              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"
                onChange={handleChange}
                value={formData.userEmail}
                required
              />
            </div>
          </div>
          {registrationSuccess && (
            <p className="text-green-500 m-2">
              Your Form successfully Submitted!
            </p>
          )}
          <div className="mt-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-white text-white hover:text-black border-2 border-blue-500 text-lg rounded-full w-[130px]   p-1 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockForm;
