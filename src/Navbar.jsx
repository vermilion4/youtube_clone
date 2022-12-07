import React from 'react';
import './Navbar.css';
import create from './assets/create-icon.svg';
import hamburger from './assets/hamburger-icon.svg';
import mic from './assets/mic-icon.svg';
import notification from './assets/notification-icon.svg';
import profile from './assets/profile-icon.jpg';
import search from './assets/search-icon.svg';
import youtube from './assets/youtube-icon.svg';

const Navbar = ({ handleToggler, width }) => {
  return (
    <nav>
      <div className='left-nav'>
        <div className='menu' onClick={handleToggler}>
          <img src={hamburger} alt='hamburger icon' className='icon' />
        </div>
        <div className='logo'>
          <img src={youtube} alt='youtube icon' className='yt-icon' />
          <span className='country'>NG</span>
        </div>
      </div>
      <div className='center-nav'>
        <div className='search'>
          <input type='text' placeholder='Search' />
          <button className=' tooltip search-btn'>
            <img src={search} />
            <div className='tooltiptext'>Search</div>
          </button>
        </div>
        <div className='tooltip mic'>
          <img src={mic} />
          <div className='tooltiptext'>Search with your voice</div>
        </div>
      </div>
      <div className='right-nav'>
        {width <= 600 ? (
          <>
            {' '}
            <div className=' tooltip search-mobile'>
              <img src={search} />
              <div className='tooltiptext'>Search</div>
            </div>
            <div className='tooltip mic-mobile'>
              <img src={mic} />
              <div className='tooltiptext'>Search with your voice</div>
            </div>
          </>
        ) : null}

        <div className='tooltip create'>
          <img src={create} />
          <div className='tooltiptext'>Create</div>
        </div>
        <div className='tooltip notification'>
          <img src={notification} />
          <div className='missed'>9+</div>
          <div className='tooltiptext'>Notifications</div>
        </div>
        <div className='profile'>
          <img src={profile} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
