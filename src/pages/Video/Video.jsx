import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../../data/movies';
import { tags } from '../../data/tags';
import Navbar from '../../Navbar';
import VideoSidenav from '../../VideoSidenav';
import './Video.css';
import Bell from '../../assets/bell.svg';
import ShowMore from '../../assets/show-more.svg';
import Like from '../../assets/like.svg';
import Dislike from '../../assets/dislike.svg';
import Share from '../../assets/share.svg';
import Clip from '../../assets/clip.svg';
import More from '../../assets/more.svg';
import Sort from '../../assets/sortBy.svg';
import Profile from '../../assets/profile-icon.jpg';
import { comments } from '../../data/comments';
import Options from '../../assets/options.svg';
import Next from '../../assets/next.svg';

const Video = () => {
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
  } = currentVideo;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  let userSubscribe = subscribed;
  const [isSubscribed, setIsSubscribed] = useState(userSubscribe);
  const handleSubscribe = () => {
    userSubscribe = isSubscribed;
    setIsSubscribed(!userSubscribe);
  };
  // For sidebar
  const handleToggler = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    setIsCollapsed(true);
  }, []);
  const getWidth = () => {
    return window.innerWidth;
  };
  useEffect(() => {
    setIsSubscribed(subscribed);
  }, [subscribed]);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
      {!isCollapsed ? <div className='overlay'></div> : null}
      {/* Navbar */}
      <Navbar width={width} handleToggler={handleToggler} />
      <main>
        <VideoSidenav handleToggler={handleToggler} isCollapsed={isCollapsed} />
        <div className='video-container'>
          <div className='video-content'>
            <img src={image} alt='image' />
            <div className='video-title'>{title}</div>
            <div className='author-details'>
              <div className='left-section'>
                <div className='sub-1'>
                  <div className='thumbnail'>
                    <img src={thumbnail} alt='thumbnail' />
                  </div>
                  <div className='data'>
                    <div className='author'>
                      {author}
                      {verified ? (
                        <img className='verified' src={verified} />
                      ) : null}
                    </div>
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
                  <div className='like'>
                    <img src={Like} alt='like' />
                    <p>144k</p>
                  </div>
                  <div className='separator'></div>
                  <div className='dislike'>
                    <img src={Dislike} alt='dislike' />
                  </div>
                </div>
                <div className='share-section'>
                  <div className='share'>
                    <img src={Share} alt='share' />
                    <p>Share</p>
                  </div>
                </div>
                <div className='clip-section'>
                  <div className='clip'>
                    <img src={Clip} alt='clip' />
                    <p>Clip</p>
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
                  <p>
                    These were extremely hard not to look away from! Hope you
                    enjoyed though!
                    <br /> If you did please LIKE the video and SUBSCRIBE for
                    more weird/funny/slightly entertaining content!
                    <br />
                    <span className='bold show-more'>Show more</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='comments'>
            <div className='comment-header'>
              <div className='count'>7.089 Comments</div>
              <div className='sort-section'>
                <div className='sort'>
                  <img src={Sort} alt='sort icon' />
                </div>
                <p>Sort by</p>
              </div>
            </div>
            <div className='add-comment'>
              <div className='thumbnail'>
                <img src={Profile} alt='profile' />
              </div>
              <div className='comment-holder'>
                <input type='text' placeholder='Add a comment...' />
              </div>
            </div>
            <div className='comments-container'>
              {comments.map((comment) => {
                return (
                  <div key={comment.id} className='comment-details'>
                    <div className='comment-left-section'>
                      <div className='comment-img'>
                        <img src={comment.thumbnail} alt='thumbnail' />
                      </div>
                    </div>
                    <div className='comment-right-section'>
                      <div className='comment-top'>
                        <div className='comment-author'>{comment.author}</div>
                        <div className='moment'>
                          <p>{comment.moment}</p>
                        </div>
                      </div>
                      <div className='comment-mid'>
                        <p>{comment.comment}</p>
                      </div>
                      <div className='comment-like'>
                        <div className='like'>
                          <img src={Like} alt='like' />
                          <p className='comment-like-count'>
                            {comment.likeCount}
                          </p>
                        </div>
                        <div className='dislike'>
                          <img src={Dislike} alt='dislike' />
                        </div>
                        <div className='reply bold'>Reply</div>
                      </div>
                      <div className='comment-bottom'></div>
                    </div>
                    <div className='option'>
                      <img src={Options} alt='options icon' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='recommendations'>
            <div className='video-tag-section'>
              <div className='video-tags-container'>
                {tags.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`video-tag ${item.id === 0 ? 'active' : ''}`}>
                      <p>{item.tag}</p>
                    </div>
                  );
                })}
              </div>
              <div className='right'>
                <div className='next'>
                  <img src={Next} alt='next' />
                </div>
              </div>
            </div>
            <div className='recommended-videos-container'>
              {movies.map((movie) => {
                return (
                  <Link
                    key={movie.id}
                    to={`/watch/${movie.id}`}
                    className='recommended-videos'>
                    <div className='video-img'>
                      <img src={movie.image} alt='image' />
                      <div className='duration'>23:14</div>
                    </div>
                    <div className='video-details'>
                      <h3>{movie.title}</h3>
                      <div>
                        <h6>{movie.author}</h6>
                        <div className='timestamp'>
                          <h6>{movie.viewCount}</h6>
                          <p className='dot'>.</p>
                          <h6>{movie.moment}</h6>
                        </div>
                      </div>
                    </div>
                    <div className='option'>
                      <img src={Options} alt='options icon' />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
