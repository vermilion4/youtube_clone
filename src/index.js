import "floc-off";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Channel from "./pages/Channel/Channel";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/youtube_clone" element={ <App /> }></Route>
      <Route path='/watch/:id' element={ <Video /> }></Route>
      <Route path="/:username/featured" element={ <Channel home /> }></Route>
      <Route path="/:username/videos" element={ <Channel videos /> }></Route>
      <Route path="/:username/shorts" element={ <Channel shorts /> }></Route>
      <Route path="/:username/playlists" element={ <Channel playlists /> }></Route>
      <Route path="/:username/community" element={ <Channel community /> }></Route>
      <Route path="/:username/channels" element={ <Channel channels /> }></Route>
      <Route path="/:username/about" element={ <Channel about /> }></Route>
    </Routes>
  </Router>
);

