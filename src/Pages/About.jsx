import React from 'react';
import TiltedCard from '../../ReactBits/TiltedCard/TiltedCard';
import Profilephoto from './../assets/profile2.jpg';
import { GraduationCap, Laptop } from 'lucide-react';
const AboutStats = () => {
  return (
  
    <div className="max-w-6xl mx-auto mt-12">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        {/* Years Experience Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-400 hover:shadow-md transition-shadow duration-300">
          <div className="text-3xl font-bold text-gray-800 mb-1">1+</div>
          <div className="text-gray-500 text-m font-medium">Years Experience</div>
        </div>
        {/* Personal Projects Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-pink-400 hover:shadow-md transition-shadow duration-300">
          <div className="text-3xl font-bold text-gray-800 mb-1">3+</div>
          <div className="text-gray-500 text-m font-medium">Personal Projects</div>
        </div>
{/* Education Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-indigo-400 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center mb-3">
            <GraduationCap className="w-6 h-6 text-indigo-500 mr-2" />
            <div className="text-lg font-semibold text-gray-800">Education</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-700">Bachelor of Technology</div>
            <div className="text-sm text-gray-500">Computer Science & Engineering</div>
            <div className="text-xs text-gray-400 font-medium">2021 - 2025</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-400 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center mb-3">
    <Laptop className="w-6 h-6 text-indigo-500 mr-2" />
            <div className="text-lg font-semibold text-gray-800">Work Experience</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-700">Physical Research Laboratory Thaltej, Ahmedabad</div>
            <div className="text-sm text-gray-500">Project Intern</div>
            <div className="text-xs text-gray-400 font-medium">January- April 2025</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id='About' className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">About Me</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Who I Am */}
          <div className="lg:col-span-1">
          <TiltedCard
  imageSrc ={Profilephoto}
  altText="Dhvani Chokshi"
  captionText="Dhvani Chokshi"
  containerHeight="500px"
  containerWidth="100%"
  imageHeight="400px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.4}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Dhvani Chokshi
    </p>
  }
/>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Who I Am</h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                Hey there! I’m Dhvani Chokshi — a curious coder, creative thinker, and full-stack web developer who loves turning ideas into reality on the web. I recently graduated with a degree in Computer Science from Pandit Deendayal Energy University, and 
                I’m passionate about building digital experiences that are not just functional, but also fun, intuitive, and visually engaging.
                </p>
                <p>Whether I’m crafting sleek dashboards with React.js, and Tailwind CSS, or designing secure, efficient backends with Node.js and Django, I enjoy every step of the journey. I believe that great user experience is what truly makes a project shine. From developing an AI-powered air quality forecasting system to building e-commerce sites and personal finance apps, I’m drawn to projects that make a meaningful impact. One of my proudest achievements? 
                  PRIME, a full-stack research management platform I built during my internship at the Physical Research Laboratory!</p>
              <p>When I’m not coding, you’ll probably find me painting, sketching new ideas, or exploring fresh ways to blend creativity and technology. I love leading teams, owning processes, 
                and brainstorming ideas that grow into real-world products. Always learning, always building.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <AboutStats />



    </div>
  );
};

export default About;