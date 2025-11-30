import React from 'react';
import './Study.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Study_Data from '../../assets/Study_02';
import arrow_icon from '../../assets/arrow_icon.svg';

const Study = () => {
  return (
    <div id='study' className='study'>
      <div className="title-box">
        <h1> My Learning - Data Science </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="study-container">
        {Study_Data.map((Study, index) => {
          return (
            <div key={index} className='study-format'>
              <h3>{Study.s_no}</h3>
              <h2>{Study.s_name}</h2>
              <p>{Study.s_desc}</p>
              <div className='study-readmore'>
                <p><a href="Data-Science.html" className="read-more">Read More </a></p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Study;
