import Navbar from "../components/navbar";
import useFunctions from "../utils/functions";
import { useEffect } from "react";
import { ShowToast } from "../components/showToast";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import CustomDialog from "../components/customDialog";

export default function Gallery(){
  const [allOrders, setAllOrders] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    console.log("CLICKED OPEN")
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const { getOrders } = useFunctions();
  const router = useNavigate()
  
  const getDateString = (value) => {
    const dateObj = new Date(value);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate
  }

  const getCustomerOrders = async () => {
    const { response_code, orders } = await getOrders();
    if (response_code === 200){
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

  const getElemenetStatus = (e) => {
    if (e){
      return 'Shipped'
    }else{
      return 'Pending Shipping'
    }
  }

  const ordersPageData = !!allOrders && allOrders.slice(offset, offset + PER_PAGE).map((data, index) => {
    const orderTitle = `Order ID: ${data.reference_no}`;
    const orderDetails = `Products: \n # ${data.orderItems[0].products.name} x${data.orderItems[0].quantity}`;
    return (
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4">{getDateString(data.createdAt)}</td>
        <td className="whitespace-nowrap px-6 py-4">{data.reference_no}</td>
        <td className="whitespace-nowrap px-6 py-4">${data.amount}</td>
        <td className="whitespace-nowrap px-6 py-4">{data.quantity}</td>
        <td className="whitespace-nowrap px-6 py-4">{getElemenetStatus(data.status)}</td>
        
        <td className="whitespace-nowrap px-6 py-4">
          <svg onClick={openDialog} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          <CustomDialog
            isOpen={isOpen}
            onClose={closeDialog}
            title={orderTitle}
            content={
            <div>
              {orderDetails.split('\n').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>}
          />
        </td>
      </tr>
    )
  });

  useEffect(()=>{
    getCustomerOrders()
  },[])

  return(
    <div className="min-h-screen relative">
      <Navbar/>
      <main className="main-home-content mt-8">
      <div className="grid mt-12">
        <div className="flex flex-row space-x-8">
          <h1 className="header-colored-text header-colored-text-alt-2">Orders</h1>
          <h1 className="cart-number">count: #{allOrders.length}</h1>
        </div>
      </div>
      {allOrders.length > 0 ? 
        allOrders.map((order_item)=>{
          return (
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">#</th>
                          <th scope="col" className="px-6 py-4">Date</th>
                          <th scope="col" className="px-6 py-4">Order ID</th>
                          <th scope="col" className="px-6 py-4">Amount</th>
                          <th scope="col" className="px-6 py-4">No. of Items</th>
                          <th scope="col" className="px-6 py-4">Status</th>
                          <th scope="col" className="px-6 py-4">Other</th>
                        </tr>
                      </thead>
                      <tbody>
                        {!!allOrders && ordersPageData}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        :
        <div className="flex justify-center items-center mt-24">
          <h1 className="header-colored-text header-colored-text-alt-2">No Items</h1>
        </div>
      }
      </main>
    </div>
  )
}