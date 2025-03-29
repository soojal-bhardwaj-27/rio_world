import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Create Professional</span>
            <span className="block text-primary">AI-Powered Resumes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Build stunning resumes with our AI-powered platform. Get personalized suggestions, 
            professional templates, and stand out from the crowd.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/builder"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:text-lg"
            >
              Create Resume
            </Link>
            <Link
              to="/interview-prep"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white border-primary hover:bg-gray-50 md:text-lg"
            >
              Interview Prep
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;