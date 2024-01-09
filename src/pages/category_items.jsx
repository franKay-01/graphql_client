import { useContext } from "react";
import Navbar from "../components/navbar";
import ShopImg from "../assets/shop_item.png"
import { useLocation, useNavigate } from 'react-router-dom';

import { CartContext } from "../context/cartContext";

export default function Shop(){
  const location = useLocation();
  const { category } = location.state || {};
  const { addToCart } = useContext(CartContext);
  
  const navigate = useNavigate();

  const item_details = (product) => {
    navigate('/details', { state: { product }});
  }

  return (
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content">
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3">
          <h1 className="lg:col-span-2 md:col-span-2 header-colored-text header-colored-text-alt-2 mt-12">Category: {category.name}</h1>
        </div>
        <div className="container main-container">
          <hr className="default-alt-2"></hr>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
          {category.products.map((item, index) => {
            return <div className="item-card flex flex-row relative cursor-pointer">
              <div onClick={() => item_details(item)} className="flex flex-col cursor-pointer">
                <div className="item-card-top">
                  <img className="item-card-img" src={ShopImg}/>
                </div>
                <div className="item-card-bottom flex flex-col">
                  
                  <div id={`b-${index}`} className="grid pt-4 pl-8">
                    <h1 className="item-card-label">{item.name}</h1>
                    <h1 className="item-card-price">GHS {item.price.toFixed(2)}</h1>
                    <h1 className="item-card-description mt-4">{item.description}</h1>
                  </div>
                </div>
              </div>
              <div className="cart-bag-position">
              
                <div onClick={()=>addToCart({product_id: item.id,unit_amount: item.price, price: item.price, name: item.name, quantity: 1})} class="relative group cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>

                  <div class="tooltip-position rounded-md invisible">
                    <h1 className="tooltip-text">Add to Cart</h1>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </main>
    </div>
  )
}