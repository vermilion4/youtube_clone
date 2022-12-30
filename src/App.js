import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Video from './pages/Video/Video';
import Channel from './pages/Channel/Channel';
import Home from './pages/Home/Home';
import './App.css';
import Settings from './pages/Settings/Settings';

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
      setIsCollapsed(true);
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
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed }
            />
          }></Route>
        <Route
          path='/watch/:id'
          element={
            <Video width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } /> }></Route>
        <Route
          path='/:username/featured'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } home /> }></Route>
        <Route
          path='/:username/videos'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } videos /> }></Route>
        <Route
          path='/:username/shorts'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } shorts /> }></Route>
        <Route
          path='/:username/playlists'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } playlists /> }></Route>
        <Route
          path='/:username/community'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } community /> }></Route>
        <Route
          path='/:username/channels'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } channels /> }></Route>
        <Route
          path='/:username/about'
          element={
            <Channel width={ width }
              isCollapsed={ isCollapsed }
              isMenuOpen={ isMenuOpen }
              handleMenuToggler={ handleMenuToggler }
              handleToggler={ handleToggler }
              setIsMenuOpen={ setIsMenuOpen }
              setIsCollapsed={ setIsCollapsed } about /> }></Route>
        <Route path='/account' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } account /> }></Route>
        <Route path='/account_notifications' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } notifications /> }></Route>
        <Route path='/account_playback' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } playback /> }></Route>
        <Route path='/account_privacy' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } privacy /> }></Route>
        <Route path='/account_sharing' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } sharing /> }></Route>
        <Route path='/account_billing' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } billing /> }></Route>
        <Route path='/account_advanced' element={ <Settings width={ width }
          isCollapsed={ isCollapsed }
          isMenuOpen={ isMenuOpen }
          handleMenuToggler={ handleMenuToggler }
          handleToggler={ handleToggler }
          setIsMenuOpen={ setIsMenuOpen }
          setIsCollapsed={ setIsCollapsed } advanced /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
