import React, { useState } from "react";
import "./Header.css";
import CreateJobModal from "./CreateJobModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Logo replaced with image */}
          <div className="logo">
            <img
              src="/assets/images/logo.png"
              alt="Company Logo"
              className="logo-img"
            />
          </div>

          <nav className="nav">
            <div>
              <a href="#" className="nav-link">
                Home
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                Find Jobs
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                Find Talents
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                About us
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                Testimonials
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="create-jobs-btn"
          >
            <span>Create Job</span>
            <span>Login</span>
          </button>
        </div>
      </header>
      <CreateJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
