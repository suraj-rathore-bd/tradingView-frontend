import React from 'react';

import phoneIcon from "../../Assests/PhoneImages/phoneimg1.png";

 

export default function PhoneButton() {

const phoneNumber = "+918962163025";

 

  return (

    <>

    <a href={`tel:${phoneNumber}`}

    className="fixed left-4 bottom-20 z-50 p-2 text-white focus:outline-none">

    <img src={phoneIcon} alt="Phone Icon" width="40px" height="40px" />

    </a>

    </>

  )

}