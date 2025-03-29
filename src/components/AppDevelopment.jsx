import React from 'react';
import { FaMobile, FaAndroid, FaApple, FaCode, FaRocket, FaShieldAlt, FaCogs, FaChartLine } from 'react-icons/fa';

function AppDevelopment() {
  const services = [
    { icon: <FaAndroid />, title: 'Android Development', desc: 'Native Android apps with Kotlin/Java' },
    { icon: <FaApple />, title: 'iOS Development', desc: 'Native iOS apps with Swift/SwiftUI' },
    { icon: <FaCode />, title: 'Cross-Platform', desc: 'React Native & Flutter solutions' },
    { icon: <FaRocket />, title: 'MVP Development', desc: 'Rapid prototype development' }
  ];

  const features = [
    { icon: <FaShieldAlt />, title: 'Secure', desc: 'Built-in security features and data encryption' },
    { icon: <FaCogs />, title: 'Scalable', desc: 'Architecture that grows with your needs' },
    { icon: <FaChartLine />, title: 'Analytics', desc: 'Built-in analytics and user tracking' }
  ];

  const process = [
    { step: 1, title: 'Planning', desc: 'Requirements gathering and project scope' },
    { step: 2, title: 'Design', desc: 'UI/UX design and prototyping' },
    { step: 3, title: 'Development', desc: 'Agile development process' },
    { step: 4, title: 'Testing', desc: 'Quality assurance and bug fixing' },
    { step: 5, title: 'Deployment', desc: 'App store submission and launch' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaMobile className="text-6xl mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl mb-8 text-purple-100">Transform your ideas into powerful mobile applications</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-purple-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-5xl text-purple-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center h-full">
                <div className="text-2xl font-bold text-purple-500 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
          <p className="text-xl mb-8">Let's turn your vision into reality</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppDevelopment;