import React from "react";
import img9 from "../assets/img9.webp"

const Quote = () =>{
    return(
        <div className="flex w-full justify-center py-16 sm:py-24">
            <div className="flex w-full justify-center px-4 sm:px-8">
                <div className="flex w-full max-w-7xl flex-col flex flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between lg:gap-16 lg:px-24">
                    <div className="col-span-5 w-[500px] flex flex-col gap-6 lg:items-start lg:gap-16">
                        <p className="text-3xl sm:text-display-xs">‘Kismet streamlined my NDIS budgeting with an intuitive interface and real-time updates, providing automated reminders and insightful analytics for more effective financial management’</p>
                        <span className="text-gray-700 text-lg">James Hayward</span>
                    </div>
                    <img className="col-span-6 h-[315px] w-full rounded-lg object-cover object-center sm:h-[610px] sm:w-[580px]" src={img9} alt="image9" />
                </div>
            </div>
        </div>
    );
};

export default Quote;