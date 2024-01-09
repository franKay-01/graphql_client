import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { ProtectedRoute } from './auth';

const ShopPage = React.lazy(()=> import('./pages/shop'));
const CartPage = React.lazy(()=> import('./pages/cart'));
const SuccessPage = React.lazy(()=> import('./pages/success'));
const LoginPage = React.lazy(()=> import('./pages/login'));
const ItemDetailsPage = React.lazy(()=> import("./pages/item_details"));
const CategoryDetailsPage = React.lazy(()=> import("./pages/category_items"));
const OrderPage = React.lazy(()=> import('./pages/orders'));

const App = () => {
  const router = useNavigate()

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cart' || e.key === 'ttk') {
        localStorage.removeItem('ttk');
        localStorage.removeItem('cart');
        router('/login')
        return
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  },[])

  return (
    <React.Suspense fallback={".....loading"}>
      <Routes>
        <Route path='/' element={<ShopPage/>}></Route>
        <Route path='/details' element={<ItemDetailsPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/success' element={<SuccessPage/>}></Route>       
        <Route path='/category' element={<CategoryDetailsPage/>}></Route>       
        <Route path='/login' element={<LoginPage/>}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/orders' element={<OrderPage/>}></Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
