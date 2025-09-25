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
          
          <img src="assets/images/exeperience.png" alt="" />
          <span>{job.experience}</span>
        </div>

        <div className="detail-item">
          <img src="assets/images/onsite.png" alt="" />
          <span>{job.location}</span>
        </div>

        <div className="detail-item">
          <img src="assets/images/salary.png" alt="" />
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
