import React from 'react';
import Channel from '../../assets/channel.svg';
import Studio from '../../assets/studio.svg';
import Account from '../../assets/account.svg';
import SignOut from '../../assets/signout.svg';
import Purchases from '../../assets/purchases.svg';
import Data from '../../assets/data.svg';
import Theme from '../../assets/theme.svg';
import Language from '../../assets/language.svg';
import Profile from '../../assets/profile-icon.jpg';
import { Link } from 'react-router-dom';
import './ProfileMenu.css';

const ProfileMenu = ({ username }) => {
  return (
    <div className='menu-items sidenav-items'>
      <div className='menu-items-header'>
        <div className='profile'>
          <img src={Profile} />
        </div>
        <div className='profile-details'>
          <div>
            <div className='full-name'>Aaron Diaz</div>
            <div className='username'>{username}</div>
          </div>
          <div className='manage-account'>Manage your Google Account</div>
        </div>
      </div>
      <Link to={`/${username}/featured`} className='item active'>
        <div className='sidenav-icon'>
          <img src={Channel} alt='icon' />
        </div>
        <div className='sidenav-text'>Your channel</div>
      </Link>
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={Studio} alt='icon' />
        </div>
        <div className='sidenav-text'>Youtube Studio</div>
      </div>
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={Account} alt='icon' />
        </div>
        <div className='sidenav-text'>Switch account</div>
      </div>
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={SignOut} alt='icon' />
        </div>
        <div className='sidenav-text'>Sign out</div>
      </div>
      <hr />
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={Purchases} alt='icon' />
        </div>
        <div className='sidenav-text'>Purchases and memberships</div>
      </div>
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={Data} alt='icon' />
        </div>
        <div className='sidenav-text'>Your data in YouTube</div>
      </div>
      <hr />
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={Theme} alt='icon' />
        </div>
        <div className='sidenav-text'>Appearance: Device theme</div>
      </div>
      <div className='item'>
        <div className='sidenav-icon'>
          <img src={Language} alt='icon' />
        </div>
        <div className='sidenav-text'>Language: English</div>
      </div>
      <hr />
    </div>
  );
};

export default ProfileMenu;
