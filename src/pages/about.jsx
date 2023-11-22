import Navbar from "../components/navbar";
import FoodImg from "../assets/food.png";
import PlateImg from "../assets/plate.png"
import ParsleyImg from "../assets/parsley.png"
import Footer from "../components/footer";
import GalleryImg from "../assets/gallery_img.png"
import FacebookLogo from '../assets/facebook_alt.png'
import InstagramLogo from '../assets/instagram_alt.png'
import YoutubeLogo from '../assets/youtube_alt.png'

export default function Success(){
  return (
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content pb-32">
        <div className="grid mt-12">
          <div className="flex flex-row space-x-8">
            <h1 className="header-colored-text header-colored-text-alt-2">About Us</h1>
          </div>
        </div>
        <div className="container main-container">
          <hr className="default-alt-2"></hr>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <img className="mt-4 about-img-alt" src={GalleryImg} alt=""/>
            <h1 className="header-colored-text header-colored-text-alt-2">Carmen Carmen</h1>
            <div className="flex flex-row mb-12">
              <div className="lg:flex lg:w-auto mr-4">
                <a href='/get-started' className="w-12 h-12">
                  <img src={FacebookLogo}/>
                </a>
              </div>
              <div className="lg:flex lg:w-auto mr-4">
                <a href='/get-started' className="w-12 h-12">
                  <img src={YoutubeLogo}/>
                </a>
              </div>
              <div className="lg:flex lg:w-auto">
                <a href='/get-started' className="w-12 h-12">
                  <img src={InstagramLogo}/>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1>Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality.
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            <br></br><br></br>
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            <br></br><br></br>
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality
            </h1>
          </div>
        </div>
        <hr className="style-eight"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 space-x-4 mt-20 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 justify-center items-center">
            <div className="flex flex-col">
              <h1 className="variety-text-alt-1 variety-text-alt-1-b">1. Good Quality</h1>
              <h1>Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="variety-text-alt-1 variety-text-alt-1-b">2. Easy to Order</h1>
              <h1>Experience the convenience of effortless ordering, ensuring your favorite meals are just a few clicks away</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="variety-text-alt-1 variety-text-alt-1-b">3. Healthy Food</h1>
              <h1>Savor the goodness of our thoughtfully crafted menu, offering a delectable selection of nutritious and wholesome options for a healthier you</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="variety-text-alt-1 variety-text-alt-1-b">4. Great Taste</h1>
              <h1>Indulge your palate in a symphony of flavors that promise to delight your taste buds with every mouthwatering bite.</h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="variety-text-alt-1 variety-text-alt-1-n">What is special about Golden Palm Foods?</h1>
            <h1 className=" mb-12">Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality. Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality</h1>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}