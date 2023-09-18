import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineLaptop} from 'react-icons/ai';


const Footer = () => {
  const handleGithubClick = () => {
    // Handle the GitHub icon click event here
    window.location.href = 'https://github.com/RAJIE11'; // Redirect to your GitHub profile
  };

  const handleLinkedinClick = () => {
    // Handle the LinkedIn icon click event here
    window.location.href = 'https://www.linkedin.com/in/rajarajeswari-j11/'; // Redirect to your LinkedIn profile
  };

  const handleOutlineLaptopClick = () => {
    // Handle the LinkedIn icon click event here
    window.location.href = 'https://rajieportfolio.netlify.app/'; // Redirect to your LinkedIn profile
  };

  const handleOutlineTwitterClick = () => {
    // Handle the LinkedIn icon click event here
    window.location.href = 'https://x.com/__Rajie__?t=FiuMt05Eq0GdAMi15rwQNw&s=08 '; // Redirect to your LinkedIn profile
  };
  return (
    <div className="footer-container">
      <p>&copy; 2023 Rajie All rights reserverd</p>
      <p className="icons">
        <AiFillGithub onClick={handleGithubClick} />
        <AiFillLinkedin onClick={handleLinkedinClick} />
        <AiOutlineLaptop onClick={handleOutlineLaptopClick} />
        <AiOutlineTwitter onClick={handleOutlineTwitterClick}/>
      </p>
    </div>
  )
}

export default Footer