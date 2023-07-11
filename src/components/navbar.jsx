import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png'
import {Link, NavLink} from 'react-router-dom'
import SearchImg from '../assets/search.png'
import ShopImg from '../assets/shop_logo.png'

const navigation = [
  { name: 'HOME', href: '/pension', current: false },
  { name: 'GALLERY', href: '/provident', current: false },
  { name: 'SHOP', href: '/occupational', current: false },
  { name: 'ABOUT US', href: '/about', current: false },
  { name: 'CONTACT US', href: '/faqs', current: false },
  { name: 'WHOLESALE', href: '/calculator', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="nav-bg-custom mobile-nav box-shad w-full left-0 top-0 nav-index">
      {({ open }) => (
        <>
          <div className="mt-3 mx-auto px-2 sm:px-6 lg:px-8 h-18">
            <div className="relative flex flex-row items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/">HOME</NavLink>
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/gallery">GALLERY</NavLink>
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/shop">SHOP</NavLink>
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/">ABOUT US</NavLink>
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/">CONTACT US</NavLink>
                    <NavLink activeStyle={{ color:'#5754a8' }} className='block px-3 py-2 nav-text' exact to="/">WHOLESALE</NavLink>
                  </div>                  
                </div>
                
              </div>
              <div className="hidden lg:block lg:w-auto mr-4">
                <a href='/get-started' className="brown-button button-margin-left">
                  <img src={SearchImg}/>
                </a>
              </div>
              <div className="hidden lg:block lg:w-auto">
                <a href='/get-started' className="brown-button button-margin-left">
                  <img src={ShopImg}/>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mobile-nav-bg">
            <div className="px-2 pt-2 pb-3">
              <Disclosure.Button className="inline-flex place-x mt-8 link-button-position items-center justify-right p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-12 w-12 text-white" aria-hidden="true" />
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

