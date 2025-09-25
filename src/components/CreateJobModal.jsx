import React, { useState } from "react";
import "./CreateJobModal.css";

const CreateJobModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Only render when open

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Publishing Job:", formData);
    onClose(); // Close modal after submit
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Create Job Opening</h2>

        {/* Form Fields */}
        <div className="form-grid">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter job title"
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <select name="location" value={formData.location} onChange={handleChange}>
              <option value="">Select Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select name="jobType" value={formData.jobType} onChange={handleChange}>
              <option value="">Select Job Type</option>
              <option value="Internship">Internship</option>
              <option value="FullTime">Full Time</option>
              <option value="PartTime">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="form-group salary-range">
            <label>Salary Range</label>
            <div className="salary-inputs">
              <input
                type="number"
                name="minSalary"
                value={formData.minSalary}
                onChange={handleChange}
                placeholder="₹ Min"
              />
              <span className="to-text">to</span>
              <input
                type="number"
                name="maxSalary"
                value={formData.maxSalary}
                onChange={handleChange}
                placeholder="₹ Max"
              />
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="form-group full-width">
          <label>Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please share a description to let the candidate know..."
          />
        </div>

        {/* Buttons */}
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Save Draft ⌄
          </button>
          <button className="btn-primary" onClick={handleSubmit}>
            Publish »
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
