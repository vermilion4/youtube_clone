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
import Restriction from '../../assets/restriction.svg';
import Location from '../../assets/location.svg';
import Keyboard from '../../assets/keyboard.svg';
import Settings from '../../assets/settings.svg';
import Help from '../../assets/help.svg';
import Next from '../../assets/next.svg';
import Feedback from '../../assets/feedback.svg';
import { NavLink } from 'react-router-dom';
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
      <div className='menu-items-body'>
        <hr />
        <NavLink to={`/${username}/featured`} className='item'>
          <div className='sidenav-icon'>
            <img src={Channel} alt='icon' />
          </div>
          <div className='sidenav-text'>Your channel</div>
        </NavLink>
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
          <div className='sidenav-text'>
            <span>Switch account</span>
            <div className='right'>
              <div className='next'>
                <img src={Next} alt='next' />
              </div>
            </div>
          </div>
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
          <div className='sidenav-text'>
            Appearance: Device theme
            <div className='right'>
              <div className='next'>
                <img src={Next} alt='next' />
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Language} alt='icon' />
          </div>
          <div className='sidenav-text'>
            Language: English
            <div className='right'>
              <div className='next'>
                <img src={Next} alt='next' />
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Restriction} alt='icon' />
          </div>
          <div className='sidenav-text'>
            Restricted Mode: Off
            <div className='right'>
              <div className='next'>
                <img src={Next} alt='next' />
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Location} alt='icon' />
          </div>
          <div className='sidenav-text'>
            Location: Nigeria
            <div className='right'>
              <div className='next'>
                <img src={Next} alt='next' />
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Keyboard} alt='icon' />
          </div>
          <div className='sidenav-text'>Keyboard shortcuts</div>
        </div>
        <hr />
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Settings} alt='icon' />
          </div>
          <div className='sidenav-text'>Settings</div>
        </div>
        <hr />
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Help} alt='icon' />
          </div>
          <div className='sidenav-text'>Help</div>
        </div>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Feedback} alt='icon' />
          </div>
          <div className='sidenav-text'>Send feedback</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
