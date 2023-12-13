import React from "react";
import img01 from "../../Assests/PrivacypageImages/bannerimg.jpg"

export default function PrivacyPolicy() {
  return (
    <>
    {/* banner start */}
    <div className="relative w-full h-64 md:h-96 lg:h-96">
        <img
          src={img01}
          alt="Banner"
          className=" object-cover w-full h-64 md:h-96 lg:h-96"
        />

        {/*banner-content */}

        <div className="absolute top-0 left-5 lg:left-20 right-0 bottom-0 text-white flex flex-col justify-center ">
          <div className="container mx-auto">
            <h1 className="text-lg md:text-5xl font-bold">Privacy & Policy</h1>

           
          </div>
        </div>
      </div>

      {/* banner end */}
      <h1 className="text-xl md:text-2xl lg:text-4xl mx-10 md:mx-16 lg:mx-20 font-bold mt-10 text-[#262566]">
        Privacy Policy
      </h1>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-10">
        <h1 className=" text-xl font-medium">1. Introduction</h1>

        <p className="text-medium mt-3">
          Welcome to Trading. We are committed to protecting
          your privacy and ensuring that your personal information is handled
          with care and in compliance with applicable data protection laws. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your personal information when you interact with our website,
          services, and products.
        </p>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">2. Information We Collect</h1>

        <ul>
          <li className="mt-3 text-medium ml-4 list-disc">
            <span className="text-xl font-medium">Personal Information :</span>{" "}
            We may collect personal information such as your name, email
            address, phone number, and other information you provide to us when
            you register for our Company, subscribe to our newsletter, or
            contact us through our website.
          </li>

          <li className="mt-3 text-medium ml-4 list-disc">
            <span className="text-xl font-medium">Usage Data :</span> We may
            collect information about your usage of our website, including your
            IP address, browser type, operating system, and pages visited. We
            may use cookies and similar technologies to collect this data.
          </li>
        </ul>
      </div>

      

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className="text-xl font-medium mt-3">
          3. Disclosure of Your Information
        </h1>

        <h1 className="text-lg mt-3 font-normal">
          We may share your personal information with third parties in the
          following circumstances:
        </h1>

        <ul>
          <li className="mt-3 text-medium ml-4 list-disc">
            With service providers and partners who assist us in delivering our
            services.
          </li>

          <li className="text-medium ml-4 list-disc">
            With law enforcement or regulatory authorities when required by law
            or to protect our rights and the rights of others.
          </li>
        </ul>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">4. Security</h1>

        <p className="text-medium  mt-3  ">
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          no method of transmission over the internet or electronic storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium mt-3">5. Your Trading</h1>

        <h1 className="text-lg mt-3 font-normal">You have the right to:</h1>

        <ul>
          <li className="mt-3 text-medium ml-4 list-disc">
            Access, update, or delete your personal information by contacting
            us.
          </li>

          <li className="text-medium ml-4 list-disc">
            Opt out of receiving marketing communications from us.
          </li>

          <li className="text-medium ml-4 list-disc">
            Disable cookies through your browser settings.
          </li>
        </ul>
      </div>

      <div className="mx-10 md:mx-16 lg:mx-20 mt-5">
        <h1 className=" text-xl font-medium">6. Contact Us</h1>

        <p className="text-medium mt-3">
          If you have any questions or concerns about these terms and
          conditions, please contact us at <b> info@Trading.com</b>.
        </p>

        <p className="text-medium mt-3">
          Thank you for using Trading.
        </p>
      </div>
    </>
  );
}
