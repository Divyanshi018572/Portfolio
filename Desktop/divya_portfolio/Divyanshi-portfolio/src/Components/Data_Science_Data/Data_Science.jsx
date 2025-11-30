import React from 'react';
import './Data_Science.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Data_Science_Data from '../../assets/Data_Science_Data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Data_Science = () => {
  return (
    <div id='data-science' className='data-science'>
      <div className="title-box">
        <h1> My Learning - Data Science </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="data-science-container">
        {Data_Science_Data.map((item, index) => {
          return (
            <div key={index} className='data-science-format'>
              <h3>{item.s_no}</h3>
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>
              <div className='data-science-readmore'>
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

export default Data_Science;
