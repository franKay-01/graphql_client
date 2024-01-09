import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {
  const fakeAuth = localStorage.getItem('ttk')
  const builder = () => {
    return (
      <Outlet />
    )
  }
  return !!fakeAuth ? builder() : <Navigate to='/login' />
}

export default ProtectedRoute