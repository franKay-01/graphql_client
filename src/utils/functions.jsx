import useAxios from "../hooks/hook";

const useFunctions = () => {
  const { executeReq, executeGet } = useAxios();

  const submitCheckOut = async (params) => {
    try {
      const {data} = await executeReq('stripe/create-checkout-session', params)

      if (data.response_code === 200){
        return {response_code: 200, checkout_url: data.url, error: false, msg: ""}
      }else if (data.response_code === 300){
        return {response_code: 300, error: true, msg: "Token expired. Please sign in to continue"}
      }else{
        return {response_code: 200, checkout_url: null, error: true, msg: ""}
      }
    }catch (err){
      return {response_code: 200, checkout_url: null, error: true, msg: ""}
    }
  }

  const getProducts = async () => {
    try{
      const { data } = await executeGet('product-info')
      return {response_code: data.response_code, products: data.products}
    }catch{
      return {response_code: '001'}
    }
  }

  const signUp = async (params) => {
    try {
      const {data} = await executeReq('users', params)
      if (data.response_code === 200){
        return {response_code: 200}
      }else{
        return {response_code: 201, msg: data.error.message}
      }
    }catch{
      return {response_code: 201, msg: "Sign Up process failed. Please try again in a few minutes"}
    }
  }

  const signUserIn = async (params) => {
    try {
      const {data} = await executeReq('users/signin', params)
      if (data.response_code === 200){
        return {response_code: 200, token: data.token, client_username: data.username ,msg: null}
      }else if (data.response_code === 300){
        return {response_code: 300, msg: "Token expired. Please sign in to continue"}
      }else{
        return {response_code: 201, token: null, client_username: null ,msg: data.error.message}
      }
    }catch{
      return {response_code: 201,  token: null, client_username: null, msg: "Sign In process failed. Please try again in a few minutes"}
    }
  }

  const getOrders = async () => {
    try {
      const {data} = await executeGet('order/customer')
      if (data.response_code === 200){
        return {response_code: 200, orders: data.orders}
      }else if (data.response_code === 300){
        return {response_code: 300, msg: "Token expired. Please sign in to continue"}
      }else{
        return {response_code: 201, msg: data.error.message}
      }
    }catch{
      return {response_code: 201, msg: "Products could not be retrieved. Please try again in a few minutes"}
    }
  }

  return { submitCheckOut, getProducts, signUp, signUserIn, getOrders }
}

export default useFunctions