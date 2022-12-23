import React from 'react';
import PrivacyImg from '../../assets/privacy.svg';

const Privacy = () => {
  return (
    <>
      <h4>Privacy</h4>
      <div className='account-header'>
        <div className='account-title'>
          <h2>Manage what you share on YouTube</h2>
          <p>
            <span className='grey-txt'>
              Choose who can see your saved playlists and subscriptions
            </span>
            <br />
            <span className='grey-txt'>
              Review <span className='blue-txt'>YouTube Terms of Service</span>{' '}
              and <span className='blue-txt'>Google Privacy Policy</span>
            </span>
          </p>
        </div>
        <div className='account-image'>
          <img src={PrivacyImg} alt='account image' />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Privacy;
