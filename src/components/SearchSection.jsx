import React, { useState } from "react";
import "./SearchSection.css";

const SearchSection = ({ setLocationFilter }) => {
  const [salary, setSalary] = useState([50, 80]);

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  // const handleSalaryChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   const index = parseInt(e.target.dataset.index);
  //   const newSalary = [...salary];
  //   newSalary[index] = value;
  //   setSalary(newSalary);
  // };

  const handleSalaryChange = (e) => {
    const index = parseInt(e.target.dataset.index);
    const value = parseInt(e.target.value);
    const newSalary = [...salary];

    if (index === 0) {
      // min slider cannot cross max
      newSalary[0] = Math.min(value, newSalary[1] - 1);
    } else {
      // max slider cannot cross min
      newSalary[1] = Math.max(value, newSalary[0] + 1);
    }

    setSalary(newSalary);
  };

  return (
    <section className="search-section">
      <div className="container">
        {/* <div className="search-form"> */}
        <div className="search-field">
          <div className="search-input-container">
            <img src="assets/images/search.png" alt="" />
            <input
              type="text"
              placeholder="Search By Job Title, Role"
              className="search-input"
            />
          </div>
        </div>

        <div className="location-field">
          <div className="location-input-container">
            <img src="assets/images/location.png" alt="" />
            <select onChange={handleLocationChange} className="location-select">
              <option>Preferred Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
            <svg
              className="dropdown-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>

        <div className="job-type-field">
          <div className="job-type-container">
            <img src="assets/images/jobtype.png" alt="" />

            <select className="job-type-select">
              <option>Job type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Freelance</option>
            </select>
            <svg
              className="dropdown-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
        {/* </div> */}

        <div className="salary-filter">
          <div className="salary-header">
            <span className="salary-label">Salary Per Month</span>
            <span className="salary-range">
              <span>₹{salary[0]}k</span>
              <p>-</p>
              <span>₹{salary[1]}k</span>
            </span>
          </div>
          {/* <div className="salary-slider">
            <input
              type="range"
              min="10"
              max="200"
              value={salary[0]}
              data-index="0"
              onChange={handleSalaryChange}
              className="slider slider-min"
            />
            <input
              type="range"
              min="10"
              max="200"
              value={salary[1]}
              data-index="1"
              onChange={handleSalaryChange}
              className="slider slider-max"
            />
            <div className="slider-track">
              <div 
                className="slider-range"
                style={{
                  left: `${(salary[0] - 10) / (200 - 10) * 100}%`,
                  width: `${(salary[1] - salary[0]) / (200 - 10) * 100}%`
                }}
              ></div>
            </div>
          </div> */}
          <div className="salary-slider">
            <input
              type="range"
              min="10"
              max="200"
              value={salary[0]}
              data-index="0"
              onChange={handleSalaryChange}
              className="slider slider-min"
            />
            <input
              type="range"
              min="10"
              max="200"
              value={salary[1]}
              data-index="1"
              onChange={handleSalaryChange}
              className="slider slider-max"
            />
            <div className="slider-track">
              <div
                className="slider-range"
                style={{
                  left: `${((salary[0] - 10) / (200 - 10)) * 100}%`,
                  width: `${((salary[1] - salary[0]) / (200 - 10)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
