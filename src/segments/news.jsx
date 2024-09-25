import React from "react";
import img3 from "../assets/img3.webp";
import { CiCalendar } from "react-icons/ci";

const news = [
  {
    title:
      "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
  {
    title:
      "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
  {
    title:
      "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
];

const News = () => {
  return (
    <div className="bg-secondary w-full py-16 sm:py-32">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
          <div className="flex items-center justify-between">
            <p className="text-4xl text-white font-normal">What's news</p>
            <div className="hidden sm:flex">
              <a
                className="button bg-[#383838] hover:bg-[#636362] h-10 w-20 flex items-center justify-center rounded-lg"
                href=""
              >
                <span className="truncate text-white">See all</span>
              </a>
            </div>
          </div>

          <div className="flex gap-4 px-4 sm:mx-0 sm:px-0">
            {" "}
            {/* Increased gap here */}
            <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-secondary py-2 px-4 border border-white hover:border-transparent rounded-full">
              <span>All</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>Capacity Building</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>Core Support</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>ECEI</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>Goals</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>NDIS</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>Participant</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>Provider</span>
            </button>
            <button className="bg-[#383838] hover:bg-[#636362] text-white font-semibold py-2 px-4 rounded-full">
              <span>Telehealth</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {/* First News Item: Takes 2 Columns */}
            <div className="col-span-2">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-[465px] object-cover rounded-lg" // Set fixed height and use object-cover
              />
              <p className="text-white">{news[0].title}</p>
              <div className="flex flex-row space-x-1 justify-start items-center">
                <CiCalendar className="fill-white" />
                <p className="text-gray-400">{news[0].date}</p>
              </div>
            </div>
            {/* Other News Items: Each Takes 1 Column */}
            {news.slice(1).map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[465px] object-cover rounded-lg" // Set fixed height and use object-cover
                />
                <p className="text-white">{item.title}</p>
                <div className="flex flex-row space-x-1 justify-start items-center">
                  <CiCalendar className="fill-white" />
                  <p className="text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
