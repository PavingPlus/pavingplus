import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Pages
import Under from './pages/under';
import Home from './pages/Home'
// import About from './pages/About';
// import Team from './pages/Team';
// import History from './pages/History';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Under />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/history" element={<History />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<Under />} />
    </Routes>
  </BrowserRouter>
);

