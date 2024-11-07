import { NavLink } from 'react-router-dom';
import './ChoseSetting.scss';

export const ChoseSetting = () => {
  return (
    <div className="chose">
      <NavLink className="chose__button" to="/settings/zipCode">
        Zip Code
      </NavLink>
      <NavLink className="chose__button" to={''}>
        Orders
      </NavLink>
    </div>
  );
};
