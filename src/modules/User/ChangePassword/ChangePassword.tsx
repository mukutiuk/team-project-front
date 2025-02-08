/* eslint-disable jsx-a11y/label-has-associated-control */
import { useLocation, useNavigate } from 'react-router-dom';
import './ChangePassword.scss';
import { useState } from 'react';
import * as actionProfile from '../../../features/ProfileSlice';
import { useAppDispatch } from '../../../utils/hooks';

export const ChangePassword = () => {
  const location = useLocation();
  const [newPassword, setNewPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [isHideNewPassword, setIsHideNewPassword] = useState(false);
  const [isHideReenterPassword, setIsHideReenterPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  sessionStorage.setItem('tokenPassword', location.search.split('=')[1]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword.trim() !== reenterPassword.trim()) {
      return;
    }

    dispatch(
      actionProfile.sandNewPasswort({
        newPassword: newPassword,
        repeatPassword: reenterPassword,
      }),
    );

    navigate('/passwordSuccesful');
  };

  return (
    <div className="change">
      <div className="change__container">
        <h1 className="change__title">Change password</h1>
        <div className="change__wraper">
          <form onSubmit={e => onSubmit(e)} className="change__form">
            <span className="change__description">Choose a new password</span>
            <label className="change__label" htmlFor="password">
              <input
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="change__input"
                type={isHideNewPassword ? 'string' : 'password'}
              />
              <span
                onClick={() => setIsHideNewPassword(prev => !prev)}
                className="change__visible"
              ></span>
            </label>
            <span className="change__description">Re-enter password</span>
            <label className="change__label" htmlFor="password">
              <input
                value={reenterPassword}
                onChange={e => setReenterPassword(e.target.value)}
                className="change__input"
                type={isHideReenterPassword ? 'string' : 'password'}
              />
              <span
                onClick={() => setIsHideReenterPassword(prev => !prev)}
                className="change__visible"
              ></span>
            </label>
            <button type="submit" className="change__button">
              Change password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
