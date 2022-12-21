import React from 'react';
import ProfileIcon from '../../assets/profile-icon.jpg';

import './ProfileMenu.css';
import Profile from './Profile';

const ProfileMenu = ({ username }) => {
  return (
    <div className='menu-items sidenav-items'>
      <div className='menu-items-header'>
        <div className='profile'>
          <img src={ProfileIcon} />
        </div>
        <div className='profile-details'>
          <div>
            <div className='full-name'>Aaron Diaz</div>
            <div className='username'>{username}</div>
          </div>
          <div className='manage-account'>Manage your Google Account</div>
        </div>
      </div>
      <div className='menu-items-body'>
        <hr />
        <Profile />
      </div>
    </div>
  );
};

export default ProfileMenu;
