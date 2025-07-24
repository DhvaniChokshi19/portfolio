import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const Footer = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='Footer' className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Get In Touch</h1>
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">dhvanik03@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Vadodara, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Social Links</h2>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/DhvaniChokshi19" 
                  className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition-colors duration-200 group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
                </a>
                
                <a 
                  href="www.linkedin.com/in/dhvanichokshi19" 
                  className="bg-gray-100 hover:bg-blue-100 p-4 rounded-lg transition-colors duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </a>
                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;