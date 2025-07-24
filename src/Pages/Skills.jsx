import React from 'react';
import Pythoni from '../assets/pyhtonimg.svg';
import Scalai from '../assets/scala.svg';
import Postmani from '../assets/postman.svg';
import Figmai from '../assets/figma.svg';
import Cplusi from '../assets/cplus.svg';
import Ci from '../assets/c.svg';
// import {ReactComonent as Canvai} from '../assets/canva.svg';
import Bashi from '../assets/bash.svg';
import Adobe from '../assets/adillus.svg';
import Expressi from '../assets/express-109.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Flutteri from '../assets/flutter.svg';
import { Github } from 'lucide-react';

const SkillItem = ({ icon, name, level, iconColor }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Basic':
        return 'text-gray-500';
      case 'Intermediate':
        return 'text-blue-600';
      case 'Advanced':
        return 'text-green-600';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
      <div className={`w-6 h-6 flex items-center justify-center ${iconColor} text-base flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-900 text-sm">{name}</div>
        <div className={`text-xs ${getLevelColor(level)}`}>{level}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { icon: <img src={Pythoni} alt="Python" className="w-6 h-6" />, name: 'Python', level: 'Intermediate', iconColor: 'text-blue-600' },
    { icon: <img src={Ci} alt="C" className="w-6 h-6" />, name: 'C', level: 'Intermediate', iconColor: 'text-blue-800' },
    { icon: <img src={Cplusi} alt="C++" className="w-6 h-6" />, name: 'C++', level: 'Basic', iconColor: 'text-blue-700' },
    { icon: '🟨', name: 'JavaScript', level: 'Intermediate', iconColor: 'text-yellow-600' },
    { icon: <img src={Scalai} alt="Scala" className="w-6 h-6" />, name: 'Scala', level: 'Basic', iconColor: 'text-red-600' },
    { icon: '🐘', name: 'PHP', level: 'Intermediate', iconColor: 'text-purple-600' },
    { icon: '🌐', name: 'HTML/CSS', level: 'Advanced', iconColor: 'text-orange-600' }
  ];

  const frameworksLibraries = [
    { icon: '⚛️', name: 'React.js', level: 'Advanced', iconColor: 'text-blue-500' },
    { icon: '🟢', name: 'Node.js', level: 'Intermediate', iconColor: 'text-green-600' },
    { icon: <img src={Expressi} alt="Express.js" className="w-6 h-6" />, name: 'Express.js', level: 'Intermediate', iconColor: 'text-gray-700' },
    { icon: <img src={Flutteri} alt="Flutter" className="w-6 h-6" />, name: 'Flutter', level: 'Basic', iconColor: 'text-blue-400' },
    { icon: <img src={Tailwind} alt="Tailwind CSS" className="w-6 h-6" />, name: 'Tailwind CSS', level: 'Advanced', iconColor: 'text-teal-500' },
  ];

  const developerTools = [
    { icon: <Github className="w-6 h-6" />, name: 'Git & GitHub', level: 'Advanced', iconColor: 'text-orange-500' },
    { icon: <img src={Bashi} alt="Unix Shell" className="w-6 h-6" />, name: 'Unix Shell', level: 'Intermediate', iconColor: 'text-gray-800' },
    { icon: '🐳', name: 'Docker', level: 'Intermediate', iconColor: 'text-blue-600' },
    { icon: <img src={Postmani} alt="Postman" className="w-6 h-6" />, name: 'Postman', level: 'Intermediate', iconColor: 'text-orange-600' },
    { icon: <img src={Figmai} alt="Figma" className="w-6 h-6" />, name: 'Figma', level: 'Advanced', iconColor: 'text-purple-500' },
    { icon: <img src={Adobe} alt="Adobe Illustrator" className="w-6 h-6" />, name: 'Adobe Illustrator', level: 'Basic', iconColor: 'text-orange-700' }
  ];

  const cloudDatabases = [
    { icon: '☁️', name: 'AWS', level: 'Basic', iconColor: 'text-orange-500' },
    { icon: '🔥', name: 'Firebase', level: 'Intermediate', iconColor: 'text-yellow-600' },
    { icon: '🍃', name: 'MongoDB', level: 'Advanced', iconColor: 'text-green-600' },
    { icon: '🐘', name: 'PostgreSQL', level: 'Intermediate', iconColor: 'text-blue-600' },
    { icon: '🐬', name: 'MySQL', level: 'Intermediate', iconColor: 'text-blue-500' }
  ];

  const createPairs = (arr) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push([arr[i], arr[i + 1]]);
    }
    return pairs;
  };

  return (
    <div id='Skills' className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Skills</h1>
          <p className="text-lg text-gray-600">A comprehensive overview of my technology stack</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Programming Languages
            </h2>
            <div className="space-y-2">
              {createPairs(programmingLanguages).map((pair, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <SkillItem
                    icon={pair[0].icon}
                    name={pair[0].name}
                    level={pair[0].level}
                    iconColor={pair[0].iconColor}
                  />
                  {pair[1] && (
                    <SkillItem
                      icon={pair[1].icon}
                      name={pair[1].name}
                      level={pair[1].level}
                      iconColor={pair[1].iconColor}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Frameworks & Libraries
            </h2>
            <div className="space-y-2">
              {createPairs(frameworksLibraries).map((pair, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <SkillItem
                    icon={pair[0].icon}
                    name={pair[0].name}
                    level={pair[0].level}
                    iconColor={pair[0].iconColor}
                  />
                  {pair[1] && (
                    <SkillItem
                      icon={pair[1].icon}
                      name={pair[1].name}
                      level={pair[1].level}
                      iconColor={pair[1].iconColor}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center border-b pb-3">
              Developer Tools
            </h2>
            <div className="space-y-2">
              {createPairs(developerTools).map((pair, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <SkillItem
                    icon={pair[0].icon}
                    name={pair[0].name}
                    level={pair[0].level}
                    iconColor={pair[0].iconColor}
                  />
                  {pair[1] && (
                    <SkillItem
                      icon={pair[1].icon}
                      name={pair[1].name}
                      level={pair[1].level}
                      iconColor={pair[1].iconColor}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Databases */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center border-b pb-3">
              Cloud & Databases
            </h2>
            <div className="space-y-2">
              {createPairs(cloudDatabases).map((pair, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <SkillItem
                    icon={pair[0].icon}
                    name={pair[0].name}
                    level={pair[0].level}
                    iconColor={pair[0].iconColor}
                  />
                  {pair[1] && (
                    <SkillItem
                      icon={pair[1].icon}
                      name={pair[1].name}
                      level={pair[1].level}
                      iconColor={pair[1].iconColor}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;