import React from 'react';
import ship from  "../image/ship1.jpg";
import plane from "../image/plane.jpg"
import { FaArrowAltCircleRight } from "react-icons/fa";

const Servicessection = () => {
  return (
    <div className='mt-10 mb-10 '>
      <h1>Service Section</h1>
     <p className='text-center font-semibold text-xs text-green'>Real Solution ,Real Fast</p>
     <h1 className='text-center font-bold text-3xl'>Best Global Logistics Solution</h1>
     <div className='mt-8 grid grid-cols-2 gap-4'>
        <div className='w-auto bg-white shadow-xl h-52 flex flex-row'>
            <div className='  w-1/2 h-full'>
              <img src={ship} alt='ship' className='h-full' />
            </div>
            <div className='ml-4 mt-3'>
                <h  className='text-lg font-bold'>Air Freight Services</h>
                <p className='text-sm line-clamp-3 mt-3'>At our Auto Service garage, we are<br/> 
                fully appreciate how difficult occur<br/> it is for people to find.</p>
                <div className='flex flex-row mt-5 ml-3'>
                <FaArrowAltCircleRight className='h-4 w-4  mr-2' />
                <p className='text-sm font-bold'>Read More</p>
                </div>
            </div>
        </div>


        {/* 2nd box */}
        <div className='w-auto h-52 bg-white shadow-xl flex flex-row'>
        <div className=' w-1/2 h-full'>
              <img src={plane} alt='ship' className='h-full w-full' />
            </div>
            <div className='ml-4 mt-3'>
                <h  className='text-lg font-bold'>Drone Services</h>
                <p className='text-sm line-clamp-3 mt-3'>These are unique and often they<br /> differ from one industry to the<br />
                 other. Our logistics expertise</p>
                <div className='flex flex-row mt-5 ml-3'>
                <FaArrowAltCircleRight className='h-4 w-4  mr-2' />
                <p className='text-sm font-bold'>Read More</p>
                </div>
            </div>
        </div>

     </div>

     {/* bootom */}
     <div className='mt-10 flex flex-row '>
        <p className='text-sm'>Logistic & Transport Solutions Saves Your Time.<span className='font-bold'>Finds Your Solutions </span> </p>
        <FaArrowAltCircleRight className='ml-2 h-3 w-3 mt-1'/>

     </div>
     
    </div>
  )
}

export default Servicessection
