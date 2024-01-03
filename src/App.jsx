import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from 'layout/Layout'
import HeroN from 'components/Hero/HeroN'

/**
 * Main App called by index.js
 * 
 */
function App() {
  return (
    <HeroN/>
  //  <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Layout main={<Hero/>}/>}/>
  //   </Routes>
  //  </BrowserRouter>
  );
}

export default App;