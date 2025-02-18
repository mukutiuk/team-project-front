/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate } from 'react-router-dom';
import './BookForm.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import * as bookAction from '../../../features/BookSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import * as profileAction from '../../../features/ProfileSlice';

export const BookForm = () => {
  const { dataUser } = useAppSelector(state => state.profile);

  const [nameValue, setNameValue] = useState(dataUser?.name || '');
  const [lastNameValue, setLastNameValue] = useState(dataUser?.lastName || '');
  const [emailValue, setEmailValue] = useState(dataUser?.email || '');
  const [adresValue, setAdresValue] = useState(dataUser?.address || '');
  const [phoneNumber, setPhoneNumber] = useState(dataUser?.phoneNumber || '');
  const dispatch = useAppDispatch();
  const { deviceId, zipCode, isSuccsess } = useAppSelector(state => state.book);

  const navigate = useNavigate();

  const isDisablet =
    nameValue.trim() &&
    lastNameValue.trim() &&
    emailValue.trim() &&
    adresValue.trim() &&
    phoneNumber.trim();

  const sendDate = () => {
    dispatch(
      bookAction.fetchBookPost({
        customerDetails: {
          name: nameValue,
          lastName: lastNameValue,
          email: emailValue,
          phoneNumber,
          address: adresValue,
          zipCode,
        },
        deviceId,
      }),
    );
  };

  useEffect(() => {
    dispatch(profileAction.getProfileData());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccsess) {
      navigate('/book:successfully');
    }
  }, [isSuccsess]);

  return (
    <>
      <img className="book__img" src="../img/loogo.png" alt="" />
      <div className="book">
        <Link to="/" className="book__close"></Link>

        <h1 className="book__title">Book Online</h1>
        <p className="book__description">
          Book your appointment with us today! Simply choose a convenient time,
          and our dispatcher will give you a call to confirm the details. Please
          note that a service charge will be applied at the time of your
          appointment.
        </p>
        <h4 className="book__about">About You</h4>
        <p className="book__subscription">
          Now we sure that we can make it for you! Last step!
        </p>

        <div className="book__wraper">
          <form onSubmit={sendDate}>
            <div className="book__container">
              <div className="book__block">
                <label className="book__frame" htmlFor="name">
                  Name*
                  <input
                    value={nameValue}
                    onChange={e => setNameValue(e.target.value)}
                    required
                    placeholder="___"
                    className="book__input"
                    id="name"
                    name="name"
                    type="text"
                  />
                </label>
                <label className="book__frame" htmlFor="LastName">
                  Last name*
                  <input
                    value={lastNameValue}
                    onChange={e => setLastNameValue(e.target.value)}
                    required
                    placeholder="___"
                    className="book__input"
                    id="LastName"
                    name="LastName"
                    type="text"
                  />
                </label>
              </div>
              <div className="book__block">
                <label className="book__frame" htmlFor="email">
                  E-mail*
                  <input
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    required
                    placeholder="___"
                    className="book__input"
                    id="email"
                    name="email"
                    type="email"
                  />
                </label>
                <label className="book__frame" htmlFor="Addess">
                  Addess*
                  <input
                    value={adresValue}
                    onChange={e => setAdresValue(e.target.value)}
                    required
                    placeholder="___"
                    className="book__input"
                    id="Addess"
                    name="Addess"
                    type="text"
                  />
                </label>
              </div>
            </div>
            <label className="book__frame" htmlFor="PhoneNumber">
              Phone number*
              <input
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                required
                placeholder="___"
                className="book__input"
                id="PhoneNumber"
                name="PhoneNumber"
                type="number"
              />
            </label>
          </form>
        </div>

        <div className="book__buttons">
          <button
            type="submit"
            onClick={sendDate}
            disabled={!isDisablet}
            className={classNames('book__button', {
              book__disabled: !isDisablet,
            })}
          >
            Next
          </button>
          <Link to="/book:devise" className="book__button">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};
