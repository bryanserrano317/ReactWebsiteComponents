import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {
  return (
    <div className='hero-container'>
      <video src='videos/video-3.mp4' autoPlay loop muted playsInline />
      <h1 className='hero-text'>{props.heroText}</h1>
      <h3 className='hero-text'>{props.heroSubText}</h3>
      <div className='hero-btns'>
        <a href={props.actionLink} target='_blank'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          {props.actionText} 
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;