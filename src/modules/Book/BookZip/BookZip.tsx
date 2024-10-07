import { Link } from 'react-router-dom';
import './BookZip.scss';

export const BookZip = () => {
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

        <input placeholder="___" className="zip__input" type="text" />

        <div className="zip__wraper">
          <Link to="../" className="zip__button zip__disabled">
            Back
          </Link>
          <Link className="zip__button" to="/book:devise">
            Next
          </Link>
        </div>
      </section>
    </>
  );
};
