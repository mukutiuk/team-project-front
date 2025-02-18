import { FormEvent, useEffect, useState } from 'react';
import './TextUs.scss';
import * as actionText from '../../features/TextUsSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { Loader } from '../Loader';
import { useNavigate } from 'react-router-dom';

export const TextUs = () => {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoader, isSuccsess } = useAppSelector(state => state.text);
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionText.fetchPostTextUs({ userEmail, message }));

    setUserEmail('');
    setMessage('');
  };

  useEffect(() => {
    if (isSuccsess) {
      dispatch(actionText.changeSuccessful());
      navigate('/textSuccses');
    }
  }, [isSuccsess]);

  return (
    <>
      <div className="text">
        <h1 className="text__title">Text Us</h1>
        <p className="text__description">Contact our Team </p>
        <div className="text__line"></div>
        <form className="text__form" onSubmit={submitForm}>
          <input
            onChange={e => setUserEmail(e.target.value)}
            value={userEmail}
            required
            className="text__input"
            type="email"
            placeholder="E-mail*"
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="text__textarea"
            placeholder="What can we help with?*"
            name="text"
            id=""
          ></textarea>

          <button type="submit" className="text__button">
            {isLoader ? <Loader /> : 'Send'}
          </button>
        </form>
      </div>
    </>
  );
};
