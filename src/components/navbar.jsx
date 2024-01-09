import React, { useContext, Fragment } from 'react';
import { Disclosure, Popover, Transition  } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png'
import {Link, NavLink} from 'react-router-dom'
import SearchImg from '../assets/search.png'
import ShopImg from '../assets/shop_logo.png'
import { CartContext } from '../context/cartContext'
import { useState } from 'react';
import { useEffect } from 'react';

const navigation = [
  { name: 'SHOP', href: '/shop', current: false }
]

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [siginedIn, setSignedIn] = useState(false)

  const logout = () => {
    localStorage.removeItem('ttk');
    localStorage.removeItem('username');
    
    window.location.href = '/'   
  }

  useEffect(() => {
    const token = localStorage.getItem('ttk')
    if (token) {
      setSignedIn(true)
    }

    const handleStorageChange = (e) => {
      if (e.key === 'cart' || e.key === 'ttk') {
        setSignedIn(false)
        return
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Disclosure as="nav" className="nav-bg-custom mobile-nav box-shad w-full left-0 top-0 nav-index">
      {({ open }) => (
        <>
          <div className="mt-3 mx-auto px-2 sm:px-6 lg:px-8 h-18">
            <div className="relative flex flex-row items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="mb-button-outline inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <Link className='z-50' to={"/"}>
                <img className="p-4" src={Logo} />
              </Link>
              <div className="flex-1 flex items-center justify-center sm:items-stretch z-1 nav-items-margin">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/">SHOP</NavLink>
                  </div>                  
                </div>                
              </div>
              <div className="block lg:block lg:w-auto mr-16 lg:mr-4 md:mr-4">
                <a href='/cart' className="brown-button button-margin-left relative">
                  <img src={ShopImg}/>
                  {cart.length > 0 ? <div className='cart-count'><p className='cart-count-text'>{cart.length}</p></div> : null}
                </a>
              </div>
              <div className="hidden lg:block lg:w-auto">
                <div>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                            ${open ? '' : 'text-opacity-90'}
                            group a-z-alt`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 user-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-abs z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              
                              {siginedIn ?
                                <>
                                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                    <a
                                      key={'item.name'}
                                      href={'item.href'}
                                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                          {siginedIn ? localStorage.getItem('username') : '---'}
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="bg-gray-50 p-4">
                                    <a
                                      href="/orders"
                                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                      <span className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900">
                                          Orders
                                        </span>
                                      </span>
                                      <span className="block text-sm text-gray-500">
                                        See all items ever purchased
                                      </span>
                                    </a>
                                  </div>
                                  {siginedIn ? 
                                    <div className="bg-gray-50 p-4">
                                      <button
                                        onClick={logout}
                                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                      >
                                        <span className="flex items-center">
                                          <span className="text-sm font-medium flex flex-row space-x-2 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                            </svg>
                                            <span className="block text-sm text-gray-500">
                                              Log Out
                                            </span>
                                          </span>
                                        </span>
                                        
                                      </button>
                                    </div>
                                    : null }
                                </>
                                :
                                <div className="bg-gray-50 p-4">
                                  <a
                                    href="/login"
                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                  >
                                    <span className="flex items-center">
                                      <span className="text-lg font-medium text-gray-900">
                                        Sign In
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              }
                              
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mobile-nav-bg">
            <div className="px-2 pt-2 pb-3">
              <Disclosure.Button className="inline-flex place-x mt-8 link-button-position items-center justify-right p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-12 w-12 text-white mobile-nav-b" aria-hidden="true" />
                  ) : (
                    <img className='w-10' src={MenuIcon}/>
                  )}
              </Disclosure.Button>

              <div className='link-position'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='block link-text px-3 py-2'
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                 <Popover className="relative px-3 py-2 rounded-md font-normal text-default-blue learn-display">
                    <Popover.Button className="flex flex-row space-x-2 justify-center items-center link-text">
                      <span>{siginedIn ? localStorage.getItem('username') : '---'}</span> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                      </svg>

                    </Popover.Button>

                    <Popover.Panel className="mt-4 ml-4">
                      <div className="grid grid-cols-1 mobile-menu-bar">
                        <Link to={'/orders'} spy={true} smooth={true}
                          className={"mb-4 link-text"}
                          >
                          ORDERS
                        </Link>
                        {siginedIn ? 
                          <Link onClick={logout} spy={true} smooth={true}
                            className="link-text"
                            >
                            LOG OUT
                          </Link>
                          :null}
                        
                      </div>
                    </Popover.Panel>
                  </Popover>
                {/* <a href='/get-started' className="brown-button brown-button-alt link-text">
                  <span className='brown-button-text'>Get Started</span>
                </a> */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

