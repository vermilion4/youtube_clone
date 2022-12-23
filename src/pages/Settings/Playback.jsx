import React from 'react';
import PlaybackImg from '../../assets/playback.svg';

const Playback = () => {
  return (
    <>
      <h4>Playback and performance</h4>
      <div className='account-header'>
        <div className='account-title'>
          <h2>Control your video viewing experience</h2>
          <p className='grey-txt'>
            Playback settings apply to this browser only
          </p>
        </div>
        <div className='account-image'>
          <img src={PlaybackImg} alt='account image' />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Playback;
