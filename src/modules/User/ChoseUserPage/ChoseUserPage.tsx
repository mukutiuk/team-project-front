import { Link, NavLink } from 'react-router-dom';
import './ChoseUserPage.scss';

export const ChoseUserPage = () => {
  const logOut = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  };

  return (
    <div className="choses">
      <div className="choses__container">
        <NavLink className="choses__button" to="/user/profile">
          Profile Settings
        </NavLink>
        <NavLink className="choses__button" to="/user/orders">
          My Orders
        </NavLink>
      </div>

      <Link onClick={logOut} className="choses__logout" to="/">
        LogOut
      </Link>
    </div>
  );
};
