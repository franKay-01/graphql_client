import FacebookLogo from '../assets/facebook.png'
import InstagramLogo from '../assets/instagram.png'
import YoutubeLogo from '../assets/youtube.png'
import VisaLogo from '../assets/visa.png'
import MasterCardLogo from '../assets/master_card.png'
import { useState } from 'react'
import { ShowToast } from './showToast'
import useFunctions from '../utils/functions'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { createEmailSubscription } = useFunctions()

  const submitEmail = async () => {
    setIsLoading(true)
    if (email === ''){
      ShowToast('error', "Email field is required")
      setIsLoading(false)
    }

    const params = { 'email': email}
    const { msg } = await createEmailSubscription(params);
    
    setEmail('')
    ShowToast('success', msg)
    setIsLoading(false)
    return
  }

  return (
    <footer className="p-6 w-full left-0 bottom-0 footer-color md:pt-16 ">
      <div className="grid grid-cols-1 md:ml-12 mx-auto gap-y-8 sm:grid-cols-2 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <div className='flex flex-row space-x-4'>
            <input className='foot-input-field focus:outline-none' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' type="text"/>
            {isLoading ? 
            
              <div className="footer-button flex flex-row justify-between cursor-pointer">
                <span className="spinner-position spinner-position-alt">
                    <div class="w-6 h-6 rounded-full animate-spin
                      border border-solid border-white border-t-transparent"></div>
                  </span>
              </div>
            :
              <button className='footer-button' onClick={submitEmail}>
                <h1 className='footer-button-text'>SUBSCRIBE</h1>
              </button>
            }
           
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 text-left lg:text-left md:text-left text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" className='nav-text nav-text-alt' href="/">HOME</a>
            <a rel="noopener noreferrer" className='nav-text nav-text-alt' href="/gallery">GALLERY</a>
            <a rel="noopener noreferrer" className='nav-text nav-text-alt' href="/shop">SHOP</a>
            <a rel="noopener noreferrer" className='nav-text nav-text-alt' href="/about">ABOUT US</a>
            <a rel="noopener noreferrer" className='nav-text nav-text-alt' href="/contact">CONTACT US</a>
            <a rel="noopener noreferrer" className='nav-text nav-text-alt' href="/">WHOLESALE</a>
          </div>
          <hr className="default-alt"/>
          <div className="flex flex-row text-sm">
            <div className="lg:block lg:w-auto mr-4">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={FacebookLogo}/>
              </a>
            </div>
            <div className="lg:block lg:w-auto mr-4">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={YoutubeLogo}/>
              </a>
            </div>
            <div className="lg:block lg:w-auto">
              <a href='/get-started' className="brown-button button-margin-left">
                <img src={InstagramLogo}/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <p className="md:ml-12 nav-text nav-text-alt">
            We believe in produce. Tasty produce. Produce like:
            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. 
          </p>
          <div className='flex flex-row space-x-4 md:ml-12'>
            <img className='h-7 w-12' src={MasterCardLogo}/>
            <img className='h-7 w-12' src={VisaLogo}/>
          </div>
        </div>
      </div>
      <div className="flex items-center md:pt-16 md:pl-12 pt-12 text-sm">
        <span className="nav-text-alt nav-text">@ 2023, GOLDEN PALM FOODS</span>
      </div>
    </footer>
  )
}