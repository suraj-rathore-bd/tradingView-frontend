import React, { useEffect, useState } from "react";
import "./editStock.css";

const EditStock = ({ isOpen, onClose, data, onSubmit }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  useEffect(() => {
    setFormData(data);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-end items-center">
                <button
                  className="modal-close p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4">
                <h2>Edit Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="buy_sell">Buy/Sell</label>
                      <select
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        name="buy_sell"
                        id="buy_sell"
                        value={formData?.buy_sell}
                        onChange={handleChange}
                      >
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="stock_name">Stock Name</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="stock_name"
                        id="stock_name"
                        value={formData?.stock_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="date"
                        name="date"
                        id="date"
                        value={formData?.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sell_price">Sell Price</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="sell_price"
                        id="sell_price"
                        value={formData?.sell_price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sell_quantity">Sell Quantity</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="sell_quantity"
                        id="sell_quantity"
                        value={formData?.sell_quantity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="buy_price">Buy Price</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="buy_price"
                        id="buy_price"
                        value={formData?.buy_price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="buy_quantity">Buy Quantity</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="buy_quantity"
                        id="buy_quantity"
                        value={formData?.buy_quantity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="amount">Amount</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="amount"
                        id="amount"
                        value={formData?.amount}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profit">Profit</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="profit"
                        id="profit"
                        value={formData?.profit}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="loss">Loss</label>
                      <input
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        type="text"
                        name="loss"
                        id="loss"
                        value={formData?.loss}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-actions mt-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditStock;
