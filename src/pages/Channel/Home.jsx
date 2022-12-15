import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import play from '../../assets/play.svg';
import { movies } from '../../data/movies';

const Home = ({
  title,
  viewCount,
  moment,
  image,
  description,
  id,
  username,
}) => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setShowMore(false);
  }, []);

  return (
    <>
      <div className='title-video'>
        <div className='video-img'>
          <img src={image} alt='video screen' />
        </div>
        <div className='video-details'>
          <Link key={id} to={`/watch/${id}`} className='video-title'>
            {title}
          </Link>
          <div className='timestamp'>
            <div className='view-count'>{viewCount}</div>
            <p className='dot'>.</p>
            <div className='date-posted'>{moment}</div>
          </div>
          <div className='video-content'>
            <div className='description-text'>
              <p style={{ height: '143px' }}>
                {description}
                <Link to={`/watch/${id}`} className='bold show-more'>
                  READ MORE
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='video-section'>
        <div className='video-section-head'>
          <NavLink to={`/${username}/videos`} className='section-title'>
            Videos
          </NavLink>
          <div className='play-all'>
            <img src={play} alt='play all clip' />
            <p>Play all</p>
          </div>
        </div>
        <div className='videos-list'>
          {movies.map((movie) => {
            const maxCharHome = 50;
            if (movie.title.length > maxCharHome) {
              movie.title = movie.title.substring(0, maxCharHome);
              movie.title =
                movie.title.substring(
                  0,
                  Math.min(movie.title.length, movie.title.lastIndexOf(' '))
                ) + '...';
            }
            return (
              <Link
                key={movie.id}
                to={`/watch/${movie.id}`}
                className='video-list-movie'>
                <div className='movie-img'>
                  <img src={movie.image} alt='movies' />
                </div>
                <div className='movie-title'>{movie.title}</div>
                <div className='timestamp'>
                  <div className='view-count'>{movie.viewCount}</div>
                  <p className='dot'>.</p>
                  <div className='date-posted'>{movie.moment}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='video-section'>
        <div className='video-section-head'>
          <NavLink to={`/${username}/videos`} className='section-title'>
            Tutorials: The ultimate crash course
          </NavLink>
          <div className='play-all'>
            <img src={play} alt='play all clip' />
            <p>Play all</p>
          </div>
        </div>
        <div className='videos-list'>
          {movies.map((movie) => {
            const maxCharHome = 50;
            if (movie.title.length > maxCharHome) {
              movie.title = movie.title.substring(0, maxCharHome);
              movie.title =
                movie.title.substring(
                  0,
                  Math.min(movie.title.length, movie.title.lastIndexOf(' '))
                ) + '...';
            }
            return (
              <Link
                key={movie.id}
                to={`/watch/${movie.id}`}
                className='video-list-movie'>
                <div className='movie-img'>
                  <img src={movie.image} alt='movies' />
                </div>
                <div className='movie-title'>{movie.title}</div>
                <div className='timestamp'>
                  <div className='view-count'>{movie.viewCount}</div>
                  <p className='dot'>.</p>
                  <div className='date-posted'>{movie.moment}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
