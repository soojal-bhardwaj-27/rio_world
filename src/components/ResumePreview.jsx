import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import '../styles/ResumePreview.css';

function ResumePreview({ formData = {}, template = 'modern' }) {
  const [previewMode, setPreviewMode] = useState('desktop');

  const templateStyles = {
    modern: 'resume-modern',
    minimal: 'resume-minimal',
    professional: 'resume-professional',
  };

  return (
    <div className="resume-container">
      <div className="preview-controls">
        <button
          onClick={() => setPreviewMode('desktop')}
          className={`control-btn ${previewMode === 'desktop' ? 'active' : ''}`}
        >
          Desktop
        </button>
        <button
          onClick={() => setPreviewMode('mobile')}
          className={`control-btn ${previewMode === 'mobile' ? 'active' : ''}`}
        >
          Mobile
        </button>
      </div>

      <div className={`resume-preview ${templateStyles[template]} ${previewMode}`}>
        <header className="resume-header">
          <h1>{formData.fullName || 'Your Name'}</h1>
          
          <div className="contact-info">
            {formData.email && (
              <div className="contact-item">
                <FaEnvelope />
                <span>{formData.email}</span>
              </div>
            )}
            {formData.phone && (
              <div className="contact-item">
                <FaPhone />
                <span>{formData.phone}</span>
              </div>
            )}
            {formData.location && (
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{formData.location}</span>
              </div>
            )}
          </div>

          <div className="social-links">
            {formData.linkedin && (
              <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
            {formData.github && (
              <a href={formData.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
            {formData.portfolio && (
              <a href={formData.portfolio} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            )}
          </div>
        </header>

        {formData.summary && (
          <section className="resume-section">
            <h2>Professional Summary</h2>
            <p>{formData.summary}</p>
          </section>
        )}

        {formData.experiences && formData.experiences.length > 0 && (
          <section className="resume-section">
            <h2>Experience</h2>
            {formData.experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {formData.skills && Object.keys(formData.skills).length > 0 && (
          <section className="resume-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              {Object.entries(formData.skills).map(([category, skills]) => (
                skills && (
                  <div key={category} className="skill-category">
                    <h3>{category.replace('_', ' ')}</h3>
                    <div className="skill-tags">
                      {skills.split(',').map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ResumePreview;