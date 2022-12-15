import React from 'react';
import { movies } from '../../data/movies';
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <>
      <div className='videos-header-buttons'>
        <div className='recent'>Recently uploaded</div>
        <div className='popular'>Popular</div>
      </div>
      <div className='videos-content-list'>
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
    </>
  );
};

export default Videos;
