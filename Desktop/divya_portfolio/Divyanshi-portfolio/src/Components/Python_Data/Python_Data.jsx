import "./Python_Data.css";
import Python_Data from '../../assets/Python_Data';
import arrow_icon from '../../assets/arrow_icon.svg';

const PythonComponent = () => {
  return (
    <div id='python-section' className='python-section'>
      <div className="title-box">
        <h1> My Learning - Python </h1>
      </div>
      <div className="python-container">
        {Python_Data.map((topic, index) => {
          return (
            <div key={index} className='python-card'>
              <h3>{topic.p_no}</h3>
              <h2>{topic.p_name}</h2>
              <p>{topic.p_desc}</p>
              <div className='python-readmore'>
                <p><a href="Python.html" className="read-more">Read More </a></p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PythonComponent;
