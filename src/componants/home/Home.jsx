import React from "react";
import { Link } from "react-router-dom";
import part3Img from "../assets/banner1.jpeg"
import graph from '../assets/graph1.jpg'
import "./home.css";
import { CiSettings } from "react-icons/ci";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaQuoteLeft } from "react-icons/fa";


const Home = () => {

  const homeSlideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    homeSlideSettings.slidesToShow = 1;
  }


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.RyzbhkGLpqnY7xCmh0qRnQHaEK?rs=1&pid=ImgDetMain',
      title: 'PortFolio Managemane',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.3GVwNFYjNt_-r4Wr_zCcCgHaEH?w=1024&h=570&rs=1&pid=ImgDetMain',
      title: 'Tax Consultancy',
      paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna nisi ut aliquip ex ea commodo consequat',
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.RyzbhkGLpqnY7xCmh0qRnQHaEK?rs=1&pid=ImgDetMain',
      title: 'IUnvertency Mangement',
      paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const logos = [
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    'https://www.bing.com/th?id=OIP.D6P-BO32wCApcPIIjt6p5wAAAA&pid=3.1&cb=&w=300&h=300&p=0',
    // Add more logo URLs as needed
  ];

  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* banner */}
      <div className="home-banner-section" id="home-banner-parallax">
        {/* <NavigationBar /> */}
        <div className="text-white pt-36 md:pt-40 px-5  md:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-3xl font-semibold  leading-[60px]">
            Trading Views
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">
            We Bring the Good
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">
            Financial to your life
          </h1>

          <p className="w-full flex sm:w-80 md:w-96 mt-4">
            <h1 className="">_________________</h1>
            <p className="pl-10">
              {" "}
              Empowering your financial success through personalized advice and
              creating a wealth strategy tailored to your unique circumstances
              is a pivotal step towards achieving your financial goals.
            </p>
          </p>

          <Link to="/contact">
            <button
              style={{
                transition: "transform 0.5s",
              }}
              className="text-black rounded-[4px] px-6 py-2 border-2 bg-white border-[#05BFDB] ml-5 mt-4 
          home-hover-button2"
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
      {/* banner */}
      {/* part1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-10 md:mx-20 lg:mx-20 mt-20">
        <div class="rounded-lg shadow-2xl p-10">
          <div class="flex items-center justify-center">
            <CiSettings className="w-10 h-10 text-[#31abfc]" />
          </div>

          <h2 class="text-xl font-semibold text-center text-[#262566] mt-5">
            Strategic Block
          </h2>

          <p class="mt-5 text-center text-gray-600">
            Consectetur adipiscing elit sed do eiusm onsectetur adipiscing elit.
          </p>
        </div>

        <div class="rounded-lg shadow-2xl p-10">
          <div class="flex items-center justify-center">
            <CiSettings className="w-10 h-10 text-[#31abfc]" />
          </div>

          <h2 class="text-xl font-semibold text-center text-[#262566] mt-5">
            Sales Increase
          </h2>

          <p class="text-gray-600 mt-5 text-center">
            Consectetur adipiscing elit sed do eiusm onsectetur adipiscing elit.
          </p>
        </div>

        <div class="rounded-lg shadow-2xl p-10">
          <div class="flex items-center justify-center">
            <CiSettings className="w-10 h-10 text-[#31abfc]" />
          </div>

          <h2 class="text-xl font-semibold text-center text-[#262566] mt-5">
            Market Research
          </h2>

          <p class="text-gray-600 mt-5 text-center">
            Consectetur adipiscing elit sed do eiusm onsectetur adipiscing elit.
          </p>
        </div>
        <div class="rounded-lg shadow-2xl p-10">
          <div class="flex items-center justify-center">
            <CiSettings className="w-10 h-10 text-[#31abfc]" />
          </div>

          <h2 class="text-xl font-semibold text-center text-[#262566] mt-5">
            Business Strategy
          </h2>

          <p class="text-gray-600 mt-5 text-center">
            Consectetur adipiscing elit sed do eiusm onsectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* part1 */}
      {/* part2 */}
      <div className="mt-10 md:mt-20">
        <div className="flex justify-center"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-18">
          <div className="col-span-1 ">
            {/* <img className="w-[100%] md:w-[90%]" alt="About Us" /> */}
            <button className="bg-gray-200 p-3 rounded-md">Who we are</button>
          </div>

          <div className="col-span-2">
            <h1 className="text-4xl sm:text-3xl font-semibold  leading-[60px]">
              If your goal is to become financially secure make money to spend
              money.
            </h1>
            <div className="grid grid-cols-2 mt-10 gap-6">
              <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal">
                A software company is a dynamic entity at the heart of the
                modern technological landscape. These companies are dedicated to
                the creation, development, and maintenance of software
                applications that power nearly every aspect of our lives. From
                small startups to multinational giants, software companies are
                instrumental in shaping the digital world.
              </p>

              <p className="text-base md:text-base lg:text-md xl:text-lg text-[#525252] font-normal ">
                Software companies assemble teams of highly skilled
                professionals, including software engineers, designers, project
                managers, and quality assurance experts. Together, they
                conceive, design, and code software solutions that address a
                wide range of needs. These needs can encompass mobile apps, web
                applications, enterprise software, gaming platforms, and much
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* part2 */}

      {/* part3 */}
      <div className="mt-10 md:mt-20">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-18">
          <div className="col-span-1 ">
            <img src={graph} alt="" className="rounded-md h-96 w-full" />
          </div>

          <div className="col-span-2">
            
            <img src={part3Img} className="rounded-md h-96 w-full" alt="" />
          </div>
        </div>
      </div>
      {/* part3 */}

      {/* part4 */}
      <div
        className="my-14 pb-10"
        style={{
          background: "linear-gradient(180deg, #0A4D68 0%, #0082B7 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 md:mx-20 lg:mx-32 py-10">
          <div class="sm:flex sm:items-center sm:h-[50vh]">
            <div class="text-white ">
            <Link to="/contact">
                <button
                  type="submit"
                  class="border border-white mt-5 px-10 py-2 mb-8 text-white text-lg font-semibold"
                >
                  Get Touch
                </button>
              </Link>
              <h1 class="font-bold text-xl md:text-3xl lg:text-5xl">
              We offer great number of
finance services
              </h1>
              
              
            </div>
          </div>
          <div></div>
        </div>
        <Slider {...sliderSettings}>
      {cards.map((card) => (
        <div key={card.id} className="px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
      </div>
      {/* part4 */}

        {/* part5 */}

        <div className="mt-10 md:mt-20">
        <div className="flex justify-center">
          <img
            src={part3Img}
            className="w-3/4 h-3/4 md:w-1/2 md:h-1/2"
          />
        </div>
      </div>

     { <div className="mt-10 mx-10 md:mx-20 lg:mx-30">
        <Slider {...homeSlideSettings}>
        <div className="p-4 ">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
                p-5 shadow-md bg-[#eef2f3] pt-8"
            >
              <div className="flex gap-10 ">
                <img src={graph} alt="graph" className="rounded-[50%]  w-24 h-24 " />
                <h1 className=" text-2xl mt-5  font-semibold">Suraj Kumar</h1>
              </div>
              <div className="text-center py-5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-black-400 mt-4"
                />
              </div>
              <div className="text-center pl-4 py-5">
              <FaQuoteLeft className="h-14 w-14 text-black-400 mt-4"/>
              </div>
              <div className="text-center ">
              
                <p className="mt-5 text-lg font-lg ">
                Let the stronger man give to the man whose need is greater; let him gaze upon the lengthening path of life. For riches roll like the wheels of a chariot, turning from one to another. – Rig Veda
                </p>
              </div>
            
            </div>
          </div>

          <div className="p-4 ">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
                p-5 shadow-md bg-[#eef2f3] pt-8"
            >
              <div className="flex gap-10 ">
                <img src={graph} alt="graph" className="rounded-[50%]  w-24 h-24 " />
                <h1 className=" text-2xl mt-5  font-semibold">Suraj Kumar</h1>
              </div>
              <div className="text-center py-5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-black-400 mt-4"
                />
              </div>
              <div className="text-center pl-4 py-5">
              <FaQuoteLeft className="h-14 w-14 text-black-400 mt-4"/>
              </div>
              <div className="text-center ">
              
                <p className="mt-5 text-lg font-lg ">
                Let the stronger man give to the man whose need is greater; let him gaze upon the lengthening path of life. For riches roll like the wheels of a chariot, turning from one to another. – Rig Veda
                </p>
              </div>
            
            </div>
          </div>

          <div className="p-4 ">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
                p-5 shadow-md bg-[#eef2f3] pt-8"
            >
              <div className="flex gap-10 ">
                <img src={graph} alt="graph" className="rounded-[50%]  w-24 h-24 " />
                <h1 className=" text-2xl mt-5  font-semibold">Suraj Kumar</h1>
              </div>
              <div className="text-center py-5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-black-400 mt-4"
                />
              </div>
              <div className="text-center pl-4 py-5">
              <FaQuoteLeft className="h-14 w-14 text-black-400 mt-4"/>
              </div>
              <div className="text-center ">
              
                <p className="mt-5 text-lg font-lg ">
                Let the stronger man give to the man whose need is greater; let him gaze upon the lengthening path of life. For riches roll like the wheels of a chariot, turning from one to another. – Rig Veda
                </p>
              </div>
            
            </div>
          </div>

          <div className="p-4 ">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
                p-5 shadow-md bg-[#eef2f3] pt-8"
            >
              <div className="flex gap-10 ">
                <img src={graph} alt="graph" className="rounded-[50%]  w-24 h-24 " />
                <h1 className=" text-2xl mt-5  font-semibold">Suraj Kumar</h1>
              </div>
              <div className="text-center py-5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-black-400 mt-4"
                />
              </div>
              <div className="text-center pl-4 py-5">
              <FaQuoteLeft className="h-14 w-14 text-black-400 mt-4"/>
              </div>
              <div className="text-center ">
              
                <p className="mt-5 text-lg font-lg ">
                Let the stronger man give to the man whose need is greater; let him gaze upon the lengthening path of life. For riches roll like the wheels of a chariot, turning from one to another. – Rig Veda
                </p>
              </div>
            
            </div>
          </div>

          <div className="p-4 ">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
                p-5 shadow-md bg-[#eef2f3] pt-8"
            >
              <div className="flex gap-10 ">
                <img src={graph} alt="graph" className="rounded-[50%]  w-24 h-24 " />
                <h1 className=" text-2xl mt-5  font-semibold">Suraj Kumar</h1>
              </div>
              <div className="text-center py-5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8  text-black-400 mt-4"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-black-400 mt-4"
                />
              </div>
              <div className="text-center pl-4 py-5">
              <FaQuoteLeft className="h-14 w-14 text-black-400 mt-4"/>
              </div>
              <div className="text-center ">
              
                <p className="mt-5 text-lg font-lg ">
                Let the stronger man give to the man whose need is greater; let him gaze upon the lengthening path of life. For riches roll like the wheels of a chariot, turning from one to another. – Rig Veda
                </p>
              </div>
            
            </div>
          </div>

        </Slider>
      </div>}
      {/* part5 */}

      {/* part6 */}

      <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Company Logo Slider</h1>
      <Slider {...slider}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center ">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-24 h-24 shadow-lg m-7 " />
          </div>
        ))}
      </Slider>
    </div>
    {/* part6 */}
    </>
  );
};

export default Home;
