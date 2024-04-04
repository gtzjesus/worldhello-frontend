import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

const Performance = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Configure slider to work vertically
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <FirstPerformance />
        </div>
        <div>
          <SecondPerformance />
        </div>
        <div>
          <ThirdPerformance />
        </div>
      </Slider>
    </>
  );
};

// Custom arrow components
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Previous
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Next
    </div>
  );
};

export default Performance;
