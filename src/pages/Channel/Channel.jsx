import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Channel.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidenav from '../../components/Sidenav/Sidenav';
import { movies } from '../../data/movies';
import Bell from '../../assets/bell.svg';
import ShowMore from '../../assets/show-more.svg';
import Next from '../../assets/next.svg';
import Home from './Home';
import Videos from './Videos';
import Shorts from './Shorts';
import Playlists from './Playlists';
import Community from './Community';
import Channels from './Channels';
import About from './About';
import Search from '../../assets/search-icon.svg';

const Channel = ({
  home,
  videos,
  shorts,
  channels,
  playlists,
  about,
  community,
}) => {
  // Get username from url
  let { username } = useParams();
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentUser = movies.find((movie) => movie.username === username);
  let {
    id,
    image,
    thumbnail,
    author,
    title,
    viewCount,
    moment,
    verified,
    subscribers,
    subscribed,
    description,
  } = currentUser;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let userSubscribe = subscribed;
  const [isSubscribed, setIsSubscribed] = useState(userSubscribe);
  // For sidebar
  const handleToggler = () => {
    setIsCollapsed(!isCollapsed);
  };
  // For profile menu
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubscribe = () => {
    userSubscribe = isSubscribed;
    setIsSubscribed(!userSubscribe);
  };
  useEffect(() => {
    setIsSubscribed(subscribed);
  }, [subscribed]);

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
          <div className='channel-body'>
            <div className='intro'>
              <div className='sub-1'>
                <div className='thumbnail'>
                  <img src={thumbnail} alt='thumbnail' />
                </div>
                <div className='data'>
                  <div className='author'>{author}</div>
                  <span>
                    <p>{username}</p>
                    <p>{subscribers}</p>
                  </span>
                </div>
              </div>
              <div className='sub-2'>
                <div
                  onClick={handleSubscribe}
                  className={`${isSubscribed ? 'subscribed' : 'subscribe'}`}>
                  {isSubscribed ? (
                    <div className='bell'>
                      <img src={Bell} alt='bell icon' />
                    </div>
                  ) : null}
                  {isSubscribed ? <div>Subscribed</div> : <div>Subscribe</div>}

                  {isSubscribed ? (
                    <div className='arrow'>
                      <img src={ShowMore} alt='show more' />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className='channel-menu'>
            <div className='menu-items'>
              <NavLink to={`/${username}/featured`} className='menu-item'>
                <h4>HOME</h4>
              </NavLink>
              <NavLink to={`/${username}/videos`} className='menu-item'>
                <h4>VIDEOS</h4>
              </NavLink>
              <NavLink to={`/${username}/shorts`} className='menu-item'>
                <h4>SHORTS</h4>
              </NavLink>
              <NavLink to={`/${username}/playlists`} className='menu-item'>
                <h4>PLAYLISTS</h4>
              </NavLink>
              <NavLink
                to={`/${username}/community`}
                ref={ref}
                className='menu-item'>
                <h4>COMMUNITY</h4>
              </NavLink>
              <NavLink to={`/${username}/channels`} className='menu-item'>
                <h4>CHANNELS</h4>
              </NavLink>
              <NavLink to={`/${username}/about`} className='menu-item'>
                <h4>ABOUT</h4>
              </NavLink>
              <NavLink to={'/'} className='menu-item'>
                <div className='search-icon'>
                  <img src={Search} alt='' />
                </div>
              </NavLink>
            </div>
            <div className='right'>
              <div onClick={handleClick} className='next'>
                <img src={Next} alt='next' />
              </div>
            </div>
          </div>
          <div className='channel-content'>
            {home && (
              <Home
                title={title}
                viewCount={viewCount}
                moment={moment}
                image={image}
                description={description}
                id={id}
                username={username}
              />
            )}
            {videos && <Videos />}
            {shorts && <Shorts />}
            {playlists && <Playlists />}
            {community && <Community />}
            {channels && <Channels />}
            {about && <About />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Channel;
