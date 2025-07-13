import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-12 border-t transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8">
              <img 
                src="/assets/getmethatdawg-logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              getmethatdawg
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Dwij1704/getmethatdawg"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-amber-500 transition-colors ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/dwijptl"
              className={`hover:text-amber-500 transition-colors ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 border-t text-center ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <p className={`flex items-center justify-center space-x-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for developers who just want to ship</span>
          </p>
          <p className={`mt-2 text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © 2025 getmethatdawg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};