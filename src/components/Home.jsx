import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaProjectDiagram, FaUserGraduate, FaRocket } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

        {/* Hero Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-montserrat"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary" whileHover={{ scale: 1.05 }}>
              Shape Your Career in Tech
            </motion.span>
            <motion.span className="block text-primary mt-2" whileHover={{ scale: 1.05 }}>
              With Smarter Tools & Guidance
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Build impactful portfolios, ace your interviews, and launch your dream tech career
            with AI-powered tools, real-time mentorship, and ready-to-use project templates.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/builder">
              <motion.button className="px-8 py-4 text-lg font-semibold rounded-lg text-white bg-black hover:bg-black/80 shadow-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Create Portfolio
              </motion.button>
            </Link>
            <Link to="/interview-prep">
              <motion.button className="px-8 py-4 text-lg font-semibold rounded-lg text-primary bg-white border-2 border-primary hover:bg-gray-50 shadow-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Interview Prep & Mentorship
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
            <FaLaptopCode size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Build Websites & Apps</h3>
            <p className="text-gray-600">Get ready-made templates and full-stack project kits to launch stunning websites and mobile apps.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
            <FaProjectDiagram size={40} className="mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Develop Projects</h3>
            <p className="text-gray-600">Work on real-world projects with step-by-step AI guidance and instant code reviews.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
            <FaUserGraduate size={40} className="mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Portfolio & Resume Builder</h3>
            <p className="text-gray-600">Craft beautiful, personalized portfolios and resumes in minutes with drag-and-drop tools.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
            <FaRocket size={40} className="mx-auto text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Interview Prep</h3>
            <p className="text-gray-600">Practice mock interviews, receive AI feedback, and boost your confidence before the real deal.</p>
          </div>
        </motion.div>

        {/* Optional: Call to Action / Testimonial Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-10 text-center shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            “The platform that every student developer dreams of.”
          </h2>
          <p className="text-gray-600 mb-6">From college projects to placements, this is your all-in-one toolkit for success in tech.</p>
          <Link to="/explore">
            <motion.button className="px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90" whileHover={{ scale: 1.05 }}>
              Explore Features
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;
