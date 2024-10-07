import './SelectDevice.scss';
import { useAppSelector } from '../../../utils/hooks/hooks';
import { NavLink } from 'react-router-dom';

export const SelectDevice = () => {
  const { content } = useAppSelector(state => state.products);

  return (
    <div className="select">
      <h1 className="select__title">Select The Device That Needs Repair</h1>
      <h1 className="select__title--mobile">
        Select the device that needs repair
      </h1>
      <div className="select__container">
        {content.map(item => (
          <div key={item.id} className="select__wraper">
            <NavLink className="select__link" to={`/services/${item.name}`}>
              <img
                className="select__img"
                src={`http://localhost:8082/api${item.imageUrl}`}
                alt="img"
              />
            </NavLink>
            <span className="select__description">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
