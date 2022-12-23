import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import VideoSidenav from '../../components/VideoSidenav/VideoSidenav';
import { settingsSideNavLinks } from '../../data/settingsSideNavLinks';
import Account from './Account';
import Advanced from './Advanced';
import Billing from './Billing';
import Notifications from './Notifications';
import Playback from './Playback';
import Privacy from './Privacy';
import './Settings.css';
import Sharing from './Sharing';

const Settings = ({
  width,
  isCollapsed,
  isMenuOpen,
  handleMenuToggler,
  handleToggler,
  account,
  notifications,
  setIsMenuOpen,
  playback,
  privacy,
  sharing,
  billing,
  advanced,
  setIsCollapsed,
}) => {
  return (
    <div>
      {/* Overlay for sidebar at medium to small screen */}
      {!isCollapsed ? (
        <div onClick={() => setIsCollapsed(true)} className='overlay'></div>
      ) : null}
      {/* Navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        handleMenuToggler={handleMenuToggler}
        width={width}
        handleToggler={handleToggler}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <VideoSidenav handleToggler={handleToggler} isCollapsed={isCollapsed} />
        <div className='settings-container'>
          <div className='settings-container__navbar'>
            <div className='settings-container__nav sidenav-items'>
              <h2 className='grey-txt'>Settings</h2>
              {settingsSideNavLinks.map((sideNavLink) => {
                const { id, link, text } = sideNavLink;
                return (
                  <NavLink key={id} to={link} className='setting-item item'>
                    <div className='sidenav-text'>{text}</div>
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className='settings-container__main'>
            {account && <Account />}
            {notifications && <Notifications />}
            {playback && <Playback />}
            {privacy && <Privacy />}
            {sharing && <Sharing />}
            {billing && <Billing />}
            {advanced && <Advanced />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
