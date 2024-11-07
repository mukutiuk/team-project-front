import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const email = localStorage.getItem('email');

  const isEmail = email == '9@gmail.com';

  return isEmail ? <Outlet /> : <Navigate to="/" />;
};
