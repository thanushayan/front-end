import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import ship from "../image/ship.jpg";
import containers from "../image/images-5.jpeg";
import cargo from "../image/cargo.jpeg";
import truck from "../image/truckimage.jpg";
import { LuMessagesSquare } from "react-icons/lu";


const Latestnews = () => {
  return (
    <div className='mt-14 mb-20'>
        <hr />
        <h1>News Section</h1>
      <h2 className='font-bold text-2xl text-center'>LATEST NEWS</h2>
      <div className='flex justify-center mb-10'>
     <MdCheckBoxOutlineBlank  className='bg-blue text-blue text-xs  m-1 h-2 w-2 '/> 
        <p className='text-xs text-center list-square'>INTEGER CONGUE ELIT</p>
        </div>
        <div className='grid grid-cols-2 gap-x-5 gap-y-8  '>
            <div className='relative w-auto h-48 bg-sky-300 flex flex-row'>
                <div className='w-1/2 h-max'>
                    <img src={truck} alt='truck' className='h-48' />
                </div>
                <div className='bg-sky-300 absolute w-10 h-10 text-sm text-white text-center font-semibold'>
                    <p>26</p>
                    <p>MAY</p>
                </div>
                <div className='text-white ml-4 mt-8'>
                    <h2  className=' text-sm font-bold   '>CURABITUR LOREM UISM QUIS</h2>
                    <div className='flex flex-row space-x-3 text-sm mt-4 '>
                        <p>Admin </p>
                        <LuMessagesSquare className=' mt-1 font-semibold' />
                        <p>15</p>
                    </div>
                    <p className='text-sm  mt-3'>Pellentesque habitant morbi tristique<br /> senectuseft netus et malesuada <br/>fames  turpis egestas. Aenean non donec....</p>
                </div>
            </div>

            {/* 2nd box */}
            <div className='relative w-auto h-48 bg-slate-200 flex flex-row'>
                <div className='w-1/2 h-max'>
                    <img src={containers} alt='truck' className='h-48' />
                </div>
                <div className='bg-black absolute w-10 h-10 text-sm text-white text-center font-semibold'>
                    <p>22</p>
                    <p>MAY</p>
                </div>
                <div className=' ml-4 mt-8'>
                    <h2  className=' text-sm font-bold   '>CURABITUR LOREM UISM QUIS</h2>
                    <div className='flex flex-row space-x-3 text-sm mt-4 '>
                        <p>Admin </p>
                        <LuMessagesSquare className=' mt-1 font-semibold text-sky-500' />
                        <p>15</p>
                    </div>
                    <p className='text-sm  mt-3'>Pellentesque habitant morbi tristique<br /> senectuseft netus et malesuada <br/>fames  turpis egestas. Aenean non donec....</p>
                </div>
            </div>

            {/* 3rd box */}
            <div className='relative w-auto h-48 bg-slate-200 flex flex-row'>
                <div className='w-1/2 h-max'>
                    <img src={cargo} alt='truck' className='h-48' />
                </div>
                <div className='bg-black absolute w-10 h-10 text-sm text-white text-center font-semibold'>
                    <p>20</p>
                    <p>MAY</p>
                </div>
                <div className=' ml-4 mt-8'>
                    <h2  className=' text-sm font-bold   '>CURABITUR LOREM UISM QUIS</h2>
                    <div className='flex flex-row space-x-3 text-sm mt-4 '>
                        <p>Admin </p>
                        <LuMessagesSquare className=' mt-1 font-semibold text-sky-500' />
                        <p>15</p>
                    </div>
                    <p className='text-sm  mt-3'>Pellentesque habitant morbi tristique<br /> senectuseft netus et malesuada <br/>fames  turpis egestas. Aenean non donec....</p>
                </div>
            </div>

            {/* 4th box */}
            <div className='relative w-auto h-48 bg-slate-200 flex flex-row'>
                <div className='w-1/2 h-max'>
                    <img src={ship} alt='truck' className='h-48' />
                </div>
                <div className='bg-black absolute w-10 h-10 text-sm text-white text-center font-semibold'>
                    <p>15</p>
                    <p>MAY</p>
                </div>
                <div className=' ml-4 mt-8'>
                    <h2  className=' text-sm font-bold   '>CURABITUR LOREM UISM QUIS</h2>
                    <div className='flex flex-row space-x-3 text-sm mt-4 '>
                        <p>Admin </p>
                        <LuMessagesSquare className=' mt-1 font-semibold text-sky-500' />
                        <p>15</p>
                    </div>
                    <p className='text-sm  mt-3'>Pellentesque habitant morbi tristique<br /> senectuseft netus et malesuada <br/>fames  turpis egestas. Aenean non donec....</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Latestnews
