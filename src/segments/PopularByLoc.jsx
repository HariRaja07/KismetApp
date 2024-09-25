import React from "react";
import { FaChevronDown } from "react-icons/fa";
import img7 from "../assets/img7.webp";
import { IoIosStar } from "react-icons/io";
import img6 from "../assets/img6.webp";
import img8 from "../assets/img8.webp";

const PopularByLoc = () =>{
    return(
        <div className="w-full overflow-hidden py-16 sm:py-24">
            <div className="flex w-full justify-center px-4 sm:px-8">
                <div className="flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
                    <div className="flex items-center justify-between">
                        <div className="text-4xl flex items-center gap-2">
                            <p>Popular In</p>
                            <a className="border-brand hover:bg-primary-hover flex items-center border-b-2 py-1 text-left transition-colors space-x-1" href="">
                                <span>Brisbane</span>
                                <FaChevronDown className="h-6 w-6"/>
                            </a>
                        </div>
                        <div className="hidden sm:flex">
                    <a className="button button-tertiary bg-primary h-10 w-20 flex items-center justify-center rounded-lg" href=""><span className="truncate">See all</span></a>
                </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
                        <a className="bg-primary hover:bg-primary-hover group grid grid-cols-2 items-center gap-4 rounded-2xl p-4 transition-colors lg:flex" href="">
                            <div className="text-primary-inverse relative flex h-[244px] w-full flex-col items-center justify-end overflow-hidden rounded-lg p-5 lg:min-w-[154px] lg:max-w-[84px]">
                                <img className="bg-primary zoom-on-hover absolute inset-0 h-full w-full object-cover object-center" src={img7} alt="image7" />
                                <div className="bg-gradient-image-overlay absolute inset-0"></div>
                                <div className="z-10 flex flex-col items-center text-white">
                                    <p className="text-3xl font-semibold">4.80</p>
                                    <div className="flex items-center gap-1 text-base font-bold">
                                        <IoIosStar/>
                                        <span>26</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-full grow flex-col justify-between">
                                <div className="text-primary flex h-auto w-full grow items-center justify-center overflow-hidden rounded-xl">
                                    <div className="w-[140px]">
                                        <img src={img6} alt="image6" />
                                    </div>
                                </div>
                                <div className="flex flex-col pb-8 text-center">
                                    <p className="line-clamp-2 font-medium">Ignite Health Care Pvt Ltd</p>
                                    <p className="text-gray-700">Behavioral Support</p>
                                </div>
                            </div>
                        </a>

                        <a className="bg-primary hover:bg-primary-hover group grid grid-cols-2 items-center gap-4 rounded-2xl p-4 transition-colors lg:flex" href="">
                            <div className="text-primary-inverse relative flex h-[244px] w-full flex-col items-center justify-end overflow-hidden rounded-lg p-5 lg:min-w-[154px] lg:max-w-[84px]">
                                <img className="bg-primary zoom-on-hover absolute inset-0 h-full w-full object-cover object-center" src={img7} alt="image7" />
                                <div className="bg-gradient-image-overlay absolute inset-0"></div>
                                <div className="z-10 flex flex-col items-center text-white">
                                    <p className="text-3xl font-semibold">4.80</p>
                                    <div className="flex items-center gap-1 text-base font-bold">
                                        <IoIosStar/>
                                        <span>26</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-full grow flex-col justify-between">
                                <div className="text-primary flex h-auto w-full grow items-center justify-center overflow-hidden rounded-xl">
                                    <div className="w-[140px]">
                                        <img src={img6} alt="image6" />
                                    </div>
                                </div>
                                <div className="flex flex-col pb-8 text-center">
                                    <p className="line-clamp-2 font-medium">Ignite Health Care Pvt Ltd</p>
                                    <p className="text-gray-700">Behavioral Support</p>
                                </div>
                            </div>
                        </a>
                        <div className="col-span-2 grid grid-cols-2 gap-4 xl:col-span-1 xl:grid-cols-1">
                            <a className="bg-primary hover:bg-secondary-hover grid grid-cols-2 items-center gap-4 rounded-2xl p-4 transition-colors" href="">
                                <div className="bg-white text-primary flex h-[102px] min-w-[50%] items-center justify-center overflow-hidden rounded-xl">
                                    <div className="w-[100px]">
                                        <img className="w-full" src={img8} alt="image8" />
                                    </div>
                                </div>

                                <div className="flex grow flex-col">
                                    <p className="text-lg font-semibold text-secondary">Blue Fox Health</p>
                                    <p className="text-base text-gray-700">Occupational Therapy</p>
                                    <div className="flex flex-row space-x-1">
                                        <IoIosStar/>
                                        <span>5</span>
                                    </div>
                                </div>
                            </a>
                            <a className="bg-primary hover:bg-secondary-hover grid grid-cols-2 items-center gap-4 rounded-2xl p-4 transition-colors" href="">
                                <div className="bg-white text-primary flex h-[102px] min-w-[50%] items-center justify-center overflow-hidden rounded-xl">
                                    <div className="w-[100px]">
                                        <img className="w-full" src={img8} alt="image8" />
                                    </div>
                                </div>

                                <div className="flex grow flex-col">
                                    <p className="text-lg font-semibold text-secondary">Blue Fox Health</p>
                                    <p className="text-base text-gray-700">Occupational Therapy</p>
                                    <div className="flex flex-row space-x-1">
                                        <IoIosStar/>
                                        <span>5</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularByLoc;