import Navbar from "../components/navbar";
import ShopImg from "../assets/shop_item.png"
import Footer from "../components/footer";
import { Popover } from '@headlessui/react'

export default function Shop(){
  return (
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content">
        <div className="grid grid-cols-3">
          <h1 className="col-span-2 header-colored-text header-colored-text-alt-2 mt-12">Products</h1>
          <div className="flex flex-row a-z-position">
            <Popover className="relative px-3 rounded-md font-normal text-lg text-default-blue learn-display focus:outline-none">
              <Popover.Button className="a-z">
                <span className="flex flex-col">A - Z</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="item-drop-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Popover.Button>

              <Popover.Panel className="absolute z-10 mt-4">
                <div className="grid grid-cols-1 item-bar">
                  <a className='mb-6' href="/contact">A - Z</a>
                  <a className='mb-6' href="/about">Lowest to Highest</a>
                  <a href="/contact">Highest to Lowest</a>
                </div>
              </Popover.Panel>
            </Popover>
            <span className="a-z">List View</span>
            
          </div>
        </div>
        <div className="container main-container">
          <hr className="default-alt-2"></hr>
        </div>
        <div className="container grid grid-cols-3">
          <div className="item-card flex flex-row">
            <div className="item-card-top">
              <img className="item-card-img" src={ShopImg}/>
            </div>
            <div className="item-card-bottom flex flex-col pt-4 pl-8">
              <h1 className="item-card-label">Name</h1>
              <h1 className="item-card-price">$5.99 / lb</h1>
              <h1 className="item-card-description mt-4">Grown in San Juan Capistrano, CA</h1>
            </div>
          </div>
          <div className="item-card flex flex-row">
            <div className="item-card-top">
              <img className="item-card-img" src={ShopImg}/>
            </div>
            <div className="item-card-bottom flex flex-col pt-4 pl-8">
              <h1 className="item-card-label">Name</h1>
              <h1 className="item-card-price">$5.99 / lb</h1>
              <h1 className="item-card-description mt-4">Grown in San Juan Capistrano, CA</h1>
            </div>
          </div>
          <div className="item-card flex flex-row">
            <div className="item-card-top">
              <img className="item-card-img" src={ShopImg}/>
            </div>
            <div className="item-card-bottom flex flex-col pt-4 pl-8">
              <h1 className="item-card-label">Name</h1>
              <h1 className="item-card-price">$5.99 / lb</h1>
              <h1 className="item-card-description mt-4">Grown in San Juan Capistrano, CA</h1>
            </div>
          </div>
          <div className="item-card flex flex-row">
            <div className="item-card-top">
              <img className="item-card-img" src={ShopImg}/>
            </div>
            <div className="item-card-bottom flex flex-col pt-4 pl-8">
              <h1 className="item-card-label">Name</h1>
              <h1 className="item-card-price">$5.99 / lb</h1>
              <h1 className="item-card-description mt-4">Grown in San Juan Capistrano, CA</h1>
            </div>
          </div>
          <div className="item-card flex flex-row">
            <div className="item-card-top">
              <img className="item-card-img" src={ShopImg}/>
            </div>
            <div className="item-card-bottom flex flex-col pt-4 pl-8">
              <h1 className="item-card-label">Name</h1>
              <h1 className="item-card-price">$5.99 / lb</h1>
              <h1 className="item-card-description mt-4">Grown in San Juan Capistrano, CA</h1>
            </div>
          </div>
          <div className="item-card flex flex-row">
            <div className="item-card-top">
              <img className="item-card-img" src={ShopImg}/>
            </div>
            <div className="item-card-bottom flex flex-col pt-4 pl-8">
              <h1 className="item-card-label">Name</h1>
              <h1 className="item-card-price">$5.99 / lb</h1>
              <h1 className="item-card-description mt-4">Grown in San Juan Capistrano, CA</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}