import React from 'react';
import Notification from '../../assets/notification.svg';

const Notifications = () => {
  return (
    <>
      <h4>Notifications</h4>
      <div className='account-header'>
        <div className='account-title'>
          <h2>Choose when and how to be notified</h2>
          <p className='grey-txt'>
            Select push and email notifications you'd like to receive
          </p>
        </div>
        <div className='account-image'>
          <img src={Notification} alt='account image' />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Notifications;
