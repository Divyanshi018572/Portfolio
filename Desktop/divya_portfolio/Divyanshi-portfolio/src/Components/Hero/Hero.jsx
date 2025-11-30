import React from 'react';
import './Hero.css';
import profile_img from '../../assets/about_profile.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import { SiLeetcode, SiCoursera } from 'react-icons/si';
import resume from '../../assets/resume.pdf'; // Import resume file

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='hero-content'>
        <h1><span>I'm Divyanshi,</span> A Data Scientist From India.</h1>
        <p>
          I am a Data Scientist with expertise in AI, Machine Learning, and Data Analytics, 
          specializing in NLP, Computer Vision, and predictive analytics. I also have strong 
          proficiency in DSA in Python.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              Connect
            </AnchorLink>
          </div>
          {/* Open Resume in New Tab */}
          <div className="hero-resume">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-button">
               Resume
            </a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/divyanshi018572" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Divyanshi018572" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.kaggle.com/divyanshi7008630" target="_blank" rel="noopener noreferrer">
            <FaKaggle />
          </a>
          <a href="https://leetcode.com/u/vrH9t7wyai" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
          <a href="https://www.coursera.org/user/your-coursera" target="_blank" rel="noopener noreferrer">
            <SiCoursera />
          </a>
        </div>
      </div>

      <img src={profile_img} alt="Profile" className='profile-img' />
    </div>
  );
}

export default Hero;
