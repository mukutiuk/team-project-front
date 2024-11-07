import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
import * as productAction from '../../features/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import * as profileAction from '../../features/ProfileSlice';
import { Loader } from '../Loader';

export const Header = () => {
  const dispatch = useAppDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menu = document.getElementById('menu');
  const [isOpenLogin, setIsOpenLoadin] = useState(false);
  const [isFirstTimes, setIsFirstTimes] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { isLoader, firstRequest, isError, isSuccsess, token } = useAppSelector(
    state => state.profile,
  );
  const navigate = useNavigate();

  const isToken = localStorage.getItem('token');
  const emailUser = localStorage.getItem('email');
  const isEmail = emailUser === '9@gmail.com';

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  const isToFillForm = email.trim() && password.trim() && repeatPassword.trim();
  const isToFillFormLog = email.trim() && password.trim();

  useEffect(() => {
    dispatch(productAction.fetchProduct());
    dispatch(productAction.fetchZipCode());
    dispatch(profileAction.changeError());
  }, [dispatch]);

  const getCloseMenu = () => {
    if (menu) {
      menu.style.overflow = 'scroll';
    }

    setIsOpenMenu(false);
  };

  const getOpenMenu = () => {
    if (menu) {
      menu.style.overflow = 'hidden';
    }

    setIsOpenMenu(true);
  };

  useEffect(() => {
    if (isSuccsess) {
      getCloseMenu();
      navigate('/user/profile');
      setIsOpenLoadin(false);
      dispatch(profileAction.changeSuccess());
    }
  }, [isSuccsess]);

  useEffect(() => {
    if (firstRequest) {
      localStorage.setItem('email', email);
      dispatch(profileAction.fetchLogin({ email, password }));
    }

    setEmail('');
    setPassword('');
    setRepeatPassword('');
    getCloseMenu();
  }, [firstRequest]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(profileAction.changeError());

    if (!isFirstTimes) {
      if (password !== repeatPassword) {
        return;
      }

      if (!isToFillForm) {
        return;
      }

      dispatch(
        profileAction.fetchFirstRegistration({
          email,
          password,
          repeatPassword,
        }),
      );
    } else {
      if (isToFillFormLog) {
        localStorage.setItem('email', email);
        dispatch(profileAction.fetchLogin({ email, password }));
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        getOpenMenu();
      }
    }
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
        {isOpenMenu && <div className="sha"></div>}
        <div className="header__container">
          <img className="header__logo" src="../img/loogo.png" alt="LOGO" />
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    setIsOpenMenu(false);
                    getCloseMenu();
                  }}
                  className="nav__link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    setIsOpenMenu(false);
                    getCloseMenu();
                  }}
                  className="nav__link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    setIsOpenMenu(false);
                    getCloseMenu();
                  }}
                  to="/whyUs"
                  className="nav__link"
                >
                  Why Us
                </NavLink>
              </li>
              {isEmail && (
                <li className="nav__item">
                  <NavLink
                    onClick={() => {
                      setIsOpenMenu(false);
                      getCloseMenu();
                    }}
                    to="settings"
                    className="nav__link"
                  >
                    Admin Settings
                  </NavLink>
                </li>
              )}
            </ul>
            <button onClick={getCloseMenu} className="nav__close"></button>
          </nav>
        </div>

        <div className="header__wraper">
          <a className="header__phone" href="tel:+6494461709">
            (470)-909-1879
          </a>
          {!isToken && (
            <button
              onClick={() => {
                setIsOpenMenu(false);
                setIsOpenLoadin(true);
                getOpenMenu();
              }}
              className="header__plan"
            >
              LogIn
            </button>
          )}
          {!!isToken && <NavLink className="header__user" to="/user" />}
        </div>
      </div>

      <button onClick={getOpenMenu} className="header__button"></button>
      {isOpenLogin && (
        <div className="login">
          <div className="login__container">
            <button
              onClick={() => {
                setIsOpenLoadin(false);
                dispatch(profileAction.changeError());
                getCloseMenu();
              }}
              className="login__close"
            ></button>

            <h2 className="login__header">
              {isFirstTimes ? 'Wellcome Back!' : 'Registration!'}
            </h2>
            <form onSubmit={e => onSubmit(e)} className="login__form">
              <label className="login__name">
                E-mail
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="login__input"
                  name="email"
                  type="email"
                />
              </label>
              <label
                className="login__name login__name--password"
                style={isFirstTimes ? { marginBottom: '19px' } : {}}
              >
                Password
                <input
                  style={isFirstTimes ? { marginBottom: '15px' } : {}}
                  placeholder="Create your password"
                  className="login__input"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                {isFirstTimes && (
                  <p
                    onClick={() => setIsForgotPassword(true)}
                    className="login__forgot"
                  >
                    Forgot yout password?
                  </p>
                )}
              </label>
              {!isFirstTimes && (
                <label className="login__name">
                  Re-enter password
                  <input
                    placeholder="Re-enter password"
                    className="login__input"
                    name="email"
                    type="password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                  />
                </label>
              )}
              {isError && (
                <span className="login__error">Something went wrong</span>
              )}
              <button type="submit" className="login__log">
                {isLoader ? <Loader /> : 'LogIn'}
              </button>
            </form>
            <div className="login__wraper">
              <div className="login__line"></div>
              <h4 className="login__text">or</h4>
              <div className="login__line"></div>
            </div>
            <a
              // eslint-disable-next-line max-len
              href="https://accounts.google.com/o/oauth2/v2/auth?client_id=461017604859-i5btvstnov6iapj1o1iqa1nfe73ras60.apps.googleusercontent.com&redirect_uri=http://localhost:8080/api/login/oauth2/code/google&response_type=code&scope=email%20profile&access_type=online"
              className="login__button"
            >
              <div className="login__img"></div>
              <p className="login__description">LogIn with Google</p>
            </a>
            <a className="login__button">
              <div className="login__img login__img--facebook"></div>
              <p className="login__description">LogIn with Facebook</p>
            </a>
            <a className="login__button">
              <div className="login__img login__img--apple"></div>
              <p className="login__description">LogIn with Apple</p>
            </a>
            <div className="login__blok">
              <h2 className="login__ask">Already have an account?</h2>
              <span
                onClick={() => setIsFirstTimes(!isFirstTimes)}
                className="login__logIn"
              >
                {isFirstTimes ? 'Regestration' : 'LogIn'}
              </span>
            </div>
          </div>
        </div>
      )}

      {isForgotPassword && (
        <div className="password">
          <div className="send">
            <div
              onClick={() => {
                setIsForgotPassword(false);
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
    </header>
  );
};