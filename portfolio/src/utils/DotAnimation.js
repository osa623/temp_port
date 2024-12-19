import React from 'react';
import '../custom/DotAnimation.css';

const DotAnimation = () => {
  return (
    <div className="mod">
      <div className="cube">
        <div className="face f1">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`dot p${i + 1}`}></div>
          ))}
        </div>
        <div className="face f2">
          {[...Array(15)].map((_, i) => (
            <div key={i + 15} className={`dot p${i + 16}`}></div>
          ))}
        </div>
        <div className="face f3">
          {[...Array(15)].map((_, i) => (
            <div key={i + 30} className={`dot p${i + 31}`}></div>
          ))}
        </div>
        <div className="face f4">
          {[...Array(15)].map((_, i) => (
            <div key={i + 45} className={`dot p${i + 46}`}></div>
          ))}
        </div>
        <div className="face f5">
          {[...Array(15)].map((_, i) => (
            <div key={i + 60} className={`dot p${i + 61}`}></div>
          ))}
        </div>
        <div className="face f6">
          {[...Array(10)].map((_, i) => (
            <div key={i + 75} className={`dot p${i + 76}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotAnimation;
