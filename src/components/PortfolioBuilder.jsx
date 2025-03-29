import React, { useState } from 'react';
import { FaBriefcase, FaPalette, FaCode, FaCamera, FaLightbulb, FaPen, FaGraduationCap, FaTrophy } from 'react-icons/fa';

function PortfolioBuilder() {
  const [activeSection, setActiveSection] = useState('templates');

  const portfolioSections = [
    { icon: <FaBriefcase />, title: 'Work Experience', desc: 'Showcase your professional journey' },
    { icon: <FaCode />, title: 'Projects', desc: 'Display your best work and achievements' },
    { icon: <FaGraduationCap />, title: 'Education', desc: 'Highlight your academic background' },
    { icon: <FaTrophy />, title: 'Skills', desc: 'Present your expertise and competencies' }
  ];

  const templates = [
    { id: 1, name: 'Developer', image: process.env.PUBLIC_URL + '/portfolio/developer.png' },
    { id: 2, name: 'Designer', image: process.env.PUBLIC_URL + '/portfolio/designer.png' },
    { id: 3, name: 'Creative', image: process.env.PUBLIC_URL + '/portfolio/creative.png' },
    { id: 4, name: 'Professional', image: process.env.PUBLIC_URL + '/portfolio/professional.png' }
  ];

  const features = [
    { icon: <FaPalette />, title: 'Customizable Design', desc: 'Personalize colors, fonts, and layouts' },
    { icon: <FaCamera />, title: 'Media Gallery', desc: 'Showcase images and videos of your work' },
    { icon: <FaLightbulb />, title: 'Project Spotlight', desc: 'Highlight your best projects' },
    { icon: <FaPen />, title: 'Blog Section', desc: 'Share your thoughts and expertise' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaBriefcase className="text-6xl mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6">Create Your Professional Portfolio</h1>
          <p className="text-xl mb-8 text-green-100">Showcase your work with a stunning portfolio website</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-all">
            Start Building
          </button>
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-green-500 mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative group">
                  <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-center">{template.name}</h3>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl text-green-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
          <p className="text-xl mb-8">Create your professional portfolio in minutes</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-all">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioBuilder;