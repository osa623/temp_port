// src/Pages/Home.js
import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';
import SideBar from './SideBar';

const Portfolio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div className='hidden sms:flex mds:flex lgs:flex'>
       <SideBar/>
    </div>
    <div className='flex-grow overflow-hidden'>
      <HeroSection/>
      <div className='h screen'>
        <AboutMe/>
      </div>
      < div className='h screen'>
     <Projects/>
      </div>
      <div className='h screen'>
        <Skills/>
      </div>
      <div className='h screen'>
        <Services/>
      </div>
      <div className='h screen'>
        <ContactUs/>
      </div>
      <div className='h screen'>
        <Footer/>
      </div>

    </div>

    </>
  );
};

export default Portfolio;

