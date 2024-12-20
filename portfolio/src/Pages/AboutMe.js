import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//background images
import lowerBackground1 from '../assests/lowerBackground1.png';
import myResume from '../assests/myResumeImage.png';
import contactMe from '../assests/contactMeImage.png';
import { faConnectdevelop, faReadme } from '@fortawesome/free-brands-svg-icons';


const AboutMe = () => {
  return (
    <section  className='relative flex-col flex bg-gray-800 lgs:h-[40rem] mds:h-[75rem] lgs:w-[100vw]'>

        <div className='flex  bg-gray-800 mds:w-[100vw] mds:h-[2.5rem] lgs:h-[30rem] lgs:w-[100vw] sms:h-[2rem] sms:w-[100vw]'/>
            
          

        <div className='flex sms:flex-col mds:flex-col h-auto w-auto sms:items-center sms:justify-center mds:justify-center mds:items-center sms:space-y-5'>

        <div className='flex h-auto lgs:w-[20vw] justify-center items-center'>
            <h2 className='font-dmsans text-9xl text-gray-300 lgs:-rotate-90'>
                    ME
            </h2>
        </div>

        <div className='flex h-auto lgs:w-[5vw] sms:w-[75vw] mds:w-[75vw] mds:h-1 sms:h-1 justify-center items-center'>
            <div className='flex bg-primary w-0.5 sms:w-[20rem] mds:w-[20rem] h-3/4'/>
        </div>
                
        <div className='flex h-auto lgs:w-[50vw] sms:w-[90vw] items-center justify-center mds:mt-6'>
            <p className='font-dmsans text-primary mds:text-xl text-center text-lg lgs:w-[60vw] mds:w-[75vw]'>
            Hey I am Osanda Muthukumarana, a full-stack developer and enthusiastic software engineer who is presently enrolled at the Sri Lankan Institute of Information Technology (SLIIT).I have a solid background in both front-end and back-end development, and my area of expertise is creating scalable, effective, and intuitive solutions. My passion for solving problems and my desire to use cutting-edge tools and frameworks to create useful apps have motivated me throughout my technological journey.I'm constantly excited to pick up new skills, work with others, and take on challenges that test my creativity. I try to contribute significantly to the field of software development, whether it is through creating dynamic web apps, investigating cutting-edge technologies, or educating the public.
            </p>
        </div>

        <div className='flex h-auto lgs:w-[5vw] sms:w-[75vw] mds:w-[75vw] mds:mt-6 mds:h-1 sms:h-1 justify-center items-center'>
            <div className='flex bg-primary w-0.5 sms:w-[20rem] mds:w-[20rem] h-3/4'/>
        </div>

        

        <div className='hidden lgs:flex sms:flex mds:flex flex-col h-auto lgs:w-[20vw] w-full mds:h-[25rem]  sms:h-[25rem]'>
          <div className='flex h-auto lgs:w-[20vw] sms:w-full items-center justify-center sms:mt-24 mds:mt-40'>
              <div className='absolute flex h-auto w-auto z-30 items-center justify-center'>
                 <img src= {myResume} alt='' className='object-cover lgs:scale-75 sms:scale-75 mds:scale-50 '/>
              </div>
              <div className='absolute flex h-auto w-auto z-40 items-center justify-center'>
                 <button className='flex bg-yellow-400 rounded-full lgs:w-[10rem] sms:w-[6rem] sms:h-[3rem] mds:w-[10rem] mds:h-[3rem] items-center justify-center lgs:h-[3rem] lgs:mt-24 lgs:ml-12 sms:mt-24 mds:mt-24'
                 style={{
                      boxShadow:'inset 0px 5px 10px rgba(0,0,0,0.8) , 0px 5px 10px rgba(0,0,0,0.8)'
                 }}>
                      <FontAwesomeIcon icon= {faReadme} className='lgs:h-8' />
                 </button>
              </div>
          </div>
          <div className='flex  h-auto lgs:w-[20vw] items-center justify-center lgs:mt-48 mds:mt-48 sms:mt-40'>
              <div className='absolute flex h-auto w-auto z-30 items-center justify-center'>
                 <img src= {contactMe} alt='' className='object-cover lgs:scale-75 sms:scale-75 mds:scale-50'/>
              </div>
              <div className='absolute flex h-auto w-auto z-40 items-center justify-center'>
                 <button className='flex bg-yellow-400 rounded-full drop-shadow-lg lgs:w-[10rem] sms:w-[6rem] sms:h-[3rem]  mds:w-[10rem] mds:h-[3rem] items-center justify-center lgs:h-[3rem] lgs:mt-24 lgs:mr-12 sms:mt-24 mds:mt-24'
                    style={{
                      boxShadow:'inset 0px 5px 10px rgba(0,0,0,0.8) , 0px 5px 10px rgba(0,0,0,0.8)'
                    }}>
                      <FontAwesomeIcon icon= {faConnectdevelop} className='lgs:h-8' />
                 </button>
              </div>
          </div>
            
       </div>

       


        </div>

       

       <div className='flex bg-gray-800 lgs:h-[50rem] lgs:w-[100vw] '/>
                         <div className='hidden absolute lgs:flex -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                           
       
                         }}> 
                          <img src= {lowerBackground1} alt=''/>
       
                        </div>
            
    </section>
  )
}

export default AboutMe
