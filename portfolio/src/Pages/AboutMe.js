import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//background images
import lowerBackground1 from '../assests/lowerBackground1.png';
import myResume from '../assests/myResumeImage.png';
import contactMe from '../assests/contactMeImage.png';
import { faConnectdevelop, faReadme } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

//cv doc
import cv from '../assests/Doc/Osanda MuthukumaranasCV.pdf';
import { faFile } from '@fortawesome/free-solid-svg-icons';


const AboutMe = () => {

    
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);




  return (
    <section  className='relative flex-col flex bg-gray-800 lgs:h-[40rem] mds:h-[75rem] lgs:w-[100vw]'>

        <div className='flex  bg-gray-800 mds:w-[100vw] mds:h-[2.5rem] lgs:h-[30rem] lgs:w-[100vw] sms:h-[2rem] sms:w-[100vw]'/>
            
          

        <div className='flex sms:flex-col mds:flex-col h-auto w-auto sms:items-center sms:justify-center mds:justify-center mds:items-center sms:space-y-5'>

        <div className='flex h-auto lgs:w-[20vw] justify-center items-center' data-aos='fade-right' data-aos-delay='500'>
            <h2 className='font-dmsans text-9xl text-gray-300 lgs:-rotate-90'>
                    ME
            </h2>
        </div>

        <div className='flex h-auto lgs:w-[5vw] sms:w-[75vw] mds:w-[75vw] mds:h-1 sms:h-1 justify-center items-center'>
            <div className='flex bg-primary w-0.5 sms:w-[20rem] mds:w-[20rem] h-3/4' data-aos='zoom-in' data-aos-delay='350'/>
        </div>
                
        <div className='flex h-auto lgs:w-[50vw] sms:w-[90vw] items-center justify-center mds:mt-6'>
            <p className='font-dmsans text-primary mds:text-xl text-center text-lg lgs:w-[60vw] mds:w-[75vw]' data-aos='zoom-in' data-aos-delay='500'>
            Hey I am Osanda Muthukumarana, a full-stack developer and enthusiastic software engineer who is presently enrolled at the Sri Lankan Institute of Information Technology (SLIIT).I have a solid background in both front-end and back-end development, and my area of expertise is creating scalable, effective, and intuitive solutions. My passion for solving problems and my desire to use cutting-edge tools and frameworks to create useful apps have motivated me throughout my technological journey.I'm constantly excited to pick up new skills, work with others, and take on challenges that test my creativity. I try to contribute significantly to the field of software development, whether it is through creating dynamic web apps, investigating cutting-edge technologies, or educating the public.
            </p>
        </div>

        <div className='flex h-auto lgs:w-[5vw] sms:w-[75vw] mds:w-[75vw] mds:mt-6 mds:h-1 sms:h-1 justify-center items-center'>
            <div className='flex bg-primary w-0.5 sms:w-[20rem] mds:w-[20rem] h-3/4' data-aos='zoom-in' data-aos-delay='350'/>
        </div>

        

        <div className='hidden lgs:flex sms:flex mds:flex flex-col h-auto lgs:w-[20vw] w-full mds:h-[25rem]  sms:h-[25rem]'>
          <div className='flex h-auto lgs:w-[20vw] sms:w-full items-center justify-center sms:mt-24 mds:mt-40'>
              <div className='absolute flex h-auto w-auto z-30 items-center justify-center' data-aos='zoom-in' data-aos-delay='400'>
                 <img src= {myResume} alt='' className='object-cover lgs:scale-75 sms:scale-75 mds:scale-50 '/>
              </div>
              <div className='absolute flex h-auto w-auto z-40 items-center justify-center'>
              <button
          
              className= "mt-10 px-6 py-3 text-white bg-yellow-600 hover:bg-gray-800 rounded-lg lgs:mt-20 mds:mt-20"
            style={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.7) , inset 0px 5px 5px rgba(255,255,255,0.7)",
            }}>
                <FontAwesomeIcon icon= {faFile} className='lgs:h-8 text-gray-900' />
            </button>

               <a href={cv} download="OsandaMuthukumaranaCV.pdf" className='absolute inset-0 z-50'>
                <span className='sr-only'>Download CV</span>
               </a>
              </div>
          </div>
          <div className='flex  h-auto lgs:w-[20vw] items-center justify-center lgs:mt-48 mds:mt-48 sms:mt-40'>
              <div className='absolute flex h-auto w-auto z-30 items-center justify-center' data-aos='zoom-out' data-aos-delay='400'>
                 <img src= {contactMe} alt='' className='object-cover lgs:scale-75 sms:scale-75 mds:scale-50'/>
              </div>
              <div className='absolute flex h-auto w-auto z-40 items-center justify-center'>
              <button
          
                className= "group mt-10 px-6 py-3 text-white bg-green-600 hover:bg-green-800 rounded-lg lgs:mt-20 mds:mt-20"
              style={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.7) , inset 0px 5px 5px rgba(255,255,255,0.6)",
              }}>
                  <FontAwesomeIcon icon= {faConnectdevelop} className='lgs:h-8 text-secondary group-hover:text-primary' />
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
