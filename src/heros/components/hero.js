import React from 'react';
import './hero.css';

const Hero = ({ hero, isHeroUnmasked, onClick }) => {
  const heroImageSrc = isHeroUnmasked ? hero.thumbnail.path + '.' + hero.thumbnail.extension : require('../../images/masked-hero.jpg');
  return (
    <div
      className="hero-container"
      onClick={() => onClick(hero)}>
      <img
        src={heroImageSrc}
        alt="profile"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Hero;