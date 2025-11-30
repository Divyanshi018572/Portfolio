import React from 'react';
import './Helping_Tools.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Helping_Tools_Data from '../../assets/Helping_Tools_Data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Helping_Tools = () => {
  return (
    <div id='helping-tools' className='helping-tools'>
      <div className="title-box">
        <h1> My Learning - Helping Tools </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="helping-tools-container">
        {Helping_Tools_Data.map((item, index) => {
          return (
            <div key={index} className='helping-tools-format'>
              <h3>{item.s_no}</h3>
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>
              <div className='helping-tools-readmore'>
                <p><a href="Helping-Tools.html" className="read-more">Read More </a></p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Helping_Tools;
