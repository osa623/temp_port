//All the dependencies 
import React, { useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//social media icons

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


//sections images


import portMain from '../assests/portMain.png';
import osandaTop from '../assests/osandaTop.png';
import osandaBottom from '../assests/osandaBottom.png';




//project files
import upperBackground from '../assests/upperBackground.png';
import lowerBackground from '../assests/lowerBackground.png';
import { Link } from 'react-router-dom';

//sms images
import smsUpperBackground from '../assests/sms/smsUpperBackground.png';
import smsPortrait from '../assests/sms/smsPortrait.png';

//mds images
import mdsupperBackground from '../assests/upperBackgroundMds.png';



const HeroSection = () => {

   //icon


   // Initialize AOS
   useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

    
  return (
    <main className='relative  h-auto w-[100vw] flex flex-col overflow-hidden  bg-gradient-to-r from-primary via-gray-200 to-gray-400  '>

      
                <section className='flex overflow-hidden flex-col h-screen w-full z-20' id='home'>
                




                <div className='flex flex-row h-[5rem] w-full  bg-transparent z-50'>
           
                <div className='flex  h-auto w-[100vw] justify-center lgs:justify-center'>
      
   
                
                      <div className='hidden lgs:flex lgs:w-[15vw] lgs:justify-center bg-transparent mds:justify-center sms:justify-start cursor-pointer p-5'>
                       

                      </div>
                      <div className='flex mds:w-full lgs:w-[70vw] mds:justify-center bg-transparent lgs:justify-center mds:items-center lgs:p-2'>
                         
                      </div>
                      <div className='flex mds:w-full lgs:w-[15vw] mds:justify-center lgs:space-x-5 bg-transparent lgs:items-center lgs:justify-center mds:items-center lgs:p-2'>
                  {/*     <FontAwesomeIcon icon={faGithub} className='h-8' />
                          <FontAwesomeIcon icon={faFacebook} className='h-8' />
                          <FontAwesomeIcon icon={faInstagram} className='h-8' />
                          <FontAwesomeIcon icon={faYoutube} className='h-8' /> */}
                      </div>

                </div> 

         
                

                </div>

              {/* New Code Segment 001 */}

                <div className='flex flex-col items-center justify-center w-[100vw] h-full overflow-hidden'>
        
                   <div className='absolute flex top-0 h-auto lgs:w-[100vw] bg-transparent sms:overflow-hidden lgs:overflow-hidden' style={{
                    

                   }}>
                      <div className='hidden lgs:flex lgs:w-[100vw] lgs:h-auto bg-transparent overflow-hidden'>

                         <img src={upperBackground} alt=''/>

                      </div>
                      <div className='hidden sms:flex  lgs:w-[100vw] lgs:h-auto bg-transparent overflow-hidden'>

                        <img src={smsUpperBackground} alt=''/>

                        </div>
                        <div className='hidden mds:flex  lgs:w-[100vw] mt-24 lgs:h-auto bg-transparent'>

                        <img src={mdsupperBackground} alt='' className='scale-150'/>

                        </div>

                      <div className='hidden absolute lgs:flex z-50 bg-transparent lgs:items-center lgs:justify-center lgs:w-full lgs:h-[30rem] lgs:mt-24'>
                          <div className='flex lgs:w-[100vw] lgs:h-[50rem] sms:w-[100vw] sms:h-[20rem] items-center justify-end'>
                              <div className='flex flex-col lgs:h-[20rem] lgs:space-y-0.5 bg-transparent lgs:w-[5rem]'>
                                <Link to={'h'} className='flex lgs:h-[5rem] lgs:w-[5rem] bg-gray-800 rounded-l-xl lgs:items-center lgs:justify-center hover:cursor-pointer' style={{
                                   boxShadow: "1px 5px 5px rgba(0,0,0,0.7) , inset 0px 5px 5px rgba(255,255,255,0.4)"
                                }}><FontAwesomeIcon icon={faFacebook} className='text-primary lgs:h-8 hover:h-10 sms:h-8 transfrom transform-all duration-300 ease-out' />
                                </Link>
                                <Link className='flex lgs:h-[5rem] lgs:w-[5rem] bg-gray-800 rounded-l-xl lgs:items-center lgs:justify-center hover:cursor-pointer'style={{
                                   boxShadow: "1px 5px 5px rgba(0,0,0,0.7) , inset 0px 5px 5px rgba(255,255,255,0.4)", 
                                }}><FontAwesomeIcon icon={faInstagram} className='text-primary lgs:h-8 hover:h-10 sms:h-8 transfrom transform-all duration-300 ease-out' />
                                </Link>
                                <Link className='flex lgs:h-[5rem] lgs:w-[5rem] bg-gray-800 rounded-l-xl lgs:items-center lgs:justify-center hover:cursor-pointer'style={{
                                   boxShadow: "1px 5px 5px rgba(0,0,0,0.7) , inset 0px 5px 5px rgba(255,255,255,0.4)",
                                }}><FontAwesomeIcon icon={faGithub} className='text-primary lgs:h-8 hover:h-10 sms:h-8 transfrom transform-all duration-300 ease-out' />
                                </Link>
                                <Link className='flex lgs:h-[5rem] lgs:w-[5rem] bg-gray-800 rounded-l-xl lgs:items-center lgs:justify-center hover:cursor-pointer'style={{
                                   boxShadow: "1px 5px 5px rgba(0,0,0,0.7) , inset 0px 5px 5px rgba(255,255,255,0.4)",
                                }}><FontAwesomeIcon icon={faLinkedinIn} className='text-primary lgs:h-8 hover:h-10 sms:h-8 transfrom transform-all duration-300 ease-out' />
                                </Link>

                              </div>

                          </div>  
                        

                      </div>
                  </div>
                  



                  <div className='absolute flex top-0 h-screen w-full bg-transparent overflow-hidden z-30 items-end sms:items-center justify-center sms:justify-start'>

                    <div className='hidden lgs:flex mds:flex lgs:h-[90vh] mds:h-h/3 w-auto bg-transparent'>
                        <img src={portMain} alt=''/>
                    </div>

                    <div className='hidden sms:flex h-[60rem] mds:h-h/3 w-auto bg-transparent sms:mt-32'>
                        <img src={smsPortrait} alt='' className='object-cover'/>
                    </div>
                    

                  </div>

                  <div className='hidden lgs:flex absolute -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                    

                  }}>
                   <img src= {lowerBackground} alt=''/>

                 </div>

                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.0 }}
                  
                  className='absolute flex -top-10 h-screen w-full bg-transparent z-40 items-end justify-center'>

                    <div className='flex w-full items-center justify-center' >
                      <img src= {osandaTop} alt='' className='' data-aos-='fade-up' data-aos-delay='300'/>

                    </div>


                  </motion.div>

                  <div className='absolute flex top-0 h-auto w-[100vw] z-20 bg-transparent'>
                      <div className='flex lgs:w-[100vw] lgs:h-auto bg-transparent'>

                         

                      </div>
                  </div>

                  <motion.div
                     initial={{ opacity: 0, y: 200 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2.0 }}
                  className='absolute flex -top-10 h-screen w-full bg-transparent z-20 items-end justify-center'>

                      <div className='flex w-full items-center justify-center'>
                        <img src= {osandaBottom} alt='' className=''  data-aos-='fade-up' data-aos-delay='300'/>

                      </div>


                  </motion.div>


                </div>


                </section>

    
      
    </main>
  );
}

export default HeroSection;