import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks';
import * as bookAction from '../../features/BookSlice';
import './SuccessfulText.scss';

export const SuccessfulText = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <img className="succes__logo" src="../img/loogo.png" alt="" />
      <div className="succes">
        <Link
          onClick={() => dispatch(bookAction.cahangeIsSuccsess())}
          to="/"
          className="succes__close"
        ></Link>
        <div className="succes__img"></div>
        <h1 className="succes__title">Thank you!</h1>
        <p className="succes__status">
          Your message has been sent successfully! Our team will contact you
          soon!
        </p>
      </div>
    </>
  );
};
