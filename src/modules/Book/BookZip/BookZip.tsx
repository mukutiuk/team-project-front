import { Link, useNavigate } from 'react-router-dom';
import './BookZip.scss';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import * as actionBook from '../../../features/BookSlice';
import * as productAction from '../../../features/ProductSlice';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

export const BookZip = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productAction.fetchZipCode());
  }, [dispatch]);

  const [zipValue, setZipValue] = useState('');
  const { zipCode } = useAppSelector(state => state.products);
  const [isZipCode, setIsZipCode] = useState(true);
  const navigate = useNavigate();

  const addZipBook = () => {
    const findZipCode = zipCode.find(item => +item.zipCode === +zipValue);

    if (findZipCode) {
      setIsZipCode(true);
      dispatch(actionBook.addZip(zipValue));
      navigate('/book:devise');
    } else {
      setIsZipCode(false);
    }
  };

  const addValueZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsZipCode(true);
    setZipValue(e.target.value);
  };

  return (
    <>
      <img className="zip__logo" src="../img/loogo.png" alt="" />
      <section className="zip">
        <Link to="/" className="zip__close"></Link>
        <h1 className="zip__title">Book Online</h1>
        <p className="zip__description">
          Book our appointment with us today! Simply choose a convenient time,
          and our dispatcher will give you a call to confirm the details. Please
          note that a service charge will be applied at the time of your
          appointment.
        </p>
        <p className="zip__name">Location?</p>
        <p className="zip__placeholder">
          Let’s check if we’re in your area. Please enter your zip code.
        </p>
        <p className="zip__topic">Zip-code*</p>

        <input
          value={zipValue}
          onChange={e => addValueZipCode(e)}
          placeholder="___"
          className={classNames('zip__input', {
            zip__not: !isZipCode,
          })}
          type="number"
        />
        {!isZipCode && (
          <p className="zip__error">Sorry we don&apos;t serve this area</p>
        )}

        <div className="zip__wraper">
          <Link to="../" className="zip__button">
            Back
          </Link>
          <button
            onClick={addZipBook}
            className={classNames('zip__button', {
              zip__disabled: !zipValue,
            })}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};
