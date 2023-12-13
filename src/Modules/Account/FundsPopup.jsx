import React from "react";
import image4 from "../../Assests/FundPageImages/Capture3.PNG";

const FundsPopup = ({ isOpen, onClose }) => {
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
                <img
                  src={image4}
                  alt="Funds Image"
                  className="w-[600px] h-auto "
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FundsPopup;
