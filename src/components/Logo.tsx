import React, { useState } from 'react';

interface LogoProps {
  isDark: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isDark }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [showForeshadow, setShowForeshadow] = useState(false);

  const handleGoodBoyClick = () => {
    setShowForeshadow(true);
    setTimeout(() => setShowForeshadow(false), 3000);
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 1000);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {showForeshadow && (
        <div className={`text-sm italic animate-pulse ${
          isDark ? 'text-amber-300' : 'text-amber-600'
        }`}>
          (it was supposed to be a backflip!!)
        </div>
      )}
      
      <div 
        className={`w-24 h-24 md:w-32 md:h-32 transition-transform duration-1000 ease-in-out ${
          isFlipping ? '' : ''
        }`}
        style={{
          transform: isFlipping ? 'rotateX(360deg) scale(1.2)' : 'none',
          transformStyle: 'preserve-3d',
        }}
      >
        <img 
          src="/assets/getmethatdawg-logo.png" 
          alt="GetMeThatDawg Logo" 
          className="w-full h-full object-contain filter drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
        />
      </div>
      
      <button
        onClick={handleGoodBoyClick}
        className={`px-6 md:px-8 py-3 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isDark 
            ? 'bg-amber-500 hover:bg-amber-400 text-gray-900' 
            : 'bg-amber-600 hover:bg-amber-700 text-white'
        } shadow-lg hover:shadow-xl`}
      >
        Good Boy! 🐕
      </button>
    </div>
  );
};