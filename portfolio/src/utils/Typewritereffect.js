import React from 'react'
import Typewriter from 'typewriter-effect';

const Typewritereffect = () => {
  return (
    <h2 className="text-center font-russoone font-bold text-primary  lgs:w-[100vw] mds:w-auto" style={{
      fontSize: 'calc(10vw + 2.5rem)'
      
    }}>
      <Typewriter
        options={{
          strings: [
            'DEVOP',
            'ASTROPHILE',
            'AUTOPHILE',

          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
          cursor:'|'
        }}
      />
    </h2>
  )
}

export default Typewritereffect
