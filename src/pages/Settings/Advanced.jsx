import React from 'react';
import AdvancedImg from '../../assets/advanced.svg';

const Advanced = () => {
  return (
    <>
      <h4>Advanced settings</h4>
      <div className='account-header'>
        <div className='account-title'>
          <h2>Set up YouTube exactly how you want it</h2>
        </div>
        <div className='account-image'>
          <img src={AdvancedImg} alt='account image' />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Advanced;
