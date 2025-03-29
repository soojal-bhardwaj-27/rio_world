import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">RIO</Link>
          <div className="flex space-x-4">
            <Link to="/templates" className="text-gray-600 hover:text-primary">Templates</Link>
            <Link to="/builder" className="text-gray-600 hover:text-primary">Resume</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-primary">Portfolio</Link>
            <Link to="/website" className="text-gray-600 hover:text-primary">Website</Link>
            <Link to="/app" className="text-gray-600 hover:text-primary">App</Link>
            <Link to="/interview-prep" className="text-gray-600 hover:text-primary">Interview</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;