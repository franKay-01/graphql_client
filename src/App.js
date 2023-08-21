import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home'));
const GalleryPage = React.lazy(()=> import('./pages/gallery'));
const ShopPage = React.lazy(()=> import('./pages/shop'));
const CartPage = React.lazy(()=> import('./pages/cart'));
const SuccessPage = React.lazy(()=> import('./pages/success'));
const UsersPage = React.lazy(()=> import('./pages/users'));

const App = () => {
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/gallery' element={<GalleryPage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/success' element={<SuccessPage/>}></Route>
        <Route path='/credentials' element={<UsersPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
