import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    //     <div className='mb-10 mt-5'>

    //  <div className=' flex justify-between gap-4 '>
    //       <div className='flex-1 left-0 font-normal text-2xl'>Cargo</div>
    //       <div >
    //       <ul className='flex flex-row gap-6 menu menu-horizontal px-1'>
    //           <li className='hover:text-red'>
    //             <details>
    //               <summary>
    //                 HOME
    //               </summary>
    //               <ul className='p-2 bg-base-100 rounded-t-none'>
    //                 <li>home1</li>
    //                 <li>home2</li>
    //               </ul>
    //             </details>
    //           </li>
    //           <li>
    //             <details>
    //               <summary>
    //                 PAGES
    //               </summary>
    //               <ul className='p-2 bg-base-100 rounded-t-none'>
    //                 <li>home1</li>
    //                 <li>home2</li>
    //               </ul>
    //             </details>
    //           </li>
    //           <li>TRACKING</li>
    //           <li>
    //             <details>
    //               <summary>
    //                 SERVICES
    //               </summary>
    //               <ul className='p-2 bg-base-100 rounded-t-none'>
    //                 <li>home1</li>
    //                 <li>home2</li>
    //               </ul>
    //             </details>
    //           </li>
    //           <li>
    //             <details>
    //               <summary>
    //               BLOG
    //               </summary>
    //               <ul className='p-2 bg-base-100 rounded-t-none'>
    //                 <li>home1</li>
    //                 <li>home2</li>
    //               </ul>
    //             </details>
    //           </li>
    //         </ul>
    //       </div>
    //     <div className='space-x-4'>
    //     <button className='bg-primary px-2 py-1 text-white' >GET A QUOTE</button>
    //         <button className='bg-black px-2 py-1 text-white'>SIGN IN</button>
    //     </div>

    //       </div>
    //     </div>

    <div className="flex flex-row items-center justify-between m-10 ">
      <a>
        <h1 className="text-xl font-bold">Cargo</h1>
      </a>
      <div className='flex items-center'>
      <ul className="flex space-x-12 text-sm font-medium mr-5">
        <li className=' hover:border-l-4 hover:border-primary relative group hover:text-slate-500'>
          <div className="flex items-center">
         <a to='/' >HOME</a>
          <IoMdArrowDropdown className="h-6 w-6" />
          </div>
          <ul className="absolute  top-5 hidden group-hover:block">
            <li><a>home1</a></li>
            <li><a>home1</a></li>
          </ul>
        </li>
        <li className='hover:border-l-4 hover:border-primary relative group hover:text-slate-500'>
          <div className="flex items-center">
          <a>PAGES</a>
          <IoMdArrowDropdown className="h-6 w-6" />
          </div>
          <ul className="absolute top-5 hidden group-hover:block">
            <li><a>page1</a></li>
            <li><a>page2</a></li>
            
          </ul>
        </li>

        <li className='hover:border-l-4 hover:border-primary hover:text-slate-500'>
          <a>TRACKING</a>
        </li>

        <li className='hover:border-l-4 hover:border-primary relative group  hover:text-slate-500'>
          <div className="flex items-center">
          <a >SERVICES</a>
          <IoMdArrowDropdown className="h-6 w-6" />
          </div>
           <ul className="absolute top-5 group-hover:block hidden ">
            <li><a>service1</a></li>
            <li><a>service2</a></li>
            
          </ul>
        </li>

        <li className='hover:border-l-4 hover:border-primary relative group  hover:text-slate-500'>
          <div className="flex items-center">
          <a>BLOG</a>
          <IoMdArrowDropdown className="h-6 w-6" />
          </div>
         
          <ul className="absolute top-5 hidden group-hover:block">
            <li><a>page1</a></li>
            <li><a>page2</a></li>
            
          </ul>
        </li>
      </ul>
      <div className="space-x-4">
        <button className="bg-primary px-2 py-1 text-white">GET A QUOTE</button>
        <button className="bg-black px-2 py-1 text-white">SIGN IN</button>
      </div>
      </div>
     
    </div>
  );
};

export default Header;
