import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';


const FadeExample = (props) => {
  const fadeImages = [
    props.image1,
    props.image2,
    props.image3,
    props.image4,
    props.image5
  ];

  return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img className='image' src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className='image'  src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className='image' src={fadeImages[2]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className='image' src={fadeImages[3]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className='image' src={fadeImages[4]} />
            </div>
          </div>
        </Fade>
        <div className='leftText'>
        </div>
      </div>
  );
};

export default FadeExample;