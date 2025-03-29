import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaGlobe, FaBriefcase, FaMobileAlt, FaRocket, FaLightbulb, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

function Templates() {
  const templates = [
    { id: 1, name: 'Professional', image: process.env.PUBLIC_URL + '/templates/professional.png', category: 'resume' },
    { id: 2, name: 'Creative', image: process.env.PUBLIC_URL + '/templates/creative.png', category: 'resume' },
    { id: 3, name: 'Modern', image: process.env.PUBLIC_URL + '/templates/modern.png', category: 'resume' },
    { id: 4, name: 'Minimal', image: process.env.PUBLIC_URL + '/templates/minimal.png', category: 'resume' }
  ];

  const services = [
    {
      id: 'resume',
      title: 'Resume Builder',
      icon: <FaFileAlt className="text-4xl text-blue-500" />,
      description: 'Create professional resumes that stand out and get you noticed by top employers.',
      features: ['Multiple templates', 'ATS-friendly formats', 'Expert tips & suggestions']
    },
    {
      id: 'portfolio',
      title: 'Portfolio Creator',
      icon: <FaBriefcase className="text-4xl text-purple-500" />,
      description: 'Showcase your work with stunning portfolio websites that capture attention.',
      features: ['Customizable layouts', 'Project showcases', 'Professional themes']
    },
    {
      id: 'website',
      title: 'Website Builder',
      icon: <FaGlobe className="text-4xl text-green-500" />,
      description: 'Build responsive websites with our easy-to-use website builder.',
      features: ['Drag & drop builder', 'SEO optimization', 'Mobile responsive']
    },
    {
      id: 'app',
      title: 'App Development',
      icon: <FaMobileAlt className="text-4xl text-red-500" />,
      description: 'Create mobile apps for iOS and Android platforms.',
      features: ['Cross-platform development', 'Modern UI/UX', 'App store submission']
    }
  ];

  const interviewTips = {
    general: [
      'Research the Company thoroughly',
      'Know Your Resume Well',
      'Practice Common Questions',
      'Demonstrate Problem-Solving',
      'Be Confident and Clear',
      'Ask Questions',
      'Prepare Technical Demos'
    ],
    questions: [
      {
        category: 'HR Questions',
        items: [
          {
            q: 'Tell me about yourself',
            a: 'Structure: Background, Education, Skills, Recent Experience'
          },
          {
            q: 'What are your strengths and weaknesses?',
            a: 'Focus on professional traits and growth mindset'
          },
          {
            q: 'Why should we hire you?',
            a: 'Match your skills to job requirements'
          }
        ]
      },
      {
        category: 'Technical',
        items: [
          {
            q: 'Explain React components',
            a: 'Discuss functional vs class components'
          },
          {
            q: 'What is Virtual DOM?',
            a: 'Explain performance benefits'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Build Your Professional Identity</h1>
          <p className="text-xl mb-8 text-blue-100">All-in-one platform for your professional presence</p>
          <FaRocket className="text-6xl mx-auto mb-8 animate-bounce" />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/${service.id}`}
                className="mt-6 block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Resume Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative group">
                <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-center">{template.name}</h3>
                <Link 
                  to={`/builder?template=${template.id}`}
                  className="mt-4 block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Use Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Interview Tips Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Interview Preparation Guide
        </h2>
        
        {/* Tips */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <FaLightbulb className="text-yellow-500 mr-3" />
            Essential Interview Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {interviewTips.general.map((tip, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Questions */}
        <div className="grid md:grid-cols-2 gap-8">
          {interviewTips.questions.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <FaQuestionCircle className="text-blue-500 mr-3" />
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="border-b pb-4 last:border-0">
                    <p className="font-medium text-gray-900 mb-2">{item.q}</p>
                    <p className="text-gray-600 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;