import React from 'react';
import Slider from "./Home/Slider.js"
import Review from "./Home/Review.js"
const Home = () => {
  return (
    <div className="min-h-full">
      <Slider/>
      <Review/>
    </div>
  );
};

export default Home;