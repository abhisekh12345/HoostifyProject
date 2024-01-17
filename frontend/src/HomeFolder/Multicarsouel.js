import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";


const Multicarsouel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div style={{ backgroundColor:"#F5F4FF", }}>
        <div className="containerMYfixed  felxCarousel extraPadding">
          <div className="Multifirst ">
          <h1 className="text-2xl w-96 text-sky-950 font-semibold">With you at every step of your study abroad journey</h1>
          <p className="mt-4 w-80 text-sky-800">Get personalised, friendly, honest guidance for free from the top consultancy in Nepal</p>
          <div className='mt-4 mb-4 flex' >
                            <div className='py-2 px-4 rounded-3xl bg-sky-800 text-white flex'>
                            <a  href=''>Book a consultation  </a>
                            <FaArrowRight className='mt-1 ml-3'/>
                            </div>
                     </div>
          </div>
          <div className="Multisecond">
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              transitionDuration={500}
            >
              <div className="itembox">
                  <div className="itemPostion">
                    <div className="itemImage">
                       <img  className="imagePosition" src="/image/onlineTest.jpg" alt="icon"></img>
                    </div>
                    <div className="itemContent">
                        <h1 className="text-lg  font-semibold text-sky-950">Test Preparation Programs</h1>
                        <p className="text-sm">Know More</p>
                    </div>
                  </div>
              </div>

              <div className="itembox">
                  <div className="itemPostion">
                    <div className="itemImage">
                       <img  className="imagePosition" src="/image/Scholarship.jpg" alt="icon"></img>
                    </div>
                    <div className="itemContent">
                        <h1 className="text-lg w-48 font-semibold text-sky-950">Scholarship Gudiance</h1>
                        <p className="text-sm">Know More</p>
                    </div>
                  </div>
              </div>

              <div className="itembox">
                  <div className="itemPostion">
                    <div className="itemImage">
                       <img  className="imagePosition" src="/image/onlineTest.jpg" alt="icon"></img>
                    </div>
                    <div className="itemContent">
                        <h1 className="text-lg  font-semibold text-sky-950">Test Preparation Programs</h1>
                        <p className="text-sm">Know More</p>
                    </div>
                  </div>
              </div>

              <div className="itembox">
                  <div className="itemPostion">
                    <div className="itemImage">
                       <img  className="imagePosition" src="/image/Scholarship.jpg" alt="icon"></img>
                    </div>
                    <div className="itemContent">
                        <h1 className="text-lg w-48 font-semibold text-sky-950">Scholarship Gudiance</h1>
                        <p className="text-sm">Know More</p>
                    </div>
                  </div>
              </div>
            </Carousel>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Multicarsouel;
