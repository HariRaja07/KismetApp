import React from "react";
import Intro from "../segments/Intro";
import Category from "../segments/category";
import Enquiry from "../segments/Enquiry";
import Providers from "../segments/Providers";
import PopularByLoc from "../segments/PopularByLoc";
import Explore from "../segments/Explore";
import Quote from "../segments/Quote";
import Article from "../segments/Article";
import News from "../segments/news"

const Content = () => {

  return (
    <div className="pt-offset-header relative flex flex-col min-h-screen justify-center xl:h-full xl:min-h-[80vh] xl:pt-[15vh]">
      <Intro />
      <Category/>
      <Enquiry/>
      <Providers/>
      <PopularByLoc/>
      <Explore/>
      <Quote/>
      <News/>
      <Article/>
    </div>
  );
};

export default Content;
