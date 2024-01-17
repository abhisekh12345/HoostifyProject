import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CountryData from "../Data/CountryData";

const CardList = () => {
  return (
    <>
      <div>
        <div className="containerMYfixed" >

         <div>
            <h1 className="mt-8 text-4xl text-center mb-2 text-blue-800 ">Wherever you want to go, we'll get you there.</h1>
             <div className="mb-12 mt-4" style={{display:"flex",justifyContent:"center",alignItems: "center"}}>
            <p className="text-center text-lg text-gray-400" style={{width : "60%",}}>Explore the best study destinations in the world! Learn all about the countries' top universities, scholarships, cost of living, post-study work rights and more</p>

             </div>
         </div>
         

          <div className="grid grid-cols-3 gap-10">
            {CountryData.map((item) => {
              const { id, country, des, img } = item;
              return (
                <>
                  <div className="CardRotate" key={id}>
                    <div className="cARD">
                      <div className="midCard">
                        <img className="midCardImage" src={img} alt={id}></img>
                      </div>
                      <div className="px-4 py-3 updownContent">
                        <h1 className="text-xl font-semibold text-sky-900">
                          {country}
                        </h1>
                        <div className="mt-2 mb-2">
                          <a href=""> Read More</a>
                        </div>
                        <div className="cardDownContet mt-8">
                          <h1 className="text-4xl uppercase text-blue-800">
                            {country}
                          </h1>
                          <p className="mt-4 text-md text-gray-600">{des}</p>
                          <div className="mt-6  flex">
                            <div className="py-2 px-4 rounded-3xl bg-gray-400 text-white flex shadow-lg shadow-gray-400">
                              <a href="">Read More </a>
                              <FaArrowRight className="mt-1 ml-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div>
            <h1 className="mt-20 text-center text-blue-900 text-lg">Want to read other topics ?</h1>
            <div className="mt-6 mb-3 flex items-center justify-center">
                            <div className="py-3 px-6 rounded-2xl border-2 border-sky-400 text-sky-400 flex shadow-lg shadow-white">
                              <a href="">Explore Our Blog </a>
                              <FaArrowRight className="mt-1 ml-3" />
                            </div>
                          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
