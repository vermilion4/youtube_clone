import React from 'react';
import Flag from '../../assets/flag.svg';

const About = () => {
  return (
    <div className='about-section'>
      <div className='about-description'>
        <div className='about-description-title'>Description</div>
        <div className='about-description-body'>
          I dive deep into product design, growth, business strategies and
          entrepreneurship in loose sweats and ripped jeans. <br />
          <br />
          Over the last 13 years, I have worked as a product (UX/UI) designer,
          lead designer, freelancer, and eventually became a 10 person agency
          owner generating $6,000,000 in design work. <br />
          <br />
          Throughout my agency life I led strategy and design for over 100
          companies, helping them raise $500M+ in venture capital. Many of which
          later successfully exited and were acquired. <br />
          <br />
          In 2022, I founded the Designership, an online education platform for
          designers. Our mission is to help creatives earn more by teaching
          actionable, high-demanded and real-world skills. <br />
          <br />
        </div>
        <hr />
        <div className='about-description-details'>
          <div className='about-description-details-title'>Details</div>
          <div className='business'>
            <span className='first-span'>
              <span className='inquiries'> For business inquiries: </span>
              <span className='email'>View email address</span>
            </span>
            <span className='second-span'>
              <span className='location-label'>Location:</span>
              <span className='location'>Australia</span>
            </span>
          </div>
        </div>
        <hr />
        <div className='about-description-links'>
          <div className='about-description-links-title'>Links</div>
          <span className='portfolio-text'>Portfolio</span>
        </div>
      </div>
      <div className='about-stats'>
        <span>Stats</span>
        <hr />
        <span>Joined Apr 5, 2016</span>
        <hr />
        <span>3,432,935 views</span>
        <hr />
        <span className='flag'>
          <img src={Flag} alt='flag' />
        </span>
      </div>
    </div>
  );
};

export default About;
