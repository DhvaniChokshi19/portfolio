import React from 'react';
import { Mail, Briefcase, Code, Brain, Users, Lightbulb, Zap, Download } from 'lucide-react';
import Iridescence from './../../ReactBits/Iridescence/Iridescence.jsx';
import SplitText from './../../ReactBits/SplitText/SplitText.jsx';
import RotatingText from './../../ReactBits/RotatingText/RotatingText.jsx';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Iridescence background */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[0.7, 0.9, 0.9]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10 min-h-screen p-5 md:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
            
            <div className="space-y-6">
              <div className="space-y-4">
                <SplitText
                  text="Hello, I am"
                  className="text-4xl md:text-5xl font-light text-white"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <h1 className="text-6xl md:text-7xl font-bold text-white">
                  Dhvani
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                Full Stack Developer and CSE Engineer
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                 onClick={() => window.open('mailto: dhvanik03@gmail.com', '_blank')}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                 <Mail size={20} />
                  Get In Touch
                </button>
                <button
                onClick={() => window.open('https://www.github.com/DhvaniChokshi19','_blank')}

                className="group relative px-8 py-4 bg-transparent border border-white/30 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Briefcase size={20} />
                  View Projects
                </button>
              </div>              
              {/* Social links */}
              <div className="flex gap-4 pt-4">
                <button
                onClick={() => window.open('https://www.linkedin.com/in/dhvanichokshi19/', '_blank') } 
                className="px-2 py-4 bg-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-lg text-white hover:bg-blue-600/30 transition-all duration-300 flex items-center gap-2">
                <img src="src/assets/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5" />
                  Connect on LinkedIn
                </button>
                <button
                onClick={()=> windows.open('https://drive.google.com/file/d/1psaJvYCzraLO8RyV8AMLWmNSLAL7_5pz/view?usp=sharing','_blank')}
                 className="px-3 py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-lg text-gray-100 hover:bg-gray-800/30 transition-all duration-300 flex items-center gap-2">
                <Download size={20} />
                Download Resume
                </button>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/25 rounded-lg">
                        <Code size={24} className="text-blue-800" />
                      </div>
                      <h3 className="text-black font-semibold text-lg">Full Stack Developer</h3>
                    </div>
                    <p className="text-black text-m">Frontend & Backend Expertise</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Brain size={24} className="text-purple-800" />
                      </div>
                      <h3 className="text-black font-semibold text-lg">Problem Solver</h3>
                    </div>
                    <p className="text-black text-m">Analytical Approach</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Lightbulb size={24} className="text-yellow-700" />
                      </div>
                      <h3 className="text-black font-semibold text-lg">Innovative</h3>
                    </div>
                    <p className="text-black text-m">Creative Solutions</p>
                  </div>                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-orange-500/20 rounded-lg">
                        <Zap size={24} className="text-orange-800" />
                      </div>
                      <h3 className="text-black font-semibold text-lg">Tech Enthusiast</h3>
                    </div>
                    <p className="text-black text-m">Latest Technologies</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-pink-500/20 rounded-lg">
                        <Users size={24} className="text-pink-700" />
                      </div>
                      <h3 className="text-black font-semibold text-lg">Team Player</h3>
                    </div>
                    <p className="text-black text-m">Collaborative Spirit</p>
                  </div>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;