import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="containerNav containerMYfixed  w-full ">
          <div className="nav">
             <ul className="flex m-0 p-0 list-none Hostify">
              <li>H</li>
              <span className="roundOne">O</span>
              <span className="roundtwo">O</span>
              <li>S</li>
              <li>T</li>
              <li>L</li>
              <li>Y</li>
            </ul>
            <div style={{marginTop : "-0.5rem"}}>
                <h1 className="text-center  text-sky-500">Consultancy</h1>
            </div>
          </div>
          <div className="flex">
             <div>
                <ul className="flex me-5 mainNav">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Studt Aboard</li>
                <li>Blog</li>
                <li>Contact Us</li>
               </ul>
             </div>
             <div className="border-2 py-1 px-4 rounded-3xl" style={{fontSize : "0.95rem", backgroundColor : "#ff0000",color:"white"}}>
                 <a href="applynow">Apply Now</a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
