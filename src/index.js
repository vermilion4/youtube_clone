import "floc-off";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/youtube_clone" element={ <App /> }></Route>
      <Route path='/watch/:id' element={ <Video /> }></Route>
    </Routes>
  </Router>
);

