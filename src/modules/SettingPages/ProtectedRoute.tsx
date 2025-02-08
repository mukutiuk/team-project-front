import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const email = sessionStorage.getItem('email');

  const isEmail = email == 'admin@example.com';

  return isEmail ? <Outlet /> : <Navigate to="/" />;
};
