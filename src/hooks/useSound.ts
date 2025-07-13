import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playBark = useCallback(() => {
    try {
      // Create audio element if it doesn't exist
      if (!audioRef.current) {
        audioRef.current = new Audio('/assets/bark.mp3');
        audioRef.current.preload = 'auto';
        audioRef.current.volume = 0.5;
      }
      
      // Reset and play the sound
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    } catch (error) {
      console.log('Audio initialization failed:', error);
    }
  }, []);

  return { playBark };
};