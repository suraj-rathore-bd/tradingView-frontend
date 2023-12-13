import React, { useEffect, useState } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
import { servieUrl } from "../../env/env";
import "tailwindcss/tailwind.css";
import ReactPaginate from "react-paginate";
import "./pendingRequest.css"
const PendingRequest = () => {
  const [pendingRequest, setPendingRequest] = useState([]);
  const [conditiion, seteCondition] = useState(true);
 const [popup,setpop]=useState(false)
 const [editData,setEditData]=useState(null)
  

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
 const [formData, setFormData] = useState({
  email: "",
  bankaccount: "",
  pancard: "",
  phone_number: "",
  aadhaarCardNumber: "",
  first_name: "",
  last_name: "",
});


const reject =(value)=>{
  var formdata = new FormData();
formdata.append("email", value);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch(servieUrl.otpurl + "rolebased/reject/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  alert("successfully Rejected ")
}

  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("login") != "admin") {

      navigate("/loginandregister");

    }

  }, []);

  const [newData,setNewData]=useState([])
  const newMethod=()=>{
    var formdata = new FormData();
   
  var requestOptions = {
    method: 'GET',
   
    redirect: 'follow'
  };
   
  fetch( servieUrl.otpurl + "rolebased/PasswordUpdate/", requestOptions)
    .then(response => response.json())
    .then(result => {
      setNewData(result.map(result=>result.fields))
    })
    .catch(error => console.log('error', error));
  }
  const handleSubmit = (e) => {
    setpop(false)
    e.preventDefault();
debugger

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  ...formData
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(  servieUrl.otpurl +"rolebased/accountUpdate/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
console.log(formData)
  };
const editValue=(value)=>{
  debugger
  setpop(true)
  const  editData=displayedItems.filter(result=>result.fields.email==value)
  setFormData({
    email: editData[0]?.fields.email,
    bankaccount: editData[0]?.fields.bankaccount,
    pancard: editData[0]?.fields.pancard,
    phone_number: editData[0]?.fields.phone_number,
    aadhaarCardNumber: editData[0]?.fields.aadhaarCardNumber,
    first_name: editData[0]?.fields.first_name,
    last_name: editData[0]?.fields.last_name,
  });
  console.log(editData)
}

  const updateValue = (value) => {
    seteCondition(!conditiion);
    var formdata = new FormData();
    formdata.append("userEmail", value);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/pendingRequest/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Handle the response as needed
      })
      .catch((error) => console.log("error", error));
    alert("Successfully updated");
  };

  useEffect(() => {
    newMethod()
    var formdata = new FormData();
    formdata.append("userEmail", "anujweb123@gmail.com");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/pendingRequest/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPendingRequest(result);
      })
      .catch((error) => console.log("error", error));
  }, [conditiion,popup]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = pendingRequest.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-hidden">
      {
        !popup? <div className="container mx-auto px-4 py-8 ">
        <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 ">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Email</th>
              <th className="p-2">Aadhaar Card</th>
              <th className="p-2">Bank Account</th>
              <th className="p-2">Pancard</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Password</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((result) => (
              <tr key={result.pk} className="text-center">
                <td className="p-2">{result.fields.email}</td>
                <td className="p-2">{result.fields.aadhaarCardNumber}</td>
                <td className="p-2">{result.fields.bankaccount}</td>
                <td className="p-2">{result.fields.pancard}</td>
                <td className="p-2">{result.fields.phone_number}</td>
                <td className="p-2">{newData.find(entry => entry.Email === result.fields.email)?.Password}</td>
                <td className="p-2">
                  {result.fields.is_active ? (
                    <>
                      <span className="text-green-600">Approved</span>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full ml-2"
                        onClick={() => reject(result.fields.email)}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full ml-2"
                      onClick={() => updateValue(result.fields.email, true)}
                    >
                      Approve
                    </button>
                  )}
                   <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full ml-2"
                        onClick={() => editValue(result.fields.email)}
                      >
                        Edit
                      </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {/* Pagination */}
        <div className="my-4 flex justify-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(pendingRequest.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            pageLinkClassName={"rounded-full border px-2 py-1 m-1"}
          />
        </div>
      </div>:<div className="flex items-center justify-center  bg-blue-300  ">
        {popup && (
          <form
            className="bg-white p-4 shadow-md rounded-md  w-[500px] mt-5 mb-5"
            // onSubmit={handleSubmit}
          >
           
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
                email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2 "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bankaccount"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
                bankaccount
              </label>
              <input
                type="text"
                id="bankaccount"
                name="bankaccount"
                value={formData.bankaccount}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="pancard"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
                pancard
              </label>
              <input
                type="text"
                id="pancard"
                name="pancard"
                value={formData.pancard}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone_number"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
               phone_number
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                
                value={formData.phone_number}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="aadhaarCardNumber"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
               aadhaarCardNumber
              </label>
              <input
                type="text"
                id="aadhaarCardNumber"
                name="aadhaarCardNumber"
                
                value={formData.aadhaarCardNumber}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
               first_name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                
                value={formData.first_name}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last_name"
                className="block text-lg text-gray-600 font-bold mb-1"
              >
               last_name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                
                value={formData.last_name}
                onChange={handleInputChange}
                className=" border rounded-md py-2  w-full hover:bg-gray-100 p-2"
              />
            </div>
           
              
              <button
             onClick={handleSubmit}
              className="bg-blue-500 hover:bg-white text-white hover:text-black border-2 border-blue-500 text-lg rounded-full w-[130px]   p-1 transition duration-300 ease-in-out"
            >Update</button>
{/*            
            {registrationSuccess && (

              <p className="text-green-500 mb-2">Your Form successfully Submitted!</p>

            )} */}
          </form>
        )}
      </div>
      }
   

    
    </div>
  );
};

export default PendingRequest;
