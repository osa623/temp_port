import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Stareffect = () => {

  useEffect(()=>{
    Aos.init({
    duration:1500
    })
  })
      

  return (
    <div class="bg-animation lgs:w-full h-auto">
                    <div class="absolute w-full h-full" data-aos='fade-up'>
                        <div class="star-animation" id="stars"></div>
                        <div class="star-animation" id="stars2"></div>
                        <div class="star-animation" id="stars3"></div>
                        <div class="star-animation" id="stars4"></div>
                        <div class="star-animation" id="stars5"></div>
                    </div>
              </div>
  )
}

export default Stareffect
