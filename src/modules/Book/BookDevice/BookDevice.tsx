import { useEffect, useState } from 'react';
import './BookDevice.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import * as productAction from '../../../features/ProductSlice';
import * as bookAction from '../../../features/BookSlice';

export const BookDevice = () => {
  const [isSelector, setIsSelector] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const { content } = useAppSelector(state => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productAction.fetchProduct());
  }, [dispatch]);

  const getSelectValue = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number,
  ) => {
    setSelectValue(e.currentTarget.innerText);
    dispatch(bookAction.addDevice(id.toFixed()));
  };

  return (
    <>
      <img className="device__logo" src="../img/loogo.png" alt="img" />
      <section className="device">
        <Link to="/" className="device__close"></Link>
        <h1 className="device__title">Book Online</h1>
        <p className="device__description">
          Book our appointment with us today! Simply choose a convenient time,
          and our dispatcher will give you a call to confirm the details. Please
          note that a service charge will be applied at the time of your
          appointment.
        </p>
        <p className="device__name">What needs repair?</p>
        <p className="device__placeholder">
          Great! We serve your zip code! What need repair?
        </p>
        <div className="device__option">
          <div
            tabIndex={0}
            onBlur={() => {
              setIsSelector(false);
            }}
            onClick={() => setIsSelector(prev => !prev)}
            className={classNames('device__select', {
              'device__select-active': isSelector,
            })}
          >
            {!isSelector && selectValue}
            {isSelector ? (
              <div className="device__arrow device__arrow--rotate"></div>
            ) : (
              <div className="device__arrow"></div>
            )}
            {isSelector && (
              <ul className="device__list">
                {content.map(item => (
                  <li
                    key={item.id}
                    className="device__item"
                    onClick={e => getSelectValue(e, item.id)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="device__wraper">
          <Link to="/book:zip" className="device__button">
            Back
          </Link>
          <Link
            to={selectValue ? '/book:logIn' : ''}
            className={classNames('device__button', {
              device__disabled: !selectValue,
            })}
          >
            Next
          </Link>
        </div>
      </section>
    </>
  );
};
