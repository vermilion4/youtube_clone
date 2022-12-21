import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Video from './pages/Video/Video';
import Channel from './pages/Channel/Channel';
import Home from './pages/Home/Home';
import './App.css';

function App ()
{
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // For sidebar
  const handleToggler = () =>
  {
    setIsCollapsed(!isCollapsed);
  };
  // For profile menu
  const handleMenuToggler = () =>
  {
    setIsMenuOpen(!isMenuOpen);
  };

  // Get browser width
  const getWidth = () =>
  {
    return window.innerWidth;
  };

  // At initial load sidenav is opened
  useEffect(() =>
  {
    setIsCollapsed(false);
  }, []);

  //  Handle window resize
  useEffect(() =>
  {
    function handleWindowResize ()
    {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () =>
    {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path='/youtube_clone'
          element={
            <Home
              width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
            />
          }></Route>
        <Route
          path='/watch/:id'
          element={
            <Video width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } /> }></Route>
        <Route
          path='/:username/featured'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } home /> }></Route>
        <Route
          path='/:username/videos'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } videos /> }></Route>
        <Route
          path='/:username/shorts'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } shorts /> }></Route>
        <Route
          path='/:username/playlists'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } playlists /> }></Route>
        <Route
          path='/:username/community'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } community /> }></Route>
        <Route
          path='/:username/channels'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } channels /> }></Route>
        <Route
          path='/:username/about'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler } about /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
