import React from 'react'

//background images



const Footer = () => {
  return (
    <section className='relative flex-col flex bg-gray-300 h-[10vh] lgs:w-[100vw] sms:w-[100vw]'>
        <div className='flex bg-gray-600 lgs:h-[2vh] lgs:w-[100vw] sms:h-[1vh] sms:w-full'/>
       <div className='flex bg-transparent h-[8vh] items-center justify-center lgs:w-[100vw]'>
         <h2 className='font-dmsans lgs:text-md sms:text-sm sms:w-[80vw] sms:text-center text-secondary'>
         Copyright {new Date().getFullYear()} © Osanda Muthukumarana. All Rights Reserved.
         </h2>
       </div>
       
            
    </section>
  )
}

export default Footer;
