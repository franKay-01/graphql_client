import React, { useContext } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from '../components/navbar';
import { CartContext } from "../context/cartContext";
import { useLocation, useNavigate } from 'react-router-dom';
import useFunctions from '../utils/functions';
import { ShowToast } from '../components/showToast';

export default function ItemDetails() {  
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const { getCategorySpecificItems } = useFunctions();

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const searchCategory = async (id) => {
    const { response_status, category } = await getCategorySpecificItems(parseInt(id));
    if (response_status === true){
      navigate('/category', { state: { category }});
    }else{
      ShowToast("error", "Products could not be loaded. Please try again in a few minutes")
    }
  }

  return (
    <>
      <Navbar/>
      <main className="main-home-content">
        <h1 className="lg:col-span-2 md:col-span-2 header-colored-text header-colored-text-alt-2 mt-12">Product Details</h1>
        <div className='grid grid-cols-2 gap-8 mt-12'>
          <ImageGallery items={images} />
          <section className='flex flex-col space-y-4'>
            <div className='flex flex-col'>
              <h1 className='product-name'>{product.name}</h1>
              {
                product.category?.name ? 
                  <section onClick={() => searchCategory(product.category.id)} className='product-category cursor-pointer'>
                    {product.category.name}
                  </section>:
                  null
              }
            </div>
            <h1>{product.description}</h1>
            <button onClick={()=>addToCart({product_id: product.id,unit_amount: product.price, price: product.price, name: product.name, quantity: 1})} className="cart-payment-button item-details-button flex flex-row justify-between cursor-pointer">
              <h1 className="banner-button-text">Add to Cart</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="white"/>
              </svg>
            </button>
          </section>
        </div>
      </main>
    </>
  );
};