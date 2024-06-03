import React from 'react';
import './AboutMe.css'
const AboutMe = ({ imageSrc }) => {
  return (
    <div className="about-me">
      <div className="about-me-left">
        <div className="image-container">
          <img src={imageSrc} alt="Imagen de perfil" />
        </div>
      </div>
      <div className="about-me-right">
        <h2>Sobre Mí</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit diam id nunc tincidunt, sed scelerisque
          justo luctus. Integer quis arcu at felis tristique viverra.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
