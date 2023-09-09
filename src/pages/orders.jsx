import Navbar from "../components/navbar";
import useFunctions from "../utils/functions";
import { useEffect } from "react";
import { ShowToast } from "../components/showToast";
import { useState } from "react";

export default function Gallery(){
  const [allOrders, setAllOrders] = useState([])

  const { getOrders } = useFunctions();

  const getCustomerOrders = async () => {
    const { response_code, products } = await getOrders();
    if (response_code === 200){
      setAllProducts(products)
    }else{
      ShowToast("error", "Products could not be loaded. Please try again in a few minutes")
    }
  }

  useEffect(()=>{
    getCustomerOrders()
  },[])

  return(
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content">

      </main>
    </div>
  )
}