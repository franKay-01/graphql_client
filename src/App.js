import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home'));
const GalleryPage = React.lazy(()=> import('./pages/gallery'));
const ShopPage = React.lazy(()=> import('./pages/shop'));

const App = () => {
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/gallery' element={<GalleryPage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
