import React from "react";
import worker1 from "../image/worker1.jpg";
import worker2 from "../image/worker2.jpg";

const Welcome = () => {
  return (
    <div className="mt-10 mb-10 ml-10">
      <h1>Welcome page</h1>
      <div className="flex flex-row mt-5 ">
        <div className="  w-2/3 ">
          <div>
            <div className="flex flex-row static">
              <div className=" relative flex  mt-10 mb-5 h-96 w-96 ml-40">
                <img src={worker1} alt="container" className=" h-96 w-96" />
              </div>
              <div className=" absolute h-56 w-48 ml-20 mt-64">
                <img src={worker2} alt="profile" className=" h-56 w-48" />
              </div>
              <div className="shape2 absolute ml-16  "></div>
              <div className="shape3 absolute ml-16 "></div>
              <div className="shape5 absolute mt-96 p-3 -ml-14 ">
                <p className="text-white font-bold text-lg">15,350 +</p>
                <p className="text-white text-xs  ">Client worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className=" w-1/3 h-96 mr-10">
          <div className="static flex flex-row mt-14">
          <div className="shape4 relative  "></div>
          <h1 className="absolute font-semibold text-4xl mt-2 ml-4 ">
            TransMax Logistics Around
            <span className="text-orange-500 ml-1">the World</span>
          </h1>
          </div>
        
          <p className="line-clamp-3 text-sm mt-4">
            Transmax is the world's driving worldwide coordinations supplier we
            uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>
          <div className="mt-5">
            <p className="line-clamp-3 text-sm">
              Our worth added administrations guarantee the progression of
              products proceeds consistently and supply chains stay lean and
              streamlined for progress.
            </p>
          </div>
          <button className="text-xs font-semibold px-3 py-2 bg-slate-200 mt-5">MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
