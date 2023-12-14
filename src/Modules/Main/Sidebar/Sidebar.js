// AdminPanel.jsx
import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
const LeftSidebar = ({ onItemClick, onDropdownItemClick, selectedNavItem, dropdownStates }) => {
  const navItems = [
    'Dashboard',
    'Transaction',
    'Add Fund',
    // Add other sidebar items here
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul>
        {navItems.map((item) => (
          <li
            key={item}
            className={`mb-2 cursor-pointer hover:text-gray-300 ${
              selectedNavItem === item ? 'text-blue-500' : ''
            }`}
            onClick={() => onItemClick(item)}
          >
            {item === 'Dashboard' && (
              <div className="relative">
                <div
                  onClick={() => onDropdownItemClick('dashboard')}
                  className="cursor-pointer hover:text-gray-300"
                >
                  {item}
                </div>
                {dropdownStates.dashboard && (
                  <ul className="ml-4">
                    <li>
                      <a href="#" className="hover:text-gray-300">
                        TotalStock
                      </a>
                    </li>
                    {/* Add other dropdown items here */}
                  </ul>
                )}
              </div>
            )}
            {item !== 'Dashboard' && <div>{item}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RightContent = ({ selectedNavItem }) => {
  // Render content based on the selectedNavItem
  switch (selectedNavItem) {
    case 'Dashboard':
      return <DashboardContent />;
    case 'Transaction':
      return <TransactionContent />;
    case 'Add Fund':
      return <AddFundContent />;
    // Add cases for other sidebar items
    default:
      return <div>Select an item from the sidebar</div>;
  }
};

const DashboardContent = () => {
  // Implement your Dashboard content here
  return   <>
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
</>;
};

const TransactionContent = () => {
  // Implement your Transaction content here
  return <div>Transaction Content</div>;
};

const AddFundContent = () => {
  // Implement your Add Fund content here
  return <div>Add Fund Content</div>;
};

const AdminPanel = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [dropdownStates, setDropdownStates] = useState({
    dashboard: false,
    // Add other dropdown states here
  });

  const handleItemClick = (item) => {
    setSelectedNavItem(item);
    // Close all dropdowns when clicking on a new sidebar item
    setDropdownStates({
      dashboard: false,
      // Close other dropdowns here
    });
  };

  const handleDropdownItemClick = (dropdownItem) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownItem]: !prevState[dropdownItem],
    }));
  };

  return (
    <div className="flex">
      <LeftSidebar
        onItemClick={handleItemClick}
        onDropdownItemClick={handleDropdownItemClick}
        selectedNavItem={selectedNavItem}
        dropdownStates={dropdownStates}
      />
      <RightContent selectedNavItem={selectedNavItem} />
    </div>
  );
};

export default AdminPanel;
