/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import './UserPage.scss';
import * as profileAction from '../../../features/ProfileSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { Loader } from '../../Loader';

export const UserPage = () => {
  const { isLoader, dataUser } = useAppSelector(state => state.profile);
  const zip = dataUser?.zipCode || '';
  const [zipCode, setZipCode] = useState(zip);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    dispatch(profileAction.getProfileData());
  }, [dispatch]);

  useEffect(() => {
    if (dataUser) {
      setZipCode(dataUser.zipCode);
      setName(dataUser.name);
      setLastName(dataUser.lastName);
      setAddress(dataUser.address);
      setPhoneNumber(dataUser.phoneNumber);
    }
  }, [dataUser]);

  return (
    <div className="user">
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
        <label className="user__label user__label--phone" htmlFor="phone">
          Phone number
          <input
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className="user__input"
            type="number"
          />
        </label>
        <div className="user__wraper">
          <button type="submit" className="user__button">
            {isLoader ? <Loader /> : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};
