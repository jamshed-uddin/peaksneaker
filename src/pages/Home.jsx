import React from "react";
import Hero from "../components/HomePage/Hero";
import NewReleases from "../components/HomePage/NewReleases";
import Trending from "../components/HomePage/Trending";
import WeRecommend from "../components/HomePage/WeRecommend";
import PopularBrands from "../components/HomePage/PopularBrands";
import AboutUs from "../components/HomePage/AboutUs";

const Home = () => {
  return (
    <div className="space-y-7">
      <Hero />
      <NewReleases />
      <Trending />
      <WeRecommend />
      <AboutUs />
      <PopularBrands />
    </div>
  );
};

export default Home;
