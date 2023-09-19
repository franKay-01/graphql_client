import Navbar from "../components/navbar";
import FoodImg from "../assets/food.png";
import PlateImg from "../assets/plate.png"
import ParsleyImg from "../assets/parsley.png"
import Footer from "../components/footer";

export default function Success(){
  return (
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content-alt mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 relative">
          <img className="hidden lg:block md:hidden about-img-position-1" src={PlateImg}/>
          <img className="hidden lg:block md:hidden about-img-position-2" src={ParsleyImg}/>
          <div className="order-2 lg:order-1 md:order-1 flex flex-col justify-center items-center">
            <h1 className="variety-text-alt-1">The best taste, out of Africa</h1>
            <h1 className="essence-text mb-12">Taste the very Essence</h1>
          </div>
          <div className="order-1 lg:order-2 md:order-2">
            <img className="about-img" src={FoodImg}/>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 space-x-4 mt-44 mb-24">
          <div className="flex flex-col items-center">
            <h1 className="variety-text-alt-1 variety-text-alt-1-n">What is special about Golden Palm Foods?</h1>
            <h1 className=" mb-12">Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality. Discover a world of culinary excellence, where every dish is a testament to our commitment to delivering exceptional quality</h1>
          </div>
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
        </div>
      </main>
      <Footer/>
    </div>
  )
}