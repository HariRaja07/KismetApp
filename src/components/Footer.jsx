import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="flex w-full justify-center px-4 sm:px-8">
      <div className="flex w-full max-w-7xl flex-col py-12 sm:py-16">
        <footer className="flex flex-col gap-4 lg:grid lg:grid-cols-12">
            <div className="bg-primary-solid text-primary col-span-8 flex flex-col justify-between gap-8 rounded-2xl p-6 lg:flex-row lg:p-16">
                <ul className="text-xl flex flex-col items-start gap-4">
                    <li>
                        <a className="hover:bg-[#636362] flex gap-2 rounded p-1 transition-colors" href="">
                            <span className="text-xs">01</span>
                            <span className="text-2xl">About Us</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#636362] flex gap-2 rounded p-1 transition-colors" href="">
                            <span className="text-xs">02</span>
                            <span className="text-2xl">How it Works</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#636362] flex gap-2 rounded p-1 transition-colors" href="">
                            <span className="text-xs">03</span>
                            <span className="text-2xl">Blogs</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#636362] flex gap-2 rounded p-1 transition-colors" href="">
                            <span className="text-xs">04</span>
                            <span className="text-2xl">Market Place</span>
                        </a>
                    </li>
                </ul>

                <div className="flex flex-col justify-between gap-8">
                    <a className="button bg-[#383838] hover:bg-[#636362] flex items-center justify-center h-10 rounded-lg" href="">
                        <span className="truncate">Claim your Listing</span>
                    </a>

                    <div className="flex flex-col gap-4">
                        <a href="">1800 000 123</a>
                        <a href="">hi@kismet.healthcare</a>
                    </div>

                    <address className="not-italic">
                        "117, Moray street"
                        <br/>
                        "South Melbourne VIC 3205"
                    </address>
                </div>
            </div>

            <div className="bg-primary col-span-4 flex flex-col rounded-2xl pt-4 lg:pt-8">
                <div className="relative flex grow flex-col px-6 pb-12 pt-4 lg:px-16 lg:pb-16 lg:pt-8">
                <div className="absolute inset-0 bg-[url('D:\AbleTech\my-react-app\src\assets\img10.svg')] bg-cover bg-right-top bg-no-repeat opacity-100">
                </div>
                    <div className="z-10 flex grow flex-col justify-between gap-8">
                    <div className="flex items-center gap-1">
                        <FaHeart className="h-6 w-6" />
                        <p className="text-2xl font-semibold">kismet</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">Download our App</p>
                        <div className="flex justify-center gap-2">
                            <a className="button bg-secondary hover:bg-[#383838] w-full flex flex row space-x-1 items-center justify-center rounded-lg h-10" href="">
                                <div><FaApple className="size-6 fill-white"/></div>
                                <span className="truncate ml-2 font-semibold text-white">App Store</span>
                            </a>
                            
                            <a className="button bg-secondary hover:bg-[#383838] w-full flex flex row space-x-1 items-center justify-center rounded-lg h-10" href="">
                                <div><FaGooglePlay className="fill-white"/></div>
                                <span className="truncate ml-2 font-semibold text-white">Play Store</span>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm py-2">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                        <p className="whitespace-nowrap">© 2023 Kismet</p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
