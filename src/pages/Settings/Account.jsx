import React from 'react';
import Look from '../../assets/look.svg';
import ProfileIcon from '../../assets/profile-icon.jpg';

const Account = () => {
  return (
    <>
      <h4>Account</h4>
      <div className='account-header'>
        <div className='account-title'>
          <h2>Choose how you appear and what you see on YouTube</h2>
          <p className='grey-txt'>Signed in as Aaron123@gmail.com </p>
        </div>
        <div className='account-image'>
          <img src={Look} alt='account image' />
        </div>
      </div>
      <hr />
      <div className='account-channel'>
        <div className='channel-title'>
          <h4>Your YouTube channel</h4>
          <p className='grey-txt'>
            This is your public presence on YouTube. You need a channel to
            upload your own videos, comment on videos, or create playlists.
          </p>
        </div>
        <div className='account-body'>
          <div className='channel-body__title'>Your channel</div>
          <div className='channel-body__user'>
            <div className='channel-body__user--head'>
              <div className='profile'>
                <img src={ProfileIcon} />
              </div>
              <div>
                <div className='full-name'>Aaron Diaz</div>
              </div>
            </div>
            <div className='manage-account'>Channel status and features</div>
            <div className='manage-account'>Create a new channel</div>
            <div className='manage-account'>View advanced settings</div>
          </div>
        </div>
      </div>
      <hr />
      <div className='account-account'>
        <div className='account-title'>
          <h4>Your account</h4>
          <p className='grey-txt'>
            You sign in to YouTube with your Google Account
          </p>
        </div>
        <div className='account-body-section'>
          <div className='account-body'>
            <div className='channel-body__title'>Google Account</div>
            <div className='channel-body__user'>
              <div className='manage-account'>
                View or change your Google Account settings
              </div>
              <div className='manage-account grey-txt'>
                You will be redirected to your Google Account page
              </div>
            </div>
          </div>
          <div className='account-body'>
            <div className='channel-body__title'>Membership</div>
            <div className='channel-body__user'>
              <div className='premium'>
                <span className='no-membership'>No membership |</span>
                <span className='manage-account'>Get YouTube Premium</span>
              </div>
              <div className='manage-account grey-txt'>
                YouTube Premium offers uninterrupted music, ad-free videos, and
                more
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
