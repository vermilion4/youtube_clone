import React, { useState, useEffect } from 'react';
import './App.css';
import { tags } from './data/tags';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import { movies } from './data/movies';
import Options from './assets/options.svg';
import { Link } from 'react-router-dom';

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  // For sidebar
  const handleToggler = () => {
    setIsCollapsed(!isCollapsed);
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
      if (width <= 792) {
        setIsCollapsed(false);
      }
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const maxCharHome = 40;

  return (
    <div>
      {/* Overlay for sidebar at medium to small screen */}
      {width <= 792 && !isCollapsed ? <div className='overlay'></div> : null}
      {/* Navbar */}
      <Navbar width={width} handleToggler={handleToggler} />
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

export default App;
