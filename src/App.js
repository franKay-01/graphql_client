import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home'));
const GalleryPage = React.lazy(()=> import('./pages/gallery'));
const ShopPage = React.lazy(()=> import('./pages/shop'));
const CartPage = React.lazy(()=> import('./pages/cart'));
const SuccessPage = React.lazy(()=> import('./pages/success'));
const UsersPage = React.lazy(()=> import('./pages/users'));
const OrderPage = React.lazy(()=> import('./pages/orders'));
const AboutUsPage = React.lazy(()=> import('./pages/about'));
const ForgottenPasswordPage = React.lazy(()=> import('./pages/forgotten'))
const BulkPage = React.lazy(()=> import('./pages/bulk'))
const ContactPage = React.lazy(()=> import('./pages/contact'))

const App = () => {
  const router = useNavigate()

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cart' || e.key === 'ttk') {
        localStorage.removeItem('ttk');
        localStorage.removeItem('cart');
        router('/credentials')
        return
      }
    };

    // Add the event listener for 'storage' events
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  },[])
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUsPage/>}></Route>
        <Route path='/gallery' element={<GalleryPage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/success' element={<SuccessPage/>}></Route>
        <Route path='/orders' element={<OrderPage/>}></Route>
        <Route path='/credentials' element={<UsersPage/>}></Route>
        <Route path='/contact_us' element={<ContactPage/>}></Route>
        <Route path='/bulk_shop' element={<BulkPage/>}></Route>
        <Route path='/forgotten_password' element={<ForgottenPasswordPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
