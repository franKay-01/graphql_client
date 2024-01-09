import { useContext } from "react";
import Navbar from "../components/navbar";
import ShopImg from "../assets/shop_item.png"
import { Popover } from '@headlessui/react'
import { useState } from "react";
import { CartContext } from "../context/cartContext";
import useFunctions from "../utils/functions";
import { useEffect } from "react";
import { ShowToast } from "../components/showToast";
import { useNavigate } from 'react-router-dom';

export default function Shop(){
  const [allProducts, setAllProducts] = useState([])
  const [searchIndex, setSearchIndex] = useState("")

  const { getProducts, searchProduct } = useFunctions();

  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const getShopProducts = async () => {
    const { response_status, products } = await getProducts();
    if (response_status === true){
      setAllProducts(products)
    }else{
      ShowToast("error", "Products could not be loaded. Please try again in a few minutes")
    }
  }

  const item_details = (product) => {
    console.log("PROD ", JSON.stringify(product))
    navigate('/details', { state: { product }});
  }

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const { response_status, products } = await searchProduct(searchIndex);
      if (response_status === true){
        setAllProducts(products)
      }else{
        ShowToast("error", "Products could not be loaded. Please try again in a few minutes")
      }
    }
  }

  useEffect(()=>{
    getShopProducts()
  },[])

  return (
    
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content">
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3">
          <h1 className="lg:col-span-2 md:col-span-2 header-colored-text header-colored-text-alt-2 mt-12">Products</h1>
          <div className="flex flex-row justify-center items-center space-x-2 a-z-position">
            <svg onClick={() => getShopProducts()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-9">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

            <input className="search-index-input" placeholder="Search Product" type="text" value={searchIndex} onChange={(e) => setSearchIndex(e.target.value)} onKeyDown={handleKeyPress}/>
          </div>
        </div>
        <div className="container main-container">
          <hr className="default-alt-2"></hr>
        </div>
        
          { allProducts.length > 0 ?
            <div className="container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
              {allProducts.map((item, index) => {
                return <div className="item-card flex flex-row relative">
                  <div onClick={() => item_details(item)} className="flex flex-col cursor-pointer">
                    <div className="item-card-top">
                      <img className="item-card-img" src="https://picsum.photos/id/1018/1000/600/"/>
                    </div>
                    <div className="item-card-bottom flex flex-col">
                      
                      <div id={`b-${index}`} className="grid pt-4 pl-8">
                        <h1 className="item-card-label">{item.name}</h1>
                        <h1 className="item-card-price">GHS {item.price.toFixed(2)}</h1>
                        <h1 className="item-card-description product-description-ellipsis mt-4">{item.description}</h1>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cart-bag-position">
                    <div onClick={()=>addToCart({product_id: item.id, unit_amount: item.price, price: item.price, name: item.name, quantity: 1})} class="relative group cursor-pointer">
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
            :
            <div className="flex justify-center items-center mt-24 mb-24">
              <h1 className="header-colored-text header-colored-text-alt-2">No Items Found</h1>
            </div>
          }
      </main>
    </div>
  )
}