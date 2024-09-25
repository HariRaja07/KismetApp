import React, { useState } from "react";
import img1 from "../assets/img1.webp";

const Intro = () => {
  const [selected, setSelected] = useState("providers");
  return (
    <div className="flex w-full justify-center px-4 sm:px-8">
      <div className="flex w-full max-w-7xl flex-col xl:gap-0 h-full w-full justify-between py-8 sm:gap-12 sm:py-16 xl:grid xl:grid-cols-2 xl:items-center xl:p-0">
        <div className="z-10 flex w-full flex-col gap-4 px-8 sm:max-w-[750px] sm:px-16 xl:max-w-none xl:items-start xl:px-[50px]">
          <p className="text-secondary text-center sm:text-left sm:text-lg">
            Kismet is here to help
          </p>
          <p className="text-5xl text-display-2xs sm:text-display-sm xl:text-display-lg text-center sm:text-left xl:text-left">
            Automatically create a shortlist of verified and available service
            providers within 48 hours.
          </p>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-end xl:justify-center">
          <div className="relative flex w-full items-center xl:justify-end">
            <img
              className="h-[570px] w-[416px] rounded-2xl object-cover object-left"
              src={img1}
              alt="image"
            />
          </div>
          <div className="w-full sm:absolute sm:left-[64px] sm:max-w-[416px] xl:left-auto xl:right-[208px]">
            <form
              method="get"
              action="/?index"
              className="flex w-full flex-col"
            >
              <div className="bg-white z-10 flex w-full flex-col items-center gap-6 rounded-2xl px-4 py-6 sm:p-8">
                <p className="hidden text-lg sm:block">I'm looking for</p>
                <div className="relative flex h-14 w-full gap-2 rounded-full p-1 bg-primary">
                  <button
                    type="button" // Prevent form submission
                    onClick={() => setSelected("providers")}
                    className={`z-10 flex w-full items-center justify-center rounded-full text-sm transition-colors font-medium ${
                      selected === "providers"
                        ? "text-secondary bg-white"
                        : "text-secondary bg-transparent"
                    } h-button-lg`}
                  >
                    Providers
                  </button>
                  <button
                    type="button" // Prevent form submission
                    onClick={() => setSelected("housing")}
                    className={`z-10 flex w-full items-center justify-center rounded-full text-sm transition-colors ${
                      selected === "housing"
                        ? "text-secondary bg-white"
                        : "text-secondary bg-transparent"
                    } h-button-lg`}
                  >
                    Housing
                  </button>
                  <div className="absolute inset-y-0 left-0 p-1 transition-all duration-300 ease-in-out"></div>
                </div>
                <div className="flex w-full flex-col gap-4">
                  {selected === "providers" && (
                    <div className="flex gap-1 bg-primary h-14 items-center justify-center rounded-md">
                      <p>Search for OT, Physio, Speech</p>
                    </div>
                  )}
                  <div className="flex gap-1 bg-primary h-14 items-center justify-center rounded-md">
                    <p>Search near suburb or postcode</p>
                  </div>
                </div>
                <button
                  className="button button-lg rounded-full w-full bg-secondary text-white h-14"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
