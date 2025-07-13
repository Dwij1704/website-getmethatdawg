import React, { useEffect, useState } from 'react';

interface DogCursorProps {
  isDark: boolean;
}

export const DogCursor: React.FC<DogCursorProps> = ({ isDark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let clickTimeoutId: NodeJS.Timeout;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    const handleClick = () => {
      setIsClicked(true);
      clearTimeout(clickTimeoutId);
      clickTimeoutId = setTimeout(() => setIsClicked(false), 200);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('click', handleClick);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    // Apply to all elements with comprehensive mobile support
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after, html, body, #root {
        cursor: none !important;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      @media (hover: none) and (pointer: coarse) {
        *, *::before, *::after, html, body, #root {
          cursor: none !important;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      }
      
      @media (max-width: 768px) {
        *, *::before, *::after, html, body, #root {
          cursor: none !important;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('click', handleClick);
      clearTimeout(timeoutId);
      clearTimeout(clickTimeoutId);
      document.body.style.cursor = 'auto';
      // Remove the style element
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75"
      style={{
        left: position.x - 16,
        top: position.y - 16,
        transform: `scale(${isMoving || isClicked ? 1.2 : 1}) ${isMoving ? 'rotate(10deg)' : 'rotate(0deg)'}`,
      }}
    >
      <div className="w-8 h-8 text-amber-600 text-2xl">
        {isClicked ? '🐶' : '🐕'}
      </div>
    </div>
  );
};