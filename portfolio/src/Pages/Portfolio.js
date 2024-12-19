// src/Pages/Home.js
import React, { useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';
import SideBar from './SideBar';

const Portfolio = () => {

  // Create references for each section
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);
  const footerRef = useRef(null);

  
  const handleMove = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* Sidebar */}
      <div className='hidden sms:flex mds:flex lgs:flex'>
        <SideBar 
          onNavigate={handleMove}
          
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          servicesRef={servicesRef}
          contactUsRef={contactUsRef}
          
        />
      </div>

      {/* Main Content */}
      <div className='flex-grow overflow-hidden'>
        <HeroSection/>
        <div className='h screen' ref={aboutMeRef} >
          <AboutMe/>
        </div>
        <div className='h screen' ref={projectsRef}>
          <Projects/>
        </div>
        <div className='h screen' ref={skillsRef}>
          <Skills/>
        </div>
        <div className='h screen' ref={servicesRef}>
          <Services/>
        </div>
        <div className='h screen' ref={contactUsRef}>
          <ContactUs/>
        </div>
        <div className='h screen' ref={footerRef}>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
