import useAxios from "../hooks/hook";

const useFunctions = () => {
  const { executeReq, executeGet } = useAxios();

  const submitCheckOut = async (params) => {
    try {
      const {data} = await executeReq('stripe/create-checkout-session', params)

      if (data.resp_code === 200){
        return {checkout_url: data.url, error: false}
      }
    }catch{
      return {checkout_url: null, error: true}
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
        return {response_code: 200}
      }else{
        return {response_code: 201, msg: data.error.message}
      }
    }catch{
      return {response_code: 201, msg: "Sign In process failed. Please try again in a few minutes"}
    }
  }

  return { submitCheckOut, getProducts, signUp, signUserIn }
}

export default useFunctions