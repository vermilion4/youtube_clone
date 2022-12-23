import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { movies } from '../../data/movies';
import Navbar from '../../components/Navbar/Navbar';
import VideoSidenav from '../../components/VideoSidenav/VideoSidenav';
import './Video.css';
import Bell from '../../assets/bell.svg';
import ShowMore from '../../assets/show-more.svg';
import Like from '../../assets/like.svg';
import Dislike from '../../assets/dislike.svg';
import Share from '../../assets/share.svg';
import Clip from '../../assets/clip.svg';
import More from '../../assets/more.svg';
import Comments from './Comments';
import Recommended from './Recommended';

const Video = ({
  width,
  isCollapsed,
  isMenuOpen,
  handleMenuToggler,
  handleToggler,
  setIsMenuOpen,
  setIsCollapsed,
}) => {
  // Get video id from url
  let { id } = useParams();

  // Get current video's details
  const currentVideo = movies.find((movie) => movie.id === Number(id));
  let {
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
    username,
  } = currentVideo;

  let userSubscribe = subscribed;
  const [isSubscribed, setIsSubscribed] = useState(userSubscribe);
  const [isShown, setIsShown] = useState(false);

  const handleSubscribe = () => {
    userSubscribe = isSubscribed;
    setIsSubscribed(!userSubscribe);
  };
  // For video description show more
  const handleDescriptionShowMore = () => {
    setIsShown(!isShown);
  };

  // Shorten long text
  const maxChar = 10;

  if ((width > 650 && width < 720) || (width >= 1000 && width < 1200)) {
    if (subscribers.length > maxChar) {
      subscribers = subscribers.substring(0, maxChar);
      subscribers =
        subscribers.substring(
          0,
          Math.min(subscribers.length, subscribers.lastIndexOf(' '))
        ) + '...';
    }

    if (author.length > maxChar) {
      author = author.substring(0, maxChar);
      author =
        author.substring(0, Math.min(author.length, author.lastIndexOf(' '))) +
        '...';
    }
  }

  return (
    <div>
      {/* Overlay for sidebar at medium to small screen */}
      {!isCollapsed ? (
        <div
          onClick={() => {
            setIsCollapsed(true);
          }}
          className='overlay'></div>
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
        <div className='video-container'>
          <div className='video-content'>
            <img src={image} alt='image' />
            <div className='video-title'>{title}</div>
            <div className='author-details'>
              <div className='left-section'>
                <div className='sub-1'>
                  <NavLink to={`/${username}/featured`} className='thumbnail'>
                    <img src={thumbnail} alt='thumbnail' />
                  </NavLink>
                  <div className='data'>
                    <NavLink to={`/${username}/featured`} className='author'>
                      {author}
                      {verified ? (
                        <img className='verified' src={verified} />
                      ) : null}
                    </NavLink>
                    <p>{subscribers}</p>
                  </div>
                </div>
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
              <div className='right-section'>
                <div className='like-section'>
                  <div className='tooltip like'>
                    <img src={Like} alt='like' />
                    <p>144k</p>
                    <div className='tooltiptext'>i like this</div>
                  </div>
                  <div className='separator'></div>
                  <div className='tooltip dislike'>
                    <img src={Dislike} alt='dislike' />
                    <div className='tooltiptext'>i dislike this</div>
                  </div>
                </div>
                <div className='share-section'>
                  <div className='tooltip share'>
                    <img src={Share} alt='share' />
                    <p>Share</p>
                    <div className='tooltiptext'>Share</div>
                  </div>
                </div>
                <div className='clip-section'>
                  <div className='tooltip clip'>
                    <img src={Clip} alt='clip' />
                    <p>Clip</p>
                    <div className='tooltiptext'>Clip</div>
                  </div>
                </div>
                <div className='more-section'>
                  <div className='more'>
                    <img src={More} alt='more' />
                  </div>
                </div>
              </div>
            </div>
            <div className='description'>
              <div className='views'>
                <div className='timestamp bold'>
                  <p>{viewCount}</p>&nbsp;
                  <p>{moment}</p>
                </div>
                <div className='description-text'>
                  <p
                    style={
                      isShown ? { height: 'fit-content' } : { height: '60px' }
                    }>
                    {description}
                    <span
                      onClick={handleDescriptionShowMore}
                      className='bold show-more'>
                      {isShown ? 'Show less' : 'Show more'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Comments />
          <Recommended />
        </div>
      </main>
    </div>
  );
};

export default Video;
