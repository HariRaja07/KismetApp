import React from "react";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";

const Enquiry = () => {
  return (
    <div className="pb-16 sm:pb-32 sm:pt-24 bg-green-200">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col">
          <div className="bg-primary flex flex-col-reverse gap-4 rounded-2xl p-4 xl:grid xl:grid-cols-12 xl:items-center">
            <div className="flex flex-col gap-6 p-0 sm:items-center sm:gap-8 sm:px-8 sm:py-12 xl:col-span-5">
              <div className="flex flex-col gap-3 text-center xl:px-16">
                <p className="text-2xl">Need help finding what you need?</p>
                <p className="text-lg text-gray-500">
                  Send and enquiry and we will find matching providers for you.
                </p>
              </div>
              <button className="flex items-center justify-center bg-secondary text-white h-10 w-40 rounded-lg">
                Send an Enquiry
              </button>
            </div>
            <div className="grid h-[155px] w-full grid-cols-2 gap-4 sm:h-[350px] sm:grid-cols-7 xl:col-span-7">
              <img
                className="h-[155px] w-full rounded-lg object-cover object-center sm:col-span-3 sm:h-[350px]"
                src={img4}
                alt="image1"
              />
              <img
                className="h-[155px] w-full rounded-lg object-cover object-center sm:col-span-4 sm:h-[350px]"
                src={img5}
                alt="image2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
