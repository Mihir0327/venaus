import React from "react";
import Slider from "react-slick";

export default function InteriorSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings:{ slidesToShow: 1,
        slidesToScroll: 1,}
      },
    ]
  };

  const dataObj = [{
    title:"Restaurant Interior Design",
    slideImg : 'image/interior-img-1.jpg'
  },
{
  title:"Hotel Interior Design",
    slideImg : 'image/interior-img-2.jpg'
},
{
  title:'Home Interior Design',
  slideImg : 'image/interior-img-3.jpg'
},
{
  title:"Restaurant Interior Design",
  slideImg : 'image/interior-img-1.jpg'
},
{
title:"Hotel Interior Design",
  slideImg : 'image/interior-img-2.jpg'
},
{
title:'Home Interior Design',
slideImg : 'image/interior-img-3.jpg'
}
]
  


  return (
    <Slider {...settings}>

{

      dataObj.map((data) => {
        return <div className="p-3">
            <div className="box relative">
            <img src={data.slideImg} alt="" className="" />
            <div className="interior-details absolute  left-[30px] top-[30px] w-[80%]">
              <h2 className="text-[20px]  text-white">{data.title}</h2>
              
            </div>
            
          </div>
                     
          </div>
          
          
        })
        
      }

    </Slider>
  );
}