import React from "react";
import { CiCalendar } from "react-icons/ci";
import img3 from "../assets/img3.webp";

const articles = [
  {
    title: "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
  {
    title: "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
  {
    title: "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
  {
    title: "Discover NDIS-Supported Independent Living with Kismet's Expert Guidance",
    date: "December 15, 2023",
    image: img3,
  },
];

const Article = () => {
  return (
    <div className="w-full overflow-hidden py-16 sm:py-24">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
          <div className="flex items-center justify-between">
            <div className="text-4xl flex items-center gap-2">
              <p>Related Articles</p>
            </div>
            <div className="hidden sm:flex">
              <a
                className="button button-tertiary bg-primary h-10 w-20 flex items-center justify-center rounded-lg"
                href=""
              >
                <span className="truncate">See all</span>
              </a>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((art,index) => {
                return(
                    <div key={index}>
                        <a className="group flex h-[140px] w-full items-center rounded-lg transition-colors" href="">
                            <div className="relative h-full min-w-[108px] overflow-hidden rounded-lg">
                                <img className="zoom-on-hover absolute inset-0 h-full w-full object-cover object-center" src={art.image} alt="image3" />
                            </div>
                            <div className="flex grow flex-col gap-2 px-2 py-4">
                                <p>{art.title}</p>
                                <div className="text-gray-700 flex items-center gap-1 text-sm">
                                    <CiCalendar className="fill-gray-700"/>
                                    {art.date}
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
