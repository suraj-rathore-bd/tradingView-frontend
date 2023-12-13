import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import { Link } from "react-router-dom";

const Userfund = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    date: "",
    price: "",
    loss: "",
    profit: "",
    userEmail: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
 const [disableInput,setDisable]=useState(false)

useEffect(()=>{
  var formdata = new FormData();

  var requestOptions = {
    method: 'GET',
    // body: formdata,
    redirect: 'follow'
  };
  
  fetch(servieUrl.url+"rolebased/UpdateAmountStatus", requestOptions)
    .then(response => response.json())
    .then(result => {setTableData(result)})
    .catch(error => console.log('error', error));
},[])
  // useEffect(() => {
  //   const storedTableData = JSON.parse(localStorage.getItem("tableData"));
  //   if (storedTableData) {
  //     setTableData(storedTableData);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tableData", JSON.stringify(tableData));
  // }, [tableData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("date", formData.date);
    formdata.append("price", formData.price);
    formdata.append("loss", formData.loss);
    formdata.append("profit", formData.profit);
    formdata.append("user_email", formData.userEmail);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(servieUrl.otpurl + "growadmin/amount_account/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // alert("Submitted Successfully !")

    if (editingIndex !== null) {
      // Update existing row if in edit mode
      const updatedTableData = [...tableData];
      updatedTableData[editingIndex] = {
        No: editingIndex + 1,
        Date: formData.date,
        price: formData.price,
        Profit: formData.profit,
        Loss: formData.loss,
        Email: formData.userEmail,
      };
      setTableData(updatedTableData);
      setEditingIndex(null);
    } else {
      // Create a new entry with the form data
      const newEntry = {
        No: tableData.length + 1,
        Date: formData.date,
        price: formData.price,
        Profit: formData.profit,
        Loss: formData.loss,
        Email: formData.userEmail,
      };
      setTableData([...tableData, newEntry]);
    }
    console.log(formData);
    // Reset the form
    setFormData({
      date: "",
      price: "",
      loss: "",
      profit: "",
      userEmail: "",
    });

    setIsOpen(false);
  };
  const handleUpdate=(e)=>{
    e.preventDefault()
    debugger
    const selectedRow = tableData[editingIndex];
    var formdata = new FormData();
    formdata.append("price", formData.price);
    formdata.append("date", formData.date);
    formdata.append("loss", formData.loss);
    formdata.append("profit",formData.profit );
    formdata.append("user_email",formData.userEmail );
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(servieUrl.url+"rolebased/UpdateAmountStatus/", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert("successfully updated")
      })
      .catch(error => console.log('error', error));
  }

  const handleEdit = (index) => {
    setDisable(true)
    debugger
    // Set the form data to the selected row for editing
    const selectedRow = tableData[index];
    setFormData({
      date: selectedRow.fields.date,
      price: selectedRow.fields.price,
      loss: selectedRow.fields.loss,
      profit: selectedRow.fields.profit,
      userEmail: selectedRow.fields.user_email,
    });
    setEditingIndex(index);
    setIsOpen(true);
  };
  

  const handleDelete = (index) => {
    // Remove the selected row from the table data
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };
  return (
    <>
    

      <div className="flex items-center justify-center mt-2 p-10 bg-blue-200 ">
    
          <Link to ="/fund">
             <button
              className="bg-blue-500 hover:bg-white text-white hover:text-black border-2 border-blue-500 text-lg rounded-full w-[130px]   p-1 transition duration-300 ease-in-out"
            >Add New </button>
      </Link>
      </div>

      {/* balance status */}
      <div className="bg-gray-200 p-4 shadow-md mt-4">
        <div className="text-3xl font-bold mb-2 text-blue-500 text-center">
          Balance Status
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto ">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2">No.</th>
              <th className="p-2">Date</th>
              <th className="p-2 ">Pay Amount</th>
              <th className="p-2">Profit</th>
              <th className="p-2">Loss</th>
              <th className="p-2">Email</th>
              {/* <th className="p-2">Action</th> */}
            </tr>
          </thead>

          <tbody>
            {tableData?.map((row, index) => (
              <tr key={index} className="border">
                <td className="p-2 text-center">{index+1}</td>
                <td className="p-2 text-center">{row.fields?.date}</td>
                <td className="p-2 text-center bg-slate-400 text-white">
                  {row.fields?.price}
                </td>
                <td className="p-2 text-center bg-green-500 text-white">
                  {row.fields?.profit}
                </td>
                <td className="p-2 text-center bg-red-500 text-white">
                  {row.fields?.loss}
                </td>
                <td className="p-2 text-center">{row.fields?.user_email}</td>
                {/* <td className="p-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Userfund;
