import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import { useNavigate } from "react-router-dom";

function AccountDetails() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    accountNo: "",
    ifscCode: "",
    qrcodeImage: null,
    upiId: "",
    mobileNumber: "",
    bankName: "",
  });

  
  const [base64Image, setBase64Image] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBase64Image(e.target.result);

        if (e.target.result) {
          var formdata = new FormData();

          setFormData({
            ...formData,
            ["qrcodeImage"]: e.target.result,
          });
          debugger;
          formdata.append("image", e.target.result);
        }

        // console.log("base64",e.target.result)
      };

      reader.readAsDataURL(file);
    }

    console.log("base64", e.target.result);
  };
  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send data to a server
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    console.log("formdata", formDataToSubmit, formData);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/AccountDetails/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // alert("successfully submitted")
        setShowSuccessPopup(true);
      })
      .catch((error) => console.log("error", error));

    setFormData({
      name: "",
      accountNo: "",
      ifscCode: "",
      qrcodeImage: null,
      upiId: "",
      mobileNumber: "",
      bankName: "",
    });
    // Example: Send the formDataToSubmit to a server using fetch or Axios
    // fetch('your_server_endpoint', {
    //   method: 'POST',
    //   body: formDataToSubmit,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login") != "admin") {
      navigate("/loginandregister");
    }
  }, []);

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="accountNo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Account Number:
          </label>
          <input
            type="text"
            id="accountNo"
            name="accountNo"
            value={formData.accountNo}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ifscCode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            IFSC Code:
          </label>
          <input
            type="text"
            id="ifscCode"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="qrcodeImage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            QR Code Image:
          </label>
          <label className="custom-file-input mt-2">
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="upiId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            mobileNumber:
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="upiId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            UPI ID:
          </label>
          <input
            type="text"
            id="upiId"
            name="upiId"
            value={formData.upiId}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bankName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bank Name:
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">
              Registration Successful
            </h2>
            <p className="text-gray-700">
              Your request is successful and your form will be approved as soon
              as possible.
            </p>
            <div className="mt-6">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setShowSuccessPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountDetails;
