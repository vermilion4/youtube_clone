import React, { useState, useEffect } from 'react';
import { tags } from '../../data/tags';
import Navbar from '../../components/Navbar/Navbar';
import Sidenav from '../../components/Sidenav/Sidenav';
import { movies } from '../../data/movies';
import Options from '../../assets/options.svg';
import { Link } from 'react-router-dom';
import Next from '../../assets/next.svg';

const Home = ({
  width,
  isCollapsed,
  isMenuOpen,
  handleMenuToggler,
  handleToggler,
}) => {
  const maxCharHome = 40;

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
      <main>
        <Sidenav
          width={width}
          handleToggler={handleToggler}
          isCollapsed={isCollapsed}
        />
        <div
          className='gallery'
          style={
            width > 792
              ? isCollapsed
                ? { marginLeft: '110px' }
                : { marginLeft: '265px' }
              : { marginLeft: '1.5rem' }
          }>
          <div className='tag-section'>
            <div className='tags-container'>
              {tags.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`tag ${item.id === 0 ? 'active' : ''}`}>
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
          <div className='gallery-body'>
            <div className='gallery-cards'>
              {movies.map((movie) => {
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
                    to={`/watch/${movie.id}`}
                    key={movie.id}
                    className='card'>
                    <div className='card-image'>
                      <img src={`${movie.image}`} alt='Movie poster' />
                      <div className='play-text'>Keep hovering to play</div>
                    </div>
                    <div className='card-details'>
                      <div className='thumbnail'>
                        <img src={movie.thumbnail} alt='thumbnail' />
                      </div>
                      <div className='information'>
                        <div className='top'>
                          <h4 className='title'>{movie.title}</h4>
                          <div className='option'>
                            <img src={Options} alt='options icon' />
                          </div>
                        </div>
                        <div className='bottom'>
                          <div className='author'>
                            {movie.author}
                            {movie.verified ? (
                              <img className='verified' src={movie.verified} />
                            ) : null}
                          </div>
                          <div className='timestamp'>
                            <div className='view-count'>{movie.viewCount}</div>
                            <p className='dot'>.</p>
                            <div className='date-posted'>{movie.moment}</div>
                          </div>
                        </div>
                      </div>
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

export default Home;
