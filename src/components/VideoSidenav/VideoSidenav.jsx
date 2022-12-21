import React from 'react';
import Library from '../../assets/library.svg';
import hamburger from '../../assets/hamburger-icon.svg';
import youtube from '../../assets/youtube-icon.svg';
import { topNavLinks } from '../../data/sidenavLinks';
import { bottomNavLinks } from '../../data/sidenavLinks';

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
        {topNavLinks.map((topNavLink) => {
          const { id, link, image, text } = topNavLink;
          return (
            <Link key={id} to={link} className='item'>
              <div className='sidenav-icon'>
                <img src={image} alt='icon' />
              </div>
              <p className={!isCollapsed ? 'hide' : 'show icon-text'}>{text}</p>
              <div className='sidenav-text'>{text}</div>
            </Link>
          );
        })}
        {isCollapsed ? null : <hr />}
        <div className='item'>
          <div className='sidenav-icon'>
            <img src={Library} alt='Library icon' />
          </div>
          <p className={!isCollapsed ? 'hide' : 'show icon-text'}>Library</p>
          <div className='sidenav-text'>Library</div>
        </div>
        {!isCollapsed
          ? bottomNavLinks.map((bottomNavLink) => {
              const { id, link, image, text } = bottomNavLink;
              return (
                <Link to={link} key={id} className='item'>
                  <div className='sidenav-icon'>
                    <img src={image} alt='icon' />
                  </div>
                  <p className={!isCollapsed ? 'hide' : 'show icon-text'}>
                    {text}
                  </p>
                  <div className='sidenav-text'>{text}</div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default VideoSidenav;
