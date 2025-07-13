import React, { useState } from 'react';
import { Copy, Check, Terminal, Download } from 'lucide-react';

interface InstallSectionProps {
  isDark: boolean;
}

export const InstallSection: React.FC<InstallSectionProps> = ({ isDark }) => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section id="install" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get Your <span className="text-amber-500">Good Boy</span>
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Install via Homebrew and start deploying agents in seconds.
          </p>
        </div>

        <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] mb-8 ${
          isDark 
            ? 'bg-gray-900 border-gray-700 hover:border-amber-500' 
            : 'bg-white border-gray-200 hover:border-amber-500 hover:shadow-lg'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Homebrew Installation
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                The only way to install getmethatdawg
              </p>
            </div>
            <Download className={`w-5 h-5 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
          </div>
          
          <div className={`flex items-center space-x-3 p-4 rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <Terminal className="w-5 h-5 text-amber-500" />
            <code className={`flex-1 font-mono ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              brew install getmethatdawg
            </code>
            <button
              onClick={() => copyToClipboard('brew install getmethatdawg', 'homebrew')}
              className={`p-2 rounded-md transition-colors ${
                isDark 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'
              }`}
            >
              {copiedCommand === 'homebrew' ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div className={`mb-12 p-6 rounded-xl ${
          isDark ? 'bg-red-900/20 border border-red-700' : 'bg-red-50 border border-red-200'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Prerequisites
          </h3>
          <div className="space-y-3">
            <div className={`flex items-start space-x-3 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-red-500 font-bold">•</span>
              <div>
                <strong>Docker:</strong> Must be installed and running on your machine
              </div>
            </div>
            <div className={`flex items-start space-x-3 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-red-500 font-bold">•</span>
              <div>
                <strong>Fly.io CLI (flyctl):</strong> Required unless using <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded text-amber-700 dark:text-amber-300">--pre-auth</code> flag
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 p-8 rounded-2xl text-center ${
          isDark ? 'bg-amber-900/20 border border-amber-700' : 'bg-amber-50 border border-amber-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Quick Start
          </h3>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-amber-500 font-bold">1.</span>
                <code className={`font-mono ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  getmethatdawg deploy my-agent.py
                </code>
              </div>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Deploy with decorators (recommended)
              </p>
            </div>
            
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-amber-500 font-bold">2.</span>
                <code className={`font-mono ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  getmethatdawg deploy my-agent.py --auto-detect
                </code>
              </div>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Or let getmethatdawg auto-detect your functions
              </p>
            </div>
            
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-amber-500 font-bold">3.</span>
                <code className={`font-mono ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  getmethatdawg deploy my-agent.py --pre-auth
                </code>
              </div>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Seamless deployment without flyctl setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};