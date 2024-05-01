import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>{props.heading1}</h2>
            <Link to={props.heading1Item1link}>{props.heading1Item1}</Link>
            {/* <Link to='/testWebsite123/our-story'>Our Story</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>{props.heading2}</h2>
            <Link to={props.heading2Item1link} target='_blank'>{props.heading2Item1}</Link>
            <Link to={props.heading2Item2link} target='_blank'>{props.heading2Item2}</Link>
            <Link to={props.heading1Item3link} target='_blank'>{props.heading2Item3}</Link>
            <br></br>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Copyright 2024 © {props.companyName}</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={props.facebookLink}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={props.instagramLink}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={props.youtubeLink}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={props.xLink}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;