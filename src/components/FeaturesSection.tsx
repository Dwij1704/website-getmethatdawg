import React from 'react';
import { Code, Zap, Globe, Settings, FileText, Rocket } from 'lucide-react';

interface FeaturesSectionProps {
  isDark: boolean;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ isDark }) => {
  const features = [
    {
      icon: Code,
      title: 'Function-Based Workflow',
      description: 'Write your agent logic as simple functions. No complex frameworks or boilerplate code required.'
    },
    {
      icon: Settings,
      title: 'Smart Decorators',
      description: 'Use optional decorators to define endpoints, or let our auto-detection handle everything for you.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Deploy',
      description: 'From local script to live endpoints in under 30 seconds. No build steps, no waiting around.'
    },
    {
      icon: Globe,
      title: 'Fly.io Integration',
      description: 'Automatically deploys to Fly.io with optimal configurations. Global edge deployment included.'
    },
    {
      icon: FileText,
      title: 'Zero Config Files',
      description: 'No Dockerfiles, no YAML, no JSON configs. Just your Python script and you\'re good to go.'
    },
    {
      icon: Rocket,
      title: 'Instant Endpoints',
      description: 'Get a complete list of API endpoints for your agent functions. Ready to integrate immediately.'
    }
  ];

  return (
    <section id="features" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Features That <span className="text-amber-500">Fetch</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to deploy AI agents, nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-xl mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 p-8 rounded-2xl ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Example Agent Script
          </h3>
          <div className={`rounded-lg p-6 font-mono text-sm overflow-x-auto ${
            isDark ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
          }`}>
            <pre>{`# my_agent.py
from getmethatdawg import agent, endpoint

@agent
class MyAwesomeAgent:
    
    @endpoint("/chat")
    def chat(self, message: str) -> str:
        # Your AI logic here
        return f"Agent says: {message}"
    
    @endpoint("/analyze") 
    def analyze_data(self, data: dict) -> dict:
        # More agent functionality
        return {"analysis": "complete", "insights": data}

# Deploy with decorators:
# getmethatdawg deploy my_agent.py

# Or use auto-detection:
# getmethatdawg deploy my_agent.py --auto-detect`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};