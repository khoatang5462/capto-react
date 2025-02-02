import React, { useState } from 'react';
import { Banner } from './Banner';
import { TrustedBy } from '../../components/trustedBy/TrustedBy';
import { CatCard } from '../../components/CatCard/CatCard';
import "./HomePage.scss";

export const HomePage = () => {
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);

  const handleVideoClick = () => {
    setShowVideoOverlay(true);
  };

  const closeVideoOverlay = () => {
    setShowVideoOverlay(false);
  };

  return (
    <div className='homePage'>
      <Banner />
      <TrustedBy />
      <CatCard />
      <div className="features">
        <div className="container">
          <div className="item ">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./image/check.svg" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./image/check.svg" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./image/check.svg" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./image/check.svg" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item relative ">
            <img src="https://i.pinimg.com/736x/09/ca/35/09ca3548f90bba0ea65fdf854689e7b8.jpg" />
            <button
              onClick={handleVideoClick}
              className=" cursor-pointer text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

              <i className="fa-solid fa-circle-play"></i>
            </button>
          </div>
        </div>
      </div>
      {showVideoOverlay && (
        <div className="overlay" onClick={closeVideoOverlay}>
          <div className="video">
            <video src="./image/video.mp4" controls autoPlay />
          </div>
        </div>
      )}
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">


          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./image/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./image/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./image/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};