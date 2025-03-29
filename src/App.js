import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder';
import Home from './components/Home';
import Navbar from './components/Navbar';
import InterviewPrep from './components/InterviewPrep';
import Templates from './components/Templates';
import PortfolioBuilder from './components/PortfolioBuilder';
import WebsiteBuilder from './components/WebsiteBuilder';
import AppDevelopment from './components/AppDevelopment';
import ResumePreview from './components/ResumePreview';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/portfolio" element={<PortfolioBuilder />} />
            <Route path="/website" element={<WebsiteBuilder />} />
            <Route path="/app" element={<AppDevelopment />} />
            <Route path="/preview" element={<ResumePreview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
