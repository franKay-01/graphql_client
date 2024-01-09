import { useState } from 'react'
import axios from "axios"

const useAxios = () => {
  const BASE_URL = "http://localhost:4000/graphql";

  const token = localStorage.getItem("ttk")

  const executeReq = async (operationName = '', query, variables = {}) => {
    try {
      const res = await axios.post(BASE_URL, {
        operation: operationName,
        query,
        variables
      }, 
        { headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          }
        })

      return res
    }
    catch (err) {
      return {data: err, status: err.response.status}
    }
  }

  return { executeReq }
}

export default useAxios