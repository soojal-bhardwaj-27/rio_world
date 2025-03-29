import { useState, useEffect } from 'react';
import { FaLightbulb, FaCheckCircle, FaQuestionCircle, FaBriefcase, FaUserTie, FaCode } from 'react-icons/fa';

function InterviewPrep() {
  const [activeTab, setActiveTab] = useState('tips');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load interview preparation content');
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-gray-600">Loading interview preparation content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  const interviewTips = {
    preparation: [
      'Research the company thoroughly',
      'Review the job description and requirements',
      'Prepare your elevator pitch',
      'Practice common interview questions',
      'Prepare relevant examples of your work',
      'Choose appropriate professional attire',
      'Bring extra copies of your resume'
    ],
    during: [
      'Arrive 10-15 minutes early',
      'Maintain good eye contact',
      'Listen carefully to questions',
      'Use the STAR method for behavioral questions',
      'Show enthusiasm and positive attitude',
      'Ask thoughtful questions about the role and company',
      'Take notes if necessary'
    ],
    followUp: [
      'Send a thank-you email within 24 hours',
      'Reiterate your interest in the position',
      'Address any questions you couldnt answer completely',
      'Provide any requested additional information',
      'Follow up if you havent heard back in a week'
    ]
  };

  const commonQuestions = {
    behavioral: [
      {
        q: 'Tell me about yourself',
        tips: 'Keep it professional and relevant. Structure: Present → Past → Future'
      },
      {
        q: 'Why are you interested in this position?',
        tips: 'Show youve researched the company and role'
      },
      {
        q: 'What are your greatest strengths and weaknesses?',
        tips: 'Be honest but strategic. Show growth mindset'
      },
      {
        q: 'Where do you see yourself in 5 years?',
        tips: 'Show ambition while being realistic'
      }
    ],
    technical: [
      {
        q: 'How do you handle tight deadlines?',
        tips: 'Discuss prioritization and time management'
      },
      {
        q: 'How do you deal with disagreements in a team?',
        tips: 'Focus on communication and problem-solving'
      },
      {
        q: 'Describe a challenging project you completed',
        tips: 'Use STAR method: Situation, Task, Action, Result'
      }
    ],
    closing: [
      {
        q: 'Do you have any questions for us?',
        tips: 'Always have 3-5 thoughtful questions prepared'
      },
      {
        q: 'What are your salary expectations?',
        tips: 'Research market rates and give a range'
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">Interview Preparation Guide</h1>
        <p className="text-blue-100">Master your interview with these essential tips and questions</p>
      </div>

      <div className="bg-white rounded-b-lg shadow-lg">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 py-4 px-6 ${activeTab === 'tips' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            <FaLightbulb className="inline mr-2" /> Interview Tips
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex-1 py-4 px-6 ${activeTab === 'questions' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            <FaQuestionCircle className="inline mr-2" /> Common Questions
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'tips' ? (
            <div className="space-y-8">
              {Object.entries(interviewTips).map(([phase, tips]) => (
                <div key={phase} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 capitalize">
                    <FaBriefcase className="inline mr-2 text-blue-600" />
                    {phase.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(commonQuestions).map(([category, questions]) => (
                <div key={category} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 capitalize">
                    <FaUserTie className="inline mr-2 text-blue-600" />
                    {category} Questions
                  </h3>
                  <div className="space-y-4">
                    {questions.map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-gray-900 mb-2">{item.q}</p>
                        <p className="text-gray-600 text-sm">
                          <FaCode className="inline mr-2 text-blue-600" />
                          Tip: {item.tips}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewPrep;