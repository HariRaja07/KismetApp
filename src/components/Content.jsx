import React from "react";
import Intro from "../segments/Intro";
import Category from "../segments/category";
import Enquiry from "../segments/Enquiry";
import Providers from "../segments/Providers";

const Content = () => {

  return (
    <div className="pt-offset-header relative flex flex-col min-h-screen justify-center xl:h-full xl:min-h-[80vh] xl:pt-[15vh]">
      <Intro />
      <Category/>
      <Enquiry/>
      <Providers/>
    </div>
  );
};

export default Content;
