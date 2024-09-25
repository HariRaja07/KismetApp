import React, { useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img6 from "../assets/img6.webp";
import "../App.css";

const providers = [
  {
    name: "Who ever you are",
    title: "Occupational Therapy",
    rating: "4",
    Nrating: "20",
    image: img1,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Physical Therapy",
    rating: "4",
    Nrating: "20",
    image: img2,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Speech Therapy",
    rating: "4",
    Nrating: "20",
    image: img3,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Mental Health",
    rating: "4",
    Nrating: "20",
    image: img1,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Nutrition",
    rating: "4",
    Nrating: "20",
    image: img2,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Rehabilitation",
    rating: "4",
    Nrating: "20",
    image: img3,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Wellness",
    rating: "4",
    Nrating: "20",
    image: img1,
    icon: img6,
  },
  {
    name: "Who ever you are",
    title: "Home Health",
    rating: "4",
    Nrating: "20",
    image: img2,
    icon: img6,
  },
];

const Providers = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -424 : 424;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      scrollRef.current.removeEventListener("mousemove", handleMouseMove);
      scrollRef.current.removeEventListener("mouseup", handleMouseUp);
      scrollRef.current.removeEventListener("mouseleave", handleMouseUp);
    };

    scrollRef.current.addEventListener("mousemove", handleMouseMove);
    scrollRef.current.addEventListener("mouseup", handleMouseUp);
    scrollRef.current.addEventListener("mouseleave", handleMouseUp);
  };

  return (
    <div className="flex w-full flex-col gap-8 overflow-hidden pb-8 pt-16 sm:py-12">
      <div className="flex w-full bg-secondary justify-center py-4">
        <div className="flex w-full flex-col relative -ml-12 -mr-12 mt-12">
          <div className="flex w-full touch-pan-y flex-col items-center gap-8 mt-10">
            <div
              ref={scrollRef}
              className="relative flex w-full touch-auto select-none cursor-grab overflow-x-auto scrollbar-hidden"
              style={{ paddingLeft: "25%", minHeight: "484px" }} // Start showing from 1/4th width
              onMouseDown={handleDragStart}
            >
              <div className="flex transition-transform duration-400 ease-out">
                {providers.map((provider, index) => {
                  const height = index % 2 === 0 ? "h-[580px]" : "h-[484px]"; // Odd indexed items have height 580px
                  return (
                    <div
                      key={index}
                      className={`min-w-[424px] ${height} bg-white rounded-lg shadow-md mr-4`}
                    >
                      <a
                        className="group relative flex h-full min-w-[424px] overflow-hidden rounded-lg"
                        href=""
                      >
                        <img
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                          src={provider.image}
                          alt={provider.title}
                        />
                        <div className="bg-gradient-image-overlay absolute inset-0"></div>
                        <div className="absolute inset-x-0 top-0 p-5">
                          <div className="flex justify-between">
                            <div className="bg-primary flex h-[84px] w-[112px] items-center justify-center rounded">
                              <img src={provider.icon} alt={provider.title} />
                            </div>
                            <div className="bg-primary text-secondary h-6 rounded-full flex items-center justify-center w-24 text-xs mr-2">
                              Promoted
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <div className="flex justify-between">
                            <div className="flex flex-col">
                              <div className="text-white text-2xl">
                                {provider.name}
                              </div>
                              <div className="text-white text-lg">
                                {provider.title}
                              </div>
                            </div>
                            <div className="flex items-center flex-col">
                              <div className="text-white text-4xl">
                                {provider.rating}
                              </div>
                              <div className="text-white justify-center items-center text-lg flex flex-row space-x-1">
                                <IoIosStar />
                                <span>{provider.Nrating}</span>
                                <p>reviews</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-start w-full max-w-7xl">
              <div className="flex justify-center mt-1 mb-5">
                <button
                  className="hover:bg-gray-700 mr-2 h-10 w-10 flex justify-center items-center rounded-lg"
                  onClick={() => handleScroll("left")}
                >
                  <FaAngleLeft className="text-white" />
                </button>
                <button
                  className="hover:bg-gray-700 h-10 w-10 flex justify-center items-center rounded-lg"
                  onClick={() => handleScroll("right")}
                >
                  <FaAngleRight className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;
