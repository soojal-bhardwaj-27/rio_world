import React, { useState } from 'react';
import { FaGlobe, FaPalette, FaMobile, FaSearch, FaRocket, FaCode, FaTools, FaChartLine } from 'react-icons/fa';

function WebsiteBuilder() {
  const [activeTab, setActiveTab] = useState('templates');

  const features = [
    { icon: <FaPalette />, title: 'Custom Design', desc: 'Create unique designs that match your brand' },
    { icon: <FaMobile />, title: 'Responsive', desc: 'Websites that work perfectly on all devices' },
    { icon: <FaSearch />, title: 'SEO Ready', desc: 'Optimized for search engines' },
    { icon: <FaCode />, title: 'Clean Code', desc: 'Well-structured and maintainable code' }
  ];

  const templates = [
    { id: 1, name: 'Business', image: process.env.PUBLIC_URL + '/templates/business.png' },
    { id: 2, name: 'Portfolio', image: process.env.PUBLIC_URL + '/templates/portfolio.png' },
    { id: 3, name: 'E-commerce', image: process.env.PUBLIC_URL + '/templates/ecommerce.png' },
    { id: 4, name: 'Blog', image: process.env.PUBLIC_URL + '/templates/blog.png' }
  ];

  const tools = [
    { icon: <FaTools />, name: 'Visual Editor', desc: 'Drag and drop interface' },
    { icon: <FaRocket />, name: 'Quick Deploy', desc: 'One-click deployment' },
    { icon: <FaChartLine />, name: 'Analytics', desc: 'Track your website performance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaGlobe className="text-6xl mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6">Create Your Dream Website</h1>
          <p className="text-xl mb-8 text-blue-100">Professional websites made simple</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
            Start Building
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Website Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative group">
                <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-center">{template.name}</h3>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl text-blue-500 mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebsiteBuilder;