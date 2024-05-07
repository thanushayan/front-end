import React, { useState } from "react";
import container from "../image/bg-1.jpg";
import container2 from "../image/home2.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Homepage = () => {

  const [current,setCurrent]=useState(1);
  const slideImage = [container];

  const nextState =() =>{

  }

  const prevState = () =>{

  }
  return (
    <div className="mb-10">
      <div className="static">
        <div className=" relative flex justify-end mt-10  ">
          <div className="w-[70%] h-[500px] " >
          
              <img src={container}  alt="container" className="w-full h-full" />
            
          
           <img src={container2}  alt="container2" className="w-full h-full hidden " /> 
           
          </div>
         
        </div>
        <div className="flex flex-row">
          <div className="absolute bg-white h-96 w-96 left-28 top-36 ">
            <div className="mt-10">
              <div className="tracking-wide border-l-4 border-primary">
                <p className="ml-2  ">LOGISTIC</p>
              </div>
              <h1 className="font-medium text-5xl">
                Best Shipping <span className="text-primary">Partner</span>{" "}
              </h1>
              <p className="mt-2 line-clamp-3">
                Amet, tempus egestas facilisis volutpat viverra molestie
                lobortis posuere maecenas, molestie lobortis posuere maecenas.
                Egetsapien, gravida nequi.
              </p>
            </div>
            <button className="bg-primary mt-10 px-4 py-2 ">
              DISCOVER MORE
            </button>
          </div>

          <div className="bg-primary h-10 w-24 absolute top-85 bottom-20 flex flex-row justify-between  items-center ">
            <button className="w-1/2 h-full hover:bg-orange-400 px-3">
              {" "}
              <FaLongArrowAltLeft className="text-white font-bold" />
            </button>
            <button className="w-1/2 h-full hover:bg-orange-400 px-3">
              <FaLongArrowAltRight className="text-white font-bold" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
