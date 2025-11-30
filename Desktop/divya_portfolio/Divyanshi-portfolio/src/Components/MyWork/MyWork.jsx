import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      {/* Title Section */}
      <div className="title-box">
        <h1>My Latest Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Projects Grid */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <a href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_name} loading="lazy" />
            </a>
            <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="project-button">
              {work.w_name}
            </a>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
