import React from "react";
import { useState } from "react";

const SmallForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // State to store the value of the email input field
  const [email, setEmail] = useState("");

  // State to store the value of the number input field
  const [number, setNumber] = useState("");

  // Event handler to update the state when the email input value changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler to update the state when the number input value changes
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div style={{backgroundColor : "#f5f4ff"}}>
        <div
          className="containerMYfixed borderTest"
          style={{ marginBottom: "700px" }}
        >
          <div className="splitTwo">
            <div className="formContent borderTest">content</div>
            <div className="formFillup borderTest">
              <div>
                <h1 className="text-center text-2xl font-semibold mt-3 mb-5 text-cyan-800">Turn your Study Abroad Dream to Degrees abroad</h1>
              </div>

              {/* username */}
              <div style={{ width: "100%" }} className="mt-2 mb-5">
                {/* Responsive width input field */}
                <input
                  type="text"
                  className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 border border-gray-300 rounded"
                  placeholder="Username"
                  style={{ width: "100%" }}
                  onChange={handleInputChange}
                />
              </div>

              {/* email */}
              <div style={{ width: "100%" }} className="mb-4">
                {/* Responsive width email input field */}
                <input
                  type="email"
                  className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 border border-gray-300 rounded"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ width: "100%" }}
                />
              </div>

              {/* number? */}
              <div style={{ width: "100%" }}>
                <input
                  type="number"
                  className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 mt-2 border border-gray-300 rounded"
                  placeholder="Enter a number"
                  value={number}
                  onChange={handleNumberChange}
                />
              </div>
   
              {/* checkbox */}
              <div className="mt-3 flex px-1">
                 <input type="checkbox"
                  className="mt-1"
                 ></input>
                 <h1 className="ml-2 text-blue-950">By clicking you agree to our <span className="text-purple-600 font-semibold">Privacy Policy</span>  and  <span> Terms & Conditions</span> *</h1>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallForm;
