import React, { useState } from "react";

import bannerimg from "../../Assests/ContactPageImages/contact1.png";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { servieUrl } from "../../env/env";

const Contact = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [values, setValue] = useState({
    fname: "",

    lname: "",

    email: "",

    subject: "",

    message: "",
  });

  const [errors, setErrors] = useState({
    fname: "",

    lname: "",

    email: "",

    subject: "",

    message: "",
  });

  function inputHandle(event) {
    const { name, value } = event.target;

    setValue({
      ...values,

      [name]: value,
    });

    setErrors({
      ...errors,

      [name]: "",
    });
  }

  const validateForm = () => {
    const newErrors = {};

    if (values.fname.trim() === "") {
      newErrors.fname = "First name is required";
    }

    if (values.lname.trim() === "") {
      newErrors.lname = "Last name is required";
    }

    if (values.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(values.email)) {
      newErrors.email = "Invalid email address";
    }

    if (values.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }

    if (values.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  };

  const submitHandle = (s) => {
    s.preventDefault();

    if (validateForm()) {
      var formdata = new FormData();

      formdata.append("firstname", values.fname);

      formdata.append("lastname", values.lname);

      formdata.append("email", values.email);

      formdata.append("subject", values.subject);

      formdata.append("message", values.message);

      var requestOptions = {
        method: "POST",

        body: formdata,

        redirect: "follow",
      };

      fetch(
        servieUrl.otpurl + "main_contact/",

        requestOptions
      )
        .then((response) => response.json())

        .then((result) => {
          setShowSuccessPopup(true);
        })

        .catch((error) => console.log("error", error));

      // console.log(values)

      setValue({
        fname: "",

        lname: "",

        email: "",

        subject: "",

        message: "",
      });

      setRegistrationSuccess(true);
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <>
      {/* banner part start */}

      <div className="relative w-full h-64 md:h-96 lg:h-96">
        <img
          src={bannerimg}
          alt="Banner"
          className=" object-cover w-full h-64 md:h-96 lg:h-96"
        />

        {/*banner-content */}

        <div className="absolute top-0 left-5 lg:left-20 right-0 bottom-0 text-white flex flex-col justify-center ">
          <div className="container mx-auto">
            <h1 className="text-lg md:text-5xl font-bold">Contact Us</h1>

            <p className="mt-4 text-md md:text-xl font-semibold">
              Get in Touch with Our Stock Market Experts
            </p>
          </div>
        </div>
      </div>

      {/* Banner part End */}

      {/* Contact part start*/}

      <div className="flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">
          <div className="  bg-[#06b6d4] border rounded-xl shadow-top-md  px-8 py-10 ">
            <h1 className="text-3xl font-medium text-white leading-4">
              {" "}
              Get in Touch
            </h1>

            <p className="mt-8 text-justify text-md text-white">
              We will get back to you within 24 hours, or call us everyday
            </p>

            {/* <div className="flex mt-4  ">
              <FaFacebook className="text-white text-2xl mr-8  " />

              <FaTwitter className="text-white text-2xl  mr-8  " />

              <FaInstagram className="text-white text-2xl mr-4 " />
            </div> */}

            <div className="text-white pt-4">
              <h1 className="text-2xl mt-2 text-white font-mono">
                {" "}
                Sales Support
              </h1>

              <ul className=" text-start p-2">
                <li>1st 1/27 Noida Sector C Gautam Buddha nagar 201309 UP.</li>

                <li>info@Trading.com</li>
              </ul>

              <h1 className="text-2xl mt-2 text-white font-mono">
                {" "}
                Technical Support
              </h1>

              <ul className=" text-start p-2">
                <li> 1st 1/27 Noida Sector C Gautam Buddha nagar 201309 UP.</li>

                <li>info@Trading.com</li>
              </ul>
            </div>
          </div>

          <div className="bg-white  lg:col-span-2 shadow-top-md px-0 sm:px-20  md:px-20  lg:px-20  ">
            <h4 className="text-2xl md:text-4xl font-bold text-[#034694]">
              Request A Quote
            </h4>

            <p className="mt-4 font-medium">
              We will get back to you within 24 hours, or call us everyday{" "}
            </p>

            <form>
              <div className="grid grid-cols-2 gap-3 pb-2 pt-5">
                <input
                  type="text"
                  className="mt-1 px-2 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 col-span-2 md:col-span-1 "
                  placeholder="Fast Name"
                  onChange={inputHandle}
                  name="fname"
                  value={values.fname}
                />

                <input
                  type="text"
                  className="mt-1 px-2 py-3  bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 col-span-2 md:col-span-1"
                  placeholder="Last Name"
                  onChange={inputHandle}
                  name="lname"
                  value={values.lname}
                />

                <span className="text-red-500 x">{errors.fname}</span>

                <span className="text-red-500">{errors.lname}</span>

                <input
                  placeholder="Email"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="email"
                  value={values.email}
                />
                <span className="text-red-500">{errors.email}</span>

                <input
                  placeholder="Subject"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="subject"
                  value={values.subject}
                />
                <span className="text-red-500">{errors.subject}</span>

                <textarea
                  placeholder="Your Message"
                  cols="2"
                  rows="4"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="message"
                  value={values.message}
                />
                <span className="text-red-500">{errors.message}</span>
              </div>
              {registrationSuccess && (
                <p className="text-green-500 mb-2">
                  Your details has been successfully Submitted!
                </p>
              )}

              <button
                type="submit"
                onClick={submitHandle}
                class="bg-[#06b6d4] hover:bg-white text-white hover:text-black border-2 border-blue-500 text-lg  font-bold rounded-full w-[140px]  h-[40px] p-1 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.098489541257!2d77.51388777976233!3d28.476580428639917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea87005fd0ab%3A0x2642698644c6f56a!2sc%2C%20F-127%2C%201st%20St%2C%20Pocket%20F%2C%20Block%20F%2C%20Sector%20Alpha%20II%2C%20Greater%20Noida%2C%20Brahmpur%20Rajraula%20Urf%20Nawada%2C%20Uttar%20Pradesh%20201308!5e0!3m2!1sen!2sin!4v1695711374522!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className=" p-4 rounded-md mt-5"
      ></iframe>
       {showSuccessPopup && (

<div className="fixed inset-0 flex items-center justify-center z-10">

  <div className="bg-white p-8 rounded shadow-lg text-center">

    <h2 className="text-2xl font-semibold text-green-500 mb-4">

     Contact Form 

    </h2>

    <p className="text-gray-700">

     Contact form successfully submitted

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
    </>
  );
};

export default Contact;
