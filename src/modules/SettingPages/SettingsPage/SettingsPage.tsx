import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/hooks';
import './SettingsPage.scss';
import * as productAction from '../../../features/ProductSlice';

export const SettingsPage = () => {
  const { zipCode } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const deleteZipCode = (value: number) => {
    // eslint-disable-next-line no-console
    console.log(value);
    dispatch(productAction.deleteZipcode(value));
  };

  return (
    <div className="setting">
      <h2 className="setting__title">Zip Code</h2>
      <div className="setting__container">
        {zipCode.map(item => (
          <div key={item.zipCode} className="setting__wraper">
            <h3 className="setting__num">{item.zipCode}</h3>
            <button
              onClick={() => deleteZipCode(item.zipCode)}
              className="setting__close"
            ></button>
          </div>
        ))}
      </div>
      <NavLink className="setting__link" to="/settings/addZip">
        Add Zip
      </NavLink>
    </div>
  );
};
