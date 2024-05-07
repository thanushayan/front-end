import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="mt-10">
      <h1>Testimonials & Why Choose Us Section</h1>
      <div className="mt-10 grid grid-cols-2 ">
      <div className=" ml-5 mt-5">
        <h1 className="font-bold text-xl">TRUSTED CLIENTS </h1>
        <p className="text-sm text-slate-500 mt-3">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </p>
        <div className=" static flex flex-row">
          <div className="bg-slate-200  pl-20 pt-10 pb-10 pr-10 mr-2 ml-8 mt-10 relative">
            <p className="text-sm">
              Integer congue elit non semper lacreet sed lectus orci posuer nisl
              tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae
              felis vel magna posu du vestibulum. Nam rutrum congue diam.
              Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal
              pellentesque bibendum
            </p>
          </div>
         <div className="absolute flex flex-row">
         <div className="bg-red-800  w-14 h-14 mt-24 flex items-center justify-center font-bold text-5xl text-white">
          "
          </div>
          <div className="shape mt-24"></div>
         </div>
        </div>
        <div className="flex flex-row justify-between m-5">
          <div>
            <button className="p-1 border-2 border-slate-100">
              <IoIosArrowBack className="text-slate-400" />
            </button>
            <button className="p-1 border-2 border-slate-100">
              <IoIosArrowForward className="text-slate-400" />
            </button>
          </div>
          <div>
            <h1 className="font-bold">JOHN DEO</h1>
            <p className="text-xs text-slate-500"> Managing Director</p>
          </div>
        </div>
      </div>
      <div className="ml-5 mt-5">
        <h1 className="font-bold text-xl">WHY CHOOSE US</h1>
        <p className="text-sm text-slate-500 mt-3">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </p>
        <div className="mt-10 ml-5">
            <div className="flex flex-row justify-between py-4 border-t-2 border-b-2 border-slate-100">
            <p className="text-sm">Dui ac hendrerit elementum quam ipsum auctor lorem</p>
            <button className="bg-black h-6 w-6 font-bold text-white">+</button>
            </div>

            <div className="flex flex-row justify-between py-4  border-b-2 border-slate-100">
            <p className="text-sm">Mauris vel magna a est lobortis volutpat</p>
            <button className="bg-black h-6 w-6 font-bold text-white">+</button>
            </div>

            <div className="flex flex-row justify-between py-4 border-b-2 border-slate-100">
            <p className="text-sm">Sed bibendum ornare lorem mauris feugiat suspendisse neque</p>
            <button className="bg-black h-6 w-6 font-bold text-white">+</button>
            </div>

            <div className="flex flex-row justify-between py-4  border-b-2 border-slate-100">
            <p className="text-sm">Nulla scelerisque dul hendrerit elementum quam</p>
            <button className="bg-black h-6 w-6 font-bold text-white">+</button>
            </div>

          
          
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Testimonials;
