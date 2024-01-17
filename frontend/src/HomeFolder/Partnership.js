import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partnership = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
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
      <div>
        <div
          className="containerMYfixed ">
          <div>
            <h1 className="mt-8 text-4xl text-center mb-2 text-blue-800 ">
            Our industry partnerships
            </h1>
            <div
              className="mb-12 mt-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                className="text-center text-lg text-gray-400"
                style={{ width: "90%" }}
              >
              Our affiliations with industry leaders, accreditations, and partnerships speak volumes about our credibility and standing.
              </p>
            </div>
          </div>

         <div>
         <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              transitionDuration={500}
              arrows={false}
            >
                <div className="brandbox">
                    <img className="brandboxImage" src="/image/airc.svg" alt="air"></img>
                </div>
                <div className="brandbox">
                <img className="brandboxImage" src="/image/mia.svg" alt="air"></img>
                </div>
                <div className="brandbox">
                <img className="brandboxImage" src="/image/the-pie.svg" alt="air"></img>
                </div>
                <div className="brandbox">
                <img className="brandboxImage" src="/image/the.svg" alt="air"></img>
                </div>
                <div className="brandbox">
                <img className="brandboxImage" src="/image/ecan.svg" alt="air"></img>
                </div>
                <div className="brandbox">
                <img className="brandboxImage" src="/image/icef-agency.svg" alt="air"></img>
                </div>
            </Carousel>
         </div>

        </div>
      </div>
    </>
  );
};

export default Partnership;
