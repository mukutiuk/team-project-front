import { useState } from 'react';
import './BookDevice.scss';
import { Link } from 'react-router-dom';

export const BookDevice = () => {
  const [isSelector, setIsSelector] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const getSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelectValue(e.currentTarget.innerText);
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
            className="device__select"
          >
            {!isSelector && selectValue}
            {isSelector ? (
              <div className="device__arrow device__arrow--rotate"></div>
            ) : (
              <div className="device__arrow"></div>
            )}
            {isSelector && (
              <ul className="device__list">
                <li className="device__item" onClick={getSelectValue}>
                  Dryer-Electric
                </li>
                <li className="device__item" onClick={getSelectValue}>
                  Washer
                </li>
                <li className="device__item" onClick={getSelectValue}>
                  Ice Machine
                </li>
                <li className="device__item" onClick={getSelectValue}>
                  Range
                </li>
                <li className="device__item" onClick={getSelectValue}>
                  Cooktop
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="device__wraper">
          <Link to="/book:zip" className="device__button device__disabled">
            Back
          </Link>
          <Link to="/book:logIn" className="device__button">
            Next
          </Link>
        </div>
      </section>
    </>
  );
};
