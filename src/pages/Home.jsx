import React from "react";
import Hero from "../components/HomePage/Hero";
import NewReleases from "../components/HomePage/NewReleases";
import Trending from "../components/HomePage/Trending";

const Home = () => {
  return (
    <div className="space-y-5">
      <Hero />
      <NewReleases />
      <Trending />
    </div>
  );
};

export default Home;
