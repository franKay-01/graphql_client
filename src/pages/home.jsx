import Navbar from "../components/navbar"
import LogoAlt from "../assets/logo_alt.png"
import QuoteImg from "../assets/quote.png"
import CarrotImg from "../assets/carrots.png";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import FacebookLogo from '../assets/facebook_alt.png'
import InstagramLogo from '../assets/instagram_alt.png'
import YoutubeLogo from '../assets/youtube_alt.png'
import $ from 'jquery'; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import DoubleItemList from "../components/doubleGridList";
import SlideOne from "../assets/slide_1.png"

import { useEffect } from "react";
import Footer from "../components/footer";

export default function Home(){

  const items = [{'name':'Item 1', 'image': SlideOne}, {'name':'Item 1', 'image': SlideOne},
  {'name':'Item 1', 'image': SlideOne},{'name':'Item 1', 'image': SlideOne},{'name':'Item 1', 'image': SlideOne},
  {'name':'Item 1', 'image': SlideOne},{'name':'Item 1', 'image': SlideOne},{'name':'Item 1', 'image': SlideOne}];

  return (
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content">
        <div className="flex flex-col dashboard-image-container image-container">
          <img src={LogoAlt}/>
          <h1 className="banner-text">We strive to bring the <span className="banner-text-italic">best taste</span>,<br></br>out of Africa</h1>
          <div className="banner-button">
            <h1 className="banner-button-text">Read more about us</h1>
          </div>
        </div>
        <div className="flex flex-col main-container mt-12 lg:mt-24 md:mt-24">
          <h1 className="header-colored-text">Best quality right from the heart of Africa</h1>
          <h1 className="essence-text mt-12 mb-12">Taste the very Essence of Africa</h1>

          <div className="container variety-bg flex flex-col">
            <h1 className="variety-text mb-32">Taste the variety</h1>
            <div className="banner-button">
              <h1 className="banner-button-text">Browse shop</h1>
            </div>
          </div>

          <div className="container grid grid-cols-1 md:flex md:flex-row space-x-0 lg:space-x-9 md:space-x-5">
            <div className="main-container flex flex-col">
              <img className="mt-12" src={QuoteImg}/>
              <h1 className="quote-text">
                RevieLorem ipsum dolor sit consectetue
                radipiscing elit, sed diam nonummy
                nibh euismod t
              </h1>
              <h1 className="quote-text">- Satisfied Customer</h1>
            </div>
            <div className="main-container flex flex-col">
              <img className="mt-12" src={QuoteImg}/>
              <h1 className="quote-text">
                RevieLorem ipsum dolor sit consectetue
                radipiscing elit, sed diam nonummy
                nibh euismod t
              </h1>
              <h1 className="quote-text">- Satisfied Customer</h1>
            </div>
            <div className="main-container flex flex-col">
              <img className="mt-12" src={QuoteImg}/>
              <h1 className="quote-text">
                RevieLorem ipsum dolor sit consectetue
                radipiscing elit, sed diam nonummy
                nibh euismod t
              </h1>
              <h1 className="quote-text">- Satisfied Customer</h1>
            </div>
          </div>

          <div className="container">
            <hr className="default"/>
          </div>
          <div className="flex flex-col space-y-4 p-4 justify-center items-center lg:hidden md:hidden ">
            <div className="grid grid-cols-1">
              <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in Central California and, er, hopefully very well-compensated.</p>
            </div>
            <div>
              <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in Central California and, er, hopefully very well-compensated.</p>
            </div>
            <div className="grid grid-cols-1">
              <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in Central California and, er, hopefully very well-compensated.</p>
            </div>
            <div>
              <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in Central California and, er, hopefully very well-compensated.</p>
            </div>
          </div>
          <div class="hidden lg:block md:block max-w-screen-2xl mx-auto mt-12 px-4 relative bg-white">
            <div class="flex flex-col md:flex-row gap-2 scrollable-div scroll-pt-20	">
              <div class="flex flex-1 flex-col item">
                <div class="flex flex-1 flex-col">
                  <img class="object-cover h-full image-width" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt=''/>
                  <p className="gallery-text gallery-text-auto mb-8"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                </div>
              </div>
              <div class="flex flex-col item">
                <div class="grid grid-cols-1">
                  <div className="grid grid-cols-1">
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                  <div>
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col item">
                <div class="flex flex-1 flex-col">
                  <img class="object-cover h-full image-width" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt=''/>
                  <p className="gallery-text gallery-text-auto mb-8"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                </div>
              </div>
              <div class="flex flex-col item">
                <div class="grid grid-cols-1">
                  <div className="grid grid-cols-1">
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                  <div>
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col item">
                <div class="flex flex-1 flex-col">
                  <img class="object-cover h-full image-width" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt=''/>
                  <p className="gallery-text gallery-text-auto mb-8"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                </div>
              </div>
              <div class="flex flex-col item">
                <div class="grid grid-cols-1">
                  <div className="grid grid-cols-1">
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                  <div>
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col item">
                <div class="flex flex-1 flex-col">
                  <img class="object-cover h-full image-width" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt=''/>
                  <p className="gallery-text gallery-text-auto mb-8"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                </div>
              </div>
              <div class="flex flex-col item">
                <div class="grid grid-cols-1">
                  <div className="grid grid-cols-1">
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                  <div>
                    <img class="object-cover image-width h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
                    <p className="gallery-text gallery-text-auto"><b>Central California</b> — The person who grew these was located in<br></br>Central California and, er, hopefully very well-compensated.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pseduo-track"></div>
          </div>
          <div className="main-container">
            <div className="banner-button">
              <h1 className="banner-button-text">View Gallery</h1>
            </div>
          </div>
          <div className="container">
            <hr className="default"/>
          </div>
          <div className="container">
            <div class="flex justify-center">
              <h1 className="header-colored-text header-colored-text-alt-1">Recipe of the Day</h1>
            </div>
            <div className="flex flex-col lg:hidden md:hidden">
              <div className="custom-width">
                <h1 className="header-colored-text">Banana Fruitcake</h1>
                <h1 className="recipe-sub-text">Taste the very Essence of Africa</h1>
                <hr className="default hr-margin"/>
              </div>
            </div>
            <div class="hidden lg:grid md:grid grid-flow-col gap-4">
              <div class="row-start-2 row-span-2">
                <div className="custom-width">
                  <h1 className="header-colored-text header-colored-text-alt">Banana Fruitcake</h1>
                  <h1 className="recipe-sub-text">Taste the very Essence of Africa</h1>
                  <hr className="default hr-margin"/>
                </div>
              </div>
             
              <div class="hidden lg:block md:block row-start-1 row-end-4 relative">
                <div className="carrot-image">
                  <img className="carrot-image-alt" src={CarrotImg}/>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
              <div>
                <img class="image-width-alt" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div className="col-span-2">
                <p className="recipe-p">
                  We believe in produce. Tasty produce. Produce like:
                  <br></br><br></br>
                  Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. 
                  <br></br><br></br>
                  What are we forgetting?
                  <br></br><br></br>
                  Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
                </p>
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="banner-button">
              <h1 className="banner-button-text">Try other Recipes</h1>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="variety-bg-alt flex flex-col">
            <h1 className="variety-text-alt mb-4">Follow us on</h1>
            <div className="flex flex-row mb-12">
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
            <div className="banner-button banner-button-alt-1">
              <h1 className="banner-button-text">Browse shop</h1>
            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </div>
  )
}