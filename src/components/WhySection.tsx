import React from 'react';
import { AlertTriangle, Clock, Wrench, CheckCircle } from 'lucide-react';

interface WhySectionProps {
  isDark: boolean;
}

export const WhySection: React.FC<WhySectionProps> = ({ isDark }) => {
  return (
    <section id="why" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Why <span className="text-amber-500">getmethatdawg</span>?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Agent deployment shouldn't be rocket science. Here's why we built the good boy you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              The Pain Points 😤
            </h3>
            
            <div className={`p-6 rounded-xl border-l-4 border-red-500 ${
              isDark ? 'bg-red-900/20' : 'bg-red-50'
            }`}>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Complex Configuration Hell
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Docker files, YAML configs, environment variables, secrets management... 
                    Just to deploy a simple agent script? Come on!
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-l-4 border-orange-500 ${
              isDark ? 'bg-orange-900/20' : 'bg-orange-50'
            }`}>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Hours of Setup Time
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    You spend more time configuring deployment pipelines than actually 
                    building your agent. That's backwards!
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-l-4 border-yellow-500 ${
              isDark ? 'bg-yellow-900/20' : 'bg-yellow-50'
            }`}>
              <div className="flex items-start space-x-4">
                <Wrench className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Platform Lock-in
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Each platform has its own way of doing things. Learn one, 
                    start over with another. Exhausting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              The Good Boy Solution 🐕
            </h3>
            
            <div className={`p-6 rounded-xl border-l-4 border-green-500 ${
              isDark ? 'bg-green-900/20' : 'bg-green-50'
            }`}>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    One Script, One Command
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Just write functions. We'll sniff out the rest like a good dog tracking a scent. 
                    Run <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded text-amber-700 dark:text-amber-300">getmethatdawg deploy</code>. 
                    That's it. Woof!
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-l-4 border-blue-500 ${
              isDark ? 'bg-blue-900/20' : 'bg-blue-50'
            }`}>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Smart Auto-Detection
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    We analyze your script, understand your workflow, and set up 
                    everything automatically. No config files needed.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-l-4 border-purple-500 ${
              isDark ? 'bg-purple-900/20' : 'bg-purple-50'
            }`}>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Instant Endpoints
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Get a list of ready-to-use API endpoints for your agent. 
                    Start making requests immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 p-8 rounded-2xl text-center ${
          isDark ? 'bg-amber-900/20 border border-amber-700' : 'bg-amber-50 border border-amber-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Perfect for Single Script Agents
          </h3>
          <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Currently optimized for simple, single-script agents. Because sometimes 
            you just want to deploy a quick AI helper without the enterprise overhead.
          </p>
        </div>
      </div>
    </section>
  );
};