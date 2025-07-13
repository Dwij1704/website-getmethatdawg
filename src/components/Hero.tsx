import React from 'react';
import { Terminal, Zap, Rocket } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900' 
        : 'bg-gradient-to-br from-amber-50 via-white to-amber-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Logo isDark={isDark} />
          
          <h1 className={`mt-8 text-5xl md:text-7xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-amber-500">get</span>
            <span className={isDark ? 'text-white' : 'text-gray-900'}>me</span>
            <span className="text-amber-500">that</span>
            <span className={isDark ? 'text-white' : 'text-gray-900'}>dawg</span>
          </h1>
          
          <p className={`mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Deploy AI agents with <span className="text-amber-500 font-semibold">literally zero config</span>. 
            One script, one command, infinite possibilities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4">
            <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg overflow-x-auto`}>
              <Terminal className="w-5 h-5 text-amber-500" />
              <code className={`font-mono text-sm md:text-base whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                brew install getmethatdawg
              </code>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <Zap className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold mb-2 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Zero Config
              </h3>
              <p className={`text-center text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No YAML files, no Docker, no complex setup. Just pure simplicity.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <Rocket className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold mb-2 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Auto Deploy
              </h3>
              <p className={`text-center text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Automatically deploys to Fly.io with smart auto-detection.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <Terminal className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold mb-2 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                One Command
              </h3>
              <p className={`text-center text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                From script to production endpoints in seconds, not hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};