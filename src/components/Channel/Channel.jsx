import React, { useState, useEffect } from 'react';
import './Channel.css';
import Navbar from '../Navbar/Navbar';
import Sidenav from '../Sidenav/Sidenav';
import Banner from '../../assets/banner.jpeg';

const Channel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // For sidebar
  const handleToggler = () => {
    setIsCollapsed(!isCollapsed);
  };
  // For profile menu
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsCollapsed(false);
  }, []);
  const getWidth = () => {
    return window.innerWidth;
  };
  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      {/* Overlay for sidebar at medium to small screen */}
      {width <= 792 && !isCollapsed ? <div className='overlay'></div> : null}
      {/* Navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        handleMenuToggler={handleMenuToggler}
        width={width}
        handleToggler={handleToggler}
      />
      <main className='channel-main'>
        <Sidenav
          width={width}
          handleToggler={handleToggler}
          isCollapsed={isCollapsed}
        />
        <div
          className='channel-container'
          style={
            width > 792
              ? isCollapsed
                ? { marginLeft: '110px' }
                : { marginLeft: '265px' }
              : { marginLeft: '0' }
          }>
          <div className='channel-banner'></div>
          <div className='channel-body' style={{ height: '1000px' }}>
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling. Tip: Try to remove the
            background-attachment property to remove the scrolling effect.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Channel;
