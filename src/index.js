import "floc-off";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Channel from "./components/Channel/Channel";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/youtube_clone" element={ <App /> }></Route>
      <Route path='/watch/:id' element={ <Video /> }></Route>
      <Route path="/:username/featured" element={ <Channel /> }></Route>
    </Routes>
  </Router>
);

