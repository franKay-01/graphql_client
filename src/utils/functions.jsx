import useAxios from "../hooks/hook";

const useFunctions = () => {
  const { executeReq } = useAxios();

  const signUp = async (user) => {
    try {

      const params = `
        mutation Mutation($client: AddUserInput!) {
          addUser(client: $client) {
            first_name
          }
        }
      `

      const variables = {client: user}
      const { data } = await executeReq('signUp', params, variables)
      
      const { addUser } = data.data
      if (Object.keys(addUser).length > 0) {
        return {response_status: true, msg: "User Account created successfully"}
      }else{
        return {response_status: true, msg: "User Account creation failed"}
      }
      
    }catch{
      return {response_status: false}
    }
  }

  const submitCheckOut = async (orders) => {
    try {
      const params = `
        mutation Mutation($order: AddOrderInput!) {
          addOrder(order: $order) {
            id
          }
        }
      `

      const variables = { order:  orders}

      const { data } = await executeReq('checkOut', params, variables)
  
      const { addOrder } = data.data
      if (Object.keys(addOrder).length > 0) {
        return {response_status: true, msg: "Order created successfully"}
      }else{
        return {response_status: true, msg: "Order creation failed"}
      }

    }catch (err){
      return {response_status: false}
    }
  }

  const searchProduct = async (searchIndex) => {
    try {
      const params = `
        query ProductSearch($searchIndex: String!){
          product_search(search: $searchIndex) {
            id
            name
            price
            description
            category {
              id
              name
            }
          }
        }
      `

      const variables = {
        searchIndex 
      };
  
      const { data } = await executeReq('searchProduct', params, variables)
      
      const { product_search } = data.data

      if (product_search.length > 0){
        return {response_status: true, products: product_search}
      }else{
        return {response_status: false, products: null}
      }

    }catch(err){
      console.log(err)
      return {response_status: false}
    }
  }

  const getCategorySpecificItems = async (categoryId) => {
    try {
      const params = `query CategorySearch($categoryId: ID!) {
        category(id: $categoryId) {
          id
          name
          products {
            id
            name
            price
            description
          }
        }
      }`

      const variables = {
        categoryId 
      };

      const { data } = await executeReq('getCategoryItems', params, variables)
      const { category } = data.data

      if (category){
        return {response_status: true, category}
      }else{
        return {response_status: false, category: null}
      }
    }catch(err){
      return {response_status: false}
    }
  }

  const getProducts = async () => {
    try{
      const params = `query {
        products {
          id
          name
          price
          description
          category {
            id
            name
          }
        }
      }`

      const { data } = await executeReq('getProducts', params)
      const { products } = data.data

      if (products.length > 0){
        return {response_status: true, products}
      }else{
        return {response_status: false, products: null}
      }
      
    }catch{
      return {response_status: false}
    }
  }

  const signUserIn = async (credentials) => {
    try {
      const params = `
      query UserLogin($user: UserLoginInput!){
        user_log_in(user: $user) {
          username
          token
        }
      }`

      const variables = {user: credentials}
      
      const {data} = await executeReq('signIn', params, variables)
      
      const { user_log_in } = data.data

      if (Object.keys(user_log_in).length > 0) {
        return {response_status: true, token: user_log_in.token, client_username: user_log_in.username, msg: ''}
      }else{
        return {response_status: false, msg: null}
      }
    }catch{
      return {response_status: false}
    }
  }

  const getOrders = async () => {
    try {
      const params = `
      query {
        orders {
          id
          amount
          quantity
          createdAt
          status
          orderItems {
            quantity
            unit_amount
            products {
              name
            }
          }
        }
      }`

      const { data, status } = await executeReq('getOrders', params)

      if (status === 403 || status === 500){
        localStorage.removeItem('ttk');
        localStorage.removeItem('username');
        return {response_status: false, msg: "Token has expired. Kindly log in again to access your orders"}  
      }

      const { orders } = data.data

      if (orders.length > 0){
        return {response_status: true, orders}
      }else{
        return {response_status: false}
      }
    }catch{
      return {response_status: false}
    }
  }

  return { submitCheckOut, getProducts, signUserIn, getCategorySpecificItems, searchProduct, signUp, getOrders}
}

export default useFunctions