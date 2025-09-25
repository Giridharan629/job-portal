import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const getCompanyLogo = (logo) => {
    const logos = {
      amazon: (
        <div className="company-logo amazon-logo">
          <img
            src="/assets/images/amazon.png"
            alt="Amazon Logo"
            className="company-icon"
          />
        </div>
      ),
      tesla: (
        <div className="company-logo tesla-logo">
          <img
            src="/assets/images/tesla.png"
            alt="Tesla Logo"
            className="company-icon"
          />
        </div>
      ),
      swiggy: (
        <div className="company-logo swiggy-logo">
          <img
            src="/assets/images/swiggy.png"
            alt="Swiggy Logo"
            className="company-icon"
          />
        </div>
      ),
    };

    return (
      logos[logo] || (
        <div className="company-logo default-logo">
          <img
            src="/assets/images/default-logo.png"
            alt="Default Logo"
            className="company-icon"
          />
        </div>
      )
    );
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="company-logo-container">{getCompanyLogo(job.logo)}</div>
        <div className="posted-time">{job.postedTime}</div>
      </div>

      <h3 className="job-title">{job.title}</h3>

      <div className="job-details">
        <div className="detail-item">
          <svg
            className="detail-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>{job.experience}</span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span>{job.location}</span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <span>{job.salary}</span>
        </div>
      </div>

      <div className="job-description">
        {job.description.map((desc, index) => (
          <div key={index} className="description-item">
            <span className="bullet">•</span>
            <span>{desc}</span>
          </div>
        ))}
      </div>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
