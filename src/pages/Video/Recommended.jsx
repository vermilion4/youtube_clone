import React from 'react';
import Options from '../../assets/options.svg';
import { tags } from '../../data/tags';
import { Link } from 'react-router-dom';
import { movies } from '../../data/movies';
import Next from '../../assets/next.svg';

const Recommended = () => {
  return (
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
  );
};

export default Recommended;
