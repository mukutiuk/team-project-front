import { Link } from 'react-router-dom';
import './BookEnd.scss';
import * as bookAction from '../../../features/BookSlice';
import { useAppDispatch } from '../../../utils/hooks';

export const BookEnd = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <img className="end__logo" src="../img/loogo.png" alt="" />
      <div className="end">
        <Link
          onClick={() => dispatch(bookAction.cahangeIsSuccsess())}
          to="/"
          className="end__close"
        ></Link>
        <div className="end__img"></div>
        <h1 className="end__title">Thank you!</h1>
        <p className="end__status">Your request has been sent successfully!</p>
      </div>
    </>
  );
};
