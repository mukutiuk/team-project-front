import { NavLink } from 'react-router-dom';
import './ChoseUserPage.scss';

export const ChoseUserPage = () => {
  return (
    <div className="choses">
      <NavLink className="choses__button" to="/user/profile">
        Profile Settings
      </NavLink>
      <NavLink className="choses__button" to="/user/orders">
        My Orders
      </NavLink>
    </div>
  );
};
