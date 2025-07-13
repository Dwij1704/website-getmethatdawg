import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { WhySection } from './components/WhySection';
import { InstallSection } from './components/InstallSection';
import { Footer } from './components/Footer';
import { DogCursor } from './components/DogCursor';
import { useSound } from './hooks/useSound';

function App() {
  const [isDark, setIsDark] = useState(false);
  const { playBark } = useSound();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Add click listener for bark sound
    const handleClick = () => {
      playBark();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [playBark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <DogCursor isDark={isDark} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <WhySection isDark={isDark} />
      <InstallSection isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;