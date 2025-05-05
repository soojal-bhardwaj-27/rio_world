import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary" onClick={handleLinkClick}>RIO</Link>
          
          {/* Hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/templates" className="text-gray-600 hover:text-primary" onClick={handleLinkClick}>Templates</Link>
            <Link to="/builder" className="text-gray-600 hover:text-primary" onClick={handleLinkClick}>Resume</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-primary" onClick={handleLinkClick}>Portfolio</Link>
            <Link to="/website" className="text-gray-600 hover:text-primary" onClick={handleLinkClick}>Website</Link>
            <Link to="/app" className="text-gray-600 hover:text-primary" onClick={handleLinkClick}>App</Link>
            <Link to="/interview-prep" className="text-gray-600 hover:text-primary" onClick={handleLinkClick}>Interview</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-2">
            <Link to="/templates" className="text-gray-600 hover:text-primary py-2" onClick={handleLinkClick}>Templates</Link>
            <Link to="/builder" className="text-gray-600 hover:text-primary py-2" onClick={handleLinkClick}>Resume</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-primary py-2" onClick={handleLinkClick}>Portfolio</Link>
            <Link to="/website" className="text-gray-600 hover:text-primary py-2" onClick={handleLinkClick}>Website</Link>
            <Link to="/app" className="text-gray-600 hover:text-primary py-2" onClick={handleLinkClick}>App</Link>
            <Link to="/interview-prep" className="text-gray-600 hover:text-primary py-2" onClick={handleLinkClick}>Interview</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;