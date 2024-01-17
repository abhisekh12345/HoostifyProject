import React from "react";
import { FaStar } from "react-icons/fa6";
import TestomonialData from "../Data/TestomonialData";

const Testomonial = () => {
  return (
    <>
      <div style={{backgroundColor:"#f5f4ff"}}>
        <div
          className="containerMYfixed"
        >
          <div>
            <div>
              <div>
                <h1 className="mt-8 text-4xl text-center mb-2 text-blue-950 ">
                  Top education consultancy in Nepal, truly!
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
                    style={{ width: "60%" }}
                  >
                    We are thrilled to have been a part of 60,000+ successful
                    student stories. Hear a few of their experiences
                  </p>
                </div>
              </div>
            </div>
           
           <div className="grid grid-cols-3 gap-10 mb-20">
              {
                TestomonialData.map((item) => {
                    const{id,name,des,img} =item
                    return(
                        <>
                        <div className="testomonialCard">
              <span className="spanOne"></span>
              <div className="testomonialImage">
                <img
                  className="Imagetestomonial"
                  src="/image/person1.jpg"
                  alt="person1"
                ></img>
              </div>
              <h1 className="text-xl mt-5 px-6 text-gray-700 testoh1">
                Rhayn Doe
              </h1>
              <p className="px-6 flex mt-1 text-lg text-yellow-300 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className="px-6 mt-4 text-gray-400 testopaara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nisi minima ipsa repudiandae odio voluptate.
              </p>
            </div>
                        </>
                    )
                })
              }
           </div>
            
          </div>
        </div>
      </div>
    </>
  );
};



export default Testomonial;
