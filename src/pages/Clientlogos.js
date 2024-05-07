import React from 'react'
import logo1 from "../image/logo/client-2-1.png";
import logo2 from "../image/logo/client-2-2.png";
import logo3 from "../image/logo/client-2-3.png";
import logo4 from "../image/logo/client-2-4.png";
import logo5 from "../image/logo/client-2-5.png";

const Clientlogos = () => {
  return (
    <div className='mt-10 px-10 ml-6'>
        <h1>Client Logos Section</h1>
        <div className='flex flex-row w-20 h-10 mt-10 space-x-32  '>
      <img  src={logo1} alt='logo1' className='' />
      <img  src={logo2} alt='logo2' />
      <img  src={logo3} alt='logo3' />
      <img  src={logo4} alt='logo4' />
      <img  src={logo5} alt='logo5' />
    </div>
    </div>
   
  )
}

export default Clientlogos
