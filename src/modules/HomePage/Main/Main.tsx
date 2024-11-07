import { useState } from 'react';
import './Main.scss';
import { Link, NavLink } from 'react-router-dom';

export const Main = () => {
  const [isOpenCupon, setIsOpenCupon] = useState(false);
  const body = document.querySelector('#menu');

  // const openCupon = () => {
  //   setIsOpenCupon(true);

  //   if (body) {
  //     body.classList.add('body');
  //     body.setAttribute('id', 'menu');
  //   }
  // };

  const closeCupon = () => {
    setIsOpenCupon(false);

    if (body) {
      body.classList.remove('body');
    }
  };

  // eslint-disable-next-line no-console
  // console.log(openCupon);

  return (
    <section className="main">
      {isOpenCupon && (
        <div className="cupon">
          <div className="cupon__block">
            <img className="cupon__img" src="../img/loogo.png" alt="img" />
            <button onClick={closeCupon} className="cupon__close"></button>
            <h1 className="cupon__title">Wow!</h1>
            <p className="cupon__title cupon__description">
              YOU HAVE A PERSONAL CUPON DISCOUNT FOR YOUR REPAIR
            </p>
            <p className="cupon__price">-$30</p>
            <NavLink
              onClick={closeCupon}
              to={{
                pathname: '/cupon',
              }}
              className="cupon__button"
            >
              Get your Cupon now
            </NavLink>
          </div>
        </div>
      )}

      <div className="main__block">
        <div className="main__wraper">
          <div className="main__container">
            <h2 className="main__title">Atlanta,GA</h2>
            <h1 className="main__logo">Appliance Repair</h1>
            <div className="main__description">Same-Day Service Available!</div>
            <span className="main__description">Call Today:</span>
            <a className="main__phone main__description" href="tel:+4709091879">
              470-909-1879
            </a>
          </div>
          <div className="main__about">
            <Link to="/book:zip" className="main__chose">
              I need service today!{' '}
            </Link>
            <ul className="main__list">
              <li className="main__event main__event--one">
                Highly qualified specialists
              </li>
              <li className="main__event">Fast service</li>
              <li className="main__event">Guarantee</li>
              <li className="main__event">Affordable prices</li>
            </ul>
          </div>
        </div>
        <div className="main__img"></div>
      </div>
    </section>
  );
};
