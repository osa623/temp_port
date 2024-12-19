import React from 'react'
import Typewriter from 'typewriter-effect';

const Typewrittermobile = () => {
  return (
    <div className="text-center text-[#fdd122] font-russoone" style={{
        fontSize:'40px'
    }}>
      <Typewriter
        options={{
          strings: [
            'Content Creator',
            'Video Editor',
            'Auto Enthusiast'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          cursor:'|'
        }}
      />
    </div>
  )
}

export default Typewrittermobile
