/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import './UserPage.scss';
import * as profileAction from '../../../features/ProfileSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { Loader } from '../../Loader';

export const UserPage = () => {
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
  const [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);
  const [isHideCurentPassword, setIsHideCurentPassword] = useState(false);
  const [isHideNewPassword, setIsHideNewPassword] = useState(false);
  const [isHideReenterPassword, setIsHideReenterPassword] = useState(false);
  const { isLoader, dataUser } = useAppSelector(state => state.profile);

  const zip = dataUser?.zipCode || '';
  const [zipCode, setZipCode] = useState(zip);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [curentValue, setCurentValue] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const dispatch = useAppDispatch();
  const menu = document.getElementById('menu');

  const email = localStorage.getItem('email') || '';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      profileAction.fetchPutData({
        email,
        name,
        lastName,
        address,
        zipCode,
        phoneNumber,
      }),
    );
  };

  const scrol = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(profileAction.getProfileData());
  }, [dispatch]);

  const getCloseMenu = () => {
    if (menu) {
      menu.style.overflow = 'scroll';
    }
  };

  const getOpenMenu = () => {
    scrol();

    if (menu) {
      menu.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    if (dataUser) {
      setZipCode(dataUser.zipCode);
      setName(dataUser.name);
      setLastName(dataUser.lastName);
      setAddress(dataUser.address);
      setPhoneNumber(dataUser.phoneNumber);
    }

    // getCloseMenu();
  }, [dataUser]);

  return (
    <div className="user">
      <div className="user__frame">
        <img className="user__img" src="../img/userImg.svg" alt="" />
      </div>
      <h1 className="user__name">Hello {dataUser?.name}!</h1>
      <form onSubmit={e => onSubmit(e)} className="user__form">
        <label className="user__label" htmlFor="email">
          Zip-code
          <input
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
            className="user__input"
            type="number"
          />
        </label>
        <label className="user__label" htmlFor="firstName">
          First Name
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="user__input"
            type="text"
          />
        </label>
        <label className="user__label" htmlFor="lastName">
          Last Name
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="user__input"
            type="text"
          />
        </label>
        <label className="user__label" htmlFor="address">
          Address
          <input
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="user__input"
            type="text"
          />
        </label>
        <label className="user__label" htmlFor="phone">
          Phone number
          <input
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className="user__input"
            type="number"
          />
        </label>
        <div className="user__label">
          Password
          <span
            onClick={() => {
              setIsOpenChangePassword(true);
              getOpenMenu();
            }}
            className="user__change"
          >
            Change password
          </span>
        </div>
        <div className="user__wraper">
          <button type="submit" className="user__button">
            {isLoader ? <Loader /> : 'Save'}
          </button>
        </div>
      </form>
      {isOpenChangePassword && (
        <div className="password">
          <div className="password__container">
            <div
              onClick={() => {
                setIsOpenChangePassword(false);
                getCloseMenu();
              }}
              className="password__close"
            ></div>
            <h1 className="password__title">Change password</h1>
            <div className="password__wraper">
              <form>
                <span className="password__description">Current password</span>
                <label className="password__label">
                  <input
                    value={curentValue}
                    onChange={e => setCurentValue(e.target.value)}
                    className="password__input"
                    type={isHideCurentPassword ? 'number' : 'password'}
                  />
                  <span
                    onClick={() => setIsHideCurentPassword(prev => !prev)}
                    className="password__visible"
                  ></span>
                </label>
                <span className="password__description">
                  Choose a new password
                </span>
                <label className="password__label" htmlFor="password">
                  <input
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    className="password__input"
                    type={isHideNewPassword ? 'number' : 'password'}
                  />
                  <span
                    onClick={() => setIsHideNewPassword(prev => !prev)}
                    className="password__visible"
                  ></span>
                </label>
                <span className="password__description">Re-enter password</span>
                <label className="password__label" htmlFor="password">
                  <input
                    value={reenterPassword}
                    onChange={e => setReenterPassword(e.target.value)}
                    className="password__input"
                    type={isHideReenterPassword ? 'number' : 'password'}
                  />
                  <span
                    onClick={() => setIsHideReenterPassword(prev => !prev)}
                    className="password__visible"
                  ></span>
                </label>
                <button className="password__button">Change password</button>
              </form>
              <p
                onClick={() => {
                  setIsOpenChangePassword(false);
                  setIsOpenForgotPassword(true);
                }}
                className="password__forgot"
              >
                Forgot your password?
              </p>
            </div>
          </div>
        </div>
      )}

      {isOpenForgotPassword && (
        <div className="password">
          <div className="send">
            <div
              onClick={() => {
                setIsOpenForgotPassword(false);
                getCloseMenu();
              }}
              className="password__close"
            ></div>
            <h1 className="send__title">Forgot password</h1>
            <form className="send__form">
              <label className="password__label send__label">
                Your e-mail
                <input className="password__input" type="email" />
              </label>
              <button className="password__button send__button">
                Re-send password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
