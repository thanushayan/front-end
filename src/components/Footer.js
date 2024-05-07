import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";

import truck1 from "../image/container-truck.jpg";
import truck2 from "../image/truck2.jpg";
import truck3 from "../image/truck3.jpg";
import truck4 from "../image/truck4.jpg";
import people from "../image/people.jpg";
import table from "../image/table.jpg";

const Footer = () => {
  const [email,setEmail]=useState("");

  const handleSubmit = () =>{
    alert(`Email sent to ${email}`);
  }
  return (
    <div className='mt-10 bg-footer  mb-10'>
      
      <div className='text-white ml-4 mr-10 ' >
      <div className='flex flex-row justify-between '>
        <div className='mt-8'>
        <h2 className='text-3xl font-bold'>Weekley Newsletter </h2>
       <p>There are many vaiations of passages of lorem ipsum available.</p>
        </div>
        <div className='mt-8 space-x-3'>
          <input className=' text-black px-8 py-2 rounded-md' value={email} onChange={(event) => setEmail(event.target.value)}type='text' placeholder='Enter You Mail'/>
          <button className='bg-primary px-3 py-2' onClick={() =>handleSubmit()}>SUBSCRIBE</button>
        </div>
      </div>

      <div className='mt-20 flex flex-row justify-around justify-items-start '>
        <div >
         <p className='text-xl font-bold'> About us</p>
         <p className='mt-2 text-primary'>--------</p>
         <p  className='mt-4 text-sm'>lorem ipsum dolor sit amet,<br /> consectetur adipscing elit</p>
         <div className='mt-4 flex flex-row text-sm'>
         <FaPhone className='h-3 w-3 mt-2'/>
         <p className='ml-1 text-sm' > |  <span className='ml-2 text-sm'>(+94)114347575</span></p>
         </div>
         <div className='mt-4 flex flex-row text-sm'>
         <FaLocationDot className='h-3 w-3 mt-2'/>
         <p className='ml-1' > |  <span className='ml-2'>42 Lily Ave Colombo<br/> 00600</span></p>
         </div>
          </div>
        <div>
          <p className='text-xl font-bold'>Latest News</p>
        <p className='mt-2 text-primary'>--------</p>
        <div className='flex flex-row text-sm'>
        <MdKeyboardArrowRight  className='w-4 h-4 text-primary mr-2'/>
        <div><p>Sed ut perspiciatis unde omnis<br/> iste natus error sit boluptetem</p>
        <p className='mt-2'>5 Miniutes Ago</p></div>
        
        </div>
        <div className='flex flex-row text-sm mt-3'>
        <MdKeyboardArrowRight  className='w-4 h-4 text-primary mr-2'/>
        <div><p>Sed ut perspiciatis unde omnis<br/> iste natus error sit boluptetem</p>
        <p className='mt-2'>5 Miniutes Ago</p></div>
        
        </div>
        </div>
        <div>
         <p className='text-xl font-bold'>Customer Service</p> 
          <p className='mt-2 text-primary'>--------</p>
          <div className='flex flex-row text-sm mt-1'>
          <FaHandPointRight className='h-3 w-3 mt-1 mr-2' />
          <p>Support Forums</p>
          </div>
          <div className='flex flex-row text-sm mt-1'>
          <FaHandPointRight className='h-3 w-3 mt-1 mr-2' />
          <p>Communicatiom</p>
          </div>
          <div className='flex flex-row text-sm mt-1'>
          <FaHandPointRight className='h-3 w-3 mt-1 mr-2' />
          <p>FAQS</p>
          </div>
          <div className='flex flex-row text-sm mt-1'>
          <FaHandPointRight className='h-3 w-3 mt-1 mr-2' />
          <p>Privacy Policy</p>
          </div>
          <div className='flex flex-row text-sm mt-1'>
          <FaHandPointRight className='h-3 w-3 mt-1 mr-2' />
          <p>Rules&Conditions</p>
          </div>
          <div className='flex flex-row text-sm mt-1'>
          <FaHandPointRight className='h-3 w-3 mt-1 mr-2' />
          <p>Contac Us</p>
          </div>
          </div>
        <div>
          <p className='text-xl font-bold'>Customer Service</p>
          <p className='mt-2 text-primary'>--------</p>
          <div className='w-64 h-40 mb-10'>
            <div className='grid grid-cols-3 gap-1'>
              <img src={truck1} alt='truck1' className='w-20 h-16' />
              <img src={truck2} alt='truck2'className='w-20 h-16' />
              <img src={table} alt='table' className='w-20 h-16'/>
              <img src={truck3} alt='truck3'className='w-20 h-16' />
              <img src={people} alt='people'className='w-20 h-16' />
              <img src={truck4} alt='truck4'className='w-20 h-16' />
            </div>
          </div>
          </div>
      </div>
      </div>
    
    </div>
  )
}

export default Footer
