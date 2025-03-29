import { useState } from 'react';
import { jsPDF } from 'jspdf';

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
    summary: '',
    experiences: [{ title: '', company: '', location: '', duration: '', description: '' }],
    education: [{ degree: '', school: '', year: '', gpa: '' }],
    skills: {
      technical: '',
      soft: '',
      languages: ''
    },
    certifications: [{ name: '', issuer: '', year: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index][field] = value;
    setFormData(prev => ({
      ...prev,
      experiences: newExperiences
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, { title: '', company: '', location: '', duration: '', description: '' }]
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    // Enhanced PDF generation will be implemented
    doc.save('professional-resume.pdf');
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container bg-white shadow-lg rounded-lg p-4 p-md-5">
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary fw-bold">Create Your Professional Resume</h1>
          <p className="lead text-muted">Build a standout resume that gets you noticed</p>
        </div>
        
        <form className="needs-validation">
          {/* Personal Information Section */}
          <div className="card mb-4 border-0 bg-light">
            <div className="card-body p-4">
              <h2 className="card-title h3 mb-4 border-bottom pb-2">
                <i className="bi bi-person-circle me-2"></i>Personal Information
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="John Doe"
                      id="fullName"
                    />
                    <label htmlFor="fullName">Full Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="john@example.com"
                      id="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="+1 234 567 8900"
                      id="phone"
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="City, Country"
                      id="location"
                    />
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="card mb-4 border-0 bg-light">
            <div className="card-body p-4">
              <h2 className="card-title h3 mb-4 border-bottom pb-2">
                <i className="bi bi-link-45deg me-2"></i>Professional Links
              </h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-linkedin"></i>
                    </span>
                    <div className="form-floating">
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        placeholder="LinkedIn URL"
                        id="linkedin"
                      />
                      <label htmlFor="linkedin">LinkedIn Profile</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="GitHub Profile URL"
                      id="github"
                    />
                    <label htmlFor="github">GitHub</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="Portfolio Website URL"
                      id="portfolio"
                    />
                    <label htmlFor="portfolio">Portfolio</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="card mb-4 border-0 bg-light">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                <h2 className="card-title h3 mb-0">
                  <i className="bi bi-briefcase me-2"></i>Work Experience
                </h2>
                <button
                  type="button"
                  onClick={addExperience}
                  className="btn btn-primary btn-sm rounded-pill"
                >
                  <i className="bi bi-plus-lg me-1"></i>Add Experience
                </button>
              </div>
              {formData.experiences.map((exp, index) => (
                <div key={index} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                            className="form-control"
                            placeholder="Job Title"
                            id={`title-${index}`}
                          />
                          <label htmlFor={`title-${index}`}>Job Title</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                            className="form-control"
                            placeholder="Company"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            value={exp.duration}
                            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                            className="form-control"
                            placeholder="Duration (e.g., Jan 2020 - Present)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="card mb-4 border-0 bg-light">
            <div className="card-body p-4">
              <h2 className="card-title h3 mb-4 border-bottom pb-2">
                <i className="bi bi-stars me-2"></i>Skills & Expertise
              </h2>
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="form-floating">
                    <textarea
                      name="skills.technical"
                      value={formData.skills.technical}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="Technical Skills"
                      id="technicalSkills"
                      style={{ height: '100px' }}
                    />
                    <label htmlFor="technicalSkills">Technical Skills</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="skills.soft"
                      value={formData.skills.soft}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="Soft Skills"
                      id="softSkills"
                    />
                    <label htmlFor="softSkills">Soft Skills</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="skills.languages"
                      value={formData.skills.languages}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                      placeholder="Languages"
                      id="languages"
                    />
                    <label htmlFor="languages">Languages</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              onClick={generatePDF}
              className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow"
            >
              <i className="bi bi-file-earmark-pdf me-2"></i>
              Generate Professional Resume
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeBuilder;