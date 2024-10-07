import { NavLink } from 'react-router-dom';
import './Header.scss';
import * as productAction from '../../features/ProductSlice';
import { useAppDispatch } from '../../utils/hooks/hooks';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const dispatch = useAppDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menu = document.getElementById('menu');

  // // eslint-disable-next-line no-console
  // console.log(zipCode);

  useEffect(() => {
    dispatch(productAction.fetchProduct());
    dispatch(productAction.fetchZipCode());
  }, [dispatch]);

  const getCloseMenu = () => {
    if (menu) {
      menu.style.overflow = 'scroll';
    }

    setIsOpenMenu(false);
  };

  const getOpenMenu = () => {
    // eslint-disable-next-line no-console
    console.log(menu);
    if (menu) {
      menu.style.overflow = 'hidden';
    }

    setIsOpenMenu(true);
  };

  return (
    <header className="header">
      {!isOpenMenu && (
        <img
          className="header__logo header__logo--mobaile"
          src="../img/loogo.png"
          alt="LOGO"
        />
      )}

      <div
        className={classNames('header__content ', {
          open__menu: !isOpenMenu,
        })}
      >
        <div className="header__container">
          <img className="header__logo" src="../img/loogo.png" alt="LOGO" />
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  onClick={() => setIsOpenMenu(false)}
                  className="nav__link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => setIsOpenMenu(false)}
                  className="nav__link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => setIsOpenMenu(false)}
                  to="/whyUs"
                  className="nav__link"
                >
                  Why Us
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => setIsOpenMenu(false)}
                  to="settings"
                  className="nav__link"
                >
                  Admin Settings
                </NavLink>
              </li>
            </ul>
            <button onClick={getCloseMenu} className="nav__close"></button>
          </nav>
        </div>

        <div className="header__wraper">
          <a className="header__phone" href="tel:+6494461709">
            (470)-909-1879
          </a>
          <button className="header__plan">LogIn</button>
        </div>
      </div>

      <button onClick={getOpenMenu} className="header__button"></button>
    </header>
  );
};
