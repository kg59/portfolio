import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from 'layout/Layout'
import Hero from 'components/Hero/Hero';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout main={<Hero/>}/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;