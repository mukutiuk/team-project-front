/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import './BookForm.scss';

export const BookForm = () => {
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
          <form>
            <div className="book__container">
              <div className="book__block">
                <label className="book__frame" htmlFor="name">
                  Name*
                  <input
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
                    placeholder="___"
                    className="book__input"
                    id="email"
                    name="email"
                    type="text"
                  />
                </label>
                <label className="book__frame" htmlFor="Addess">
                  Addess*
                  <input
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
                placeholder="___"
                className="book__input"
                id="PhoneNumber"
                name="PhoneNumber"
                type="text"
              />
            </label>
          </form>
        </div>

        <div className="book__buttons">
          <Link to="/book:devise" className="book__button book__disabled">
            Back
          </Link>
          <Link className="book__button" to="/book:devise">
            Next
          </Link>
        </div>
      </div>
    </>
  );
};
