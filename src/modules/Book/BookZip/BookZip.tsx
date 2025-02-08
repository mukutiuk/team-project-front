/* eslint-disable no-console */
import { Link, useNavigate } from 'react-router-dom';
import './BookZip.scss';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import * as bookAction from '../../../features/BookSlice';

export const BookZip = () => {
  const dispatch = useAppDispatch();
  const [zipValue, setZipValue] = useState('');
  const navigate = useNavigate();
  const { isZipCode: isFindZipcode, nextSlice } = useAppSelector(
    state => state.book,
  );

  console.log(nextSlice);

  const addZipBook = () => {
    dispatch(bookAction.isZipCodeBook(zipValue.toString()));
  };

  useEffect(() => {
    if (nextSlice) {
      dispatch(bookAction.cahangeSlice());
      dispatch(bookAction.addZip(zipValue));
      navigate('/book:devise');
    }
  }, [nextSlice]);

  const addValueZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipValue(e.target.value);
  };

  return (
    <>
      <img className="zip__logo" src="../img/loogo.png" alt="" />
      <section className="zip">
        <Link
          onClick={() => {
            dispatch(bookAction.cahangeIsZipCode());
          }}
          to="/"
          className="zip__close"
        ></Link>
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
          onChange={e => {
            addValueZipCode(e);
            dispatch(bookAction.cahangeIsZipCode());
          }}
          placeholder="___"
          className={classNames('zip__input', {
            zip__not: isFindZipcode,
          })}
          type="number"
        />
        {isFindZipcode && (
          <p className="zip__error">Sorry we don&apos;t serve this area</p>
        )}

        <div className="zip__wraper">
          <button onClick={addZipBook} className="zip__button">
            Next
          </button>
          <Link to="../" className="zip__button zip__disabled">
            Back
          </Link>
        </div>
      </section>
    </>
  );
};
