import React from 'react';
import './Intro.css';
import assets from '../../assets';
import Button from '../UI/Button';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-text-container">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className={'btn-form'}>Get Started</Button>
      </div>
      <div className="intro-img-container">
        <img src={assets.working} alt="working illustration" />
      </div>
    </div>
  );
};

export default Intro;
