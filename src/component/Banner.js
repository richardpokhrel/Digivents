import React from 'react';

const MarqueeSlider = ({ 
  text = "DigiVents", 
  fontSize = "text-2xl", 
  speed = "20s",
  className = "",
  itemClassName = "",
  height = "h-96"
}) => {
  const marqueeStyle = {
    animationDuration: speed,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  };

  const DiagonalMarquee = ({ direction = 'left' }) => (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className={`absolute w-[200%] h-full ${
          direction === 'left' 
            ? 'transform rotate-[30deg] -translate-x-1/4 -translate-y-1/4' 
            : 'transform -rotate-[30deg] -translate-x-1/4 translate-y-1/4'
        }`}
        style={{
          ...marqueeStyle,
          animationName: direction === 'left' ? 'marquee-diagonal-left' : 'marquee-diagonal-right'
        }}
      >
        <div className="flex items-center h-full whitespace-nowrap">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index} 
              className={`inline-block px-16 ${fontSize} font-medium select-none ${itemClassName}`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes marquee-diagonal-left {
          0% {
            transform: rotate(30deg) translate3d(-50%, -25%, 0);
          }
          100% {
            transform: rotate(30deg) translate3d(-150%, -25%, 0);
          }
        }
        
        @keyframes marquee-diagonal-right {
          0% {
            transform: rotate(-30deg) translate3d(-150%, 25%, 0);
          }
          100% {
            transform: rotate(-30deg) translate3d(-50%, 25%, 0);
          }
        }
      `}</style>
      
      <section className={`relative w-full ${height} overflow-hidden ${className}`}>
        <DiagonalMarquee direction="left" />
        <DiagonalMarquee direction="right" />
      </section>
    </>
  );
};

export default MarqueeSlider;