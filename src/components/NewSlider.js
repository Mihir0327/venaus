import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div>

        <Slider {...settings} className="client-slider pt-[30px]" id="client-slider">
          <div className="client-logo w-[50px] ">
            <img src="image/client-logo-1.png" alt="" />
          </div>
          <div className="client-logo w-[50px]">
            <img src="image/client-logo-2.jpg" alt="" />
          </div>
          <div className="client-logo w-[50px]">
            <img src="image/client-logo-3.png" alt="" />
          </div>
          <div className="client-logo w-[50px]">
            <img src="image/client-logo-4.png" alt="" />
          </div>
          <div className="client-logo w-[50px]">
            <img src="image/client-logo-5.png" alt="" />
          </div>
          <div className="client-logo w-[50px]">
            <img src="image/client-logo-6.png" alt="" />
          </div>
          <div className="client-logo w-[50px]">
            <img src="image/client-logo-7.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}