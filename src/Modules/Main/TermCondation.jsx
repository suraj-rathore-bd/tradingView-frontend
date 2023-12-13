import React from "react";
import img02 from "../../Assests/TermsPageImages/termimg.jpg"

export default function TermCondition() {
  return (
    <>
    {/* banner start */}
    <div className="relative w-full h-64 md:h-96 lg:h-96">
        <img
          src={img02}
          alt="Banner"
          className=" object-cover w-full h-64 md:h-96 lg:h-96"
        />

        {/*banner-content */}

        <div className="absolute top-0 left-5 lg:left-20 right-0 bottom-0 text-white flex flex-col justify-center ">
          <div className="container mx-auto">
            <h1 className="text-lg md:text-5xl font-bold"></h1>

           
          </div>
        </div>
      </div>
      {/* banner end */}
      <h1 className="text-xl md:text-2xl lg:text-4xl mx-10 md:mx-16 lg:mx-20 font-bold mt-10 text-[#262566]">
        Terms and Conditions
      </h1>

      <p className="mt-4 mx-10 md:mx-16 lg:mx-20 text-medium font-normal">
        By accessing and using the services provided by Trading,
        you agree to comply with and be bound by the following terms and
        conditions. Please read these terms carefully before using our website,
        services, or products.
      </p>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">1. Acceptance of Terms</h1>

        <p className="text-medium mt-3">
          By using our website, enrolling in our courses, or accessing our
          services, you acknowledge that you have read, understood, and agree to
          abide by these terms and conditions. If you do not agree with any part
          of these terms, you should not use our services.
        </p>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">2. User Registration</h1>

        <p className="text-medium mt-3">
          2.1. To access certain features or courses, you may be required to
          register and create an account. You agree to provide accurate and
          complete information during the registration process.
        </p>

        <p className="text-medium mt-3">
          2.2. You are responsible for maintaining the confidentiality of your
          account login credentials and for all activities that occur under your
          account. You must notify us immediately of any unauthorized access to
          your account or any other security breaches.
        </p>
      </div>

      

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">3. Payment and Refund Policy</h1>

        <p className="text-medium mt-3">
          3.1. Payment for our courses and services is required in accordance
          with the pricing and payment terms specified on our website or in any
          applicable agreement.
        </p>

        <p className="text-medium mt-3">
          3.2. We do not guarantee refunds for course fees, but refunds may be
          considered on a case-by-case basis and in accordance with our refund
          policy, if applicable.
        </p>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">
          4. Governing Law and Jurisdiction
        </h1>

        <p className="text-medium mt-3">
          These terms and conditions shall be governed by and construed in
          accordance with the laws of bangalore. Any disputes arising from or
          relating to these terms and conditions shall be subject to the
          exclusive jurisdiction of the courts located within bangalore.
        </p>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">
          5. Changes to Terms and Conditions
        </h1>

        <p className="text-medium mt-3">
          We reserve the right to update or modify these terms and conditions at
          any time. The most recent version will be posted on our website, and
          the date of the latest revision will be indicated at the top of the
          page.
        </p>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">6. Contact Us</h1>

        <p className="text-medium mt-3">
          If you have any questions or concerns about these terms and
          conditions, please contact us at <b>  info@Trading.com</b>.
        </p>

        <p className="text-medium mt-3">
          Thank you for using Trading.
        </p>
      </div>
    </>
  );
}
