import React from "react";
import image1 from "../../Assests/AboutPageImages/mediaa.jpeg";
import { AiFillLayout } from "react-icons/ai";
import { FiGitPullRequest } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      {/* banner-part */}
      <div className="relative w-full h-64 md:h-96 lg:h-96">
        <img
          src={image1}
          alt="Banner"
          className=" object-cover w-full h-64 md:h-96 lg:h-96"
        />

        {/*banner-content */}

        <div className="absolute top-0 left-5 lg:left-20 right-0 bottom-0  flex flex-col justify-center ">
          <div className="container mx-auto ">
            <h1 className="text-lg md:text-5xl font-bold ">About Us</h1>

            <p className="mt-4 text-md md:text-xl text-black ">
              Welcome to Trading stock market trading website! We are a
              team <br></br> of experienced traders and financial experts who
              are passionate about <br></br> helping our clients succeed in the
              stock market.
            </p>
          </div>
        </div>
      </div>

      {/* services cards */}

      <div className="mt-12 md:mt-20">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694]">Why We Smart ?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">
          <div className=" p-10 border-2 rounded-lg">
            <AiFillLayout className="h-14 w-14 text-[#059DC0]" />

            <h1 className="text-2xl font-bold mt-4">Risk</h1>

            <p className="text-[#64666C] mt-4 text-justify">
              Risk: Investing in the stock market involves risk, as stock prices
              can go up or down. Investors should carefully consider their risk
              tolerance and diversify their investments to help manage risk.
            </p>
          </div>

          <div className=" p-10 border-2 rounded-lg">
            <BsCheck2Circle className="h-14 w-14 text-[#059DC0]" />

            <h1 className="text-2xl font-bold mt-4">Stocks</h1>

            <p className="text-[#64666C] mt-4 text-justify">
              Stocks: Stocks, also known as shares or equities, represent
              ownership in a company. When you buy a stock, you become a partial
              owner of the company, and you have the right to vote on certain
              corporate decisions.
            </p>
          </div>

          <div className="p-10 border-2 rounded-lg">
            <BsFillPhoneFill className="h-14 w-14 text-[#059DC0]" />

            <h1 className="text-2xl font-bold mt-4">Indices</h1>

            <p className="text-[#64666C] mt-4 text-justify">
              Indices: Stock market indices, such as the S&P 500 and the Dow
              Jones Industrial Average, are measures of the performance of the
              stock market as a whole or of specific sectors within it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-14">
          <div className="p-10 border-2 rounded-lg">
            <FiGitPullRequest className="h-14 w-14 text-[#059DC0]" />

            <h1 className="text-2xl font-bold mt-4">Volatility</h1>

            <p className="text-[#64666C] mt-4 text-justify">
              Volatility: The stock market can be volatile, meaning that stock
              prices can fluctuate significantly in a short period of time. This
              can be influenced by a range of factors, such as economic
              indicators, company news, and geopolitical events
            </p>
          </div>

          <div className="p-10 border-2 rounded-lg">
            <BsBell className="h-14 w-14 text-[#059DC0]" />

            <h1 className="text-2xl font-bold mt-4">Stock exchanges</h1>

            <p className="text-[#64666C] mt-4 text-justify">
              Stock exchanges: The stock market is made up of various stock
              exchanges, such as the New York Stock Exchange (NYSE), NASDAQ, and
              London Stock Exchange. These exchanges provide a platform for
              buyers and sellers to trade shares of publicly traded companies.
            </p>
          </div>

          <div className="p-10 border-2 rounded-lg">
            <FiPlusCircle className="h-14 w-14 text-[#059DC0]" />

            <h1 className="text-2xl font-bold mt-4">Long-term investing</h1>

            <p className="text-[#64666C] mt-4 text-justify">
              Long-term investing: Investing in the stock market is often viewed
              as a long-term strategy, as it can take time for a company’s stock
              price to increase significantly. Investors should consider their
              investment goals and time horizon when making investment
              decisions.
            </p>
          </div>
        </div>
      </div>

      {/* services cards */}


      
    </>
  );
};

export default About;
