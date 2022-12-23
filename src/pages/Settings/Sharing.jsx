import React from 'react';
import SharingImg from '../../assets/sharing.svg';

const Sharing = () => {
  return (
    <>
      <h4>Connected apps</h4>
      <div className='account-header'>
        <div className='account-title'>
          <h2>Expand your experience</h2>
          <p>
            <span className='grey-txt'>
              Connect YouTube with other apps and watch more easily
            </span>
            <br />
            <span className='blue-txt'>
              See all sites authorized to access your Google Account
            </span>
          </p>
        </div>
        <div className='account-image'>
          <img src={SharingImg} alt='account image' />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Sharing;
