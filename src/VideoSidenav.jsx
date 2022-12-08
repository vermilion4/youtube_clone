import React from 'react';
import Home from './assets/home.svg';
import Shorts from './assets/shorts.svg';
import Subscription from './assets/subscription.svg';
import Library from './assets/library.svg';
import History from './assets/history.svg';
import Videos from './assets/videos.svg';
import WatchLater from './assets/watch-later.svg';
import ShowMore from './assets/show-more.svg';
import hamburger from './assets/hamburger-icon.svg';
import youtube from './assets/youtube-icon.svg';

import './VideoSidenav.css';
import { Link } from 'react-router-dom';

const VideoSidenav = ({ isCollapsed, handleToggler }) => {
  return (
    <div className={isCollapsed ? 'videosidenav collapsed' : 'videosidenav'}>
      <div className='sidenav-header'>
        <div onClick={handleToggler} className='sidenav-header-icon'>
          <img src={hamburger} alt='hamburger icon' />
        </div>
        <div className='sidenav-logo'>
          <img src={youtube} alt='youtube logo' />
        </div>
      </div>

      <div className='sidenav-items'>
        <Link to={'/youtube_clone'} className='item active'>
          <div className='sidenav-icon'>
            <img src={Home} alt='Home icon' />
          </div>
          <p className={!isCollapsed ? 'hide' : 'show icon-text'}>Home</p>
          <div className='sidenav-text'>Home</div>
        </Link>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Shorts} alt='Shorts icon' />
          </div>
          <p className={!isCollapsed ? 'hide' : 'show icon-text'}>Shorts</p>
          <div className='sidenav-text'>Shorts</div>
        </div>
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Subscription} alt='Subscription icon' />
          </div>
          <p className={!isCollapsed ? 'hide' : 'show icon-text'}>
            Subscriptions
          </p>
          <div className='sidenav-text'>Subscriptions</div>
        </div>
        {isCollapsed ? null : <hr />}
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Library} alt='Library icon' />
          </div>
          <p className={!isCollapsed ? 'hide' : 'show icon-text'}>Library</p>
          <div className='sidenav-text'>Library</div>
        </div>
        {!isCollapsed ? (
          <>
            {' '}
            <div className='item'>
              <div className='sidenav-icon'>
                <img src={History} alt='History icon' />
              </div>
              <div className='sidenav-text'>History</div>
            </div>
            <div className='item'>
              <div className='sidenav-icon'>
                <img src={Videos} alt='Videos icon' />
              </div>
              <div className='sidenav-text'>Your videos</div>
            </div>
            <div className='item'>
              <div className='sidenav-icon'>
                <img src={WatchLater} alt='Watch later icon' />
              </div>
              <div className='sidenav-text'>Watch later</div>
            </div>
            <div className='item'>
              <div className='sidenav-icon'>
                <img src={ShowMore} alt='Show more icon' />
              </div>
              <div className='sidenav-text'>Show More</div>
            </div>
            <hr />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default VideoSidenav;
