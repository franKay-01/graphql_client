import Navbar from "../components/navbar";
import useFunctions from "../utils/functions";
import { useEffect } from "react";
import { ShowToast } from "../components/showToast";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Gallery(){
  const [allOrders, setAllOrders] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { getOrders } = useFunctions();
  const router = useNavigate()

  const getCustomerOrders = async () => {
    const { response_code, orders } = await getOrders();
    if (response_code === 200){
      console.log("ORDERS " + JSON.stringify(orders))
      setAllOrders(orders)
    }else if (response_code === 300){
      setIsLoading(false)
      ShowToast('error', 'Token expired. Kindly sign in to continue')
      localStorage.removeItem('ttk');
      router('/credentials')
      return
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
      
      {allOrders.length > 0 ? 
        allOrders.map((order_item)=>{
          return (
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">#</th>
                          <th scope="col" className="px-6 py-4">First</th>
                          <th scope="col" className="px-6 py-4">Last</th>
                          <th scope="col" className="px-6 py-4">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-6 py-4">Mark</td>
                          <td className="whitespace-nowrap px-6 py-4">Otto</td>
                          <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                          <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                          <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                          <td className="whitespace-nowrap px-6 py-4">@fat</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                          <td className="whitespace-nowrap px-6 py-4">Larry</td>
                          <td className="whitespace-nowrap px-6 py-4">Wild</td>
                          <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        :
        <div className="flex justify-center items-center">
          <h1 className="header-colored-text header-colored-text-alt-2">No Items</h1>
        </div>
      }
      </main>
    </div>
  )
}